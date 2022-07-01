
<template>
    <ul class="todo-main">
        <MyItem v-for = "todo in todos" 
        :key="todo.id" 
        :t="todo" 
        :checkTodo="checkTodo"
        :delItem="delItem"/>
    </ul>
</template>

<script>
import MyItem from './MyItem.vue'
    export default{
        name:'MyList',
        components:{
            MyItem
        },

       props:['todos','checkTodo','delItem']

    }

</script>


<style scoped>
/*main*/
    .todo-main {
      margin-left: 0px;
      border: 1px solid #ddd;
      border-radius: 2px;
      padding: 0px;
    }

    .todo-empty {
      height: 40px;
      line-height: 40px;
      border: 1px solid #ddd;
      border-radius: 2px;
      padding-left: 5px;
      margin-top: 10px;
    }
</style>