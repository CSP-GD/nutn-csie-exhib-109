<template>
	<div>
		<img src="../../img/nutn_1_.jpg" class="a" />
		<div id="group" @mouseover="groupButtonUp=true" @mouseout="groupButtonUp=false" class="b">專題組別</div>
	</div>
</template>

<script defer>
export default {
	data() {
		return {
			groupButtonWidth: 100,
			groupButtonUp: false
		};
	},
	created() {
		this.updateCSSVariable();
		window.onresize = () => {
			this.updateCSSVariable();
		};
		this.mainLoop();
	},
	update() {
		console.log("update");
	},
	methods: {
		mainLoop() {
			requestAnimationFrame(this.mainLoop);
			let targetWidth;
			if (this.groupButtonUp) {
				targetWidth = document.body.offsetWidth * 0.1 + 200;
			} else {
				targetWidth = document.body.offsetWidth * 0.05 + 100;
			}
			this.groupButtonWidth =
				targetWidth * 0.06 + this.groupButtonWidth * 0.94;
			this.updateCSSVariable();
		},
		updateCSSVariable() {
			document.documentElement.style.setProperty(
				"--screen-height",
				document.body.offsetHeight + "px"
			);
			document.documentElement.style.setProperty(
				"--screen-width",
				document.body.offsetWidth + "px"
			);
			document.documentElement.style.setProperty(
				"--group-button-width",
				this.groupButtonWidth + "px"
			);
			document.documentElement.style.setProperty(
				"--img-right",
				((5760 * document.body.offsetHeight) / 1080 -
					(document.body.offsetWidth + this.groupButtonWidth)) /
					-2 +
					"px"
			);
		}
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
	background-color: rgb(44, 44, 44);
}
:root {
	--screen-height: 100px;
	--screen-width: 100px;
	--img-right: 0px;
	--group-button-width: 100px;
}
</style>
        
<style scoped>
.a {
	position: fixed;
	top: 0px;
	right: var(--img-right);
	text-align: center;
	color: white;
	/* width: calc(var(--screen-width) * 0.95 - 100px); */
	height: var(--screen-height);
	text-align: center;
}
.b {
	z-index: 1;
	position: fixed;
	top: 0px;
	right: 0px;
	font-size: 150%;
	letter-spacing: calc(var(--screen-height) * 0.05);
	text-align: center;
	margin-left: auto;
	background-color: rgb(44, 44, 44);
	color: white;
	width: var(--group-button-width);
	height: var(--screen-height);
	line-height: var(--group-button-width);
	-webkit-writing-mode: vertical-lr;
	writing-mode: vertical-lr;
}
</style>