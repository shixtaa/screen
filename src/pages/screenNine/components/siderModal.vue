<template>
  <div class="sider-modal">
    <div class="left-sider">
      <div class="sider-header">
        <img src="../../../assets/imgs/shrink.png" alt="shrink" @click="shrink">
      </div>
      <div class="sider-table">
        <el-table
          :data="tableData"
          stripe
          style="width: 100%">
          <el-table-column
            prop="NO"
            label="序号" 
            width="60px">
          </el-table-column>
          <el-table-column
            prop="IN_Time"
            label="IN时间"
            width="120px">
          </el-table-column>
          <el-table-column
            prop="MO_NO"
            label="工单号"
            width="120px">
          </el-table-column>
          <el-table-column
            prop="ERP_NO"
            label="ERP编码"
            width="120px">
          </el-table-column>
          <el-table-column
            prop="name"
            label="物料名称">
          </el-table-column>
          <el-table-column
            prop="count"
            label="数量">
          </el-table-column>
          <el-table-column
            prop="supplier"
            label="供应商">
          </el-table-column>
          <el-table-column
            prop="IN_Location"
            label="IN库位">
          </el-table-column>
          <el-table-column
            prop="quality"
            label="质检状态">
          </el-table-column>

        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    siderIsOpen:{
      type:Boolean,
      required:true
    }
  },
  data() {
    return {
      isOpen:false,
      tableData: [{
        NO: '1',
        IN_Time: '12.03 08:00:00',
        MO_NO: '20202014512',
        ERP_NO:'20202014512',
        name:"某某某",
        count:11,
        supplier:'某某某',
        IN_Location:"13BLP001",
        quality:'11'
      }, {
        NO: '2',
        IN_Time: '12.03 08:00:00',
        MO_NO: '20202014512',
        ERP_NO:'20202014512',
        name:"某某某",
        count:11,
        supplier:'某某某',
        IN_Location:"13BLP001",
        quality:'11'
      }, {
        NO: '3',
        IN_Time: '12.03 08:00:00',
        MO_NO: '20202014512',
        ERP_NO:'20202014512',
        name:"某某某",
        count:11,
        supplier:'某某某',
        IN_Location:"13BLP001",
        quality:'11'
      }, {
        NO: '4',
        IN_Time: '12.03 08:00:00',
        MO_NO: '20202014512',
        ERP_NO:'20202014512',
        name:"某某某",
        count:11,
        supplier:'某某某',
        IN_Location:"13BLP001",
        quality:'11'
      }, {
        NO: '5',
        IN_Time: '12.03 08:00:00',
        MO_NO: '20202014512',
        ERP_NO:'20202014512',
        name:"某某某",
        count:11,
        supplier:'某某某',
        IN_Location:"13BLP001",
        quality:'11'
      }, {
        NO: '6',
        IN_Time: '12.03 08:00:00',
        MO_NO: '20202014512',
        ERP_NO:'20202014512',
        name:"某某某",
        count:11,
        supplier:'某某某',
        IN_Location:"13BLP001",
        quality:'11'
      }]
    }
  },
  created(){
    this.isOpen=this.siderIsOpen;
  },
  methods:{
    shrink(){
      this.isOpen=false;
      this.$emit('closeSider',false)
    }
  }
}
</script>
<style lang="scss">
  .sider-modal{
    position:fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
  }
  .left-sider{
    width: 60vw;
    max-width: 850px;
    height: 100%;
    background-color: #001d3d;
  }
  .sider-header{
    height: 60px;
    width: 100%;
    position: relative;
    img{
      position: absolute;
      right: 30px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
</style>