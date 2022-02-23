const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
	slug: {
		type: String,
		required: true,
		unique: true
	},
	article: {
		type: String,
		default: ''
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
		type: Number,
		default: 0
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
	reviews: [{
		ref: 'reviews',
		type: Schema.Types.ObjectId
	}]
	// category: {
	// 	ref
	// }
})

module.exports = mongoose.model('products', productSchema)