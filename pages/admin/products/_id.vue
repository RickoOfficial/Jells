<template>
	<div class="Product" :id="product._id">
		<div class="top">
			<span class="back mr-16" @click="$router.go(-1)">◀</span>
			<span class="h2">Редактирование {{product.name}}</span>
			<span class="h5 color-silver ml-32">id: {{product._id}}</span>
		</div>

		<div class="container">
			<div class="product">
				<div class="input">
					<label for="name">Название: </label>
					<input v-model="newProduct.name" type="text" id="name">
				</div>
				<div class="input">
					<label for="article">Артикул: </label>
					<input v-model="newProduct.article" type="text" id="article">
				</div>
				<div class="input">
					<label for="description">Описание: </label>
					<textarea v-model="newProduct.description" type="text" id="description"></textarea>
				</div>
			</div>
		</div>
		<pre>{{product}}</pre>
		<pre>{{newProduct}}</pre>
		
	</div>
</template>

<style lang="scss" scoped>
	.Product {
		.top {
			display: flex;
			align-items: center;
			margin-bottom: 3rem;
			.back {
				cursor: pointer;
			}
		}

		.product {
			.input {
				display: flex;
				margin-bottom: 1rem;
				#description {
					width: 95%;
				}
			}
			label {
				display: block;
				margin-right: 1rem;
				width: 10%;
				text-align: right;
			}
			input {
				width: 15%;
				padding: .25rem .5rem;
			}
		}
	}
</style>

<script>
export default {
	layout: 'admin',
	data() {
		return {
			product: undefined,
			newProduct: undefined
		}
	},
	methods: {
		
	},
	mounted() {
	},
	async asyncData({ $axios, route }) {
		const { id } = route.params;
		const product = await $axios.$get(`http://localhost:3000/api/products/${id}`)
		return {product: product, newProduct: Object.assign({}, product)}
	},
}
</script>