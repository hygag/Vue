<template>
  <div>
      <h1>School</h1>
      <button @click="getSchool">School</button>
  </div>
</template>

<script>
export default {
    name:'School',
    props:['getSchoolName'],
    data(){
        return{
            name:"School"
        }
    },
    methods:{
        getSchool(){
            this.getSchoolName(this.name)
        }
    }
}
</script>



