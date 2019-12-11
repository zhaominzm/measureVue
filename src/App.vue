<template>
  <div id="app">       
    <Title :Title = "firstTitle" :Tip = "firstTip" />

    <!-- 表单信息1 -->
    <BodyForm :information= 'information' @update-bodyForm='updateBodyForm'/>

    <!-- 胸型 -->
    <BodyModule typeName = '胸型' :typeContent = "chest" :chooseCategory='body.chest' @updateBodyCategory ='updateBodyCategory' />

   <!-- 肩型 -->
    <BodyModule typeName = '肩型' :typeContent= 'shoulder' :chooseCategory='body.shoulder' @updateBodyCategory ='updateBodyCategory' />

    <!-- 腹型 -->
    <BodyModule typeName = '腹型' :typeContent= 'abdomen' :chooseCategory='body.abdomen' @updateBodyCategory ='updateBodyCategory' />

    <!-- 背部 -->
    <BodyModule typeName = '背部' :typeContent= 'back' :chooseCategory='body.back'  @updateBodyCategory ='updateBodyCategory' />

    <!-- 腿型-->
    <BodyModule typeName='腿型' :typeContent= 'leg'  :chooseCategory='body.leg' @updateBodyCategory ='updateBodyCategory' />  

    <!-- 收件表单 -->
    <Title :Title = "secondTitle"  :Tip = 'secondTip' />
    <ReceiveForm :information='information' @update-bodyForm='updateBodyForm'/>

    <div class='btn' @click='submit'>立即定制</div>

  </div>
</template>

<script>
import Title from "./components/Title.vue";
import BodyModule from "./components/BodyModule.vue";
import BodyForm from "./components/BodyForm.vue";
import ReceiveForm from "./components/ReceiveForm.vue";

export default {
  data() {
    return {
      firstTitle: "1、输入您的身体特征",
      firstTip: "您只需要跟着步骤描述您的体型特征即可",
      secondTitle: "2、输入您的收件信息",
      secondTip: "您只需按步骤填写你的信息即可",
      chest: [
        {
          type:'chest',
          img: "chest_corpulent.jpg",
          title: "肌肉",
          content: "健身达人,胸部有明显肌肉轮廓",
          category:'muscle'
        },
        {
          type:'chest',
          img: "chest_normal.jpg",
          title: "平坦",
          content: "少量肌肉或脂肪，正常体态",
          category:'flat'
        },
        { 
          type:'chest',
          img: "chest_strong.jpg", 
          title: "肥大", 
          content: "有明显脂肪堆积",
          category:'hypertrophy'
         }
      ],
      shoulder: [
        {
            type:'shoulder',
          img: "shoulder_normal.jpg",
          title: "平肩",
          content: "稳稳挂住单肩包",
          category:'flat'
        },
        {
           type:'shoulder',
          img: "shoulder_stooped.jpg",
          title: "常规",
          content: "偶尔挂住单肩包",
          category:'regular'
        },
        {
           type:'shoulder',
          img: "shoulder_straight.jpg",
          title: "溜肩",
          content: "完全挂不住单肩包",
          category:'slide'
        }
      ],
      abdomen: [
        {
           type:'abdomen',
          img: "abdomen_thin.jpg",
          title: "凹陷",
          content: "腹部往里瘪或完全平",
          category:'sunken'
        },
        {
           type:'abdomen',
          img: "abdomen_normal.jpg", 
          title: "平坦",
          content: "摸起来稍有幅度",
          category:'flat'
          },
        { 
           type:'abdomen',
          img: "abdomen_large_level1.png", 
          title: "微凸", 
          content: "小肚腩",
          category:'slightlyConvex'
          },
        {
           type:'abdomen',
          img: "abdomen_large_level2.png",
          title: "中凸",
          content: "腹部突出明显",         
          category:'middleConvex'
        },
        {
           type:'abdomen',
          img: "abdomen_large_level3.png",
          title: "重凸",
          content: "站立时无法看到脚",
          category:'heavyConvex'
        }
      ],
      back: [
        {
           type:'back',
          img: "stance_straight.jpg",
          title: "挺腰",
          content: "平时走路特别昂首挺胸",
           category:'quite'
        },
        { type:'back', img: "stance_normal.jpg", title: "直背", content: "正常体态或微驼", category:'straight' },
        {  type:'back',img: "stance_curved.jpg", title: "驼背", content: "背部有明显驼背",category:'Humpback'  }
      ],
      leg: [
        {  type:'leg', img: "lag_fat.jpg", title: "粗壮", content: "腿部肌肉明显突出",category:'bold' },
        {  type:'leg', img: "leg_regular.jpg", title: "正常", content: "腿部肌肉整体匀称",category:'regular'},
        { type:'leg', img: "lag_fat.jpg", title: "纤细", content: "腿部较为纤细",category:'slender' }
      ],
      information: {
        age: '',
        weight: '',
        height: '',
        name:'',
        phone:'',
        address:'',
        province:'',
        city:''
      },
      body:{
        chest:'', 
        shoulder:'',// 肩部
        abdomen:'', // 腹部
        back:'', // 背部
        leg:''
      }
    };
  },
  components: {
    Title,
    BodyModule,
    BodyForm,
    ReceiveForm
  },
  methods: {
    updateBodyForm(name,val) {
      var that = this;  
      that.information[name] = val;  
      // console.log( that.information);
    },   
    updateBodyCategory(type,category){
          // console.log(type,category);
         var that = this;     
        that.body[type] = category;
        // console.log(that.body);
    },
    submit() {    
      var that = this;
      var info = that.information;  
         if(info.age == ''|| info.age==undefined){
            that.$layer.msg('请输入年龄',{
                 time:2
             });           
            return false;
        }
        if(info.height ==''||info.height==undefined){
           that.$layer.msg('请输入身高',{
                 time:2
             }); 
            return false;
        }
        if(info.weight ==''||info.weight==undefined){
           that.$layer.msg('请输入体重',{
                 time:2
             });           
            return false;
        }
        if(that.body.chest ==''|| that.body.chest== undefined){
           that.$layer.msg('请选择胸型',{
                 time:2
             });           
            return false;
        }
        if(that.body.shoulder ==''||that.body.shoulder==undefined){
            that.$layer.msg('请选择肩型',{
                 time:2
             });  
            return false;
        }
        if(that.body.abdomen ==''){
           that.$layer.msg('请选择腹型',{
                 time:2
             });           
            return false;
        }
        if(that.body.back ==''){
           that.$layer.msg('请选择背部形状',{
                 time:2
             });          
            return false;
        }
        if(that.body.leg ==''){
          that.$layer.msg('腿型',{
                 time:2
             });          
            return false;
        }
        if(info.phone ==''||info.name==''||info.province==''||info.city==''||info.address==''){
             that.$layer.msg('请完善收件信息',{
                 time:2
             });    
            return false;
        }
        if(!/^1[0-9]{10}$/.test(info.phone)){
           that.$layer.msg('手机号格式不正确',{
                 time:2
             });           
            return false;
        }

       that.commit(that.information,that.body);
           
    },
    commit(info,body){
      console.log(1);
      var that = this;
      var obj =  Object.assign(info,body);
      console.log(obj);
        // that.$axios.post('https://www.rcrn88.com/Home/Figure/test' , 本地调试
        that.$axios.post('/Figure/measureVueCommit',
           obj,
           {headers:{'Content-Type':'application/x-www-form-urlencoded'} }
        ).then(function(data){
          console.log(data);
        }).catch((response)=>{
          console.log(response.data);
        })
    }
  }
};
</script>

<style>
#app {
  max-width: 640px;
  width: 100%;
  margin: 0 auto;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.btn {
  background: #a7081c;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: #fff;
  font-size: 16px;
  width: 70%;
  border-radius: 10px 10px;
  margin: 20px auto 50px;
  cursor: pointer;
}
.distpicker-address-wrapper select {
  width: 49.1%;
  padding: 0.5rem 5px;
  font-size: 14px;
}
.icon-choose {
    position: absolute;
    top: 0;
    right: 0;
    width: 24px;
    height: 24px;
    display: none;
}
.choose {
   border:1px solid #c4000e!important;
}
.choose .icon-choose{
   display: block;
}
</style>
