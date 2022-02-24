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
							<div @click="toggleMenu('description')" class="tab-title active h3"  data-tab="description">Описание</div>
							<div @click="toggleMenu('reviews')" class="tab-title h3" data-tab="reviews">Отзывы</div>
						</div>
					</div>
					<div class="col-12">
						<div class="tabs-content">
							<div class="tab-content active" data-tab="description">{{product.description}}</div>
							<div class="tab-content" data-tab="reviews">
								<div class="row">

									<div class="col-3">
										<form @submit.prevent="addReview">
											<div class="form-group">
												<label for="userName">Ваше имя</label>
												<input
													v-model="review.userName"
													name="userName" type="text" placeholder="Имя" required
													id="userName"
												>
											</div>
											<div class="form-group">
												<label for="userEmail">Ваш Email</label>
												<input
													v-model="review.userEmail"
													name="userEmail" type="email" placeholder="Email" required
													id="userEmail"
												>
											</div>
											<div class="form-group">
												<label for="text">Ваш отзыв</label>
												<textarea
													v-model="review.text"
													@input="resizeTextarea"
													name="text" type="text" placeholder="Отзыв" required
													id="text"
												></textarea>
												<div id="invisible-div"></div>
											</div>
											<button class="btn btn-red">Отправить</button>
										</form>
									</div>
									
									<div class="col-9">
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
					margin-bottom: -1px;
					padding: .5rem 1rem .5rem 1rem;
					width: fit-content;
					border: 1px solid var(--black);
					border-radius: 1rem 1rem 0 0;
					cursor: pointer;
					&.active {
						border-color: var(--black);
						border-bottom-color: var(--white);
					}
				}
			}
			.tabs-content {
				.tab-content {
					display: none;
					&.active {
						display: block;
					}

					form {
						.form-group {
							position: relative;
							display: flex;
							flex-direction: column;
							margin-bottom: 1rem;
							label {
								margin-bottom: .5rem;
								font-size: 1.5rem;
							}
						}
						#invisible-div {
							position: absolute;
							padding: .5rem 1rem;
							font-size: 1.01rem;
							background: #f002;
							word-wrap: break-word;
							visibility: hidden;
						}
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
			},
		}
	},
	methods: {
		toggleMenu(data) {
			document.querySelectorAll(`.tab-content[data-tab]`).forEach(el => el.classList.remove('active'))
			document.querySelector(`.tab-content[data-tab="${data}"]`).classList.add('active')
			document.querySelectorAll(`.tabs-titles .tab-title[data-tab]`).forEach(el => el.classList.remove('active'))
			document.querySelector(`.tabs-titles .tab-title[data-tab="${data}"]`).classList.add('active')
		},
		async addReview() {
			try {
				const review = await axios.post(`http://localhost:3000/api/reviews`, this.review)
				this.product.reviews.unshift(review.data)
				let productReviewsId = []
				for(let review of this.product.reviews) {
					productReviewsId.unshift(review._id)
				}
				await axios.post(`http://localhost:3000/api/products/review/${this.product._id}`, {reviews: productReviewsId})
			} catch (error) {
				console.log(error)
			}
			this.review.userName = ''
			this.review.userEmail = ''
			this.review.text = ''
			this.resizeTextarea()
		},
		resizeTextarea() {
			let invis = document.getElementById('invisible-div')
			let textarea = document.getElementById('text')
			invis.innerHTML = String(this.review.text)
			
			textarea.style.height = `calc(${invis.getBoundingClientRect().height}px - 0.5rem)`
		}
	},
	async asyncData({ $axios, route }) {
		const { slug } = route.params;
		const product = await $axios.$get(`http://localhost:3000/api/products/slug/${slug}`)
		product[0].reviews = product[0].reviews.reverse()
		return {product: product[0]}
	},
}
</script>