<template>
	<div :style="infoContainer">
		<div :style="innerPage">
			<div class="jumbotron">
				<h1 class="display-10">展覽資訊</h1>
				<hr class="my-4" />
				<p>今年的展覽由109級學生舉辦，共有24組同學參加展覽，題目範圍廣泛，包括大量的機器學習、影像處理應用、智慧型裝置系統開發、嵌入式系統實作...等。</p>
				<p></p>
				<p>在展覽中109級學生們的用心、創意、專業的態度，更可看出學生們一年來研究的成果，四年來的學習成效。</p>
				<hr class="my-2" />
				<p>日期: 2019/12/14(六)</p>
				<p>時間: 11:00 - 16:00</p>
				<p>地點: 國立臺南大學文薈樓地下一樓</p>
			</div>
		</div>

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
				right: `${-1 * this.width * (this.page - 1)}px`,
				background: "#ECFBF5"
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
		},
		innerPage() {
			return {
				position: "absolute",
				top: `${0}px`,
				right: `${this.width * 0.25 + this.titleButtonWidth * 0.5}px`,
				width: `${this.width * 0.5}px`,
				height: `${this.height * 0.8}px`
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
					targetWidth = document.body.offsetWidth * 0.16 + 100;
				} else {
					targetWidth = document.body.offsetWidth * 0.08 + 50;
				}
				this.titleButtonWidth =
					targetWidth * 0.06 + this.titleButtonWidth * 0.94;
			}
		}
	}
};
</script>

<style scoped>
/* @media only screen and (max-width: 600px) {
	.container {
		width: 70%;
		margin-right: 30%;
	}
} */
</style>
