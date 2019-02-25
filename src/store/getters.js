/*
基於state的getter計算屬性的狀態對象
 */

export default {
	// 總數量
	totalCount(state) {
		return state.todos.length;
	},

	// 完成的數量
	completeCount(state) {
		return state.todos.reduce((preTotal, todo) => {
			return preTotal + (todo.complete ? 1 : 0)
		}, 0);
	},

	// 判斷是否全部選中
	isAllSelect(state, getters) {
		return getters.totalCount === getters.completeCount && getters.totalCount > 0;
		// return getters.totalCount === getters.completeCount && state.todos.length > 0
		// 以上兩個寫法都可以
	}
}
