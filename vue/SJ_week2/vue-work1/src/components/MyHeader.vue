

<template>
    <div>
        <!-- 标题区 -->
        <span class="content">
            <span>
                <p>Date</p> 
                
                <span class="arrow" @click="changeArrow">
                    <div class="triangle top" v-show="triangleDre === 1"></div>
                    <div class="triangle bottom" v-show="triangleDre === 2"></div>
                </span>
            </span>
            <span>#</span>
            <span>Description</span>
            <span>Total</span>
        </span>
    </div>
</template>

<script>
    export default{
        name:'MyHeader',
        data(){
            return{
                triangleDre:JSON.parse(localStorage.getItem('triangleDre'))||1,  //2是降序，1是升序
            }
        },
        methods:{
            changeArrow(){
                this.triangleDre = this.triangleDre === 1 ? 2 : 1

                this.$bus.$emit('sortChange',this.triangleDre)
            }
        },
        watch:{
            triangleDre:{
                deep:true,
                handler(value){
                   localStorage.setItem('triangleDre',JSON.stringify(value))
                }
            }
        }
    }
</script>

<style scoped>
    .content{
        display: flex;
        height: 100%;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
    }
    .content span{
        display: flex;
        align-items: center;
        /* border-right:1px solid aqua; */
        height: 100%;

        font-size: 15px;
        color: rgb(150, 147, 144);
        box-sizing: border-box;
    }
    .content span:nth-child(1){
        width: 16.5%;
        padding-left: 4.5%;
        background-color: aqua;
    }
    .content span:nth-child(2){
        width: 10%;
        /* background-color: aqua; */
        /* padding-left: 0.5%;     */
    }
    .content span:nth-child(3){
        width: 63%;
        /* background-color: aqua;  */
        padding-left: 1%;
    }
    .content span:nth-child(4){
        width: 8%;
        padding-left: 3%;
        
    }

    .arrow{
        display: flex;
        align-items: center;
    }

    .triangle{
        width: 0;
        height: 0;
        border: 4px solid;
        margin-left: 4px;
    }
    .top{
        margin-bottom: 6px;
        border-color:transparent transparent rgb(150, 147, 144);
    }
    .bottom{
        margin-top: 10px;
        border-color:rgb(150, 147, 144) transparent transparent ;
    } 
    
</style>