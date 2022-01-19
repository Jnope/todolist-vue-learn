<template>
    <div>
        <input placeholder="请输入任务名称" v-model="value" @keydown.enter="enter"/>
    </div>
</template>

<script>
    import { defineComponent, ref} from "vue";
    export default defineComponent({
        name: "navHeader",
        setup(props, ctx){
            //监听输入值value
            let value = ref("")
            //按回车确认发送信息
            let enter = () => {
                //传递输入值给父组件
                ctx.emit("add", value.value),
                value.value = ""
            }
            return{
                value,
                enter
            }
        }
    })
</script>

<style scoped lang='scss'>
input{
    margin-bottom: 10px;
}
</style>