<template>
	<div :style="gradient"></div>
</template>

<script defer>
export default {
	props: {
		page: Number,
		width: Number,
		height: Number,
		color: { left: String, right: String }
	},
	data() {
		return {
			// page: 2,
			// width: 100,
			// height: 100,
			// color: { left: "rgb(44,44,44)", right: "rgb(255,255,255)" }
		};
	},
	computed: {
		gradient() {
			return {
				"z-index": 2,
				position: "absolute",
				width: `${this.width}px`,
				height: `${this.height}px`,
				top: "0px",
				right: `${-1 * this.width * (this.page - 1)}px`,

				background: `-webkit-linear-gradient(left,${this.color.left},${this.color.right})`,
				background: `-o-linear-gradient(right,${this.color.left},${this.color.right})`,
				background: `-moz-linear-gradient(right,${this.color.left},${this.color.right})`,
				background: `linear-gradient(to right,${this.color.left},${this.color.right})`
			};
		}
	},
	created() {},
	update() {
		console.log("update");
	},
	methods: {}
};
</script>

    