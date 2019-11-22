<template>
	<div :style="groupContainer">
		<div
			:style="titleButton"
			@mouseover="titleButtonUp=true"
			@mouseout="titleButtonUp=false"
			@click="changePage(3)"
		>首頁</div>
		<tagTrack
			:studentGroupJson="studentGroupJson"
			:tagData="{
					minWidth: 270,
					minHeight: 120,
					maxWidth: (this.width - this.titleButtonWidth)*0.9,
					maxHeight: this.height*0.9
				}"
			:init="{
					top:0,
					right:0,
					width:(this.width - this.titleButtonWidth),
					height: this.height,
					spacing:5
				}"
		></tagTrack>
	</div>
</template>

<script defer>
import { studentGroupJson } from "../../js/studentgroup";
import tagTrack from "../components/tagTrack.vue";

export default {
	props: {
		nowPage: Number,
		page: Number,
		changePage: Function,
		width: Number,
		height: Number
	},
	components: {
		tagTrack: tagTrack
	},
	data() {
		return {
			titleButtonWidth: 100,
			titleButtonUp: false,
			studentGroupJson: studentGroupJson
		};
	},
	computed: {
		groupContainer() {
			return {
				"z-index": 2,
				position: "absolute",
				"background-color": "rgb(44, 44, 44)",
				color: "rgb(255, 255, 255)",
				width: `${this.width}px`,
				height: `${this.height}px`,
				top: "0px",
				right: `${-1 * this.width * (this.page - 1)}px`
			};
		},
		titleButton() {
			return {
				"z-index": 10,
				position: "absolute",
				top: "0px",
				right: `${this.width - this.titleButtonWidth}px`,
				"font-size": "150%",
				"letter-spacing": `${this.height * 0.05}px`,
				"text-align": "center",
				"margin-left": "auto",
				"background-color": "rgb(255, 255, 255)",
				color: "rgb(44, 44, 44)",
				width: `${this.titleButtonWidth}px`,
				height: `${this.height}px`,
				"line-height": `${this.titleButtonWidth}px`,
				"-webkit-writing-mode": "vertical-lr",
				"writing-mode": "vertical-lr",

				"-webkit-touch-callout": "none",
				"-webkit-user-select": "none",
				"-khtml-user-select": "none",
				"-moz-user-select": "none",
				"-ms-user-select": "none",
				"user-select": "none"
			};
		},
		innerPage() {
			return {
				position: "absolute",
				top: "0px",
				right: "0px",
				width: `${this.width - this.titleButtonWidth}px`,
				height: `${this.height}px`
			};
		}
	},
	created() {
		this.mainLoop();
	},
	update() {
		console.log("update");
	},
	methods: {
		mainLoop() {
			requestAnimationFrame(this.mainLoop);
			{
				let targetWidth;
				if (this.titleButtonUp || this.page != this.nowPage) {
					targetWidth = this.width * 0.16 + 100;
				} else {
					targetWidth = this.width * 0.08 + 50;
				}
				this.titleButtonWidth =
					Math.round(
						(targetWidth * 0.06 + this.titleButtonWidth * 0.94) * 10
					) / 10;
			}
		}
	}
};
</script>

    