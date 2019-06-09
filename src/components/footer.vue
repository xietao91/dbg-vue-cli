<!--  -->
<template>
  <div class="header">
    <a href="http://www.tbsi.edu.cn/en" class="retina-logo">
      <img src="http://www.tbsi.edu.cn/en/Uploads/2017-11-15/5a0bbdc171bb7.png" alt="Logo">
    </a>

    <!-- <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="Home" name="home"></el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth"
          >定时任务补偿</el-tab-pane
        >
    </el-tabs>-->
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="home">Home</el-menu-item>
      <el-menu-item index="people">People</el-menu-item>
      <el-menu-item index="news">News</el-menu-item>
      <el-menu-item index="research">Research</el-menu-item>
      <el-menu-item index="publication">Publication</el-menu-item>
      <el-menu-item index="contact">Contact</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "home"
    };
  }
};
</script>
<style scoped>
.header {
  height: 100px;
  width: 100%;
  background: #fff;
  text-align: center;
  line-height: 100px;
  font-size: 25px;
  font-weight: bold;
  position: fixed;
  z-index: 2;
  display: flex;
  justify-content: space-around;
}
</style>