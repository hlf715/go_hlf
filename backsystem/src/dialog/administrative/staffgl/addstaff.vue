<template>
  <div id="addstaff">
    <el-dialog
      width="500px"
      :title="dialogAddStaff.title"
      :visible.sync="dialogAddStaff.isOpen"
      :close-on-click-modal="false"
    >
      <el-form :model="addstaffForm" label-width="90px">
        
         <el-form-item label="头像：">
            <el-avatar shape="square" :size="70" :src="squareUrl" class="float-l" style="margin-right:10px"></el-avatar>
            <el-upload
               class="uploadC float-l"
               ref="upload"
               action="https://jsonplaceholder.typicode.com/posts/"
               :on-preview="handlePreview"
               :show-file-list="false"
               :on-remove="handleRemove"
               :auto-upload="false">
               <el-button slot="trigger" size="mini" type="info" plain>浏览</el-button>
               <!-- <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button> -->
            </el-upload>
         </el-form-item>

         <p style="font-size:12px;padding-left:89px;margin-bottom:10px;">建议上传尺寸：200*200，图片仅支持JPG、PNG格式，图片小于1MB</p>

         <el-form-item label="姓名：">
            <el-input v-model="addstaffForm.name" size="mini" placeholder="请输入员工姓名" style="width:178px;"></el-input>
         </el-form-item>
         
         <el-form-item label="性别：">
            <el-radio-group v-model="addstaffForm.sex" size="mini">
               <el-radio :label="1">男</el-radio>
               <el-radio :label="2">女</el-radio>
            </el-radio-group>
         </el-form-item>
      
         <el-form-item label="身份证号：">
            <el-input v-model="addstaffForm.idnumber" size="mini" placeholder="请输入身份证号" style="width:178px;"></el-input>
         </el-form-item>
      
         <el-form-item label="工号：">
            <el-input v-model="addstaffForm.jobnumber" size="mini" placeholder="请输入自定义工号" style="width:178px;"></el-input>
         </el-form-item>
         
         <el-form-item label="联系方式：">
            <el-input v-model="addstaffForm.phone" size="mini" placeholder="请输入联系方式" style="width:178px;"></el-input>
         </el-form-item>
         
         <el-form-item label="工作性质：">
            <el-select v-model="addstaffForm.isFulltime" size="mini" style="width:178px;">
               <el-option label="全职" value="1"></el-option>
               <el-option label="兼职" value="2"></el-option>
            </el-select>
         </el-form-item>
      
         <el-form-item label="岗位：">
            <el-button type="text" size="mini" icon="el-icon-plus">添加岗位</el-button>
         </el-form-item>
      
         <el-form-item label="入职时间：">
            <el-date-picker style="width:178px !important;"
               v-model="addstaffForm.date"
               type="date"
               size="mini"
               :editable="false"
               placeholder="选择日期"
               format="yyyy 年 MM 月 dd 日"
               value-format="yyyy-MM-dd"
            ></el-date-picker>
         </el-form-item>
         
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="dialogAddStaff.isOpen = false">取 消</el-button>
        <el-button type="primary" size="mini" @click="dialogAddStaff.isOpen = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "addstaff",
  data() {
    return {
      dialogAddStaff: {
        isOpen: false,
        title: "新增潜客",
      },
      addstaffForm: {
         name: "",
         sex: 1,
         idnumber:'',
         jobnumber:'',
         phone:'',
         isFulltime:'1',
         date: "",
      },
      squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
    };
  },
  methods:{
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }
  }
};
</script>
<style scoped>
   .el-form-item{
      margin-bottom: 5px;
   }
  .uploadC{
     margin-top: 35px;
  }
</style>