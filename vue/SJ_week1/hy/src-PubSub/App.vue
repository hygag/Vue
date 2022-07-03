

<template>
    <div id="app">  
      <Student/>
      <School/>
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
}

</script>


