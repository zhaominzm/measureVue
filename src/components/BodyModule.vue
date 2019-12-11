<template>
    <div class='BodyModule'>
        <div class='title_c'>
            <span class='line'></span>
            <span class='body_name'>{{typeName}}</span>
            <span class='body_star'>*</span>
        </div>
        <ul class='body-module-ul'>     
            <li v-for = "(item,index) in typeContent" :key= 'index' @click='chooseBody(item.type,item.category)'>
                <!-- img放在public文件夹下，通过绝对路径引用 -->
                <!-- assets存放webapck处理的文件 -->               
                     <div class='body_module_img' :class="{choose:chooseCategory==item.category}">
                    <img style='width:100%' :src = "'/measureImg/'+item.img" alt="">  
                    <img  class='icon-choose' src="../assets/img/activity.png" alt="">       
                </div>                       
                <p class='body_module_category'>{{item.title}}</p>
                <p class='body_module_state'>{{item.content}}</p>     
                  <!-- <p>{{chooseCategory}}</p>  -->
                  <!-- <p>{{item.category}}</p>                -->
            </li>
            <div style='clear:both'></div>
        </ul>
    </div>
</template>
<script>
export default {
  data() {
    return {
        imgbaseUrl:'../assets/img/',
        imgbaseUrl2:'../assets/img/chest_corpulent.jpg'
    };
  }, 
  props:{
      typeName:{
          type:String
      },
      typeContent:{
          type:Array        
      },
      chooseCategory:{
          type:String
      }
  },
  mounted(){
    //   console.log(this.chooseCategory);
  },
  methods:{
      chooseBody(type,category){
            // console.log(type+':'+category);
            //  console.log(this.chooseCategory);
            this.$emit('updateBodyCategory',type,category);
      }
  }
};
</script>

 <style scoped>
.BodyModule {
  background: #ffffff;  
}
.title_c {
  position: relative;
  text-align: left;
  height: 40px;
  line-height: 40px;
}
.line {
  display: inline-block;
  height: 24px;
  margin-top: 8px;
  width: 4px;
  background-color: #c4000e;
  border-radius: 1px;
  position: absolute;
  /* margin-left: -10px; */
}
.body_name {
  font-size: 16px;
  color: #000;
  padding-left: 10px;
}
.body_star {
  margin-left: 2px;
  color: #c4000e;
  font-size: 16px;
}
.body-module-ul{
    background:#ffffff;
    padding:0 10px 25px;
    text-align: left;
}
.body-module-ul li{
   float: left;
    width: 32%;
    margin-left: 1px;
    position: relative;
    border: 1px solid transparent;
}
.body_module_img{
    width: 100%;
    border: 1px solid transparent;
}
.body_module_category{
    font-size: 16px;
    color: #4a4a4a;
    margin: 2px 0;
}
.body_module_state{
    color: #81848d;
    text-align: left;
    margin-bottom: 2px;
}
</style>