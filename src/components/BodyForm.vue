<template>
    <div class='bodyForm'>
        <div class='age'>
            <span class='width_label'>年龄:</span>
            <div class='input_c'>         
                <input class='input_style' type="number" name='age' placeholder='例如30' 
                  @input="chageBodyMsg($event)"
                :value='information.age'>
                <span class='input_close' @click="clearVal('age')"></span>
            </div>
            <span class='icon-required'>*</span>
        </div>   
         <div class='age'>
            <span class='width_label'>身高(厘米):</span>
            <div class='input_c'>
                <input class='input_style' type="number" name='height' placeholder='例如170'
                 @input="chageBodyMsg($event)"
                 :value='information.height'>
                <span class='input_close' @click="clearVal('height')"></span>
            </div>
            <span class='icon-required'>*</span>
        </div>  

        <!-- <div>{{information.height}}</div> -->

         <div class='age'>
            <span class='width_label'>体重(公斤):</span>
            <div class='input_c'>
                <input class='input_style' type="number" name='weight' placeholder='例如60' 
                 @input="chageBodyMsg($event)"
                :value='information.weight'>
                <span class='input_close' @click="clearVal('weight')"></span>
            </div>
            <span class='icon-required'>*</span>
        </div>            
    </div>
</template>
<script>
export default {
    data(){
        return{         
            // age:10,
            // weight:20,
            // height:150           
        }
    },
    props:{
        information:Object
    },
    methods:{
        chageBodyMsg(e){
            var that = this;
            //   console.log(e);   
            // console.log(e.target.value+':'+e.target.name);               
            that.$emit('update-bodyForm',e.target.name,e.target.value);         
        },
        clearVal(name){
            //  console.log(name);
             this.information[name] = '';
            this.$emit('update-bodyForm',name,'');         
        }
    }
}
</script>
<style>
    .bodyForm{
        margin-bottom:10px;
        background:#ffffff;
    }
    .bodyForm>div {
        border-bottom: 1px solid #e7e7e7;
        height: 50px;
        line-height: 50px;
        width: 100%;
    }
    .width_label {
        width: 25%;
        display: inline-block;
        text-align: center;
        color: #4a4a4a;
        font-size: 14px;
    }
    .input_c {
        width: 65%;
        display: inline-block;
        padding-left: 5px;
        position: relative;
        /* border:1px solid; */
    }
    .icon-required {
        margin-left: 5px;
        font-size: 12px;
        color: #f00;
    }

    .input_c>input {
        width: 89%;
        padding: 0 6% 0 4%;
        height: 35px;
        border: 1px solid #e2e2e2;
        border-radius: 4px;
        outline: 0;
    }    
    .input_close{
        background: url(/measureImg/quit.png);
        background-repeat: no-repeat;
        background-size: cover;
        display: inline-block;
        width: 9px;
        height: 8px;
        top: 50%;
        right: 5px;
        transform: translateY(-50%);
        text-align: center;
        position: absolute;
        cursor: pointer;
    }
</style>