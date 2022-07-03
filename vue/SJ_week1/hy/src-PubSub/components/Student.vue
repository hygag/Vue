

<template>
<div>
    <h1>Student</h1>
    <button @click="getSchool">得到Student</button> 
</div>
    
</template>

<script>
// subscribe：订阅---->订阅名跟函数
// publish：发布------>发布名跟参数
import PubSub from 'pubsub-js'
    export default {
        name:'Student',
        data(){
            return {
               name:"S11"
            }
        },
        methods:{
           getSchool(){
            // console.log(this.$bus)
            // this.$bus.$emit('hello',this.name)
            PubSub.publish('hello',666)
           }
        }
    }

</script>