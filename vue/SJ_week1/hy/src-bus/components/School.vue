<template>
  <div>
      <h1>School</h1>   
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
    // 谁收谁绑定，谁发谁emit
    mounted(){
        this.$bus.$on('hello',(data)=>{
            console.log(data)
        })
    },
    beforeDestroy(){
        this.$bus.$off('hello')
    }
  
}
</script>



