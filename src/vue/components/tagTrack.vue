<template>
	<div id="innerPage-1" :style="innerPage">
		<div :style="track">
			<tag
				v-for="(studentGroup) in studentGroupJson"
				v-bind:key="studentGroup.groupID"
				:studentGroup="studentGroup"
				:init="{
					top:heigthTable.slice(0,studentGroup.groupID-1).reduce((last, current) =>last+current,0),//(tagData.minHeight*1.01)*(studentGroup.groupID-1),
					right:init.width/2
				}"
				:tagData="{
					minWidth: tagData.minWidth,//*Math.max(1.5-Math.abs(1-(now.top+heigthTable.slice(0,studentGroup.groupID-1).reduce((last, current) =>last+current,0))*2/init.height),1),
					minHeight: tagData.minHeight,
					maxWidth: tagData.maxWidth,
					maxHeight: tagData.maxHeight
				}"
				:expandedGroupID="expandedGroupID"
				:writeExpandedGroupID="writeExpandedGroupID"
				:writeHeigthTable="writeHeigthTable"
			></tag>
		</div>
	</div>
</template>

<script defer>
// import { studentGroupJson } from "../../js/studentgroup";
import tag from "../components/tag.vue";

export default {
	props: {
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
			height: Number
		}
	},
	components: {
		tag: tag
	},
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
			heigthTable: new Array(this.studentGroupJson.length).fill(100),
			expandedGroupID: -1,
			touch: { x: null, y: null }
		};
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
				if (document.getElementById("innerPage-1")) {
					document
						.getElementById("innerPage-1")
						.addEventListener("DOMMouseScroll", event => {
							this.slide(event.wheelDeltaY);
						});
					document.getElementById(
						"innerPage-1"
					).onmousewheel = event => {
						event = event || window.event;
						this.slide(event.wheelDeltaY);
					};
					document.getElementById("innerPage-1").addEventListener(
						"touchmove",
						event => {
							// event.preventDefault();
							if (this.touch.y !== null) {
								this.slide(
									(event.touches[0].screenY - this.touch.y) *
										0.2
								);
							}
							this.touch.x = event.touches[0].screenX;
							this.touch.y = event.touches[0].screenY;
						},
						false
					);
					document.getElementById("innerPage-1").addEventListener(
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
					this.target.top =
						this.target.top * 0.8 + (this.init.height / 2) * 0.2;
				} else if (
					this.target.top <
					-1 *
						((this.studentGroupJson.length - 1) *
							this.tagData.minHeight +
							(this.expandedGroupID == -1
								? this.tagData.minHeight
								: this.tagData.maxHeight)) +
						this.init.height / 2
				) {
					this.target.top =
						this.target.top * 0.8 +
						(-1 *
							this.studentGroupJson.length *
							this.tagData.minHeight +
							this.init.height / 2) *
							0.2;
				}
			}
			{
				if (this.now.top != this.target.top) {
					this.now.top =
						this.target.top * 0.06 + this.now.top * (1 - 0.06);
				}
			}
		},
		slide(deltaY) {
			deltaY = Number.isNaN(deltaY) ? 0 : deltaY;
			this.target.top += deltaY;
		},
		writeHeigthTable(id, height) {
			this.heigthTable[id - 1] = height;
		},
		writeExpandedGroupID(id) {
			// console.log(this.expandedGroupID);
			this.expandedGroupID = id;
			if (id != -1) {
				this.target.top =
					-1 * (id - 1) * this.tagData.minHeight +
					(this.init.height - this.tagData.maxHeight) / 2;
			}
		}
	}
};
</script>

<style>
body {
	overflow-y: hidden;
}
</style>