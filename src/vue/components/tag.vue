<template>
	<div id="tag" :style="tagContainer">
		<div id="groupImage" :style="groupImage"></div>
		<div id="titleFont" :style="titleFont">{{studentGroup.ProjectName}}</div>
	</div>
</template>

<script defer>
export default {
	props: {
		studentGroup: {
			GroupID: Number, //專題編號
			ProjectName: String, //專題名稱
			ImgSrc: String, //專題截圖
			VideoSrc: String, //專題影片
			FileSrc: String, //檔案連結
			FromLab: String, //所屬實驗室
			GroupStudent: [{ StudentID: String, StudentName: String }]
		},
		width: Number,
		height: Number,
		top: Number,
		right: Number
	},
	data() {
		return {
			// width: 150,
			// height: 200,
			scale: 0.5,
			image: {
				width: 0,
				height: 0
			},
			titleFontOffser: 0
		};
	},
	computed: {
		tagContainer() {
			return {
				position: "absolute",
				width: `${this.width}px`,
				height: `${this.height}px`,
				top: `${this.top}px`,
				right: `${this.right}px`
			};
		},
		groupImage() {
			return {
				position: "absolute",
				width: `${this.width}px`,
				height: `${this.height}px`,

				"clip-path": "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
				"background-image": `url(${this.studentGroup.ImgSrc})`,
				"background-size": `${(this.image.width / this.image.height) *
					this.height}px ${this.height}px`,
				"background-position": "center center"
				// filter: `grayscale(${this.scale}) blur(${5 * this.scale}px)`
			};
		},
		titleFont() {
			return {
				position: "absolute",
				margin: `${10}px ${0}px`,
				color: "rgb(255,255,255)",
				right: `${this.titleFontOffser}px`,
				"font-size": "18px",
				"letter-spacing": `${5}px`,
				"text-align": "center",
				"line-height": `${30}px`,
				"-webkit-writing-mode": "vertical-rl",
				"writing-mode": "vertical-rl",

				"-moz-transform": "skewX(-10deg)",
				"-webkit-transform": "skewX(-10deg)",
				"-o-transform": "skewX(-10deg)",
				"-ms-transform": "skewX(-10deg)",
				transform: "skewX(-10deg)",

				"white-space": "pre-wrap",

				filter: "blur(-6px)"
			};
		}
	},
	created() {
		let img = new Image();
		img.src = this.studentGroup.ImgSrc;
		img.onload = () => {
			this.image.width = img.width;
			this.image.height = img.height;
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
				let elem = document.getElementById("titleFont");
				if (elem) {
					let rect = elem.getBoundingClientRect();
					this.titleFontOffser = this.width - rect.width;
				}
			}
		}
	}
};
</script>