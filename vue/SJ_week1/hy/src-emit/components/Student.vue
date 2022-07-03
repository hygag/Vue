

<template>
<div>
    
    <h1>Student</h1>
    <button @click="getStudent">Student</button>

    <button @click="unbind">解绑</button>
    
</div>
    
</template>

<script>
  
    export default {
        name:'Student',
        data(){
            return {
               name:"Student"
            }
        },
        methods:{
            getStudent(){
                // 发送getStudent事件给父组件,切记在父组件的  @事件名="方法" 事件名必须跟emit传入的事件名一样，跟props同理
                
                // this.$emit('事件名'，参数)：参数可以多个，接收那边可以通过 function(name,...a)进行接收多个参数
                                                                       // ...a是es6语法，除了第一个，其他都打包到a数组
                this.$emit('getStudent',this.name)
            },
            unbind(){
                // 解绑单个直接this.$off('1')
                //     多个需要this.$off(['1','2']),用数组
                //     解绑所有this.$off()    
                this.$off('getStudent')
            }
        }
    }

</script>