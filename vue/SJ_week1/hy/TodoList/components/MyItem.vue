
<template>
    <li>
          <label>
            <input type="checkbox" :checked = "t.done" @change="stateChange(t.id)"/>
            <span>{{t.title}}</span>
          </label>
          <button class="btn btn-danger" @click="d(t.id)" >删除</button>
        </li>
</template>

<script>

    export default{
        name:'MyItem',
        props:['t','checkTodo','delItem'],
        // mounted(){
        //     console.log(this.t)
        // },
        
        methods:{
            stateChange(id){
                // 由App传到list在传到item逐层传递然后再放回回去，到达父与子的沟通
                this.checkTodo(id)
            },
            d(id){
              // console.log(this)
              if(confirm("确认删除吗") === true){
                this.delItem(id)
              }
            }
            
        },
        
    }
    
</script>


<style scoped>
 /*item*/
    li {
      list-style: none;
      height: 36px;
      line-height: 36px;
      padding: 0 5px;
      border-bottom: 1px solid #ddd;
    }

    li label {
      float: left;
      cursor: pointer;
    }

    li label li input {
      vertical-align: middle;
      margin-right: 6px;
      position: relative;
      top: -1px;
    }

    li button {
      float: right;
      display: none;
      margin-top: 3px;
    }
  

    li:before {
      content: initial;
    }

    li:last-child {
      border-bottom: none;
    }
    li:hover{
      background-color: #ddd;
    }

    li:hover button{
      display: block;
    }
</style>