<template>
	<main class="index">
		<h1>Товары</h1>
		
		<div class="container">

			<template
				v-if="products.length"
			>
				<div class="row">
					<ProductCardAdmin
						v-for="prod in products"
						:key="prod._id"
						:product="prod"
						:productStyle="productStyle"
					/>
				</div>
			</template>
			
		</div>
		
	</main>
</template>

<script>
export default {
	layout: 'admin',
	data() {
		return {
			products: [],
			productStyle: 'line'
		}
	},
	async asyncData({ $axios }) {
		const data = await $axios.$get('http://localhost:3000/api/products')
		return {products: data}
	},
	mounted() {
	}
}
</script>