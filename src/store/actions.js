/*
接收組件通知觸發mutation調用，間接更新狀態的方法對象
 */

import {ADD_TODO, DELETE_TODO, SELECT_ADD_TODO, CLEAR_ADD_COMPLETED} from './mutation-types'

export default {
	addTodo({commit}, todo) {
		// 提交對mutation的請求
		commit(ADD_TODO, {todo});
	},

	deleteTodo({commit}, index) {
		// 提交對mutation的請求
		commit(DELETE_TODO, {index});
	},

	selectAllTodos({commit}, check) {
		commit(SELECT_ADD_TODO, {check});
	},
	clearAllComplete({commit}) {
		commit(CLEAR_ADD_COMPLETED);
	},

	// 異步獲取todos並更新狀態
	reqTodo({commit}) {
		// 模擬
		setTimeout(() => {
			// 讀取數據

		}, 1500)
	},
}
