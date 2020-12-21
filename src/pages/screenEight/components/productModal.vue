<template>
  <div class="product-modal" @click="(e)=>{clickOther(e)}">
    <div class="product-info">
      <div class="product-header">
        <span>{{productCode}} 货物明细</span>
        <img src="../../../assets/imgs/close.png" alt="close" class="cursor" @click="closePro">
      </div>
      <div class="product-table">
        <el-table
            :data="proInfo"
            style="width: 100%"
            :header-cell-style="{backgroundColor:'#082443 ',color:'#fff',border: 'none'}"
            :row-style="{border: 'none !important'}"
            :row-class-name="tableRowClassName"
            class="customer-table"
            >
            <el-table-column
              type="index"      
              label="序号" 
              width="60px">
              <template slot-scope="scope">
                <span v-if="proInfo.length>0">{{ scope.$index + 1}}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="workorderno"
              label="工单号"
              width="130px">
            </el-table-column>
            <el-table-column
              prop="erp"
              label="ERP编码"
              width="130px">
            </el-table-column>
            <el-table-column
              prop="componentname"
              label="零件名称">
            </el-table-column>
            
            <el-table-column
              prop="moldel"
              label="规格型号"
              width="180px">
            </el-table-column>
            
            <el-table-column
              prop="componentno"
              label="图号"
              width="160px">
            </el-table-column>

            <el-table-column
              prop="venname"
              label="供应商">
            </el-table-column>
            <el-table-column
              prop="stockqty"
              label="数量"
              width="90px">
            </el-table-column>
            <el-table-column
              label="质检状态">
              <template slot-scope="scope">
                <span v-if="scope.row.checkstatus==0">未报检</span>
                <span v-else-if="scope.row.checkstatus==1">已报检</span>
                <span v-else-if="scope.row.checkstatus==2">合格</span>
                <span v-else></span>

              </template>
            </el-table-column>
            <el-table-column
              prop="createtime"
              label="IN时间"
              width="180px">
            </el-table-column>
          </el-table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted(){
    this.isActive=this.productIsOpen
  },
  props:{
    productIsOpen:{
      type:Boolean,
      required:true
    },
    proInfo:{
      type:Array
    },
    productCode:{
      type:String,
      required:true
    }
  },
  data() {
    return {
      isActive:false
    }
  },
  methods:{
    
    // 修改table的背景颜色
    tableRowClassName({row, rowIndex}) {
      if(rowIndex % 2===0){
        return 'single';
      }else if(rowIndex % 2!==0){
        return 'double';
      }
      return ''
    },
    //关闭货物明细框
    closePro(){
      this.isActive=false;
      this.$emit('closePro',false)
    },
    clickOther(e){
      if(e.target.className=="product-modal" ){
        this.closePro()
      }
    }
  }
}
</script>
<style lang="scss">

  .product-modal{
    position:fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    min-width: 1680px;
  }
  .product-info{
    width: 65%;
    height: 70%;
    background-color: #001d3d;
  }
  .product-header{
    height: 50px;
    background-color: #3760a4;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .cursor{
    cursor: pointer;
  }

</style>