<template>
	<div class="Sidebar">
		<h2><NuxtLink to="/admin">Админ</NuxtLink></h2>
		<ul>
			<li><NuxtLink to="/admin/category">Категории</NuxtLink></li>
			<li><NuxtLink to="/admin/products">Товары</NuxtLink></li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
	.Sidebar {
		background: var(--black);
		h2 {
			position: relative;
			margin-bottom: 1rem;
			padding: 1rem 2rem 1rem 1rem;
			text-align: center;
			&::after {
				content: '';
				position: absolute;
				left: 0;
				bottom: 0;
				width: 100%;
				height: 1px;
				background: var(--silver);
			}
			a {
				color: var(--white);
			}
		}
		ul {
			padding: 0 2rem 0 1rem;
			list-style-type: none;
			li, a {
				margin-bottom: 10px;
				color: var(--white);
				font-size: 18px;
				transition: .2s;
				&:hover {
					color: var(--accent);
				}
			}
		}
	}
</style>