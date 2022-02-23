require('dotenv').config()
const fs = require('fs')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const { loadNuxt, build } = require('nuxt')
const isDev = process.env.NODE_env !== 'production'
const app = express()
const port = process.env.PORT
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL)
	.then(() => console.log('MongoDB connected'))
	.catch(err => console.log(err))

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Товары
const productRoutes = require('./src/routes/Product')
app.use('/api/products', productRoutes)
// Отзывы
const reviewsRoutes = require('./src/routes/Review')
app.use('/api/reviews', reviewsRoutes)


async function start() {
	const nuxt = await loadNuxt( isDev ? 'dev' : 'start' )
	app.use(nuxt.render)
	if(isDev) {
		build(nuxt)
	}
	app.listen(port, () => console.log(`Server has been started on ${process.env.BASE_URL}`))
}

start()