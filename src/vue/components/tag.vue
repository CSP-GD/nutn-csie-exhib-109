<template>
	<div :id="`tag-${studentGroup.groupID}`" :style="tagContainerList">
		<div :id="`groupInfo-${studentGroup.groupID}`" :style="groupInfoList">11111111111111111111111</div>
		<div :id="`groupImageBackground-${studentGroup.groupID}`" :style="groupImageBackgroundList"></div>
		<div :id="`groupImage-${studentGroup.groupID}`" :style="groupImageList" @click="click"></div>
		<div
			:id="`titleFont-${studentGroup.groupID}`"
			:style="titleFontList"
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
		let now = {
			width: this.tagData.minWidth,
			height: this.tagData.minHeight
		};
		let target = {
			width: this.tagData.minWidth,
			height: this.tagData.minHeight
		};
		return {
			width: this.tagData.minWidth,
			height: this.tagData.minHeight,
			now: now,
			target: target,
			scale: 1,
			image: {
				width: 0,
				height: 0
			},
			shadow: {
				deg: -50
			},
			titleFontOffser: 0,
			tagContainerList: {
				"will-change": "right",
				position: "absolute",

				"-webkit-filter": "drop-shadow(5px 5px 2px rgba(0, 0, 0, 1))",
				filter: "drop-shadow(5px 5px 2px rgba(0, 0, 0, 1))"
			},
			groupImageList: {
				position: "absolute",

				"clip-path": `polygon(0% 0%, 100% ${10}%, 100% 100%, 0 ${90}%)`,

				"background-color": `rgb(0,0,0,0)`,
				"background-image": `url(${this.studentGroup.imgSrc})`,

				"background-position": "center center",
				"background-repeat": "no-repeat"
			},
			groupImageBackgroundList: {
				position: "absolute",

				"background-color": `rgb(0,0,0,1)`,
				"background-image": `url(${this.studentGroup.imgSrc})`,

				"background-position": "center center",
				"background-repeat": "no-repeat",

				filter: `grayscale(50%) blur(${3}px)`
			},
			groupInfoList: {
				position: "absolute",

				color: "rgb(0,0,0)",
				"font-size": "18px",
				"letter-spacing": `${5}px`,
				"text-align": "center"
			},
			titleFontList: {
				position: "absolute",
				right: "0%",
				color: "rgb(255,255,255)",
				"font-size": "18px",
				"letter-spacing": `${5}px`,
				"text-align": "center",

				"-webkit-touch-callout": "none",
				"-webkit-user-select": "none",
				"-khtml-user-select": "none",
				"-moz-user-select": "none",
				"-ms-user-select": "none",
				"user-select": "none"
			}
		};
	},
	watch: {
		expandedGroupID: {
			immediate: true,
			handler(expandedGroupID, prevExpandedGroupID) {
				// watch it
				if (expandedGroupID != prevExpandedGroupID) {
					this.tagContainerList["z-index"] =
						this.expandedGroupID == this.studentGroup.groupID
							? 1
							: 0;
				}
			}
		},
		"init.top": {
			immediate: true,
			handler(initTop, prevInitTop) {
				// watch it
				if (initTop != prevInitTop) {
					// tagContainerList
					{
						this.tagContainerList.top = `${this.init.top}px`;
					}
				}
			}
		},
		"init.right": {
			immediate: true,
			handler(initRight, prevInitRight) {
				// watch it
				if (initRight != prevInitRight) {
					// tagContainerList
					{
						this.tagContainerList.right = `${this.init.right -
							this.now.width / 2}px`;
					}
				}
			}
		},
		"now.width": {
			immediate: true,
			handler(nowWidth, prevNowWidth) {
				if (Math.round(nowWidth) != Math.round(prevNowWidth)) {
					// tagContainerList
					{
						this.tagContainerList.width = `${this.now.width}px`;
						this.tagContainerList.right = `${this.init.right -
							this.now.width / 2}px`;
					}
					// groupImageList
					{
						this.groupImageList.width = `${this.now.width}px`;
						this.groupImageList[
							"clip-path"
						] = `polygon(0% 0%, 100% ${10 *
							(1 -
								Math.min(
									this.now.width,
									this.tagData.maxWidth
								) /
									Math.max(
										this.now.width,
										this.tagData.maxWidth
									))}%, 100% 100%, 0 ${100 -
							10 *
								(1 -
									Math.min(
										this.now.width,
										this.tagData.maxWidth
									) /
										Math.max(
											this.now.width,
											this.tagData.maxWidth
										))}%)`;
						this.groupImageList["background-size"] = `${
							this.image.width / this.image.height <
							this.now.width /
								Math.max(
									this.tagData.minHeight,
									this.now.height / 3
								)
								? (this.image.width / this.image.height) *
								  Math.max(
										this.tagData.minHeight,
										this.now.height / 3
								  )
								: this.now.width
						}px ${
							this.image.width / this.image.height <
							this.now.width /
								Math.max(
									this.tagData.minHeight,
									this.now.height / 3
								)
								? Math.max(
										this.tagData.minHeight,
										this.now.height / 3
								  )
								: (this.image.height / this.image.width) *
								  this.now.width
						}px`;
					}
					// groupImageBackgroundList
					{
						this.groupImageBackgroundList.width = `${this.now.width}px`;
						this.groupImageBackgroundList[
							"clip-path"
						] = `polygon(0% 0%, 100% ${10 *
							(1 -
								Math.min(
									this.now.width,
									this.tagData.maxWidth
								) /
									Math.max(
										this.now.width,
										this.tagData.maxWidth
									))}%, 100% 100%, 0 ${100 -
							10 *
								(1 -
									Math.min(
										this.now.width,
										this.tagData.maxWidth
									) /
										Math.max(
											this.now.width,
											this.tagData.maxWidth
										))}%)`;
						this.groupImageBackgroundList["background-size"] = `${
							this.now.width
						}px ${Math.max(
							this.tagData.minHeight,
							this.now.height / 3
						)}px`;
					}
					// groupInfoList
					{
						this.groupInfoList.width = `${this.now.width}px`;
						this.groupInfoList[
							"clip-path"
						] = `polygon(0% 0%, 100% ${10 *
							(1 -
								Math.min(
									this.now.width,
									this.tagData.maxWidth
								) /
									Math.max(
										this.now.width,
										this.tagData.maxWidth
									))}%, 100% 100%, 0 ${100 -
							10 *
								(1 -
									Math.min(
										this.now.width,
										this.tagData.maxWidth
									) /
										Math.max(
											this.now.width,
											this.tagData.maxWidth
										))}%)`;
					}
					// titleFontList
					{
						this.titleFontList.width = `${this.now.width}px`;
					}
				}
			}
		},
		"now.height": {
			immediate: true,
			handler(nowHeight, prevNowHeight) {
				if (Math.round(nowHeight) != Math.round(prevNowHeight)) {
					// tagContainerList
					{
						this.tagContainerList.height = `${this.now.height}px`;
					}
					// groupImageList
					{
						this.groupImageList.height = `${Math.max(
							this.tagData.minHeight,
							this.now.height / 3
						)}px`;
						this.groupImageList["background-size"] = `${
							this.image.width / this.image.height <
							this.now.width /
								Math.max(
									this.tagData.minHeight,
									this.now.height / 3
								)
								? (this.image.width / this.image.height) *
								  Math.max(
										this.tagData.minHeight,
										this.now.height / 3
								  )
								: this.now.width
						}px ${
							this.image.width / this.image.height <
							this.now.width /
								Math.max(
									this.tagData.minHeight,
									this.now.height / 3
								)
								? Math.max(
										this.tagData.minHeight,
										this.now.height / 3
								  )
								: (this.image.height / this.image.width) *
								  this.now.width
						}px`;
					}
					// groupImageBackgroundList
					{
						this.groupImageBackgroundList.height = `${Math.max(
							this.tagData.minHeight,
							this.now.height / 3
						)}px`;
						this.groupImageBackgroundList["background-size"] = `${
							this.now.width
						}px ${Math.max(
							this.tagData.minHeight,
							this.now.height / 3
						)}px`;
					}
					// groupInfoList
					{
						this.groupInfoList.height = `${this.now.height}px`;
						(this.groupInfoList[
							"background-color"
						] = `rgb(255,255,255,${(this.now.height -
							this.tagData.minHeight) /
							(this.tagData.maxHeight -
								this.tagData.minHeight)})`),
							(this.groupInfoList.filter = `blur(${100 *
								(1 -
									(this.now.height - this.tagData.minHeight) /
										(this.tagData.maxHeight -
											this.tagData
												.minHeight))}px) drop-shadow(0px 0px 2px rgba(0, 0, 0, 1))`);
					}
					// titleFontList
					{
						this.titleFontList.filter = `blur(${100 *
							((this.now.height - this.tagData.minHeight) /
								(this.tagData.maxHeight -
									this.tagData
										.minHeight))}px) drop-shadow(0px 0px 2px rgba(0, 0, 0, 1))`;
					}
				}
			}
		},
		image: {
			immediate: true,
			deep: true,
			handler() {
				// groupImageList
				{
					this.groupImageList["background-size"] = `${
						this.image.width / this.image.height <
						this.now.width /
							Math.max(
								this.tagData.minHeight,
								this.now.height / 3
							)
							? (this.image.width / this.image.height) *
							  Math.max(
									this.tagData.minHeight,
									this.now.height / 3
							  )
							: this.now.width
					}px ${
						this.image.width / this.image.height <
						this.now.width /
							Math.max(
								this.tagData.minHeight,
								this.now.height / 3
							)
							? Math.max(
									this.tagData.minHeight,
									this.now.height / 3
							  )
							: (this.image.height / this.image.width) *
							  this.now.width
					}px`;
				}
			}
		},
		titleFontOffser: {
			immediate: true,
			handler() {
				// titleFontList
				{
					this.titleFontList.top = `${this.titleFontOffser}px`;
				}
			}
		}
	},
	computed: {},
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