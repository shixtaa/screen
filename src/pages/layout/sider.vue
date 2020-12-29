<template>
  <div class="sider">
    <img class="cursor" src="../../assets/imgs/sider.png" alt="sider" @click="openSider">
    <div class="sider-right">
      <div class="color-box">
        <div class="color-item  nullColor " ></div>
        <span>空</span>
        <div class="color-item  notNullColor" ></div>
        <span>非空</span>
        <div class="color-item  strangeColor" ></div>
        <span>异常</span>
      </div>
      <div class="search">
        <img  class="search cursor" src="../../assets/imgs/search.png" alt="search" @click="openSearch">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods:{
    // 打开搜索框
    openSearch(){
      this.$emit('openSearch',true)
    },
    // 打开侧边栏
    openSider(){
      this.$emit('openSider',true)
    },
  }
}
</script>
<style lang="scss">
  // 顶部侧边栏及搜索
.sider{
  height: 30px;
  margin-bottom: 10px;
  display:flex;
  justify-content: space-between;
  padding: 0 20px;
  .sider-right{
    display: flex;
    align-items: center;
    .color-box{
      display: flex;
      align-items: center;
      color: #fff;
      .color-item{
        width: 15px;
        height: 15px;
        margin:0 10px;
      }
    }
    .search{
      width: 20px;
      height: 20px;
      margin: 0 20px;
    }
  }
}
//空的颜色
.nullColor{
  background-color: #10276d;
}
//非空的颜色
.notNullColor{
  background-color: #f71f4d;
}
//异常的颜色
.strangeColor{
  background-color: #ffab03;
}
</style>