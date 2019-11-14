<template>
	<div :style="track">
		<tag
			v-for="(studentGroup) in studentGroupJson"
			v-bind:key="studentGroup.groupID"
			:studentGroup="studentGroup"
			:init="{
				top:heigthTable.slice(studentGroup.groupID).reduce((last, current) =>last+current,0),//(tagData.minHeight*1.01)*(studentGroup.groupID-1),
				right:0
			}"
			:tagData="tagData"
			:writeHeigthTable="writeHeigthTable"
		></tag>
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
			right: Number
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
			heigthTable: new Array(this.studentGroupJson.length).fill(100)
		};
	},
	computed: {
		track() {
			return {
				position: "absolute",
				top: `${this.init.top + this.now.top}px`,
				right: `${this.init.right + this.now.right}px`
			};
		}
	},
	created() {
		this.mainLoop();
		document.body.addEventListener("DOMMouseScroll", event => {
			this.wheel(event);
		});
		document.body.onmousewheel = event => {
			event = event || window.event;
			this.wheel(event);
		};
	},
	update() {
		console.log("update");
	},
	methods: {
		mainLoop() {
			requestAnimationFrame(this.mainLoop);
			{
				if (this.target.top > document.body.offsetHeight / 2) {
					this.target.top =
						this.target.top * 0.8 +
						(document.body.offsetHeight / 2) * 0.2;
				} else if (
					this.target.top <
					-1 * this.studentGroupJson.length * 95 +
						document.body.offsetHeight / 2
				) {
					this.target.top =
						this.target.top * 0.8 +
						(-1 * this.studentGroupJson.length * 95 +
							document.body.offsetHeight / 2) *
							0.2;
				}
				if (this.now.top != this.target.top) {
					this.now.top =
						this.target.top * 0.06 + this.now.top * (1 - 0.06);
				}
			}
		},
		wheel(event) {
			this.target.top +=
				(event.wheelDeltaY / Math.abs(event.wheelDeltaY)) *
				this.tagData.minHeight;
		},
		writeHeigthTable(id, height) {
			this.heigthTable[id] = height;
		}
	}
};
</script>

<style>
body {
	overflow-y: hidden;
}
</style>