<template>
	<div class="Review">
		<div class="review-top d-flex align-items-center justify-content-between mb-3">
			<div class="review-name h3">{{review.userName}}</div>
			<div class="review-date">{{date}}</div>
		</div>
		<div class="review-text">{{review.text}}</div>
	</div>
</template>

<style lang="scss" scoped>
	.Review {
		margin-bottom: 2rem;
		padding: 1rem 1.5rem;
		background: #fff;
		border-radius: 1rem;
		transition: .2s;
		&:hover {
			box-shadow: 0 0 0.5rem #0002;
		}
		
		.review-top {
			border-bottom: 1px solid var(--accent);
			padding-bottom: .5rem;
			.review-name {
				margin-right: 1rem;
			}
			.review-date {
				font-size: 14px;
			}
		}
		.review-text {
			
		}
	}
</style>

<script>
export default {
	props: ['review'],
	data() {
		return {
			date: ''
		}
	},
	mounted() {
		this.date = new Date(this.review.createDate)
		let Day = String(this.date.getDate())
		let Month = String(this.date.getMonth()+1)
		let Year = String(this.date.getFullYear())
		let Min = String(this.date.getMinutes())
		let Hours = String(this.date.getHours())

		Day = Day.length == 1 ? `0${Day}` : Day
		Month = Month.length == 1 ? `0${Month}` : Month
		Min = Min.length == 1 ? `0${Min}` : Min
		Hours = Hours.length == 1 ? `0${Hours}` : Hours
		
		this.date = `${Day}.${Month}.${Year} ${Hours}:${Min}`
	}
}
</script>