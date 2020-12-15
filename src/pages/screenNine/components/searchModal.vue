<template>
  <div class="search-modal" @click="(e)=>{clickOther(e)}">
    <div class="search-header">
      <div class="search-item mo-no">
        工单号: <input type="text" v-model="MO_No">
      </div>
      <div class="search-item ERP">
        ERP编码: <input type="text" v-model="ERP_No">
      </div>
      <div class="search-item drawing-no">
        图号: <input type="text" v-model="Drawing_No">
      </div>
      <div class="search-item supplier">
        供应商: <input type="text" v-model="supplier">
      </div>
      <div class="search-item ao-no">
        到货单号: <input type="text" v-model="AO_No">
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
      MO_No:"",
      ERP_No:"",
      Drawing_No:"",
      supplier:"",
      AO_No:"",
      status:""
    }
  },
  created(){
    this.isOpen=this.searchIsOpen
  },
  methods:{
    search(){
      this.isOpen=false;
      this.$emit("closeSearch",false)
    },
    reset(){
      this.MO_No="";
      this.ERP_No="",
      this.Drawing_No="";
      this.supplier="";
      this.AO_No="";
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
    background-color: rgba(0, 0, 0, 0.3);
  }
  .search-header{
    height: 200px;
    background-color: #001d3d;
    padding: 0 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button{
      width: 70px;
      height: 30px;
      border: 1px solid #515a6e;
      color:#fff;
      background-color: transparent;
      border-radius: 3px;
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
      border-bottom: 1px solid #515a6e;
      outline: none;
      color: #fff;
    }
  }
</style>