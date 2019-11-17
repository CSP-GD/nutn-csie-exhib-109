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
			titleFontOffser: 0,
			init_: {
				top: this.init.top,
				right: this.init.right
			},
			tagData_: {
				minWidth: this.tagData.minWidth,
				minHeight: this.tagData.minHeight,
				maxWidth: this.tagData.maxWidth,
				maxHeight: this.tagData.maxHeight
			}
		};
	},
	watch: {
		init: {
			deep: true,
			handler(newInit, oldInit) {
				// watch it
				if (newInit.top != oldInit.top) {
					this.init_.top = Math.round(this.init.top);
				}
				if (newInit.right != oldInit.right) {
					this.init_.right = Math.round(this.init.right);
				}
			}
		},
		tagData: {
			deep: true,
			handler(newTagData, oldTagData) {
				// watch it
				if (newTagData.minWidth != oldTagData.minWidth) {
					this.tagData_.minWidth = this.tagData.minWidth;
				}
				if (newTagData.minHeight != oldTagData.minHeight) {
					this.tagData_.minHeight = this.tagData.minHeight;
				}
				if (newTagData.maxWidth != oldTagData.maxWidth) {
					this.tagData_.maxWidth = this.tagData.maxWidth;
				}
				if (newTagData.maxHeight != oldTagData.maxHeight) {
					this.tagData_.maxHeight = this.tagData.maxHeight;
				}
			}
		}
	},
	computed: {
		tagContainer() {
			return {
				"z-index":
					this.expandedGroupID == this.studentGroup.groupID ? 1 : 0,
				position: "absolute",
				width: `${this.now.width}px`,
				height: `${this.now.height}px`,
				top: `${this.init_.top}px`,
				right: `${this.init_.right - this.now.width / 2}px`,
				"-webkit-filter": "drop-shadow(5px 5px 2px rgba(0, 0, 0, 1))",
				filter: "drop-shadow(5px 5px 2px rgba(0, 0, 0, 1))"
			};
		},
		groupImage() {
			return {
				position: "absolute",
				width: `${this.now.width}px`,
				height: `${Math.max(
					this.tagData_.minHeight,
					this.now.height / 3
				)}px`,

				"clip-path": `polygon(0% 0%, 100% ${10 *
					(1 -
						Math.min(this.now.width, this.tagData_.maxWidth) /
							Math.max(
								this.now.width,
								this.tagData_.maxWidth
							))}%, 100% 100%, 0 ${100 -
					10 *
						(1 -
							Math.min(this.now.width, this.tagData_.maxWidth) /
								Math.max(
									this.now.width,
									this.tagData_.maxWidth
								))}%)`,
				"background-color": `rgb(0,0,0,0)`,
				"background-image": `url(${this.studentGroup.imgSrc})`,
				"background-size": `${
					this.image.width / this.image.height <
					this.now.width /
						Math.max(this.tagData_.minHeight, this.now.height / 3)
						? (this.image.width / this.image.height) *
						  Math.max(this.tagData_.minHeight, this.now.height / 3)
						: this.now.width
				}px ${
					this.image.width / this.image.height <
					this.now.width /
						Math.max(this.tagData_.minHeight, this.now.height / 3)
						? Math.max(this.tagData_.minHeight, this.now.height / 3)
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
					this.tagData_.minHeight,
					this.now.height / 3
				)}px`,

				"clip-path": `polygon(0% 0%, 100% ${10 *
					(1 -
						Math.min(this.now.width, this.tagData_.maxWidth) /
							Math.max(
								this.now.width,
								this.tagData_.maxWidth
							))}%, 100% 100%, 0 ${100 -
					10 *
						(1 -
							Math.min(this.now.width, this.tagData_.maxWidth) /
								Math.max(
									this.now.width,
									this.tagData_.maxWidth
								))}%)`,
				"background-color": `rgb(0,0,0,1)`,
				"background-image": `url(${this.studentGroup.imgSrc})`,
				"background-size": `${this.now.width}px ${Math.max(
					this.tagData_.minHeight,
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
						Math.min(this.now.width, this.tagData_.maxWidth) /
							Math.max(
								this.now.width,
								this.tagData_.maxWidth
							))}%, 100% 100%, 0 ${100 -
					10 *
						(1 -
							Math.min(this.now.width, this.tagData_.maxWidth) /
								Math.max(
									this.now.width,
									this.tagData_.maxWidth
								))}%)`,
				"background-color": `rgb(255,255,255,${(this.now.height -
					this.tagData_.minHeight) /
					(this.tagData_.maxHeight - this.tagData_.minHeight)})`,

				filter: `blur(${100 *
					(1 -
						(this.now.height - this.tagData_.minHeight) /
							(this.tagData_.maxHeight -
								this.tagData_
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
					((this.now.height - this.tagData_.minHeight) /
						(this.tagData_.maxHeight -
							this.tagData_
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
						(this.tagData_.minHeight - rect.height) / 2
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
				// 		Math.round(this.tagData_.minHeight) &&
				// 	Math.round(this.now.height) !=
				// 		Math.round(this.tagData_.maxHeight)
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
							Math.round(this.tagData_.minHeight) &&
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
				this.target.height = this.tagData_.maxHeight;
				this.target.width = this.tagData_.maxWidth;
			} else {
				this.target.height = this.tagData_.minHeight;
				this.target.width = this.tagData_.minWidth;
			}
		}
	}
};
</script>

<style scoped>
</style>