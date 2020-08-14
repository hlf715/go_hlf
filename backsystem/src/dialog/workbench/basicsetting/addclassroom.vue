<template>
    <div id="addclassroom">
        <el-dialog width="540px" 
        :title="dialogAddclassroom.title" 
        :visible.sync="dialogAddclassroom.isOpen" 
        :close-on-click-modal="false"
        >
            <el-form :model="form_addclassroom" ref="form_addschool" :rules="rules" label-width="120px">
                <el-form-item label="教室名"  prop="classroomname">
                    <el-row>
                        <el-col :span="24">
                            <el-input v-model="form_addclassroom.classroomname" placeholder="请输入教室名称或者编号"></el-input>
                        </el-col>
                    </el-row>
                </el-form-item>
                <el-form-item label="容量（学员）"  prop="maxnumber">
                    <el-row>
                        <el-col :span="24">
                            <el-input v-model="form_addclassroom.maxnumber" placeholder="场地内最大学员容纳数量"></el-input>
                        </el-col>
                    </el-row>
                </el-form-item>
            </el-form>

            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogAddclassroom.isOpen = false">取 消</el-button>
                <el-button type="primary" @click="submitForm('form_addclassroom')">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
    export default {
        name:'addclassroom',
        data(){
            return{
                dialogAddclassroom:{
                    isOpen:false,
                    title:'新增教室'
                },
                form_addclassroom:{
                    classroomname:'',
                    maxnumber:''
                },
                rules:{
                    classroomname: [
                        { required: true, message: '请输入教室名称或者编号', trigger: 'blur' }
                    ],
                    maxnumber: [
                        { required: true, message: '请输入场地内最大学员容纳数量', trigger: 'blur' }
                    ]
                }
            }
        },
        methods:{
            submitForm(){

            }
        }
    }
</script>