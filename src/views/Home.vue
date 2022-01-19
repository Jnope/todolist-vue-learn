<template>
  <div>
    <nav-header @add="add"></nav-header>
    <nav-main :list="list" @del="del"></nav-main>
    <nav-footer :list="list" @clear="clear"></nav-footer>
  </div>
</template>

<script>
//@表示src文件夹，.vue后缀可省
import navHeader from "@/components/navHeader/navHeader";
import navMain from "@/components/navMain/navMain";
import navFooter from "@/components/navFooter/navFooter";
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Home",
  components: {
    navHeader,
    navMain,
    navFooter,
  },
  setup() {
    let store = useStore();
    let list = computed(() => {
      return store.state.list;
    });
    let value = ref("");
    let add = (val) => {
      value.value = val;
      let flag = true;
      //判断任务是否重复
      list.value.map((item) => {
        if (item.title === value.value) {
          flag = false;
          alert("任务已存在");
        }
      });
      //添加任务
      if (flag) {
        store.commit("addTodo", {
          title: value.value,
          complete: false,
        });
      }
      //console.log(val)
    };
    //删除事件
    let del = (val) => {
      //console.log(val)
      store.commit("delTodo", val)
    };
    //清除已完成
    let clear = (val)=>{
      store.commit("clear", val)
    }
    return {
      add,
      list,
      del,
      clear
    };
  },
});
</script>

<style scoped lang='scss'>
</style>