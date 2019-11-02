<template>
	<div>
		<div class="b">專題組別</div>
	</div>
</template>

<script defer>
export default {
	data() {
		document.documentElement.style.setProperty(
			"--screen-height",
			document.body.offsetHeight + "px"
		);
		document.documentElement.style.setProperty(
			"--screen-width",
			document.body.offsetWidth + "px"
		);
		window.onresize = () => {
			document.documentElement.style.setProperty(
				"--screen-height",
				document.body.offsetHeight + "px"
			);
			document.documentElement.style.setProperty(
				"--screen-width",
				document.body.offsetWidth + "px"
			);
		};
		return {};
	}
};
</script>

<style>
@font-face {
	font-family: custom-serif;
	src: local(Microsoft JhengHei), local("DFKai-sb");
	unicode-range: U+4E00-9FFF;
}

@font-face {
	font-family: custom-serif;
	src: local(Source Code Pro), local(Arial);
	unicode-range: U+00-024F;
}

html {
	height: 100%;
	font-family: custom-serif;
}

body {
	height: 100%;
	margin: 0px;
	display: flex;
	flex-direction: column;
}
:root {
	--screen-height: 100px;
	--screen-width: 100px;
}
</style>
        
<style scoped>
.b {
	text-align: center;
	flex: 1;
	margin-left: auto;
	background-color: rgb(66, 66, 66);
	color: white;
	transition-property: width, line-height;
	transition-duration: 1s;
	width: calc(5% + 100px);
	height: var(--screen-height);
	line-height: calc(var(--screen-width) * 0.05 + 100px);
	-webkit-writing-mode: vertical-lr;
	writing-mode: vertical-lr;
}

.b:hover {
	transition-property: width, line-height;
	transition-duration: 1s;
	line-height: calc(var(--screen-width) * 0.1 + 200px);
	width: calc(10% + 200px);
}
</style>