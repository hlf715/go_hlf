<template>
    <div id="CampusSetting">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px">
            
            <el-form-item label="校区名称" prop="schoolname">
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-input v-model="ruleForm.schoolname" placeholder="请输入校区名称"></el-input>
                    </el-col>
                </el-row>
            </el-form-item>

            <el-form-item label="校区地址">
                <el-row :gutter="20">
                    <el-col :span="3">
                        <el-form-item prop="select_address1">
                            <el-select v-model="ruleForm.select_address1" placeholder="请选择省份">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="3">
                        <el-form-item prop="select_address2">
                            <el-select v-model="ruleForm.select_address2" placeholder="请选择市区">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item prop="txt_address">
                            <el-input v-model="ruleForm.schoolname" placeholder="请输入具体地址"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item>
                <el-row :gutter="20">
                    <el-col :span="12">
                        <div>

                        </div>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item label="营业时间" prop="bussnisstime">
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-input v-model="ruleForm.bussnisstime" placeholder="请输入营业时间"></el-input>
                    </el-col>
                </el-row>
            </el-form-item>

            
            <el-form-item label="联系电话">
                <el-row :gutter="20">
                    <el-col :span="6">
                        <el-form-item prop="select_address2">
                            <el-input v-model="ruleForm.schoolname" placeholder="请输入联系电话"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item prop="txt_address">
                            <el-input v-model="ruleForm.schoolname" placeholder="请输入联系电话"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form-item>


        </el-form>
    </div>
</template>
<script>
    export default {
        name: "CampusSetting",
        data() {
            return {
                ruleForm: {
                    schoolname: '',
                    select_address1: '',
                    select_address2: '',
                    txt_address:'',
                    bussnisstime:'',

                },
                rules: {
                    schoolname: [
                        { required: true, message: '请输入校区名称', trigger: 'blur' }
                    ],
                    select_address1: [
                        { required: true, message: '请选择活动区域', trigger: 'change' }
                    ],
                    select_address2: [
                        { required: true, message: '请选择活动区域', trigger: 'change' }
                    ],
                    txt_address: [
                        { required: true, message: '请输入具体地址', trigger: 'blur' }
                    ],
                }
            };
        },
        methods: {
            
        }
    };
</script>
<style scoped>

</style>