<template>
  <div id="Login">
    <el-form :model="loginForm" :rules="rules2" ref="loginForm" label-width="100px">
      <el-form-item label="账号：" prop="username">
        <el-input type="text" v-model="loginForm.username" placeholder="用户名"></el-input>
      </el-form-item>

      <el-form-item label="密码：" prop="password">
        <el-input type="password" v-model="loginForm.password" placeholder="密码"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="handleSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
         username:'',
         password:''
      },
      rules2: {
        account: [{ required: true, message: "请输入账号", trigger: "blur" }],
        checkPass: [{ required: true, message: "请输入密码", trigger: "blur" }],
      }
    };
  },
  methods: {
      handleSubmit() {
         var data = {
            username: this.loginForm.username, //18258176817
            password: this.loginForm.password,  //123456
         };
         this.$http.post('http://192.168.10.189:8010/api/user/login',data,{emulateJSON:true}).then((res) => {
               console.log(res.data)
         }).catch(function (error) {
               console.log("出错喽：" + error);
         });
         // requestLogin(loginParams).then((data) => {
         //    let { msg, code, user } = data;
         //    if (code !== 200) {
         //       this.$message({
         //          message: msg,
         //          type: "error",
         //       });
         //    } else {
         //       // if (user.type === "admin") {
         //       //    sessionStorage.setItem("user", JSON.stringify(user));
         //       //    this.$router.push({ path: "/homepage" });
         //       // } else if (user.type === "advert") {
         //       //    sessionStorage.setItem("user", JSON.stringify(user));
         //       //    this.$router.push({ path: "/table" });
         //       // }
         //    }
         // });
      } 
   },
    //  forgetpassword() {
    //    this.$alert("请联系管理员找回密码，管理员电话：131xxxxxxxx", "提示", {
    //      confirmButtonText: "确定",
    //      type: "warning",
    //    });
    //  },
};
</script>

<style scoped>
#Login {
  width: 350px;
  margin: 0 auto;
  margin-top: 250px;
}
</style>