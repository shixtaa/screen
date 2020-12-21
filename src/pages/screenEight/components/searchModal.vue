<template>
  <div class="search-modal" @click="(e)=>{clickOther(e)}">
    <div class="search-header">
      <div class="search-item mo-no">
        工单号: <input type="text" v-model="workorderno">
      </div>
      <div class="search-item ERP">
        ERP编码: <input type="text" v-model="erp">
      </div>
      <div class="search-item drawing-no">
        图号: <input type="text" v-model="componentno">
      </div>
      <div class="search-item supplier">
        供应商: <input type="text" v-model="venname">
      </div>
      <div class="search-item ao-no">
        到货单号: <input type="text" v-model="aorderno">
      </div>
      <div class="search-item status">
        库位状态: <input type="text" v-model="status">
      </div>
      <button class="search-btn" @click="search" >搜索</button>
      <button class="reset-btn" @click="reset">清空</button>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
let path = "http://172.16.8.55:49866/";
export default {
  name:'searchModal',
  props:{
    searchIsOpen:{
      type:Boolean,
      required:true
    }
  },
  data() {
    return {
      isOpen:false,
      selectedPosition:{},
      workorderno:"",
      erp:"",
      componentno:"",
      venname:"",
      aorderno:"",
      status:""
    }
  },
  created(){
    this.isOpen=this.searchIsOpen
  },
  methods:{
   //获取货位
    searchPositionList(){
      // axios.get(path+"api/warehouse/positionList?workorderno&erp&componentno&venname&aorderno&status")
      axios.get(`${path}api/warehouse/positionList?workorderno=${this.workorderno}&erp=${this.erp}&componentno=${this.componentno}&venname=${this.venname}&aorderno=${this.aorderno}&status=${this.status}`)
      .then((res)=>{
          this.selectedPosition=res.data.Data.data;
        })
        .then(()=>{
          this.addHeartClass()
        })
        .catch((err)=>{
          console.log(err)
        })
    },
    //添加闪烁class
    addHeartClass(){
      for(let k in this.selectedPosition){
        let ele=document.getElementsByClassName(k)
        if(ele.length>0){
          _.map(ele,(dom)=>{
            dom.classList.add("heart")
          })
          setTimeout(() => {
            _.map(ele,(dom)=>{
              dom.classList.remove("heart")
            })
          }, 3*1000);
        }
      }
    },

    search(){
      this.searchPositionList()
      this.isOpen=false;
      this.$emit("closeSearch",false)
      this.reset()
      // this.addHeartClass()
    },
    reset(){
      this.workorderno="";
      this.erp="",
      this.componentno="";
      this.venname="";
      this.aorderno="";
      this.status="";    
    },
    clickOther(e){
      if(e.target.className=="search-modal" ){
        this.$emit("closeSearch",false)
      }
    }
  }
}
</script>
<style lang="scss">
  .search-modal{
    position:fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .search-header{
    height: 200px;
    background-color: #001d3d;
    padding: 0 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color:#fff;
    button{
      width: 70px;
      height: 30px;
      border: 1px solid #515a6e;
      color:#fff;
      background-color: transparent;
      border-radius: 3px;
      outline: none;
    }
    .search-btn{
      background-color: #3862bd;
    }
  }
  .search-item{
    input{
      background-color: transparent;
      width: 150px;
      border: none;
      border-bottom: 1px solid #fff;
      outline: none;
      color: #fff;
    }
  }
</style>