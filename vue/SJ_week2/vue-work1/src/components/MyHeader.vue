

<template>
    <div>
        <!-- 标题区 -->
        <span class="content">
            <span>Date</span>
            <span>#</span>
            <span>Description</span>
            <span>Total</span>
        </span>
    </div>
</template>

<script>
    export default{
        name:'MyHeader',
        
    }
</script>

<style scoped>
    .content{
        display: flex;
        height: 100%;
        width: 100%;
        justify-content: space-between;
        align-items: center;
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
        padding-left: 5%;
    }
    .content span:nth-child(2){
        width: 10%;
        /* background-color: aqua; */
        padding-left: 0.5%;    
    }
    .content span:nth-child(3){
        width: 63%;
        /* background-color: aqua;  */
        padding-left: 1.2%;
    }
    .content span:nth-child(4){
        width: 8%;
        padding-left: 3%;
        
    }
</style>