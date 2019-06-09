<template>
  <div class="content">
    <el-row :gutter="32">
      <el-col
        :lg="6"
        :xl="4"
        :md="8"
        :sm="12"
        :xs="24"
        v-for="(profile, index) in profiles"
        :key="index"
      >
        <div class="container">
          <h3>{{ index + 1 }}. {{ profile.name }}</h3>
          <el-image :src="profile.imgSrc"></el-image>
          <div>{{ profile.degree }}</div>
          <div>{{ profile.email }}</div>
          <div>{{ profile.graduatedSchool }}</div>
          <div>{{ profile.joinedTime }}</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profiles: [
        {
          name: "Wei Mei",
          imgSrc: require("../assets/person-1.jpg"),
          degree: "Postdoc",
          email: "meiwei2019@sz.tsinghua.edu.cn",
          graduatedSchool: "Ph.D. Shanghai Jiao Tong University",
          joinedTime: "Dr. Mei joined the group in Apr. 2019."
        },
        {
          name: "Wenzhan Xu",
          imgSrc: require("../assets/person-2.jpg"),
          degree: "Postdoc",
          email: "xu.wenzhan @sz.tsinghua.edu.cn",
          graduatedSchool:
            "Ph.D. Materials Physics and Chemistry, South China University of Technology",
          joinedTime: "Dr. Xu joined the group in Spring 2019."
        },
        {
          name: "Ping Liu",
          imgSrc: require("../assets/person-3.jpg"),
          degree: "PhD Student",
          email: "liu-p16@mails.tsinghua.edu.cn",
          graduatedSchool:
            "B.S. Materials Science and Engineering, NUAA (2016)",
          joinedTime: "Ms. Liu joined the group in Fall of 2019."
        },
        {
          name: "Cong Zhao",
          imgSrc: require("../assets/person-4.jpg"),
          degree: "Ms student",
          email: "meiwei2019@sz.tsinghua.edu.cn",
          graduatedSchool: "zhao-c18@mails.tsinghua.edu.cn",
          joinedTime: "Cong Zhao joined the group in Fall of 2018."
        },
        {
          name: "Chunyun Wang",
          imgSrc: require("../assets/person-5.jpg"),
          degree: "Postdoc",
          email: "wangchunyun@sz.tsinghua.edu.cn",
          graduatedSchool:
            "Ph.D. Materials chemistry and engineering, Hokkaido University (2017)",
          joinedTime: "Dr. Wang joined the group in Winter 2018."
        },
        {
          name: "Yue Yao",
          imgSrc: require("../assets/person-6.jpg"),
          degree: "Ms student",
          email: "cumtb_yaoyue@163.com/598304907@qq.com",
          graduatedSchool: "",
          joinedTime: "Yue Yao joined the group in Fall 2018"
        }
      ]
    };
  }
};
</script>
<style scoped>
.container {
  height: 420px;
  width: 255px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 16px;
  word-wrap: break-word;
  font-size: 14px;
  background-color: #fff;
}

.container .el-image {
  width: 170px;
  height: 225px;
  /* transform: translateX(25%); */
  padding-bottom: 10px;
}

.container .el-image img {
  border-radius: 4px;
}
</style>

