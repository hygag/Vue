

<template>
<div>
    <h1>Student</h1>
    <button @click="getSchool">得到Student</button> 
</div>
    
</template>

<script>
  
    export default {
        name:'Student',
        data(){
            return {
               name:"S11"
            }
        },
        methods:{
           getSchool(){
            console.log(this.$bus)
            this.$bus.$emit('hello',this.name)
           }
        }
    }

</script>