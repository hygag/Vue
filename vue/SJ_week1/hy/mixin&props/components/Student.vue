

<template>
<div>
    
    <h1>aaaaa:{{msg}}</h1>
    <h2>{{name}}</h2>
    <h2>{{sex}}</h2>
    <h2>{{myAge + 1}}</h2>
    <button @click="change">添加</button>
    
</div>
    
</template>

<script>
    import {a, b} from '../mixin.js'
    export default {
        name:'Student',
        data(){
            return {
                msg:"嘎嘎嘎",

                // 为了满足改变传入的值,所以设置数据代理来进行控制传入的值
                myAge:this.age
            }
        },
        methods:{
            change(){
                this.myAge++
            }
        },


        //props内的数据的优先级比data里面的高,并且不建议直接改变props内的值

        // 这是最简单的方法也是常用的方法
        // props :['name', 'sex', 'age']
        
        // 这是标准写法,可以指定数据类型以及必须性还有默认值,一般用的比较少
        props:{
                name:{
                    require:true,
                    type:String
                },
                sex:{
                    type:String,
                    require:true,
                    default:'女'
                },
                age:{
                    type:Number,
                    default:18
                }
        },
        // mixins:[a,b]
    }

</script>