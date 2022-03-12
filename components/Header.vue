<template>
	<div class="Header">
		<header class="d-flex justify-content-between align-items-center">
			<div class="logo"><NuxtLink to="/">🏪</NuxtLink></div>
			<nav>
				<NuxtLink to="/" class="">Главная</NuxtLink>
				<NuxtLink to="/catalog" class="">Каталог</NuxtLink>
				<NuxtLink to="/cart" class="">🛒</NuxtLink>
			</nav>
		</header>
	</div>
</template>

<style lang="scss" scoped>
	.Header {
		position: sticky;
		top: 1rem;
		margin-bottom: 2rem;
		z-index: 1;

		header {
			width: 80%;
			margin: 0 auto;
			padding: 0.5rem 2rem;
			background: #fff9;
			border: 1px solid var(--black);
			border-radius: 1rem;
			backdrop-filter: blur(5px);

			.logo {
				font-size: 2rem;
			}
			nav {
				height: fit-content;
				
				a {
					margin-left: 1.5rem;
					font-size: 1.5rem;
				}
			}
		}
	}
</style>