<template>
	<div class="infoContainer">
		<div
			id="title"
			@mouseover="titleButtonUp=true,infoButtonUp=false"
			@mouseout="titleButtonUp=false"
			@mousedown="changePage('title')"
			class="titleButton"
		>首頁</div>
	</div>
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
	created() {
		this.updateCSSVariable();
		window.onresize = () => {
			this.updateCSSVariable();
		};
		window.onmousemove = event => {
			this.mouse.clientX = event.clientX;
			this.mouse.clientY = event.clientY;
		};
		this.mainLoop();
	},
	update() {
		console.log("update");
	},
	methods: {
		mainLoop() {
			requestAnimationFrame(this.mainLoop);
			{
				let targetWidth;
				if (this.titleButtonUp) {
					targetWidth = document.body.offsetWidth * 0.1 + 200;
				} else {
					targetWidth = document.body.offsetWidth * 0.05 + 100;
				}
				this.titleButtonWidth =
					targetWidth * 0.06 + this.titleButtonWidth * 0.94;
			}
			{
				let targetOffset;
				if (this.page == "info") {
					targetOffset = 0;
				} else {
					targetOffset = document.body.offsetWidth;
				}
				this.infoPageOffset =
					this.infoPageOffset > targetOffset
						? Math.max(
								targetOffset,
								this.infoPageOffset -
									document.body.offsetWidth * 0.025
						  )
						: this.infoPageOffset < targetOffset
						? Math.min(
								targetOffset,
								this.infoPageOffset +
									document.body.offsetWidth * 0.025
						  )
						: targetOffset;
			}
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
				"--title-info-button-width",
				this.titleButtonWidth + "px"
			);
			document.documentElement.style.setProperty(
				"--info-page-offset",
				this.infoPageOffset + "px"
			);
		}
	}
};
</script>

<style>
:root {
	--title-info-button-width: 100px;
	--info-page-offset: 0px;
}
</style>
        
<style scoped>
.infoContainer {
	z-index: 2;
	position: fixed;
	background-color: rgb(211, 211, 211);
	color: rgb(0, 0, 0);
	width: var(--screen-width);
	height: var(--screen-height);
	top: 0px;
	right: var(--info-page-offset);
}
.titleButton {
	z-index: 1;
	position: absolute;
	top: 0px;
	right: 0px;
	font-size: 150%;
	letter-spacing: calc(var(--screen-height) * 0.05);
	text-align: center;
	margin-left: auto;
	background-color: rgb(44, 44, 44);
	color: white;
	width: var(--title-info-button-width);
	height: var(--screen-height);
	line-height: var(--title-info-button-width);
	-webkit-writing-mode: vertical-lr;
	writing-mode: vertical-lr;

	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}
</style>