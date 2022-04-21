<template>
	<main>
		<NuxtLink to="/">Home</NuxtLink>
		<NuxtLink to="/mypage">Mijn pagina</NuxtLink>
		<NuxtLink to="/count">Count</NuxtLink>
		<NuxtLink to="/message/add">Voeg berichten toe</NuxtLink>
		<NuxtLink to="/message/read">Lees alle berichten</NuxtLink>
		<NuxtLink to="/form">Formulier voor api call</NuxtLink>
		<NuxtLink to="/todo">To do pagina</NuxtLink>
	</main>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
