<template>
	<div :style="tagContainer">
		<div :style="groupImage"></div>
		<div :style="titleFont">智慧型行動載物機器人</div>
	</div>
</template>

<script defer>
import { StudentGroupJson } from "../../js/studentgroup";

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
		}
	},
	data() {
		return {
			width: 100,
			height: 100,
			scale: 0.5,
			s: StudentGroupJson.filter(data => data.GroupID == 26)[0],
			image: {
				width: 0,
				height: 0
			}
		};
	},
	computed: {
		tagContainer() {
			return {
				position: "absolute",
				width: `${150}px`,
				height: `${200}px`
				// right: "100px"
			};
		},
		groupImage() {
			return {
				position: "absolute",
				width: `${150}px`,
				height: `${200}px`,

				"clip-path": "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
				"background-image": `url(${this.s.ImgSrc})`,
				"background-size": `${(this.image.width / this.image.height) *
					200}px ${200}px`,
				"background-position": "center center"
				// filter: `grayscale(${this.scale}) blur(${5 * this.scale}px)`
			};
		},
		titleFont() {
			return {
				position: "absolute",
				margin: `${10}px ${10}px`,
				color: "rgb(255,255,255)",
				right: "25%",
				"font-size": "120%",
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
		img.src = this.s.ImgSrc;

		img.onload = () => {
			this.image.width = img.width;
			this.image.height = img.height;
		};
		this.height = document.body.offsetHeight;
		this.width = document.body.offsetWidth;
		window.onresize = () => {
			this.height = document.body.offsetHeight;
			this.width = document.body.offsetWidth;
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
			}
		}
	}
};
</script>