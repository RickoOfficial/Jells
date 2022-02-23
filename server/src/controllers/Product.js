const Product = require('../models/Product')

module.exports.getAll = async (req, res) => {
	try {
		const products = await Product.find()
		res.status(200).json(products)
	} catch (error) {
		res.status(404).json({msg: 'Не удалось получить товары', rawError: error})
	}
}
module.exports.getById = async (req, res) => {
	try {
		const product = await Product.findById(req.params.id).populate('reviews')
		res.status(200).json(product)
	} catch (error) {
		res.status(404).json({msg: 'Товар не найден', rawError: error})
	}
}
module.exports.create = async (req, res) => {
	try {
		// const product = await new Product({
		// 	slug: req.body.slug,
		// 	article: req.body.article,
		// 	name: req.body.name,
		// 	description: req.body.description,
		// 	img: req.body.img,
		// 	price: req.body.price,
		// 	quantity: req.body.quantity
		// }).save()
		const product = await new Product(req.body).save()
		res.status(200).json(product)
	} catch (error) {
		res.status(404).json({msg: 'Не удалось создать', rawError: error})
	}
}
module.exports.update = async (req, res) => {
	let data = req.body
	console.log(req.body);
	data.modifyDate = Date.now()
	try {
		const product = await Product.findOneAndUpdate(
			{_id: req.params.id},
			{$set: data},
			{new: true}
		)
		res.status(200).json(product)
	} catch (error) {
		res.status(404).json({msg: 'Товар не удалось обновить', rawError: error})
	}
}
module.exports.remove = async (req, res) => {
	try {
		const product = await Product.findByIdAndRemove(req.params.id)
		res.status(200).json({product: product})
	} catch (error) {
		res.status(404).json({msg: 'Товар для удаления не найден', rawError: error})
	}
}

// Поиск по объекту
module.exports.getByObject = async (req, res) => {
	const objectForFind = JSON.parse(`{"${req.params.key}": "${req.params.value}"}`)
	try {
		const product = await Product.find(objectForFind).populate('reviews')
		res.status(200).json(product)
	} catch (error) {
		res.status(404).json({msg: 'Товар не найден', rawError: error})
	}
}

// Добавление отзыва товару
module.exports.addReview = async (req, res) => {
	let data = req.body
	try {
		const product = await Product.findOneAndUpdate(
			{_id: req.params.id},
			{$set: data},
			{new: true}
		)
		res.status(200).json(product)
	} catch (error) {
		res.status(404).json({msg: 'Товар не удалось обновить', rawError: error})
	}
}