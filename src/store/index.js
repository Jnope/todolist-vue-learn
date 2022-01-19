import { createStore } from 'vuex'

export default createStore({
  //定义所需要的状态
  state: {
    list: [{title: "示例", complete: false}]
  },
  //用于同步修改state，不可用于异步,内都为方法
  mutations: {
    addTodo(state, data){//添加事件
      //data为添加的数据
      state.list.push(data)
    },
    delTodo(state, data){//删除事件
      //data为下标
      state.list.splice(data, 1)
    },
    clear(state, data){//清除已完成事件
      //data为过滤后数组
      state.list = data
    }
  },
  //异步提交mutation
  actions: {
  },
  //
  modules: {
  }
})
