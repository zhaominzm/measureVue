<template>
    <div class='title'>      
        <p class='first-title'>{{Title}}</p>
        <p class='second-title'>{{Tip}}</p>
    </div>
</template>

<script>
export default {
    props:['Title','Tip'],
    data(){
        return {

        }
    }

}
</script>

<style scoped>
.first-title{
    font-size:17px;
    line-height:30px;
    color:#313132;
    padding-top:10px;
}
.second-title{
    line-height:20px;
    color:#787878;
    margin-bottom:10px;
}
</style>


