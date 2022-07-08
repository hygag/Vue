<template>
    <div >
       <span class="content">
            <span class="page">
                <button ref="left" @click="lastPage">&lt;</button>
                <span>
                    <!-- <span v-show="page > 1 ">{{page - 1}}</span> -->
                    <span>{{page}}</span>
                    <!-- <span v-show="page > 2 ">{{page + 1}}</span> -->
                </span>
                <button ref="right"  @click="nextPage">&gt;</button>
            </span>
            
            <div class="searchBox">
            <span  class="search" @click="isSearch" v-show="!searchState">Search</span>
            <input class="searchInput" type="text" v-show="searchState" ref="search" @keyup.enter="searched" @blur="exit">
            </div>
            
            <span class="delBtn">
                <button v-show="!this.chooseState" @click="changeChooseState">多选删除</button>
                <button v-show="this.chooseState" @click="Del">删除所选中的</button>
            </span>
       
       </span>
    </div>
</template>

<script>
    export default{
        name:'MyFooter',
        props:['totalPage','allDel'],
        data(){
            return {
                page:1,
                chooseState:false,
                searchState:false
            }
        },
        methods:{
            // 上一页
            lastPage(){
                if(this.page > 1){
                    this.page = this.page - 1
                    // 改变当前页
                    this.$bus.$emit('changePage',this.page) 
                }
            },
            // 下一页
            nextPage(){
                console.log(this.totalPage)
                if(this.page <= this.totalPage){
                    this.page = this.page + 1   
                    // 改变当前页 
                    this.$bus.$emit('changePage',this.page) 
                }  
            },
            // 多选
            changeChooseState(){
                this.chooseState = !this.chooseState

                // 发送状态给item组件
                 this.$bus.$emit('curChooseState',this.chooseState)
            },
            Del(){
                if(confirm("确认删除吗")){
                this.chooseState = !this.chooseState
                this.allDel()
                }
            },

            // 进入搜索状态
            isSearch(){
                // console.log(11)
                this.searchState = !this.searchState

                this.$nextTick(()=>{
                    this.$refs.search.focus()
                })
            },
            
            // 退出搜索状态
            exit(){
                this.searchState = !this.searchState
            },

            searched(){
                if(this.$refs.search.value === '') return alert('请输入关键字！！')

                this.searchState = !this.searchState    

                // 发送搜索的关键字
                this.$bus.$emit('searched',this.$refs.search.value)
                
                this.$refs.search.value = ''
            }
            },   
    }
</script>

<style scoped>
    .content{
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        box-sizing: border-box;
    }
    .content span{
        display: flex;
        align-items: center;
        height: 100%;
    }
    /* 分页部分 */
    .page{
        border-right: 1px solid  rgb(197, 203, 209);
        flex: 1.2;
        justify-content: space-around;
        font-size: 15px;
    }
    /* 按钮区域 */
    .page button{
        width: 25%;
        height: 50%;
        border: none;
        background-color: white;
        border-radius:15%;
    }
    .page button:hover{
        background-color: rgb(168, 173, 177);
    }
    .page button:active{
        background-color: rgb(84, 86, 87);
    }

    /* 中间的页 */
    .page span{
       
        height: 100%;
        width: 60%;
        display: flex;
        justify-content: space-around;  
        align-items: center;
    }
    .page span span{
        /* background-color: aqua; */
        display: flex;
        justify-content: center;
        align-items: center;
    }
    /* .page span span:nth-child(1), span:nth-child(3){
        font-size: 12px;
        opacity: 0.5;
    } */
    /* 搜索部分 */
    .searchBox{
        flex: 5;
    }
    .search{
        width: 100%;
        font-size: 18px;
        color: rgb(150, 147, 144);
    }
    .searchInput{
        width: 100%;
        outline: none;
        background: none;
        border: none;
        height: 100%;
        padding: 10px;
    }
     /* 按钮 */
    .delBtn button{
        border: none;
        border-left: 1px solid  rgb(197, 203, 209);
        width: 80px;
        height: 100%;
    }
    .delBtn button:hover{
        background-color: rgb(232, 236, 240);
    }
    .delBtn button:active{
        background-color: rgb(141, 180, 199);
    }
</style>