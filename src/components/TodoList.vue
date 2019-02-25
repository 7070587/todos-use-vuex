<template>
	<div>
		<ul class="list-group mt-2">
			<TodoItem v-for="(todo, index) in todos" :key="index" :todo="todo" :index="index"
			          />
		</ul>

	</div>

</template>

<script>
	import TodoItem from './TodoItem'
	import {mapState, } from 'vuex'

	export default {
		name: "TodoList",

		// 要讀vuex的管理狀態或計算屬性，都用computed()
		computed: {
			// 必須和state裡面data的數據名字相同
			...mapState(['todos'])
		},


		methods: {},

		components: {TodoItem},


	}
</script>

<style>

</style>
