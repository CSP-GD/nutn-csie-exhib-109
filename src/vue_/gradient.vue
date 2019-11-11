<template>
	<div class="gradient-container"></div>
</template>

<script defer>
export default {
	props: {
		page: String,
		changePage: Function
	},
	data() {
		return {
			titleButtonWidth: 100,
			titleButtonUp: false,
			// page: "info",
			mouse: { clientX: null, clientY: null },
			infoPageOffset: document.body.offsetWidth
		};
	},
	created() {},
	update() {
		console.log("update");
	},
	methods: {}
};
</script>

<style>
:root {
	--title-info-button-width: 100px;
	--info-page-offset: 0px;
}
</style>
        
<style scoped>
.gradient-container {
	z-index: 2;
	position: fixed;
	background-color: -webkit-linear-gradient(
		left,
		rgb(44, 44, 44),
		rgb(211, 211, 211)
	);
	background: -o-linear-gradient(right, rgb(44, 44, 44), rgb(211, 211, 211));
	background: -moz-linear-gradient(
		right,
		rgb(44, 44, 44),
		rgb(211, 211, 211)
	);
	background: linear-gradient(to right, rgb(44, 44, 44), rgb(211, 211, 211));
	color: rgb(0, 0, 0);
	width: var(--screen-width);
	height: var(--screen-height);
	top: 0px;
	right: 0px;
}
</style>