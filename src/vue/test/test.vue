<template>
	<div id="tag" :style="tagContainer" @click="click">
		<div id="groupImage" :style="groupImage"></div>
		<div id="titleFont" :style="titleFont">{{studentGroup.projectName}}</div>
	</div>
</template>

<script defer>
import { studentGroupJson } from "../../js/studentgroup";

export default {
	props: {
		// studentGroup: {
		// 	groupID: Number, //專題編號
		// 	projectName: String, //專題名稱
		// 	imgSrc: String, //專題截圖
		// 	videoSrc: String, //專題影片
		// 	fileSrc: String, //檔案連結
		// 	fromLab: String, //所屬實驗室
		// 	groupStudent: [{ studentID: String, studentName: String }]
		// },
		// width: Number,
		// height: Number,
		// top: Number,
		// right: Number
	},
	data() {
		return {
			width: 250,
			height: 100,
			top: (document.body.offsetHeight - 100) / 2,
			right: (document.body.offsetWidth - 250) / 2,
			studentGroup: studentGroupJson.filter(
				data => data.groupID == 16
			)[0],
			scale: 1,
			image: {
				width: 0,
				height: 0
			},
			shadow: {
				deg: -50
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
				right: `${this.right}px`,

				"-webkit-filter":
					"drop-shadow(5px 0px 3px rgba(255, 255, 255, 0.2))",
				filter: "drop-shadow(5px 0px 3px rgba(255, 255, 255, 0.2))"
			};
		},
		groupImage() {
			return {
				position: "absolute",
				width: `${this.width}px`,
				height: `${this.height}px`,

				"clip-path": "polygon(0% 0%, 100% 10%, 100% 100%, 0 90%)",
				"background-color": `rgb(0,0,0)`,
				"background-image": `url(${this.studentGroup.imgSrc})`,
				"background-size": `${this.width}px ${(this.image.height /
					this.image.width) *
					this.width}px`,
				"background-position": "center center",
				"background-repeat": "no-repeat",

				filter: `grayscale(${this.scale}) blur(${5 * this.scale}px)`
			};
		},
		titleFont() {
			return {
				position: "absolute",
				width: `${this.width}px`,
				top: `${this.titleFontOffser}px`,
				right: "0%",
				color: "rgb(255,255,255)",
				"font-size": "18px",
				"letter-spacing": `${5}px`,
				"text-align": "center",

				filter: `grayscale(${1 - this.scale}) blur(${5 *
					(1 - this.scale)}px)`
			};
		}
	},
	created() {
		let img = new Image();
		img.src = this.studentGroup.imgSrc;
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
					this.titleFontOffser = (this.height - rect.height) / 2;
				}
			}
		},
		click() {
			console.log("tag");
		}
	}
};
</script>