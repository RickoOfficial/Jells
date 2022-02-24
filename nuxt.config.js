export default {
	server: {
		port: process.env.PORT,
		host: 'localhost'
	},
	env: {
		baseURL: process.env.BASE_URL
	},
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'Jells',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' }
		],
		link: [
			{ href: '/favicon.ico', rel: 'icon', type: 'image/x-icon', async: true },
			{ href: '/css/bootstrap-grid.min.css', rel: 'stylesheet', async: true },
			{ href: '/css/style.css', rel: 'stylesheet', async: true },
			{ href: '/css/nouislider.min.css', rel: 'stylesheet', async: true }
		],
		scripts: [
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
	],

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {
		// Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
		baseURL: process.env.BASE_URL,
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
	}
}
