<template>
	<div :class="`ProductCardAdmin ${productStyle}`">
		<div class="porduct-img">
			<img :src="product.img" :alt="product.name">
		</div>
		<div class="product-name h3">
			<NuxtLink :to="`./products/${product._id}`">{{product.name}}</NuxtLink>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.ProductCardAdmin {
		&.line {
			display: flex;
			align-items: center;
			width: 100%;
			height: 100px;
			.porduct-img {
				display: flex;
				justify-content: center;
				align-items: center;
				margin-right: 1.5rem;
				width: 100px;
				height: 100px;
				img {
					display: block;
					width: 100%;
				}
			}
		}
	}
</style>

<script>
export default {
	props: ['product', 'productStyle']
}
</script>