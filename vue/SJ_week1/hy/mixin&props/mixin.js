

export const a = {
    data(){
        return {
            x: 10,
            y: 20
        }
    },
    method:{
      speak(){
        alert("gaga");
      }  
    },
    mounted(){
        console.log("加载完成！！")
    }
}

export const b = {
    data(){
        return {
            z:1233
           
        }
    },
    method:{
      action(){
        alert("gaga");
      }  
    },
    mounted(){
        console.log("aaa！！")
    }
}

