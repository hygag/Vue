
<template>
    <li>
          <label>
            <input type="checkbox" :checked = "t.done" @change="stateChange(t.id)"/>
            <span  v-show="!t.isEdit">{{t.title}}</span>
            <!-- @blur：失去焦点 -->
            <input v-show="t.isEdit" type="text" :value="t.title" @blur="updata($event,t)" ref="inputEdit"> 
          </label>
         
          <button class="btn btn-danger" @click="d(t.id)" >删除</button>
          <button v-show="!t.isEdit" class="btn btn-edit"  @click="Edit($event,t)">编辑</button>
        </li>
</template>

<script>
import PubSub from 'pubsub-js'
    export default{
        name:'MyItem',
        props:['t'],
        // mounted(){
        //     console.log(this.t)
        // },
        
        methods:{
            stateChange(id){
                this.$bus.$emit('checkTodo',id)
            },
            d(id){
              // console.log(this)
              if(confirm("确认删除吗") === true){
                // this.$bus.$emit('delItem',id)
                PubSub.publish('delItem',id)
              }
            },
            Edit(e,todo){
              if(todo.hasOwnProperty('isEdit')){
                todo.isEdit = true
              }else{
                this.$set(todo,'isEdit',true)
              }

              // 由于是立马往下执行，所以下面的input在编译时不存在，无法解决问题
              
              // 方法一：定时器
              // setTimeout(() => {
              //   this.$refs.inputEdit.focus()
              // }, 200);

              // nextTick所绑定的回调，会在模板解析后执行
              this.$nextTick(()=>{
                this.$refs.inputEdit.focus()
              })

              console.log(todo)
            },
            updata(e,todo){
              todo.isEdit = false
              if(!e.target.value.trim()) return alert("不能输入空")
              this.$bus.$emit('updataTodo',todo.id,e.target.value)
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