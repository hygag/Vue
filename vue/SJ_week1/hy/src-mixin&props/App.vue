

<template>
  <div id="app">  
    <!-- <HelloWorld/> -->
    <h1 ref="aaaa">466</h1>
    <button @click = "showRef">4152</button>
    
    <!-- 
      1.props:自定义传参数，这些name，sex，age将在Student.vue里进行接受
      
      2.ref：相当于id，class之类，一种标识，用来获取表签
        ---》this.$refs.refName
     -->

     <!-- 以下三个用来测试默认值 -->
    <Student name = "张三" sex = "男" :age = "18" ref="zs"/>
    <Student name = "lisi" sex = "男" />
    <Student name = "王五" :age = '20'/>
  </div>

</template>

<script>

//引出来
import {a,b} from './mixin'

//导入HelloWorld跟Student
import HelloWorld from './components/School.vue'
import Student from './components/Student.vue'

export default{
  name: 'App',
  

  components: {
    Student,
    School
  },
  
  methods:{
    showRef(){
      console.log(this)
    }
  },

  //局部混合
  mixins:[a,b]
  
}

</script>


