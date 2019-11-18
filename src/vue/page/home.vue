<template>
	<div :style="titleContainer">
		<img src="../../../img/nutn_1_.jpg" :style="titleImage" />
		<div
			:style="infoButton"
			@mouseover="infoButtonUp=true,groupButtonUp=false"
			@mouseout="infoButtonUp=false"
			@click="changePage(1)"
		>展覽資訊</div>
		<div>
		<div class="text">
			<h2>國立臺南大學資訊工程學系</h2>
			<h2>一零九級  畢業專題展覽</h2>
		</div>


		<div
			:style="groupButton"
			@mouseover="groupButtonUp=true,infoButtonUp=false"
			@mouseout="groupButtonUp=false"
			@click="changePage(5)"
		>專題組別</div>
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
			groupButtonWidth: 100,
			groupButtonUp: false,
			infoButtonWidth: 100,
			infoButtonUp: false
		};
	},
	computed: {
		titleContainer() {
			return {
				"z-index": -2,
				position: "absolute",
				width: `${this.width}px`,
				height: `${this.height}px`,
				top: "0px",
				right: `${-1 * this.width * (this.page - 1)}px`
			};
		},
		titleImage() {
			return {
				"z-index": -1,
				position: "absolute",
				top: "0px",
				right: `${((5760 * this.height) / 1080 -
					(this.width +
						this.groupButtonWidth -
						this.infoButtonWidth)) /
					-2}px`,
				"text-align": "center",
				color: "white",
				height: `${this.height}px`,
				"text-align": "center",
				"-webkit-touch-callout": "none",
				"-webkit-user-select": "none",
				"-khtml-user-select": "none",
				"-moz-user-select": "none",
				"-ms-user-select": "none",
				"user-select": "none"
			};
		},
		infoButton() {
			return {
				"z-index": 10,
				position: "absolute",
				top: "0px",
				right: `${this.width - this.infoButtonWidth}px`,
				"font-size": "150%",
				"letter-spacing": `${this.height * 0.05}px`,
				"text-align": "center",
				"margin-left": "auto",
				"background-color": "rgb(255, 255, 255)",
				color: "rgb(44, 44, 44)",
				width: `${this.infoButtonWidth}px`,
				height: `${this.height}px`,
				"line-height": `${this.infoButtonWidth}px`,
				"-webkit-writing-mode": "vertical-lr",
				"writing-mode": "vertical-lr",
				"-webkit-touch-callout": "none",
				"-webkit-user-select": "none",
				"-khtml-user-select": "none",
				"-moz-user-select": "none",
				"-ms-user-select": "none",
				"user-select": "none"
			};
		},
		groupButton() {
			return {
				"z-index": 10,
				position: "absolute",
				top: "0px",
				right: "0px",
				"font-size": "150%",
				"letter-spacing": `${this.height * 0.05}px`,
				"text-align": "center",
				"margin-left": "auto",
				"background-color": "rgb(44, 44, 44)",
				color: "rgb(255, 255, 255)",
				width: `${this.groupButtonWidth}px`,
				height: `${this.height}px`,
				"line-height": `${this.groupButtonWidth}px`,
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
				if (this.groupButtonUp || this.page != this.nowPage) {
					targetWidth = this.width * 0.1 + 200;
				} else {
					targetWidth = this.width * 0.05 + 100;
				}
				this.groupButtonWidth =
					targetWidth * 0.06 + this.groupButtonWidth * 0.94;
			}
			{
				let targetWidth;
				if (this.infoButtonUp || this.page != this.nowPage) {
					targetWidth = this.width * 0.1 + 200;
				} else {
					targetWidth = this.width * 0.05 + 100;
				}
				this.infoButtonWidth =
					targetWidth * 0.06 + this.infoButtonWidth * 0.94;
			}
		}
	}
};
</script>

<style scoped>
	.text {
		background-color: rgb(250,235,215,0.8);
		padding: 10px;
		margin-left: auto;
		margin-right: auto;
		margin-top: 15%;
		width: auto;
		writing-mode: vertical-rl;
		text-shadow: 10px 10px 10px rgba(255,255,255,0.9);
		/* filter:blur(3px) */
	}
	@media only screen and (max-width: 600px) {
		.text {
			margin-top: 30%;
		}
	}
</style>