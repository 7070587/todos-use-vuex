<template>
	<div class="todo-container">
		<div class="card todo-wrap">
			<TodoHeader />
			<TodoList />
			<todo-footer />
		</div>
	</div>

</template>

<script>
	import TodoHeader from './components/TodoHeader'
	import TodoList from './components/TodoList'
	import TodoFooter from './components/TodoFooter'

	export default {
		name: "App",

		mounted() {
			// 發送命令給action：異步獲取保存的todos數據並顯示
			this.$store.dispatch('reqTodo');

		},


		components: {TodoHeader, TodoList, TodoFooter},


	}
</script>

<style>
	.todo-container {
		width: 600px;
		margin: 0 auto;
	}

	.todo-container .todo-wrap {
		padding: 10px;
		border: 1px solid #ddd;
		border-radius: 5px;
	}
</style>
