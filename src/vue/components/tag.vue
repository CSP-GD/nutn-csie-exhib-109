<template>
	<div :id="`tag-${studentGroup.groupID}`" :style="tagContainer">
		<div :id="`groupInfo-${studentGroup.groupID}`" :style="groupInfo">11111111111111111111111</div>
		<div :id="`groupImageBackground-${studentGroup.groupID}`" :style="groupImageBackground"></div>
		<div :id="`groupImage-${studentGroup.groupID}`" :style="groupImage" @click="click"></div>
		<div
			:id="`titleFont-${studentGroup.groupID}`"
			:style="titleFont"
			@click="click"
		>{{studentGroup.projectName}}</div>
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
		writeExpandedGroupHeigth: Function
	},
	data() {
		return {
			width: this.tagData.minWidth,
			height: this.tagData.minHeight,
			now: {
				width: this.tagData.minWidth,
				height: this.tagData.minHeight
			},
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
	watch: {
		// init: function(newVal, oldVal) {
		// 	// watch it
		// 	if (this.studentGroup.groupID == 1) {
		// 		console.log("Prop changed: ", newVal, " | was: ", oldVal);
		// 	}
		// }
	},
	computed: {
		tagContainer() {
			// console.log("1");
			// console.log("2");
			// if (this.studentGroup.groupID == 1) {
			console.log("1");
			// }
			return {
				"z-index":
					this.expandedGroupID == this.studentGroup.groupID ? 1 : 0,
				position: "absolute",
				width: `${this.now.width}px`,
				height: `${this.now.height}px`,
				top: `${this.init.top}px`,
				right: `${this.init.right - this.now.width / 2}px`,

				"-webkit-filter": "drop-shadow(5px 5px 2px rgba(0, 0, 0, 1))",
				filter: "drop-shadow(5px 5px 2px rgba(0, 0, 0, 1))"
			};
		},
		groupImage() {
			return {
				position: "absolute",
				width: `${this.now.width}px`,
				height: `${Math.max(
					this.tagData.minHeight,
					this.now.height / 3
				)}px`,

				"clip-path": `polygon(0% 0%, 100% ${10 *
					(1 -
						Math.min(this.now.width, this.tagData.maxWidth) /
							Math.max(
								this.now.width,
								this.tagData.maxWidth
							))}%, 100% 100%, 0 ${100 -
					10 *
						(1 -
							Math.min(this.now.width, this.tagData.maxWidth) /
								Math.max(
									this.now.width,
									this.tagData.maxWidth
								))}%)`,
				"background-color": `rgb(0,0,0,0)`,
				"background-image": `url(${this.studentGroup.imgSrc})`,
				"background-size": `${
					this.image.width / this.image.height <
					this.now.width /
						Math.max(this.tagData.minHeight, this.now.height / 3)
						? (this.image.width / this.image.height) *
						  Math.max(this.tagData.minHeight, this.now.height / 3)
						: this.now.width
				}px ${
					this.image.width / this.image.height <
					this.now.width /
						Math.max(this.tagData.minHeight, this.now.height / 3)
						? Math.max(this.tagData.minHeight, this.now.height / 3)
						: (this.image.height / this.image.width) *
						  this.now.width
				}px`,
				"background-position": "center center",
				"background-repeat": "no-repeat"

				// filter: `blur(${5 * this.scale}px)`
			};
		},
		groupImageBackground() {
			return {
				position: "absolute",
				width: `${this.now.width}px`,
				height: `${Math.max(
					this.tagData.minHeight,
					this.now.height / 3
				)}px`,

				"clip-path": `polygon(0% 0%, 100% ${10 *
					(1 -
						Math.min(this.now.width, this.tagData.maxWidth) /
							Math.max(
								this.now.width,
								this.tagData.maxWidth
							))}%, 100% 100%, 0 ${100 -
					10 *
						(1 -
							Math.min(this.now.width, this.tagData.maxWidth) /
								Math.max(
									this.now.width,
									this.tagData.maxWidth
								))}%)`,
				"background-color": `rgb(0,0,0,1)`,
				"background-image": `url(${this.studentGroup.imgSrc})`,
				"background-size": `${this.now.width}px ${Math.max(
					this.tagData.minHeight,
					this.now.height / 3
				)}px`,
				"background-position": "center center",
				"background-repeat": "no-repeat",

				filter: `grayscale(50%) blur(${3}px)`
			};
		},
		groupInfo() {
			return {
				position: "absolute",
				width: `${this.now.width}px`,
				height: `${this.now.height}px`,

				color: "rgb(0,0,0)",
				"font-size": "18px",
				"letter-spacing": `${5}px`,
				"text-align": "center",

				"clip-path": `polygon(0% 0%, 100% ${10 *
					(1 -
						Math.min(this.now.width, this.tagData.maxWidth) /
							Math.max(
								this.now.width,
								this.tagData.maxWidth
							))}%, 100% 100%, 0 ${100 -
					10 *
						(1 -
							Math.min(this.now.width, this.tagData.maxWidth) /
								Math.max(
									this.now.width,
									this.tagData.maxWidth
								))}%)`,
				"background-color": `rgb(255,255,255,${(this.now.height -
					this.tagData.minHeight) /
					(this.tagData.maxHeight - this.tagData.minHeight)})`,

				filter: `blur(${100 *
					(1 -
						(this.now.height - this.tagData.minHeight) /
							(this.tagData.maxHeight -
								this.tagData
									.minHeight))}px) drop-shadow(0px 0px 2px rgba(0, 0, 0, 1))`
			};
		},
		titleFont() {
			return {
				position: "absolute",
				width: `${this.now.width}px`,
				top: `${this.titleFontOffser}px`,
				right: "0%",
				color: "rgb(255,255,255)",
				"font-size": "18px",
				"letter-spacing": `${5}px`,
				"text-align": "center",

				filter: `blur(${100 *
					((this.now.height - this.tagData.minHeight) /
						(this.tagData.maxHeight -
							this.tagData
								.minHeight))}px) drop-shadow(0px 0px 2px rgba(0, 0, 0, 1))`,

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
					this.titleFontOffser = Math.round(
						(this.tagData.minHeight - rect.height) / 2
					);
				}
			}
			{
				if (Math.round(this.now.width - this.target.width) < 0) {
					this.now.width =
						this.target.width * 0.1 + this.now.width * 0.9;
					if (Math.abs(this.now.width - this.target.width) < 100) {
						this.now.height =
							this.target.height * 0.1 + this.now.height * 0.9;
					}
				} else if (Math.round(this.now.width - this.target.width) > 0) {
					this.now.height =
						this.target.height * 0.1 + this.now.height * 0.9;
					if (Math.abs(this.now.height - this.target.height) < 100) {
						this.now.width =
							this.target.width * 0.1 + this.now.width * 0.9;
					}
				}
				// if (
				// 	Math.round(this.now.height) !=
				// 		Math.round(this.tagData.minHeight) &&
				// 	Math.round(this.now.height) !=
				// 		Math.round(this.tagData.maxHeight)
				// ) {
				// 	this.writeHeigthTable(
				// 		this.studentGroup.groupID,
				// 		Math.round(this.now.height)
				// 	);
				// }
				if (this.expandedGroupID == this.studentGroup.groupID) {
					if (
						Math.round(this.now.height) !=
						Math.round(this.target.height)
					) {
						this.writeExpandedGroupHeigth(
							Math.round(this.now.height)
						);
					}
					if (
						Math.round(this.target.height) ==
							Math.round(this.tagData.minHeight) &&
						Math.round(this.now.height) ==
							Math.round(this.target.height)
					) {
						this.writeExpandedGroupID(-1);
					}
				}
			}
		},
		click() {
			if (
				this.expandedGroupID != this.studentGroup.groupID ||
				this.expandedGroupID == -1
			) {
				this.writeExpandedGroupID(this.studentGroup.groupID);
				this.target.height = this.tagData.maxHeight;
				this.target.width = this.tagData.maxWidth;
			} else {
				this.target.height = this.tagData.minHeight;
				this.target.width = this.tagData.minWidth;
			}
		}
	}
};
</script>

<style scoped>
</style>