<template>
	<li @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)"
	    :style="{background: bgColor}" class="list-group-item">
		<label>
			<input type="checkbox" v-model="todo.complete"/>
			<span> {{ todo.title }}</span>
		</label>
		<button class="btn btn-danger btn-sm float-right"
		        @click="deleteItem" v-show="isShow">删除</button>
	</li>

</template>

<script>
	export default {
		name: "TodoItem",
		data() {
			return {
				bgColor: 'white', // 默認的背景顏色
				isShow: false,    // 標識按鈕是否默認顯示
			}
		},
		props: {
			todo: Object,
			index: Number,
		},

		methods: {
			handleEnter(isEnter) {
				if (isEnter) {
					this.bgColor = '#ddd';
					this.isShow = true;
				} else {
					this.bgColor = '#fff';
					this.isShow = false;
				}
			},
			deleteItem() {
				if (window.confirm(`確認刪除${this.todo.title}嘛？`)) {
					this.$store.dispatch('deleteTodo', this.index);
				}
			}
		},

		components: {},


	}
</script>

<style>

</style>
