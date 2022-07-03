<template>
  <div>
      <h1>School</h1>   
  </div>
</template>

<script>
// subscribe：订阅---->订阅名跟函数
// publish：发布------>发布名跟参数
import PubSub from 'pubsub-js'

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
        // this.$bus.$on('hello',(data)=>{
        //     console.log(data)
        // })

    // 谁收谁订阅(subscribe)，谁发谁发布(publish)
        // 订阅:第一个参数是订阅名，第二个才是参数
        // 跟事件总线非常类似，其实还节奏清晰点
        this.pubId = PubSub.subscribe('hello',(name,value)=>{
            console.log(value)
        })
    },
    beforeDestroy(){
        // this.$bus.$off('hello')

        // 每次订阅都会生成一个id，需要通过id来解绑
        PubSub.unsubscribe(this.pubId)
    }
  
}
</script>



