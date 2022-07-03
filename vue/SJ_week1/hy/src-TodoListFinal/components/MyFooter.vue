
<template>
    <div class="todo-footer">
        <label>
          <input type="checkbox" :checked = "isAll" @change="allChange"/>
        </label>
        <span>
          <span>已完成{{doneTotal}}</span> / 全部{{total}}

          <!-- <span>已完成{{completed()}}</span> / 全部{{total()}} -->
        </span>
        <button class="btn btn-danger" v-show="total" @click="clearDone">清除已完成任务</button>
      </div>
</template> 

<script>

    export default{
        name:'MyFooter',
        // 注释了的是我的方法
        // props:['completed','total']
        props:['todos'],

        // 计算属性
        computed:{
          // 判断是否全选
          isAll:{
            get(){
              return this.doneTotal === this.total && this.total > 0
            },
            set(value){
              this.$emit('checkAllTodos',value)
            }
          },

          // 计算总数
          total(){
            // console.log(this.todos.length)
            return this.todos.length
          },

          // 计算完成了的数
          doneTotal(){
            // reduce(function(参数，数组当前值),初始参数)函数调用次数为数组长度
            // pre每次为上一次的返回值，首先为0，调用一次然后返回0+1为第二次
            // 条件筛选
            console.log(this.todos.reduce((pre,todo)=>{
              return pre + (todo.done?1:0)
            },0))
            return this.todos.reduce((pre,todo)=>{
              return pre + (todo.done?1:0)
            },0)
            // 或者用筛选器
            // return this.todos.filter((todo)=>todo.done).length
          }
        },
        methods:{
          // 全选or全不选
          allChange(e){
            console.log(e.target.checked)
            this.$emit('checkAllTodos',e.target.checked)
          },
          // 清除完成了的
          clearDone(){
            if(confirm("是否清除")){
              this.$emit('clearAlltodo')
            }
          }
        }
    }
   
</script>


<style scoped>
 /*footer*/
    .todo-footer {
      height: 40px;
      line-height: 40px;
      padding-left: 6px;
      margin-top: 5px;
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