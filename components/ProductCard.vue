<template>
	<div class="ProductCard" :data-price="`${product.price}`">
		<div class="card">
			<NuxtLink :to="`/catalog/${product.slug}`" class="img">
				<img :src="product.img" :alt="product.name">
			</NuxtLink>
			<NuxtLink :to="`/catalog/${product.slug}`"><h2 class="name">{{product.name}}</h2></NuxtLink>
			<div class="description h3">{{Math.round(product.price)}} руб</div>
			<div class="buttons d-flex flex-column">
				<button class="btn btn-accent">Купить</button>
				<!-- <NuxtLink :to="`/catalog/${product.slug}`" class="btn btn-accent-outline">Подробнее</NuxtLink> -->
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.ProductCard {
		margin-bottom: 2rem;
		.card {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding: 1rem 1rem 0 1rem;
			height: 100%;
			border-radius: 1rem;
			transition: .2s;
			&:hover {
				box-shadow: 0 0 1rem #1F1F2633;
			}
			
			.img {
				display: flex;
				align-items: center;
				justify-content: center;
				height: 200px;
				margin-bottom: 1rem;
				overflow: hidden;
				
				img {
					display: block;
					width: 100%;
				}
			}
			.name {
				margin-bottom: 1rem;
				font-weight: normal;
			}
			.description {
				margin-bottom: 1rem;
				overflow: hidden;
			}
			.buttons {
				* {
					margin-bottom: 1rem;
				}
			}
		}
	}
</style>

<script>
export default {
	props: ['product']
}
</script>