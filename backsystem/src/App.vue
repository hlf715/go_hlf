<template>
  <div id="app">
    <el-container>
      <div>
        <el-aside :width="isCollapse?'50px':'200px'">
          <div class="avatarmsg">
            <el-avatar :size="avatarsize" :src="circleUrl"></el-avatar>
            <p v-if="!isCollapse">海鸥助教</p>
          </div>
          <el-menu
            background-color="#272a36"
            text-color="#fff"
            unique-opened
            :collapse="isCollapse"
            router
            :default-active="$route.path"
          >
            <el-submenu v-for="(data,index) in datas" :index="data.index" :key="index">
              <template slot="title">
                <i class="el-icon-setting" style="margin-right:12px;"></i>
                {{data.name}}
              </template>
              <el-menu-item
                style="height:38px;line-height:38px;font-size:12px;"
                v-for="(child,index) in data.children"
                :index="child.path"
                :key="index"
              >{{child.name}}</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
      </div>

      <el-container style="min-width: 980px;">
        <el-header height="45px">
          <el-button
            class="toleft"
            size="mini"
            type="info"
            icon="el-icon-more"
            circle
            @click="FunisCollapse"
          ></el-button>
          <span class="float-r headermsg">
            <span @click="FunChangeavatar">
              <el-avatar class="float-l" style="margin:10px 3px 0 0;" :size="25" :src="circleUrl"></el-avatar>
            </span>
            <span class="float-l">你好，胡老师</span>
          </span>
          <span class="float-r headermsg" @click="FunGobasicsetting">
            <i class="el-icon-setting" style="margin-right:3px;"></i>基础设置
          </span>
          <span class="float-r headermsg">
            <i class="el-icon-question" style="margin-right:3px;"></i>帮助中心
          </span>
        </el-header>

        <el-scrollbar style="height:100%;">
          <el-main>
            <router-view />
          </el-main>
        </el-scrollbar>
      </el-container>
    </el-container>


    <changeavatar v-bind:circleUrl="circleUrl" ref="changeavatar"></changeavatar>

  </div>
</template>

<script>
import changeavatar from "./dialog/workbench/changeavatar";
export default {
  name: "App",
  components: {
    changeavatar,
  },
  data() {
    return {
      avatarsize: 65,
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      datas: [],
      isCollapse: false,
    };
  },
  methods: {
    FunisCollapse() {
      let that = this;
      that.isCollapse = !that.isCollapse;
      that.avatarsize = that.isCollapse ? 35 : 65;
    },
    FunGobasicsetting(){
      this.$router.push('/basicsetting/BasicSetting')
    },
    FunChangeavatar() {
      this.$refs.changeavatar.dialogVisible = true;
    },
  },
  created() {
    //请求本地json
    this.$http
      .get("/api/menuList")
      .then(function (response) {
        var data = response.data.data;
        this.datas = data;
      })
      .catch(function (error) {
        console.log("出错喽：" + error);
      });
  },
};
</script>

<style>
#app {
  height: 100%;
}

.el-scrollbar__wrap {
  overflow-x: hidden;
  background: #f5f7fc;
}

.el-container {
  height: 100%;
}

.el-aside {
  background: #272a36;
  text-align: center;
  height: 100%;
  overflow-x: hidden;
}
.avatarmsg {
  height: 106px;
  padding-top: 22px;
}
.avatarmsg p {
  margin-top: 10px;
  color: #d4d4d7;
}

.el-menu-item,
.el-submenu__title {
  height: 48px;
  line-height: 48px;
}
.el-submenu__title {
  padding-left: 10px !important;
}

.el-menu-item,
.el-submenu,
.el-submenu__title {
  text-align: left;
}

.el-header {
  background-color: #ffffff;
  color: #333;
  line-height: 45px;
  min-width: 980px;
}
.headermsg {
  height: 100%;
  margin-left: 20px;
  cursor: pointer;
}

.el-main {
  background-color: #f5f7fc;
  color: #333;
  height: 100%;
  min-width: 980px;
}
</style>