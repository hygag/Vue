

<template>
    <div id="app">  
      <!-- 实现子向父传数据 ： 以下俩种方式，都需要在父组件进行方法的创建-->

      <!-- 这种是通过向子组件传入函数让子组件内的props接收然后进行回调返回结果 -->
      <School :getSchoolName="getSchoolName"/>

      <!-- 这种是通过自定义事件，是在子组件进行$emit(事件名，参数)进行向父组件传递参数来得到结果 -->
      <!-- 组件绑定的事件默认都是自定义事件，需要在子组件内进行发送，如果想绑定原生的js事件，需要加.native -->
      <Student @getStudent="getStudentName" @click.native="show"/>
      <hr>
<!-- 
      上面的自定义事件跟下面的又不太一样
      虽然说都是通过子组件进行emit发送事件到父组件，但是下面的更加灵活
      是通过ref来获取到Student这个标签，进行对标签添加事件 
      this.$refs.Student.$on('事件名'，方法)
      下面可以设置延时器之类的，满足这种需求 -->
 <!-- <h1>ref</h1>
      <Student ref="Student"/> -->
    </div>

</template>

<script>



//导入HelloWorld跟Student
import School from './components/School.vue'
import Student from './components/Student.vue'

export default{
  name: 'App',
  

  components: {
    Student,
    School
  },
  
  methods:{
    getSchoolName(name){
        console.log(name)
    },

    // 单一参数
    getStudentName(name){
        console.log(name)
    },
    //多个参数
    // getStudentName(name,...a){
    //     console.log(name)
    // }
    show(){
      alert(123)
    }
  },
  mounted(){
    // 通过钩子进行对Student标签的获取进行绑定事件
    this.$refs.Student.$on('getStudent',this.getStudentName)
  }
}

</script>


