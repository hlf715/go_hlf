<template>
    <div id="createcourse">
        <el-dialog width="720px" :title="dialogCreatecourse.title" :visible.sync="dialogCreatecourse.isOpen" :close-on-click-modal="false">
            <el-form :model="createcourseForm" :rules="createcourseRules" ref="createcourseForm" label-width="100px">
                <el-form-item label="开课名称" prop="coursename">
                    <el-input v-model="createcourseForm.coursename" placeholder="请输入课程名称"></el-input>
                </el-form-item>
                <el-form-item label="开课时间" prop="starttime">
                    <el-date-picker type="date" placeholder="选择开始日期" v-model="createcourseForm.starttime"></el-date-picker>
                </el-form-item>
                <el-form-item label="课程负责老师" prop="teachertag">
                    <el-tag class="margin-right5" :key="tag" v-for="tag in createcourseForm.teachertag" closable  @close="teachertagdel(tag)">
                        {{tag}}
                    </el-tag>
                    <el-dropdown trigger="click">
                        <span class="el-dropdown-link">
                           <el-button size="mini" type="text" icon="el-icon-plus">添加老师</el-button>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-input style="width:150px;padding:5px;" v-model="input_search" placeholder="搜索" clearable></el-input>
                            <el-dropdown-item>狮子头</el-dropdown-item>
                            <el-dropdown-item>螺蛳粉</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <p style="color:#999999;font-size:12px;">已添加的课程负责老师可以浏览并管理我的课程。</p>
                </el-form-item>
            </el-form>
            


            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogCreatecourse.isOpen = false">取 消</el-button>
                <el-button type="primary" @click="submitForm('createcourseForm')">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
    export default{
        name:'createcourse',
        data(){
            return{
                dialogCreatecourse:{
                    isOpen:false,
                    title:''
                },
                createcourseForm:{
                    coursename:'',
                    starttime:[],
                    teachertag:[]
                },
                input_search:'',
                createcourseRules: {
                    coursename:[
                        { required: true, message: '请输入课程名称', trigger: 'blur' }
                    ],
                    starttime: [
                        { required: true, message: '请选择开课时间', trigger: 'change' }
                    ],
                }
            }
        },
        methods:{
            teachertagdel(tag){
                console.log(tag)
                this.createcourseForm.teachertag.splice(this.createcourseForm.teachertag.indexOf(tag), 1);
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        
                    } else {
                        return false;
                    }
                });
            }
        }
    }
</script>
<style scoped>
    .el-input{
        width: 250px;
    }

    .el-input-number{
        line-height: 30px;
    }
</style>