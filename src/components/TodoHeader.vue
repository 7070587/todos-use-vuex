<template>
	<div class="form-group">
		<input class="form-control" type="text" placeholder="請輸入你的任務名稱，按enter確認"
		       @keyup.enter="addItem" v-model="title"/>
	</div>


</template>

<script>
	export default {
		name: "TodoHeader",
		data() {
			return {
				title: '',    // 組件內部使用，不存在共享的問題 --> 不需要使用vuex管理
			}
		},

		methods: {
			addItem() {
				const title = this.title.trim();
				// 1.檢查輸入的合法性
				if (!title) return alert('請輸入內容');

				// 2.根據輸入，封裝成todo對象
				const todo = {
					title,
					complete: false
				};

				// 3.把todo添加到todos
				// 想辦法通知vuex更新狀態
				this.$store.dispatch('addTodo', todo);

				// 4.清空輸入框
				this.title = '';
			},
		},

		components: {},

	}
</script>

<style>


</style>
