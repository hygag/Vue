<template>
    <div>       
        <div class="content" @curChooseState="curChooseState">
            <span class="editData">
                <span class="dataDate" @click="dblclick(1)" v-show="!editState">{{Data.Date}}</span>  
                <input class="dataDate" type="text" ref="date" :value="Data.Date" @keyup.enter="completed" v-show="editState">  
                
                <input class="checkbox" type="checkbox" v-show="State" @change="isChoose(Data.myKey)" :checked="Data.isChoose">
                <span v-show="!State" class="checkbox"></span>   
            </span>          
            
            <span class="editData">
                <span @click="dblclick(2)" v-show="!editState">{{Data.F}}</span>  
                <input type="text" ref="f" :value="Data.F" @keyup.enter="completed" v-show="editState">
            </span>
               
            <span class="editData">
                <span @click="dblclick(3)" v-show="!editState">{{Data.Description}}</span>
                <input type="text" ref="des" :value="Data.Description" @keyup.enter="completed" v-show="editState">
            </span>
            
            <span class="editData">
                <span @click="dblclick(4)" v-show="!editState">{{Data.Total}}</span>  
                <input type="text" ref="total" :value="Data.Total" @keyup.enter="completed" v-show="editState">
            </span>
        </div>   
    </div>
</template>

<script>
    export default{
        name:'MyItem',
        props:['Data'],
        data(){
            return {
                State:false,
                editState:false,
                time:0,
            }
        },
        methods:{
            // 判断是否进入多选模式
            curChooseState(value){
                this.State = value
            },
            // 是否被选择
            isChoose(id){
                // 被选中了,回到原数据改变状态
                this.$bus.$emit('checkData',id)
            },
            dblclick(id){
                // 利用时间戳构建一个双击事件
                this.time = new Date().getTime()
                setTimeout(() => {
                    if(new Date().getTime() - this.time < 300){
                        // this.$bus.$emit('isEditChange',id)
                        this.editState = !this.editState
                        this.$nextTick(()=>{
                            switch(id){
                                case 1: this.$refs.date.focus();break
                                case 2: this.$refs.f.focus();break
                                case 3: this.$refs.des.focus();break
                                case 4: this.$refs.total.focus();break
                            }
                        })
                    }
                }, 300);
            },
            completed(){
                if(this.$refs.date.value === '' || 
                   this.$refs.f.value === '' ||
                   this.$refs.des.value === '' ||
                   this.$refs.total.value === '') return alert("请将数据填写完整！！")

                this.editState = !this.editState

                this.$bus.$emit('editDate',this.Data.myKey,this.$refs.date.value,
                                                           this.$refs.f.value,
                                                           this.$refs.des.value,
                                                           this.$refs.total.value)
            }
        },
        mounted(){
            this.$bus.$on('curChooseState',this.curChooseState)
        },
        beforeDestroy(){
            this.$bus.$off('curChooseState')
        }
    }



    // input自适应
    
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
        /* border-right:1px solid aqua; */
        height: 100%;
        font-size: 16px;
        
    }
    .content span:nth-child(1){
        width: 15%;
        /* background-color: aqua; */
        position: relative;
    }
    /* .kong{
        position: absolute;
        margin-right:26px ;
        /* border-left:1px black solid; */
    
    /* 切换到删除状态时格式的控制 */
    .checkbox{
        position: absolute;
        left: -52px;
    }
    .dataDate{
        margin-left: 50px;
    }
    .content span:nth-child(2){
        width: 10%;   
        /* background-color: aqua; */
    }
    .content span:nth-child(3){
        width: 63%;
    }
    .content span:nth-child(4){
        width: 5%;
        
        /* background-color: aqua; */
    }
    .editData{
        display: flex;
        align-items: center;
        /* border-right:1px solid aqua; */
        height: 100%;
        font-size: 16px;
    }
    .editData input{
        width: 100%;
        background: none;
        outline: none;
        border: none;
        font-size: 16px;
        border-bottom: 1px solid  rgb(197, 203, 209);
    }
</style>