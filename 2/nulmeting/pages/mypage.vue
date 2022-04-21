<template>
	<main>
		<NuxtLink to="/">Home</NuxtLink>
		<NuxtLink to="/mypage">Mijn pagina</NuxtLink>
		<NuxtLink to="/count">Count</NuxtLink>
		<NuxtLink to="/message/add">Voeg berichten toe</NuxtLink>
		<NuxtLink to="/message/read">Lees alle berichten</NuxtLink>
		<NuxtLink to="/form">Formulier voor api call</NuxtLink>
		<NuxtLink to="/todo">To do pagina</NuxtLink>
		<h1>Hier komt je html</h1>
		<p>{{message}}</p>
	</main>
</template>
<script>
export default {
data: function() {
return {
message: "dit is een message"
		}
	}
}
</script>
<style scoped>
p {
	font-size: 14pt;
	color: #222222;
}
</style>