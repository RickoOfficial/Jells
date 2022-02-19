// export const state = () => ({
// 	products: [],
// })

// export const mutations = {
// 	setAllProducts(state, data) {
// 		state.products = data
// 	}
// }

// export const actions = {
// 	async getAllProducts(context) {
// 		try {
// 			const data = await this.$axios.$get('http://localhost:3000/api/products')
// 			context.commit('setAllProducts', data)
// 		} catch (error) {
// 			console.log(error)
// 		}
// 	}
// }