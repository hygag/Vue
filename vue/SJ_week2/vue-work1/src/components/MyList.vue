
<template>
    <div class="content" @searched="searched">
        <MyItem class="item" v-for="Data in myData" :key="Data.myKey" :Data="Data" v-show="isDisplay(Data.myId,Data.isDisplay)"/>
        <div v-show="this.State" class="inputData">
            <input type="text" ref="date">
            <input type="text" ref="f">
            <input type="text" ref="Des">
            <input type="text" ref="total">
        </div>
        <button v-show="this.isSearchState" @click="exit">退出搜索</button>
        <button v-show="this.curPage > this.myData.length / 6 && !this.State && !this.isSearchState" @click="isAdd">新增</button>
        <button v-show="this.State && !this.isSearchState" @click="addDate">完成</button>
        <button v-show="this.State && !this.isSearchState" @click="cancel">取消</button>
    </div>
</template>

<script>
    import {nanoid} from 'nanoid'
    import MyItem from './MyItem.vue'
    export default{
        name:'MyList',
        props:['myData','curPage','lastNum'],
        data(){
            return {
                State:false,
                Num:this.lastNum,
                isSearch:false,
                isSearchState:false
            }
        },
        computed:{
            
        },
        components:{
            MyItem
        },
        methods:{
            isDisplay(myId,isDisplay){
                // console.log(this)
                return (myId > (this.curPage-1) * 6) && (myId <= (this.curPage-1) * 6 + 6) && isDisplay
            },
            // 判断是否添加
            isAdd(){
                this.State = true
            },
            //添加数据
            addDate(){
                // 获取数据
                let date = this.$refs.date.value
                let f = this.$refs.f.value
                let Des = this.$refs.Des.value
                let total = this.$refs.total.value
                if(date==='' || f ==='' || Des==='' || total === '') return alert("请将数据输入完整！！")
                // console.log(date,f,Des,total)

                // 存数据
                // myId:用来分页用跟排序用，isChoose：判断多选删除时是否被选择
                const data = {Date:date,F:f,Description:Des,Total:total,myId:this.Num,myKey:nanoid(),isChoose:false,isEdit:false,isDisplay:true}
                
                // Num:用来控制每一页显示的个数,表示第几个数据,
                this.Num = this.Num + 1

                // 发数据
                this.$bus.$emit('addNum',this.Num)
                this.$bus.$emit('addData',data)
                
                // 重新初始化
                this.$refs.date.value = ''
                this.$refs.f.value = ''
                this.$refs.Des.value = ''
                this.$refs.total.value = ''
                this.State = false
            },
            // 取消
            cancel(){
                this.$refs.date.value = ''
                this.$refs.f.value = ''
                this.$refs.Des.value = ''
                this.$refs.total.value = ''
                this.State = false
            },

            // 搜完了重新刷新
            searched(value){
                this.isSearch = !this.isSearch
                this.isSearchState = !this.isSearchState
                this.myData.forEach(data=>{
                    if(data.Description === value) data.isDisplay = true
                    else data.isDisplay = false
                })
            },

            // 退出搜索
            exit(){
                this.isSearchState = !this.isSearchState
                this.myData.forEach(data=>{
                    data.isDisplay = true
                })
            }
       },

        mounted(){
            this.$bus.$on('curChooseState',this.curChooseState)
            this.$bus.$on('searched',this.searched)
        },
        beforeDestroy(){
            this.$bus.$off('curChooseState')
            this.$bus.$off('searched')
        }
    }
</script>

<style scoped>
    .content{
        display: flex;
        flex-direction: column;
        height: 100%;
        /* background-color: aqua; */
    }
    .item{
        height: 16.66%;
        border-top:1px solid  rgb(197, 203, 209);
    }
    .item:hover{
        background-color: rgb(232, 236, 240);
    }
    button{
        height: 8%;
        border: none;
    }
    button:hover{
        background-color: rgb(232, 236, 240);
    }
    button:active{
        background-color: rgb(141, 180, 199);
    }

    /* 输入部分 */
    .inputData{
        display: flex;
        align-items: center;
        /* border-right:1px solid aqua; */
        height: 8%;

        font-size: 16px;
    }
    input{
        height: 30px;
    }
    .inputData input:nth-child(1){
        width: 18%;
        
    }
    .inputData input:nth-child(2){
        width: 12%;    
    }
    .inputData input:nth-child(3){
        width: 63%;
    }
    .inputData input:nth-child(4){
        width: 8%;
    }
</style>