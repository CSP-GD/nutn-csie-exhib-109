<template>
	<div>
		<info :page="page" :changePage="changePage"></info>
		<div class="titleContainer">
			<div
				id="info"
				@mouseover="infoButtonUp=true,groupButtonUp=false"
				@mouseout="infoButtonUp=false"
				@mousedown="changePage('info')"
				class="infoButton"
			>展覽資訊</div>
			<img src="../../img/nutn_1_.jpg" class="titleImage" />
			<div
				id="group"
				@mouseover="groupButtonUp=true,infoButtonUp=false"
				@mouseout="groupButtonUp=false"
				class="groupButton"
			>專題組別</div>
		</div>
	</div>
</template>

<script defer>
import info from "./info.vue";

export default {
	components: { info },
	data() {
		return {
			groupButtonWidth: 100,
			groupButtonUp: false,
			infoButtonWidth: 100,
			infoButtonUp: false,
			page: "title",
			mouse: { clientX: null, clientY: null },
			titlePageOffset: 0
		};
	},
	created() {
		this.updateCSSVariable();
		window.onresize = () => {
			this.updateCSSVariable();
		};
		window.onmouseup = () => {
			this.groupButtonMouseDrag = null;
			this.infoButtonMouseDrag = null;
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
				if (this.groupButtonUp) {
					targetWidth = document.body.offsetWidth * 0.1 + 200;
				} else {
					targetWidth = document.body.offsetWidth * 0.05 + 100;
				}
				this.groupButtonWidth =
					targetWidth * 0.06 + this.groupButtonWidth * 0.94;
			}
			{
				let targetWidth;
				if (this.infoButtonUp) {
					targetWidth = document.body.offsetWidth * 0.1 + 200;
				} else {
					targetWidth = document.body.offsetWidth * 0.05 + 100;
				}
				this.infoButtonWidth =
					targetWidth * 0.06 + this.infoButtonWidth * 0.94;
			}
			{
				let targetOffset;
				if (this.page == "title") {
					targetOffset = 0;
				} else if (this.page == "info") {
					targetOffset = -1 * document.body.offsetWidth;
				}
				this.titlePageOffset =
					this.titlePageOffset > targetOffset
						? Math.max(
								targetOffset,
								this.titlePageOffset -
									document.body.offsetWidth * 0.025
						  )
						: this.titlePageOffset < targetOffset
						? Math.min(
								targetOffset,
								this.titlePageOffset +
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
				"--group-button-width",
				this.groupButtonWidth + "px"
			);
			document.documentElement.style.setProperty(
				"--info-button-width",
				this.infoButtonWidth + "px"
			);
			document.documentElement.style.setProperty(
				"--img-right",
				((5760 * document.body.offsetHeight) / 1080 -
					(document.body.offsetWidth +
						this.groupButtonWidth -
						this.infoButtonWidth)) /
					-2 +
					"px"
			);
			document.documentElement.style.setProperty(
				"--title-page-offset",
				this.titlePageOffset + "px"
			);
		},
		changePage(pageName) {
			switch (pageName) {
				case "info": {
					this.page = pageName;
					break;
				}
				case "title": {
					this.page = pageName;
					break;
				}
			}
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
	overflow-x: hidden;
}
:root {
	--screen-height: 100px;
	--screen-width: 100px;
	--img-right: 0px;
	--group-button-width: 100px;
	--info-button-width: 100px;
	--title-page-offset: 0px;
}
</style>
        
<style scoped>
.titleContainer {
	position: absolute;
	background-color: rgb(211, 211, 211);
	color: rgb(0, 0, 0);
	height: var(--screen-height);
	top: 0px;
	right: var(--title-page-offset);
}
.titleImage {
	z-index: -1;
	position: absolute;
	top: 0px;
	right: var(--img-right);
	text-align: center;
	color: white;
	/* width: calc(var(--screen-width) * 0.95 - 100px); */
	height: var(--screen-height);
	text-align: center;

	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}
.infoButton {
	z-index: 1;
	position: absolute;
	top: 0px;
	right: calc(var(--screen-width) - var(--info-button-width));
	font-size: 150%;
	letter-spacing: calc(var(--screen-height) * 0.05);
	text-align: center;
	margin-left: auto;
	background-color: rgb(211, 211, 211);
	color: rgb(0, 0, 0);
	width: var(--info-button-width);
	height: var(--screen-height);
	line-height: var(--info-button-width);
	-webkit-writing-mode: vertical-lr;
	writing-mode: vertical-lr;

	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}
.groupButton {
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
	width: var(--group-button-width);
	height: var(--screen-height);
	line-height: var(--group-button-width);
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