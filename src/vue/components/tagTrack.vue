<template>
	<div :id="`innerPage-${id}`" :style="innerPage">
		<div :style="track">
			<tag
				v-for="(studentGroup) in studentGroupJson"
				v-bind:key="studentGroup.groupID"
				:studentGroup="studentGroup"
				:init="{
					top:topTable[studentGroup.groupID-1],
					right:init.width/2
				}"
				:tagData="{
					minWidth: tagData.minWidth,
					minHeight: tagData.minHeight,
					maxWidth: tagData.maxWidth,
					maxHeight: tagData.maxHeight
				}"
				:expandedGroupID="expandedGroupID"
				:writeExpandedGroupID="writeExpandedGroupID"
				:writeExpandedGroupHeigth="writeExpandedGroupHeigth"
			></tag>
		</div>
	</div>
</template>

<script defer>
// import { studentGroupJson } from "../../js/studentgroup";
import tag from "../components/tag.vue";

export default {
	props: {
		id: Number,
		studentGroupJson: {
			[Number]: {
				groupID: Number, //專題編號
				projectName: String, //專題名稱
				imgSrc: String, //專題截圖
				videoSrc: String, //專題影片
				fileSrc: String, //檔案連結
				fromLab: String, //所屬實驗室
				groupStudent: [{ studentID: String, studentName: String }]
			}
		},
		tagData: {
			minWidth: Number,
			minHeight: Number,
			maxWidth: Number,
			maxHeight: Number
		},
		init: {
			top: Number,
			right: Number,
			width: Number,
			height: Number,
			spacing: Number
		}
	},
	components: {
		tag: tag
	},
	watch: {},
	data() {
		// console.log(this.studentGroupJson);
		return {
			// studentGroupJson: studentGroupJson,
			// tagData: {
			// 	minWidth: 250,
			// 	minHeight: 100,
			// 	maxWidth: 1200,
			// 	maxHeight: 900
			// },
			// init: {
			// 	top: 0,
			// 	right: document.body.offsetWidth / 2
			// },
			now: {
				top: 0,
				right: 0
			},
			target: {
				top: 0,
				right: 0
			},
			topTable: new Array(this.studentGroupJson.length - 1)
				.fill(this.tagData.minHeight)
				.reduce(
					(prev, curr, idx) => {
						prev[idx + 1] = prev[idx] + curr + this.init.spacing;
						return prev;
					},
					[0]
				),
			expandedGroupID: -1,
			expandedGroupHeight: this.tagData.minHeight,
			touch: { x: null, y: null }
		};
	},
	watch: {
		expandedGroupHeight: {
			handler(expandedGroupHeight, prevExpandedGroupHeight) {
				// watch it
				if (expandedGroupHeight != prevExpandedGroupHeight) {
					// console.log(1);
					let topTable = [0];
					for (let i = 1; i < this.studentGroupJson.length; i++) {
						if (this.expandedGroupID == i) {
							topTable[i] =
								topTable[i - 1] +
								this.expandedGroupHeight +
								this.init.spacing;
						} else {
							topTable[i] =
								topTable[i - 1] +
								this.tagData.minHeight +
								this.init.spacing;
						}
					}
					this.topTable = topTable;
				}
			}
		}
	},
	computed: {
		innerPage() {
			return {
				position: "absolute",
				top: `${this.init.top}px`,
				right: `${this.init.right}px`,
				width: `${this.init.width}px`,
				height: `${this.init.height}px`
			};
		},
		track() {
			return {
				position: "absolute",
				top: `${this.now.top}px`,
				right: `${this.now.right}px`
			};
		}
	},
	created() {
		this.mainLoop();
		let bindWheel = () => {
			window.setTimeout(() => {
				if (document.getElementById(`innerPage-${this.id}`)) {
					document
						.getElementById(`innerPage-${this.id}`)
						.addEventListener("DOMMouseScroll", event => {
							this.slide(event.wheelDeltaY);
						});
					document.getElementById(
						`innerPage-${this.id}`
					).onmousewheel = event => {
						event = event || window.event;
						this.slide(event.wheelDeltaY);
					};
					document
						.getElementById(`innerPage-${this.id}`)
						.addEventListener(
							"touchmove",
							event => {
								// event.preventDefault();
								if (this.touch.y !== null) {
									this.slide(
										(event.touches[0].screenY -
											this.touch.y) *
											2
									);
								}
								this.touch.x = event.touches[0].screenX;
								this.touch.y = event.touches[0].screenY;
							},
							false
						);
					document
						.getElementById(`innerPage-${this.id}`)
						.addEventListener(
							"touchstart",
							event => {
								this.touch.x = event.touches[0].screenX;
								this.touch.y = event.touches[0].screenY;
							},
							false
						);
				} else {
					bindWheel();
				}
			}, 100);
		};
		bindWheel();
	},
	update() {
		console.log("update");
	},
	methods: {
		mainLoop() {
			requestAnimationFrame(this.mainLoop);
			{
				if (this.target.top > this.init.height / 2) {
					this.target.top = Math.round(
						this.target.top * 0.8 + (this.init.height / 2) * 0.2
					);
				} else if (
					this.target.top <
					-1 *
						((this.studentGroupJson.length - 1) *
							this.tagData.minHeight +
							(this.expandedGroupID == -1
								? this.tagData.minHeight
								: this.expandedGroupHeight)) +
						this.init.height / 2
				) {
					this.target.top = Math.round(
						this.target.top * 0.8 +
							(-1 *
								((this.studentGroupJson.length - 1) *
									this.tagData.minHeight +
									(this.expandedGroupID == -1
										? this.tagData.minHeight
										: this.expandedGroupHeight)) +
								this.init.height / 2) *
								0.2
					);
				}
			}
			{
				if (this.now.top != this.target.top) {
					this.now.top = Math.round(
						this.target.top * 0.06 + this.now.top * (1 - 0.06)
					);
				}
			}
		},
		slide(deltaY) {
			deltaY = Number.isNaN(deltaY) ? 0 : deltaY;
			this.target.top += deltaY;
		},
		writeExpandedGroupID(id) {
			this.expandedGroupID = id;
			if (id != -1) {
				this.target.top = Math.round(
					-1 * (id - 1) * this.tagData.minHeight +
						(this.init.height - this.tagData.maxHeight) / 2
				);
			}
		},
		writeExpandedGroupHeigth(height) {
			this.expandedGroupHeight = Math.round(height);
		}
	}
};
</script>

<style>
body {
	overflow-y: hidden;
}
</style>