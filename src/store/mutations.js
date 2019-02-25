/*
由action觸發mutation，直接更新狀態的方法對象
 */

import {ADD_TODO, DELETE_TODO, SELECT_ADD_TODO, CLEAR_ADD_COMPLETED} from './mutation-types'

export default {
	[ADD_TODO](state, {todo}) {
		state.todos.unshift(todo);
	},

	[DELETE_TODO](state, {index}) {
		state.todos.splice(index, 1);
	},

	[SELECT_ADD_TODO](state, {check}) {
		state.todos.forEach(todo => todo.complete = check);
	},

	[CLEAR_ADD_COMPLETED](state) {
		if ((window.confirm(`確認刪除全部嘛？`)))
		state.todos = state.todos.filter(todo => !todo.complete);
	}
}
