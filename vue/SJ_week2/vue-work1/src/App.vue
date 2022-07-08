<template>
  <div id="app">
    <div class="main"> 
    <MyHeader class="Header" 
    :totalPage = 'totalPage'/>
    
    <MyList class="List" 
    :myData="myData" 
    :curPage='curPage' 
    :lastNum='lastNum' 
    :chooseState="chooseState"
    @addNum='addNum'/>
    
    <MyFooter class="Footer" 
    @addData="addData"
    @changePage ='changePage' 
    @checkData="checkData"
    :allDel="allDel" 
    :totalPage='totalPage'/>
    </div>
  </div>
</template>

<script>

// 引入

import MyFooter from './components/MyFooter.vue'
import MyHeader from './components/MyHeader.vue'
import MyList from './components/MyList.vue'
export default {
  name: 'App',
  components: {
    MyHeader,
    MyFooter,
    MyList
  },
  data(){
    return{
      // myData是对象数组,curPage是当前页,lastNum用来存最后一个是第几个,防止刷新后,又从1开始
      myData:JSON.parse(localStorage.getItem('myData'))||[],
      curPage:1,
      lastNum:JSON.parse(localStorage.getItem('lastNum'))||1, 
      // 判断是否进入多选状态
      chooseState:false,
    }
  },
  computed:{
    totalPage(){
      return this.myData.length / 6
    }
  },
  methods:{
    changePage(page){
      this.curPage = page
    },
    addData(data){
      this.myData.push(data)
      console.log(this.myData)
    },
    addNum(value){
      this.lastNum = value
    },
    
    // 监测
    checkData(id){
        this.myData.forEach(data=>{
        if(id === data.myKey) data.isChoose = !data.isChoose
        console.log(data.isChoose)
        })
     
    },
    // 删除已选择的
    allDel(state){
        this.myData = this.myData.filter(data=>{
        return !data.isChoose
    })
    // 复原
      this.chooseState = state
      this.$bus.$emit('curChooseState',this.chooseState)
    },

    // 编辑
    editDate(id,date,f,des,total){
      this.myData.forEach(data=>{
        if(id === data.myKey) {
          data.Date = date,
          data.F = f,
          data.Description = des,
          data.Total = total
        }
        })
    },

    
  },
  watch:{
    myData:{
      deep:true,
      handler(value){
        localStorage.setItem('myData',JSON.stringify(value))
      }
    },
    lastNum:{
      deep:true,
      handler(value){
        localStorage.setItem('lastNum',JSON.stringify(value))
      }
    }
  },
  mounted(){
    this.myData.forEach(data=>{
      data.isDisplay = true
    })

    // 接收
    this.$bus.$on('changePage',this.changePage)
    this.$bus.$on('addData',this.addData)
    this.$bus.$on('addNum',this.addNum)
    this.$bus.$on('checkData',this.checkData)
    this.$bus.$on('editDate',this.editDate)
    
  },
  beforeDestroy(){
    //解绑
    this.$bus.$off('changePage')
    this.$bus.$off('addData')
    this.$bus.$off('addNum')
    this.$bus.$off('checkData')
    this.$bus.$off('editDate')
  },
  updated(){
    this.lastNum = this.myData.length + 1
  }
}
</script>

<style>
  /* 主样式区 */
  *{
    margin: 0%;
    padding: 0%;
    box-sizing: border-box;
  }
  body{
    display: flex;
    justify-content: center;
    align-content: center;
  }
  .main{
    display:  flex;
    flex-direction: column;
    border:1px solid  rgb(197, 203, 209);
    width: 1000px;
    height: 500px;
  }
  /* 头 */
  .Header{
        flex: 1; 
  }

  /* 内容表单区 */
  .List{
        flex: 9;
        /* box-shadow: 0 5 5 10px rgb(155, 150, 150); */
        display: flex;
  }

  /* 脚 */
  .Footer{
        flex: 1;
        border-top:1px solid  rgb(197, 203, 209);
  }

 
  
</style>
