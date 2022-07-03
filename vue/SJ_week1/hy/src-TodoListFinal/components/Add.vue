
<template>
     <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter = "add" v-model="title"/>
      </div>
</template>

<script>
    import {nanoid} from 'nanoid'
    export default{
        name:'App',
        // props:['receive'],
        data(){
            return{
                title:''
            }
        },
        methods:{
            add(e){
                
                if(!this.title.trim()) return alert("不能输入空！！");

                const todoObj = {id:nanoid(),title:e.target.value,done:false,isEdit:false}
                // console.log(e.target)
                console.log(this)

                // 调用receive方法,相当于调用App里的receive方法，实现交互，对于子往父传参数的状态
                this.$emit('receive',todoObj)
                this.title = ''
            }
        }
    }

</script>


<style scoped>
/*header*/
    .todo-header input {
      width: 560px;
      height: 28px;
      font-size: 14px;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 4px 7px;
    }

    .todo-header input:focus {
      outline: none;
      border-color: rgba(82, 168, 236, 0.8);
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
    }
</style>