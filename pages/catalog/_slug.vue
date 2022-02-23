<template>
	<div class="_slug">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<h1 class="name mb-5">{{product.name}}</h1>
				</div>
				<div class="col-4">
					<div class="img">
						<img :src="product.img" :alt="product.name">
					</div>
				</div>
				<div class="col-8">
					<div class="article mb-3">Артикул: {{product.article}}</div>
					<h2 class="price mb-3">{{product.price}} руб</h2>
					<div class="quantity">Доступно: {{product.quantity}}</div>
				</div>
			</div>
			<div class="tabs">
				<div class="row">
					<div class="col-12">
						<div class="tabs-titles d-flex">
							<div class="tab-title h3" @click="toggleMenu('description')">Описание</div>
							<div class="tab-title h3" @click="toggleMenu('reviews')">Отзывы</div>
						</div>
					</div>
					<div class="col-12">
						<div class="tabs-content">
							<div class="tab-content active" data-tab="description">{{product.description}}</div>
							<div class="tab-content" data-tab="reviews">
								<div class="row">

									<div class="col-12">
										<form @submit.prevent="addReview">
											<input v-model="review.userName" name="userName" type="text">
											<input v-model="review.userEmail" name="userEmail" type="text">
											<textarea v-model="review.text" name="text" type="text"></textarea>
											<button class="btn btn-red">Отправить</button>
										</form>
									</div>
									
									<div class="col-12">
										<Review
											v-for="review in product.reviews"
											:key="review._id"
											:review="review"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
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
		.tabs {
			.tabs-titles {
				margin-top: 2rem;
				margin-bottom: 2rem;
				border-bottom: 1px solid var(--black);
				.tab-title {
					margin-right: 1rem;
					margin-bottom: 0;
					padding: .5rem 1rem .5rem 1rem;
					width: fit-content;
					border: 1px solid var(--black);
					border-bottom: none;
					border-radius: 1rem 1rem 0 0;
					transition: .2s;
					cursor: pointer;
					&:hover {
						background: #fff;
					}
				}
			}
			.tabs-content {
				.tab-content {
					display: none;
					&.active {
						display: block;
					}
					&[data-tab="reviews"] {

					}
				}
			}
		}
	}
</style>

<script>
import axios from "axios"

export default {
	data() {
		return {
			product: undefined,
			review: {
				userName: '',
				userEmail: '',
				text: ''
			}
		}
	},
	methods: {
		toggleMenu(data) {
			document.querySelectorAll(`.tab-content[data-tab]`).forEach(el => el.classList.remove('active'))
			document.querySelector(`.tab-content[data-tab="${data}"]`).classList.add('active')
		},
		async addReview() {
			try {
				const review = await axios.post(`http://localhost:3000/api/reviews`, this.review)
				this.product.reviews.push(review.data)
				let productReviewsId = []
				for(let review of this.product.reviews) {
					productReviewsId.push(review._id)
				}
				await axios.post(`http://localhost:3000/api/products/review/${this.product._id}`, {reviews: productReviewsId})
			} catch (error) {
				console.log(error)
			}
		}
	},
	async asyncData({ $axios, route }) {
		const { slug } = route.params;
		const product = await $axios.$get(`http://localhost:3000/api/products/slug/${slug}`)
		return {product: product[0]}
	},
}
</script>