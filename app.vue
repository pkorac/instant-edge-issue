<template>
	<div>
		<h1>Hello world!</h1>
		<pre>{{ myDogs }}</pre>
		<p>There should be some data above here 👆</p>
		<p>Toml with nodejs compat updated.</p>
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

pre {
	background: #222;
	min-height: 50px;
	min-width: 100px;
	border-radius: 12px;
	padding: 12px;
}
</style>
