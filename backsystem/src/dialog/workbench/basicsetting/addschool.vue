<template>
    <div id="addschool">
        <el-dialog width="540px" 
        :title="dialogAddschool.title" 
        :visible.sync="dialogAddschool.isOpen" 
        :close-on-click-modal="false"
        >
            <el-form :model="form_addschool" ref="form_addschool" :rules="rules" label-width="80px">
                <el-form-item label="学校名称"  prop="schoolname">
                    <el-row>
                        <el-col :span="24">
                            <el-input v-model="form_addschool.schoolname" placeholder="请输入学校名称"></el-input>
                        </el-col>
                    </el-row>
                </el-form-item>
            </el-form>

            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogAddschool.isOpen = false">取 消</el-button>
                <el-button type="primary" @click="submitForm('form_addschool')">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
    export default {
        name:'addschool',
        data(){
            return{
                dialogAddschool:{
                    isOpen:false,
                    title:'新增学校'
                },
                form_addschool:{
                    schoolname:''
                },
                rules: {
                    schoolname: [
                        { required: true, message: '请输入新增学校名称', trigger: 'blur' }
                    ]
                }
            }
        },
        methods:{
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.dialogAddschool.isOpen = false
                    } else {
                        console.log('验证错误！')
                        return false;
                    }
                });
            },
            resetForm(formName) {
                if(this.$refs[formName] != undefined){
                    this.$refs[formName].resetFields();
                }
            }
        }
    }
</script>
<style scoped>
    .el-date-editor{
        width: 100% !important;
    }
</style>