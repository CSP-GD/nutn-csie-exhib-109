<template>
	<div :style="infoContainer">
		<div ref="innerPage" :style="innerPage">
			<div :style="info">
				<div ref="info" class="jumbotron">
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
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1544.3291544591434!2d120.20610254052978!3d22.985025624903738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e7687367b7aa1%3A0xa132c2a1ddf914fc!2zNzAw5Y-w5Y2X5biC5Lit6KW_5Y2A5paH6JaI5qiT!5e0!3m2!1szh-TW!2stw!4v1544023010716"
					:width="Math.min(
						800,
						(this.width - this.titleButtonWidth) * 0.8
					)"
					height="400"
					frameborder="0"
					style="border:0"
					allowfullscreen
				></iframe>
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
			titleButtonUp: false,
			infoTopOffset: 0,
			touch: { x: null, y: null },
			nowTop: 0,
			targetTop: 0
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
				right: `${this.titleButtonWidth}px`,
				width: `${this.width - this.titleButtonWidth}px`,
				height: `${this.height}px`
			};
		},
		info() {
			return {
				position: "absolute",
				top: `${this.infoTopOffset + this.nowTop}px`,
				right: `${(this.width -
					this.titleButtonWidth -
					Math.min(800, (this.width - this.titleButtonWidth) * 0.8)) /
					2}px`,
				width: `${Math.min(
					800,
					(this.width - this.titleButtonWidth) * 0.8
				)}px`
			};
		}
	},
	mounted() {
		this.mainLoop();
		this.$refs.innerPage.addEventListener("DOMMouseScroll", event => {
			this.slide(event.wheelDeltaY);
		});
		this.$refs.innerPage.onmousewheel = event => {
			event = event || window.event;
			this.slide(event.wheelDeltaY);
		};
		this.$refs.innerPage.addEventListener(
			"touchmove",
			event => {
				// event.preventDefault();
				if (this.touch.y !== null) {
					this.slide((event.touches[0].screenY - this.touch.y) * 2);
				}
				this.touch.x = event.touches[0].screenX;
				this.touch.y = event.touches[0].screenY;
			},
			false
		);
		this.$refs.innerPage.addEventListener(
			"touchstart",
			event => {
				this.touch.x = event.touches[0].screenX;
				this.touch.y = event.touches[0].screenY;
			},
			false
		);
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
			{
				this.infoTopOffset = Math.max(
					0,
					(this.height -
						this.$refs.info.getBoundingClientRect().height) *
						0.2
				);
			}
			{
				if (this.targetTop > 0) {
					this.targetTop = Math.round(this.targetTop * 0.8);
				} else if (
					this.targetTop <
					-1 *
						(Math.max(
							this.height,
							this.$refs.info.getBoundingClientRect().height + 200
						) -
							this.height +
							400)
				) {
					console.log(
						-1 *
							(Math.max(
								this.height,
								this.$refs.info.getBoundingClientRect().height +
									200
							) -
								this.height)
					);
					this.targetTop = Math.round(
						this.targetTop * 0.8 +
							-1 *
								(Math.max(
									this.height,
									this.$refs.info.getBoundingClientRect()
										.height + 200
								) -
									this.height) *
								0.2
					);
				}
				// else if (
				// 	this.target.top <
				// 	-1 *
				// 		(this.height *0.2) +
				// 		this.init.height / 2
				// ) {
				// 	this.target.top = Math.round(
				// 		this.target.top * 0.8 +
				// 			(-1 *
				// 				((this.studentGroupJson.length - 1) *
				// 					this.tagData.minHeight +
				// 					(this.expandedGroupID == -1
				// 						? this.tagData.minHeight
				// 						: this.expandedGroupHeight)) +
				// 				this.init.height / 2) *
				// 				0.2
				// 	);
				// }
			}
			{
				if (this.nowTop != this.targetTop) {
					this.nowTop = Math.round(
						this.targetTop * 0.06 + this.nowTop * (1 - 0.06)
					);
				}
			}
		},
		slide(deltaY) {
			deltaY = Number.isNaN(deltaY) ? 0 : deltaY;
			this.targetTop += deltaY;
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
