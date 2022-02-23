const Review = require('../models/Review')

module.exports.getAll = async (req, res) => {
	try {
		const reviews = await Review.find()
		res.status(200).json(reviews)
	} catch (error) {
		res.status(404).json({msg: 'Не удалось получить отзывы', rawError: error})
	}
}
module.exports.getById = async (req, res) => {
	try {
		const review = await Review.findById(req.params.id)
		res.status(200).json(review)
	} catch (error) {
		res.status(404).json({msg: 'Отзыв не найден', rawError: error})
	}
}
module.exports.create = async (req, res) => {
	try {
		const review = await new Review(req.body).save()
		res.status(200).json(review)
	} catch (error) {
		res.status(404).json({msg: 'Не удалось создать', rawError: error})
	}
}
module.exports.update = async (req, res) => {
	let data = req.body
	data.modifyDate = Date.now()
	try {
		const review = await Review.findOneAndUpdate(
			{_id: req.params.id},
			{$set: data},
			{new: true}
		)
		res.status(200).json(review)
	} catch (error) {
		res.status(404).json({msg: 'Отзыв не удалось обновить', rawError: error})
	}
}
module.exports.remove = async (req, res) => {
	try {
		const review = await Review.findByIdAndRemove(req.params.id)
		res.status(200).json({review: review})
	} catch (error) {
		res.status(404).json({msg: 'Отзыв для удаления не найден', rawError: error})
	}
}

// Поиск по объекту
module.exports.getByObject = async (req, res) => {
	const objectForFind = JSON.parse(`{"${req.params.key}": "${req.params.value}"}`)
	try {
		const review = await Review.find(objectForFind)
		res.status(200).json(review)
	} catch (error) {
		res.status(404).json({msg: 'Отзыв не найден', rawError: error})
	}
}