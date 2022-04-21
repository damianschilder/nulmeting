<template>
<div id="Counter">
	<button v-on:click="count++">Aantal keer geklikt:</button>
	<h1>{{ count }}</h1>
</div>
</template>

<script>
export default {
	data () {
		return{
			count: 0
		}
	}
}
</script>