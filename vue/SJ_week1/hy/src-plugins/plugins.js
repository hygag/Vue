import Vue from "vue";


export default{
    install(Vue){
        console.log("  aaa  ");

        // 过滤器
        Vue.filter('mySlice', function(value){
            return value.slice(0,4)
        })

        // 自定义指令
        Vue.directive('fbind',{
            bind(element, binding){
                element.value = binding.value
            },

            inserted(element,binding){
                element.focus()
            },

        })

        // 混合器
        Vue.mixin({
            data(){
                return {
                    x:1,
                    y:2
                }
            }
        })

        Vue.prototype.hello = () => {alert("nihao")}
    }
}