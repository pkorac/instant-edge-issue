<template>
	<div>
		<h1>Hello world!</h1>
		<pre>{{ myDogs }}</pre>
	</div>
</template>
<script setup lang="ts">
const { data: myDogs } = await useFetch("/api/mydogs");
</script>
<style>
html,
body {
	background: #000;
	color: #fff;
	padding: 24px;
	font-family:
		system-ui,
		-apple-system,
		"Open Sans",
		"Helvetica Neue",
		sans-serif;
}
</style>
