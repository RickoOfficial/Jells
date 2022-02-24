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
						<div class="price-filter">
							<h3 class="title">Фильтр</h3>
							<div class="group mt-4">
								<div class="h4">Цена</div>
								<div id="slider"></div>
								<div class="price-inputs">
									<input
										v-model="min"
										:placeholder="`от ${Math.round(min)}`"
										class="min" type="number"
									>
									<input
										v-model="max"
										:placeholder="`до ${Math.round(max)}`"
										class="max" type="number"
									>
								</div>
								<button @click="filterByPrice([min, max], false)" class="btn btn-red">Применить</button>
							</div>
						</div>
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
import noUiSlider from 'nouislider'

export default {
	data() {
		return {
			products: [],
			min: '',
			max: '',
			slider: undefined
		}
	},
	methods: {
		filterByPrice(values, eventFromSlide) {
			this.min = values[0]
			this.max = values[1]
			if(!eventFromSlide)
				this.slider.noUiSlider.set([this.min, this.max])
			document.querySelectorAll('.ProductCard[data-price]').forEach(el => {
				if(Number(el.dataset.price) >= values[0] && Number(el.dataset.price) <= values[1]) {
					el.style.display = 'block'
				}else {
					el.style.display = 'none'
				}
			})
		},
		initSlider() {
			this.slider = document.getElementById('slider')
			this.min = Math.min(),
			this.max = Math.max()

			for(let el of this.products) {
				if(el.price < this.min)
					this.min = el.price
				if(el.price > this.max)
					this.max = el.price
			}
			
			noUiSlider.create(this.slider, {
				start: [this.min, this.max],
				connect: true,
				range: {
					'min': this.min,
					'max': this.max
				}
			});

			this.slider.noUiSlider.on('slide', (values) => { 
				this.filterByPrice(values, true)
			});

		}
	},
	async asyncData({ $axios }) {
		const data = await $axios.$get('http://localhost:3000/api/products')
		return {products: data}
	},
	mounted() {
		this.initSlider()
	}
}
</script>

<style lang="scss" scoped>
	.catalog {
		.filter {
			.price-filter {
				.price-inputs {
					display: flex;
					justify-content: space-between;
					margin-top: 1rem;
					input {
						width: 35%;
						padding-left: .5rem;
						padding-right: .5rem;
					}
				}
				.btn {
					width: 100%;
					margin-top: 1rem;
				}
			}
		}
	}
</style>