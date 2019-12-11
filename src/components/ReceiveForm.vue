<template>
    <div class='bodyForm'>
            <div>
            <span class='width_label'>收件人电话:</span>
            <div class='input_c'>
                <input class='input_style' type="number" name='phone' placeholder='请输入收件人电话'   
                   @input="changeReceiveMsg($event)"            
                :value='information.phone'>
                <span class='input_close' @click="clearVal('phone')"></span>
            </div>
            <span class='icon-required'>*</span>
        </div>   
        <div>
            <span class='width_label'>收件人姓名:</span>
            <div class='input_c'>
                <input class='input_style' type="text" name='name' placeholder='请输入收件人姓名' 
                @input ="changeReceiveMsg($event)"
                :value='information.name'>
                <span class='input_close' @click="clearVal('name')"></span>
            </div>
            <span class='icon-required' >*</span>
        </div>       
        <div>
            <span class='width_label'>收件人地区:</span>
            <div class='input_c'>            
              <!-- <v-distpicker :province="areas.province" :city="areas.city" :area="areas.area"  @selected='selected' /> -->
                <Distpicker hide-area :province="information.province" :city="information.city"   @province='province' @city='city'/>
            </div>
            <span class='icon-required'>*</span>
        </div>     
         <div>
            <span class='width_label'>收件人地址:</span>
            <div class='input_c'>
                <input class='input_style' type="text" name='address' placeholder='请输入收件人详细地址:' 
                  @input ="changeReceiveMsg($event)"
                :value='information.address'>
                <span class='input_close' @click="clearVal('address')"></span>
            </div>
            <span class='icon-required'>*</span>
        </div>    
    </div>
</template>
<script>
import Distpicker from 'v-distpicker' // 地址联动插件
export default {
    data(){
        return{  
            // receiveInfo:{
            //     phone:'15026876264',
            //     name:'zm',               
            //     province:'',
            //     city:'',
            //     // area:''         
            //     address:'address'        
            // }    
        }
    },
    props:{
        information:Object
    },
    components:{
       Distpicker
    },   
    methods:{
        province(data){          
            this.$emit('update-bodyForm','province',data.value);
            // console.log(data);         
        },
        city(data){           
              this.$emit('update-bodyForm','city',data.value);
            //  console.log(data);    
        },
        
        // input 值变化
        changeReceiveMsg(e){
            // console.log(e);
            //   console.log(e.target.name+':'+e.target.value);
              this.$emit('update-bodyForm',e.target.name,e.target.value);
        },

        // 清空单个input内容
         clearVal(name){
            //  console.log(name);
             this.information[name] = '';
            this.$emit('update-bodyForm',name,'');         
        }
        //  clearVal(){
        //       console.log(1);
        // }         
    }    
}
</script>

<style scoped>

</style>


