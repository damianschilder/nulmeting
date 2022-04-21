export const state = () => ({
	// Opdracht 2.4
	messages: [],
	// Opdracht 2.5
	response: []
})

export const mutations = {
	// Opdracht 2.4
	addMessage(state, newMessage) {
		state.messages = [{ content: newMessage}, ...state.messages];
	},
	// Opdracht 2.5
    setEchoResponse(state, response) {
    console.log(response)
	state.response.splice(state.response.indexOf(response), 1)
	state.response.push({ content: response })
	}
}

export const actions = {
	async echo ({ commit }, formData) {
		let data = {
		echo: formData
		}
		let options = {
		url: "https://86a4h9y007.execute-api.eu-west-1.amazonaws.com/development/echo",
		method: "POST",
		headers: {
		"x-api-key": "Geheim"
		},
		data
		}
		let response = await this.$axios(options);
		commit('setEchoResponse', response.data);
	}
}

export const getters = {
	// Opdracht 2.4
	getMessages(state) {
		return state.messages
	},
	// Opdracht 2.5
	getResponse(state) {
		return state.response
	}
}