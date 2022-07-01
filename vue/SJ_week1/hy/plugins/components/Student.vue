

<template>
    <div>
        <!-- 过滤器 Vue.filter('name',function(){}) -->
        <h1>{{name | mySlice}}</h1>

        <!-- 这是混合器里面的x -->
        <span>{{x}}</span>
        
        
        <br><br>
        <!-- 自定义指令 Vue.directive('name'{}) -->
        <input type="text" v-fbind:value = "address">

        <button @click="text">你好</button>
    </div>
</template> 


<script>
import Vue from 'vue'


    export default{
        name:'zs',
        data(){
           return {
                name:"adsafa",
                address:"jlkjl"
           } 

        },
        methods:{
            test(){
                // 调用插件里的构造的hello方法
                this.hello()
            }
        }
    }

</script>