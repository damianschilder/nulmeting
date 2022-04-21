<template>
	<main>
		<NuxtLink to="/">Home</NuxtLink>
		<NuxtLink to="/mypage">Mijn pagina</NuxtLink>
		<NuxtLink to="/count">Count</NuxtLink>
		<NuxtLink to="/message/add">Voeg berichten toe</NuxtLink>
		<NuxtLink to="/message/read">Lees alle berichten</NuxtLink>
		<NuxtLink to="/form">Formulier voor api call</NuxtLink>
		<NuxtLink to="/todo">To do pagina</NuxtLink>
		<h1>Voeg bericht toe</h1>
		<div id = "addMessage">
  			<input 
			  type="text"
			  v-model="newMessage"
			  @keypress.enter = "addMessage">
			<button @click="addMessage">Voeg toe</button>
		</div>
	</main>
</template>

<script>
export default {
	data () {
		return {
			newMessage: ""
		}
	},
	methods: {
		addMessage () {
			if (this.newMessage) {
				this.$store.commit("addMessage", this.newMessage);
				this.newMessage = "";
			}
		}
	}
}
</script>