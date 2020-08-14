<template>
    <div id="addholiday">
        <el-dialog width="540px" 
        :title="dialogAddholiday.title" 
        :visible.sync="dialogAddholiday.isOpen" 
        :close-on-click-modal="false"
        >

            <el-form :model="form_holiday" ref="form_holiday" :rules="rules" label-width="80px">
                <el-form-item label="节假日"  prop="holidayname">
                    <el-row>
                        <el-col :span="24">
                            <el-input v-model="form_holiday.holidayname" placeholder="请输入节假日名称"></el-input>
                        </el-col>
                    </el-row>
                </el-form-item>
                <el-form-item label="日期" prop="datetxt">
                    <el-row>
                        <el-col :span="24">
                            <el-date-picker v-model="form_holiday.datetxt" type="daterange" align="right" unlink-panels size="small"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期"
                                format="yyyy 年 MM 月 dd 日"
                                value-format="yyyy-MM-dd"
                                :picker-options="this.defaultCheckDate">
                            </el-date-picker>
                        </el-col>
                    </el-row>
                </el-form-item>
                <el-form-item label="描述">
                    <el-row>
                        <el-col :span="24">
                              <el-input v-model="form_holiday.describe" type="textarea" :rows="4" placeholder="请输入节假日描述"></el-input>
                        </el-col>
                    </el-row>
                </el-form-item>
            </el-form>

            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogAddholiday.isOpen = false">取 消</el-button>
                <el-button type="primary" @click="submitForm('form_holiday')">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
    import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
    export default {
        name:'addholiday',
        data(){
            return{
                dialogAddholiday:{
                    isOpen:false,
                    title:'添加节假日'
                },
                form_holiday:{
                    holidayname:'',
                    datetxt:[],
                    describe:''
                },
                rules: {
                    holidayname: [
                        { required: true, message: '请输入节假日名称', trigger: 'blur' }
                    ],
                    datetxt: [
                        { required: true, message: '请选择时间', trigger: 'change' }
                    ]
                }
            }
        },
        methods:{
            submitForm(formName) {
                console.log(this.form_holiday.datetxt)
                return;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.dialogAddholiday.isOpen = false
                    } else {
                        console.log('验证错误！')
                        return false;
                    }
                });
            },
            resetForm(formName) {
                if(this.$refs[formName] != undefined){
                    console.log(formName)
                    this.$refs[formName].resetFields();
                }
            }
        },
        computed:{
            ...mapState(['defaultCheckDate'])
        },
    }
</script>
<style scoped>
    .el-date-editor{
        width: 100% !important;
    }
</style>