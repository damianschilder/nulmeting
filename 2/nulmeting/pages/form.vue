<template lang="pug">
	main
		<form
		p Zelfstandig naamwoord
		input(
			type= "text"
			placeholder= "I"
			v-model="messageOne"
		)
		p Werkwoord
		input(
			type= "text"
			placeholder= "<3"
			v-model="messageTwo"
		)
		p Zelfstandig naamwoord
		input(
			type= "text"
			placeholder= "Levarne"
			v-model="messageThree"
		)
		input(
			type="submit"
			value="Submit"
			@click="formData"
		)
		h3 {{ $store.getters.getResponse }}
</template>

<script>
export default {
	methods: {
		formData () {
			if (this.messageOne, this.messageTwo, this.messageThree) {
				this.$store.dispatch("echo", (this.messageOne + " " + this.messageTwo + " " + this.messageThree));
				this.messageOne = "";
				this.messageTwo = "";
				this.messageThree = "";
			}
		},
	}
}
</script>