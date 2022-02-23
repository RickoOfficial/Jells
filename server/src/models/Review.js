const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema({
	// user: {
	// 	type: Object,
	// 	required: true
	// },
	userName: {
		type: String,
		required: true
	},
	userEmail: {
		type: String,
		required: true
	},
	text: {
		type: String,
		required: true
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
})

module.exports = mongoose.model('reviews', reviewSchema)