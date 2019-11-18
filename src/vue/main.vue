<template>
	<div :style="mainContainer">
		<info :nowPage="nowPage" :page="1" :changePage="changePage" :width="width" :height="height"></info>
		<gradient
			:page="2"
			:color="{left:'rgb(44,44,44)',right:'rgb(255,255,255)'}"
			:width="width"
			:height="height"
		></gradient>
		<home :nowPage="nowPage" :page="3" :changePage="changePage" :width="width" :height="height"></home>
		<gradient
			:page="4"
			:color="{left:'rgb(44,44,44)',right:'rgb(255,255,255)'}"
			:width="width"
			:height="height"
		></gradient>
		<group :nowPage="nowPage" :page="5" :changePage="changePage" :width="width" :height="height"></group>
	</div>
</template>

<script defer>
import info from "./page/info.vue";
import home from "./page/home.vue";
import group from "./page/group.vue";
import gradient from "./page/gradient.vue";

export default {
	components: {
		info: info,
		home: home,
		group: group,
		gradient: gradient
	},
	data() {
		return {
			nowPage: 3,
			targetPage: 3,
			mouse: { clientX: null, clientY: null },
			width: 100,
			height: 100
		};
	},
	computed: {
		mainContainer() {
			return {
				position: "fixed",
				width: `${this.width}px`,
				height: `${this.height}px`,
				top: "0px",
				right: `${-1 * this.width * (1 - this.nowPage)}px`
			};
		}
	},
	created() {
		this.height = document.body.offsetHeight;
		this.width = document.body.offsetWidth;
		this.mainLoop();
	},
	update() {
		console.log("update");
	},
	methods: {
		mainLoop() {
			requestAnimationFrame(this.mainLoop);

			this.height = document.body.offsetHeight;
			this.width = document.body.offsetWidth;
			{
				if (this.nowPage > this.targetPage) {
					this.nowPage = Math.max(
						this.nowPage - 0.0425,
						this.targetPage
					);
				} else if (this.nowPage < this.targetPage) {
					this.nowPage = Math.min(
						this.nowPage + 0.0425,
						this.targetPage
					);
				}
			}
		},
		changePage(targetPage) {
			console.log(targetPage);
			this.targetPage = targetPage;
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

body,
button,
input,
select,
textarea,
h1,
h2,
h3,
h4,
h5,
h6,
div {
	font-family: custom-serif;
	src: local(Microsoft JhengHei), local("DFKai-sb");
	unicode-range: U+4E00-9FFF;
}

body,
button,
input,
select,
textarea,
h1,
h2,
h3,
h4,
h5,
h6,
div {
	font-family: custom-serif;
	src: local(Source Code Pro), local(Arial);
	unicode-range: U+00-024F;
}
</style>