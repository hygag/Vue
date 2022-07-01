
<template>
  <div>
      <h2>学生表</h2>
      <li v-for="index in person" :key="index.id">姓名：{{index.name}}  年龄: {{index.age}}</li>
  </div>
</template>

<script>
export default {
    name:'Student',
    data(){
        return{
           person:[
               {id:'01', name:'zx', age:'18'},
               {id:'02', name:'za', age:'13'},
               {id:'03', name:'zg', age:'14'}
           ]
        }
    }
}
</script>

