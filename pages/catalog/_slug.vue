<template>
	<div class="_slug">
		<div class="container">
			<div class="row">
				<div class="col-4">
					<div class="img">
						<img :src="product.img" :alt="product.name">
					</div>
				</div>
				<div class="col-8">
					<h1 class="name mb-2">{{product.name}}</h1>
					<h2 class="price mb-3">{{product.price}} руб</h2>
					<div class="description mb-5">{{product.description}}{{product.description}}{{product.description}}</div>
					<div class="quantity">Доступно: {{product.quantity}}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	._slug {
		.img {
			img {
				display: block;
				max-width: 100%;
			}
		}
	}
</style>

<script>
export default {
	data() {
		return {
			product: undefined
		}
	},
	async asyncData({ $axios, route }) {
		const { slug } = route.params;
		const data = await $axios.$get(`http://localhost:3000/api/products/slug/${slug}`)
		return {product: data[0]}
	},
}
</script>