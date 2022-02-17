const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
	slug: {
		type: String,
		required: true,
		unique: true
	},
	name: {
		type: String,
		required: true
	},
	description: {
		type: String,
		default: ''
	},
	img: {
		type: String,
		default: ''
	},
	price: {
		type: String,
		default: '-1'
	},
	quantity: {
		type: Number,
		default: 1
	},
	createDate: {
		type: Date,
		default: Date.now,
	},
	modifyDate: {
		type: Date,
		default: Date.now
	},
	published: {
		type: Boolean,
		default: true
	},
	// category: {
	// 	ref
	// }
})

module.exports = mongoose.model('products', productSchema)