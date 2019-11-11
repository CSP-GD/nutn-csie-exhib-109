<template>
	<div :style="infoContainer">
		<div
			:style="titleButton"
			@mouseover="titleButtonUp=true"
			@mouseout="titleButtonUp=false"
			@click="changePage(3)"
		>首頁</div>
	</div>
</template>

<script defer>
export default {
	props: {
		nowPage: Number,
		page: Number,
		changePage: Function,
		width: Number,
		height: Number
	},
	data() {
		return {
			titleButtonWidth: 100,
			titleButtonUp: false
		};
	},
	computed: {
		infoContainer() {
			return {
				"z-index": 2,
				position: "absolute",
				"background-color": "rgb(255, 255, 255)",
				color: "rgb(44, 44, 44)",
				width: `${this.width}px`,
				height: `${this.height}px`,
				top: "0px",
				right: `${-1 * this.width * (this.page - 1)}px`
			};
		},
		titleButton() {
			return {
				"z-index": 1,
				position: "absolute",
				top: "0px",
				right: "0px",
				"font-size": "150%",
				"letter-spacing": `${this.height * 0.05}px`,
				"text-align": "center",
				"margin-left": "auto",
				"background-color": "rgb(44, 44, 44)",
				color: "rgb(255, 255, 255)",
				width: `${this.titleButtonWidth}px`,
				height: `${this.height}px`,
				"line-height": `${this.titleButtonWidth}px`,
				"-webkit-writing-mode": " vertical-lr",
				"writing-mode": "vertical-lr",

				"-webkit-touch-callout": "none",
				"-webkit-user-select": "none",
				"-khtml-user-select": "none",
				"-moz-user-select": "none",
				"-ms-user-select": "none",
				"user-select": "none"
			};
		}
	},
	created() {
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
				if (this.titleButtonUp || this.page != this.nowPage) {
					targetWidth = document.body.offsetWidth * 0.1 + 200;
				} else {
					targetWidth = document.body.offsetWidth * 0.05 + 100;
				}
				this.titleButtonWidth =
					targetWidth * 0.06 + this.titleButtonWidth * 0.94;
			}
		}
	}
};
</script>

    