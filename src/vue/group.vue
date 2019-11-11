<template>
	<div :style="groupContainer">
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
		groupContainer() {
			return {
				"z-index": 2,
				position: "absolute",
				"background-color": "rgb(44, 44, 44)",
				color: "rgb(211, 211, 211)",
				width: `${this.width}px`,
				height: `${this.height}px`,
				top: "0px",
				right: `${-1 * this.width * (this.page - 1)}px`
			};
		},
		titleButton() {
			return {
				"z-index": 10,
				position: "absolute",
				top: "0px",
				right: `${this.width - this.titleButtonWidth}px`,
				"font-size": "150%",
				"letter-spacing": `${this.height * 0.05}px`,
				"text-align": "center",
				"margin-left": "auto",
				"background-color": "rgb(211, 211, 211)",
				color: "rgb(44, 44, 44)",
				width: `${this.titleButtonWidth}px`,
				height: `${this.height}px`,
				"line-height": `${this.titleButtonWidth}px`,
				"-webkit-writing-mode": "vertical-lr",
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
				if (this.titleButtonUp) {
					targetWidth = this.width * 0.1 + 200;
				} else {
					targetWidth = this.width * 0.05 + 100;
				}
				this.titleButtonWidth =
					targetWidth * 0.06 + this.titleButtonWidth * 0.94;
			}
		}
	}
};
</script>

    