<template>
	<main class="catalog">
		<div class="container mb-5">
			<div class="row">
				<div class="col-12">
					<h1>Каталог</h1>
				</div>
			</div>
		</div>

		<div class="container">
			<div class="row">
				<div class="col-xs-12 col-xl-2 col-xxl-2">
					<div class="filter">
						<h3 class="title">Фильтр</h3>
					</div>
				</div>
				<div class="col-xs-12 col-xl-10 col-xxl-10">
					
					<template
						v-if="products.length"
					>
						<div class="row">
							<ProductCard
								v-for="prod in products"
								:key="prod._id"
								:product="prod"
								class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-3"
							/>
						</div>
					</template>
					
				</div>
			</div>
		</div>
	</main>
</template>

<script>
export default {
	data() {
		return {
			products: []
		}
	},
	async asyncData({ $axios }) {
		const data = await $axios.$get('http://localhost:3000/api/products')
		return {products: data}
	}
}
</script>

<style lang="scss" scoped>
	.catalog {

	}
</style>