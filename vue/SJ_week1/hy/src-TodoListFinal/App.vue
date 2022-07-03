

<template>
 
   <div id="root">
  <div class="todo-container">
    
    <div class="todo-wrap">
      <!-- 自定义事件 -->
      <Add @receive="receive"/>
      <!-- 传入数据 -->
      <MyList :todos="todos"/>
      <!-- <MyFooter :completed="completed" :total="total"/> -->
      <MyFooter 
      :todos="todos"
      @checkAllTodos="checkAllTodos"
      @clearAlltodo="clearAlltodo"/>
    </div>
  </div>
</div>

</template>

<script>

import Add from './components/Add.vue'
import MyList from './components/MyList.vue'
import PubSub from 'pubsub-js'
import MyFooter from './components/MyFooter.vue'

export default{
  name: 'App',
  
  components: {
      Add,MyFooter,MyList
  },
  // 将数据拿出来，放到App.vue方便Add.vue跟MyList.vue进行交互
  data(){
            return {
                todos:JSON.parse(localStorage.getItem('todos')) || []
            }
  },
     
  methods:{
    
    checkAllTodos(done){
      this.todos.forEach((todo)=>{
        todo.done = done
      })
    },

    // 在App创建了个receive方法，并且将这个方法传入Add.vue里去
    receive(todo){
      // console.log(x)
      this.todos.unshift(todo)
    },

    // 勾选
    checkTodo(id){
      // console.log(11)
      this.todos.forEach((todo)=>{
        if(todo.id === id) todo.done = !todo.done
      })
    },

    //删除
    delItem(_,id){  
    // 用一个下划线占一下订阅名，默认第一个参数为订阅名
    // console.log(_)
    this.todos.pop(id)
    
        // filter返回值为假就删除，为真则留着
        // this.todos = this.todos.filter(todo=>todo.id !== id)
    },
    
    // 清除已选择了的
    clearAlltodo(){
      // console.log(12)
      this.todos = this.todos.filter((todo)=>{
        return !todo.done
    })
    },
    updataTodo(id,value){
      // console.log(11)
      this.todos.forEach((todo)=>{
        if(todo.id === id) todo.title= value
      })
    },
  },
 
  watch:{
    
    todos:{
      //深度监视，这样对于todos内部数据进行操作时也会触发这个监视器
      deep:true,
      handler(value){
        // Window.localStorage & Window.sessionStorage 都是一种Webstorage存储方式，类似于存入文件
        // 前者关闭-窗口时也不会丢失数据，后者关闭窗口则数据丢失，具体情况具体用
        // 常用的有: (语法类似于map key跟value，对于对象跟数组的传入时需要考虑 JSON.parse() & JSON.stringify() 转化)
        //          1.xxxxStorage.setItem
        //          2.xxxxStorage.getItem
        //          3.xxxxStorage.removeItem ： 删除单个
        //          4.xxxxStorage.clear      ： 删除全部

        localStorage.setItem("todos",JSON.stringify(value))
      }
    }
  },
  mounted(){
    this.$bus.$on('checkTodo',this.checkTodo),
    this.$bus.$on('updataTodo',this.updataTodo)
    // this.$bus.$on('delItem',this.delItem)
    this.pid = PubSub.subscribe('delItem',this.delItem)

    // 防止刷新编辑框还在
    this.todos.forEach((todo)=>todo.isEdit = false)
  },

  // 解绑操作
  beforeDestroy(){
    this.$bus.$off('checkTodo'),
    this.$bus.$off('updataTodo')
    // this.$bus.$off('delItem')
    PubSub.unsubscribe(this.pid)
  }
  
  }
</script>

<style>
  /*base*/
    body {
      background: #fff;
    }

    .btn {
      display: inline-block;
      padding: 4px 12px;
      margin-bottom: 0;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      vertical-align: middle;
      cursor: pointer;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
      border-radius: 4px;
    }

    .btn-danger {
      color: #fff;
      background-color: #da4f49;
      border: 1px solid #bd362f;
    }
    .btn-edit {
      color: #fff;
      background-color: #4c4aca;
      border: 1px solid #faf1f0;
    }
    .btn-danger:hover {
      color: #fff;
      background-color: #bd362f;
    }

    .btn:focus {
      outline: none;
    }

    .todo-container {
      width: 600px;
      margin: 0 auto;
    }
    .todo-container .todo-wrap {
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 5px;
    }

    

    
   
   

</style>
