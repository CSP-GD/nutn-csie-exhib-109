<template>
	<div :id="`tag-${studentGroup.groupID}`" :style="tagContainer" @click="click">
		<div :id="`groupImageBackground-${studentGroup.groupID}`" :style="groupImageBackground"></div>
		<div :id="`groupImage-${studentGroup.groupID}`" :style="groupImage"></div>
		<div :id="`titleFont-${studentGroup.groupID}`" :style="titleFont">{{studentGroup.projectName}}</div>
	</div>
</template>

<script defer>
import { studentGroupJson } from "../../js/studentgroup";

export default {
	props: {
		studentGroup: {
			groupID: Number, //專題編號
			projectName: String, //專題名稱
			imgSrc: String, //專題截圖
			videoSrc: String, //專題影片
			fileSrc: String, //檔案連結
			fromLab: String, //所屬實驗室
			groupStudent: [{ studentID: String, studentName: String }]
		},
		init: {
			top: Number,
			right: Number
		},
		tagData: {
			minWidth: Number,
			minHeight: Number,
			maxWidth: Number,
			maxHeight: Number
		},
		expandedGroupID: Number,
		writeExpandedGroupID: Function,
		writeHeigthTable: Function
	},
	data() {
		return {
			width: this.tagData.minWidth,
			height: this.tagData.minHeight,
			target: {
				width: this.tagData.minWidth,
				height: this.tagData.minHeight
			},
			// top: (document.body.offsetHeight - 100) / 2,
			// right: (document.body.offsetWidth - 250) / 2,
			// studentGroup: studentGroupJson.filter(
			// 	data => data.groupID == 16
			// )[0],
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
				"z-index":
					this.expandedGroupID == this.studentGroup.groupID ? 1 : 0,
				position: "absolute",
				width: `${this.width}px`,
				height: `${this.height}px`,
				top: `${this.init.top}px`,
				right: `${this.init.right - this.width / 2}px`,

				"-webkit-filter":
					"drop-shadow(5px 0px 3px rgba(255, 255, 255, 0.2))",
				filter: "drop-shadow(5px 5px 2px rgba(0, 0, 0, 1))"
			};
		},
		groupImage() {
			return {
				position: "absolute",
				width: `${this.width}px`,
				height: `${this.height}px`,

				"clip-path": `polygon(0% 0%, 100% ${10 *
					(1 -
						Math.min(this.width, this.tagData.maxWidth) /
							Math.max(
								this.width,
								this.tagData.maxWidth
							))}%, 100% 100%, 0 ${100 -
					10 *
						(1 -
							Math.min(this.width, this.tagData.maxWidth) /
								Math.max(
									this.width,
									this.tagData.maxWidth
								))}%)`,
				"background-color": `rgb(0,0,0,0)`,
				"background-image": `url(${this.studentGroup.imgSrc})`,
				"background-size": `${
					this.image.width / this.image.height <
					this.width / this.height
						? (this.image.width / this.image.height) * this.height
						: this.width
				}px ${
					this.image.width / this.image.height <
					this.width / this.height
						? this.height
						: (this.image.height / this.image.width) * this.width
				}px`,
				"background-position": "center center",
				"background-repeat": "no-repeat"

				// filter: `blur(${5 * this.scale}px)`
			};
		},
		groupImageBackground() {
			return {
				position: "absolute",
				width: `${this.width}px`,
				height: `${this.height}px`,

				"clip-path": `polygon(0% 0%, 100% ${10 *
					(1 -
						Math.min(this.width, this.tagData.maxWidth) /
							Math.max(
								this.width,
								this.tagData.maxWidth
							))}%, 100% 100%, 0 ${100 -
					10 *
						(1 -
							Math.min(this.width, this.tagData.maxWidth) /
								Math.max(
									this.width,
									this.tagData.maxWidth
								))}%)`,
				"background-color": `rgb(0,0,0,1)`,
				"background-image": `url(${this.studentGroup.imgSrc})`,
				"background-size": `${this.width}px ${this.height}px`,
				"background-position": "center center",
				"background-repeat": "no-repeat",

				filter: `grayscale(50%) blur(${3}px)`
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

				filter: `blur(${5 *
					(1 -
						this
							.scale)}px) drop-shadow(0px 0px 2px rgba(0, 0, 0, 1))`,

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
				let elem = document.getElementById(
					`titleFont-${this.studentGroup.groupID}`
				);
				if (elem) {
					let rect = elem.getBoundingClientRect();
					this.titleFontOffser =
						(this.tagData.minHeight - rect.height) / 2;
				}
			}
			{
				if (this.expandedGroupID != this.studentGroup.groupID) {
					this.target.height = this.tagData.minHeight;
					this.target.width = this.tagData.minWidth;
				} else {
					this.target.height = this.tagData.maxHeight;
					this.target.width = this.tagData.maxWidth;
				}
			}
			{
				if (this.width - this.target.width < 0) {
					this.width = this.target.width * 0.1 + this.width * 0.9;
					if (Math.abs(this.width - this.target.width) < 100) {
						this.height =
							this.target.height * 0.1 + this.height * 0.9;
					}
				} else {
					this.height = this.target.height * 0.1 + this.height * 0.9;
					if (Math.abs(this.height - this.target.height) < 100) {
						this.width = this.target.width * 0.1 + this.width * 0.9;
					}
				}
				this.writeHeigthTable(this.studentGroup.groupID, this.height);
			}
		},
		click() {
			if (
				this.expandedGroupID != this.studentGroup.groupID ||
				this.expandedGroupID == -1
			) {
				this.writeExpandedGroupID(this.studentGroup.groupID);
			} else {
				this.writeExpandedGroupID(-1);
			}
		}
	}
};
</script>