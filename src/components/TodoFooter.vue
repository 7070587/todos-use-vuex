<template>
	<div class="todo-footer">
		<label>
			<input type="checkbox" v-model="isAllCheck"/>
		</label>
		<span>
          <span>已完成 {{ completeCount }}</span> / 全部 {{ totalCount }}
        </span>
		<button class="btn btn-danger" v-show="completeCount"
		        @click="clearAllComplete">清除已完成任务
		</button>
	</div>
</template>

<script>
	import {mapGetters, mapActions} from 'vuex'

	export default {
		name: "TodoFooter",
		computed: {

			...mapGetters(['totalCount', 'completeCount']),

			isAllCheck: {
				// 讀isAllCheck的值，為true還是false
				get() {
					return this.$store.getters.isAllSelect
				},

				// 監視下面勾選後，上面選項的變化
				set(value) {
					// value是當前checkbox最新的值，是true或false
					this.$store.dispatch('selectAllTodos', value);
				},
			}
		},

		methods: {
			...mapActions(['clearAllComplete']),
		},


	}
</script>

<style>
	.todo-footer {
		height: 40px;
		line-height: 40px;
		padding-left: 6px;
		margin-top: 20px;
		margin-bottom: 10px;
	}

	.todo-footer label {
		display: inline-block;
		margin-right: 20px;
		cursor: pointer;
	}

	.todo-footer label input {
		position: relative;
		top: -1px;
		vertical-align: middle;
		margin-right: 5px;
	}

	.todo-footer button {
		float: right;
		margin-top: 5px;
	}

</style>
