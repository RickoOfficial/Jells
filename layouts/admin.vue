<template>
	<div class="admin">
		<Sidebar
			class="left"
		/>
		<Nuxt
			class="right"
		/>
	</div>
</template>

<style lang="scss" scoped>
	.admin {
		display: flex;
		height: 100vh;
		.left {
			width: 10%;
			margin-right: 1rem;
		}
		.right {
			width: 90%;
			margin-top: 1rem;
		}
	}
</style>