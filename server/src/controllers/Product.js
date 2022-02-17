const Product = require('../models/Product')

module.exports.getAll = async (req, res) => {
	try {
		const products = await Product.find()
		res.status(200).json(products)
	} catch (error) {
		console.log(error);
	}
}
module.exports.getById = async (req, res) => {
	try {
		const product = await Product.findById(req.params.id)
		res.status(200).json(product)
	} catch (error) {
		res.status(404).json({error: {msg: 'Товар не найден'}})
		console.log(error);
	}
}
module.exports.create = async (req, res) => {
	try {
		const product = await new Product({
			slug: req.body.slug,
			name: req.body.name,
			description: req.body.description,
			img: req.body.img,
			price: req.body.price,
			quantity: req.body.quantity
		}).save()
		res.status(200).json(product)
	} catch (error) {
		if(error.keyValue.slug) {
			const product = await Product.findOne({slug: error.keyValue.slug})
			res.status(404).json({msg: 'Товар с таким slug существует', key: 'slug', value: error.keyValue.slug, product: product, rawError: error})
		}else {
			console.log(error);
		}
	}
}
module.exports.update = async (req, res) => {
	let data = req.body
	data.modifyDate = Date.now()
	try {
		const product = await Product.findOneAndUpdate(
			{_id: req.params.id},
			{$set: data},
			{new: true}
		)
		res.status(200).json(product)
	} catch (error) {
		res.status(404).json({rawError: error})
	}
}
module.exports.remove = async (req, res) => {
	try {
		const product = await Product.findByIdAndRemove(req.params.id)
		res.status(200).json({product: product})
	} catch (error) {
		res.status(404).json({msg: 'Товар для удаления не найден', rawError: error})
		console.log(error);
	}
}

// Дополнительные контроллеры
module.exports.getByObject = async (req, res) => {
	const objectForFind = JSON.parse(`{"${req.params.key}": "${req.params.value}"}`)
	try {
		const product = await Product.find(objectForFind)
		res.status(200).json(product)
	} catch (error) {
		res.status(404).json({msg: 'Товар не найден', rawError: error})
		console.log(error);
	}
}