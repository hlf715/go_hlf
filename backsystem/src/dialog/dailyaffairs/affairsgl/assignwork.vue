<template>
    <div id="assignwork">
        <el-dialog width="720px" :title="dialogAssignwork.title" :visible.sync="dialogAssignwork.isOpen" :close-on-click-modal="false">
            <el-form :model="workForm" :rules="workFormRules" ref="workForm" label-width="100px">
                <el-form-item label="作业标题" prop="worktitle">
                    <el-input v-model="workForm.worktitle" placeholder="请输入作业标题"></el-input>
                </el-form-item>
                <el-form-item label="班级" prop="worktags">
                    <el-tag class="margin-right5" :key="tag" v-for="tag in workForm.worktags" closable  @close="classTagdelete(tag)">
                        {{tag}}
                    </el-tag>
                    <el-button size="mini" type="text" icon="el-icon-plus" @click="FunOpencheckclass">选择班级</el-button>
                </el-form-item>
                <el-form-item label="开始时间" prop="datestart">
                    <el-date-picker type="date" placeholder="选择开始日期" v-model="workFormRules.datestart"></el-date-picker>
                </el-form-item>
                <el-form-item label="结束时间" prop="dateend">
                    <el-date-picker type="date" placeholder="选择结束日期" v-model="workFormRules.dateend"></el-date-picker>
                </el-form-item>
                <el-form-item label="总打卡次数" prop="punchnum">
                    <el-input-number v-model="workForm.punchnum" :min="0"></el-input-number>
                </el-form-item>
                <el-form-item label="作业内容">
                    <el-input type="textarea" v-model="workFormRules.workcontent"></el-input>
                    <el-button size="mini" type="text" icon="el-icon-plus">资料库</el-button>
                    <el-divider direction="vertical"></el-divider>
                    <el-button size="mini" type="text" icon="el-icon-plus">本地上传</el-button>
                    <el-tooltip effect="dark" content="图片支持JPG、PNG，音频支持MP3文件，视频支持MP4文件（大小不得超过500M）" placement="right">
                        <el-button type="text" style="color:#999999;">上传文件须知
                            <i class="el-icon-question" style="color:#f78f93;"></i>
                        </el-button>
                    </el-tooltip>
                </el-form-item>
                <el-form-item label="定时提醒">
                    <el-switch v-model="workFormRules.remind" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
                    <el-tooltip effect="dark" content="开启后，每天18：00左右系统自动提醒当天未提交打卡作业的学员（已完成打卡的学员除外）" placement="right">
                        <el-button type="text" style="color:#999999;">开启提示
                            <i class="el-icon-question" style="color:#f78f93;"></i>
                        </el-button>
                    </el-tooltip>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogAssignwork.isOpen = false">取 消</el-button>
                <el-button type="primary" @click="submitForm('workForm')">确 定</el-button>
            </span>

            <el-dialog width="980px" :title="dialogAssignwork.innerTitle" :visible.sync="dialogAssignwork.innerIsopen" append-to-body :close-on-click-modal="false">
                <el-row class="margin-bottom10">
                    <el-col :span="24">
                        <el-input placeholder="请输入班级名称" v-model="serachTxt" class="input-search float-l margin-right10" size="small">
                            <el-button slot="append" icon="el-icon-search"></el-button>
                        </el-input>
                        <el-dropdown trigger="click" class="margin-right5 cr-pointer">
                            <span class="el-dropdown-link">
                                课程<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                        <el-dropdown trigger="click" class="margin-right5 cr-pointer">
                            <span class="el-dropdown-link">
                                学年<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                        <el-dropdown trigger="click" class="margin-right5 cr-pointer">
                            <span class="el-dropdown-link">
                                学期<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                        <el-dropdown trigger="click" class="margin-right5 cr-pointer">
                            <span class="el-dropdown-link">
                                老师<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                        <el-dropdown trigger="click" class="margin-right5 cr-pointer">
                            <span class="el-dropdown-link">
                                上课星期<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                        <el-divider direction="vertical"></el-divider>
                        <el-radio-group v-model="isFullclass" class="margin-right5">
                            <el-radio :label="2">满班</el-radio>
                            <el-radio :label="4">未满班</el-radio>
                        </el-radio-group>
                        <el-button type="text" size="small" class="margin-left5">重置</el-button>
                    </el-col>
                </el-row>

                <el-row class="margin-bottom10">
                    <el-col :span="24">
                        <el-table :data="tableData"  @selection-change="FunTableCheck" row-key="id" fit highlight-current-row style="width: 100%">
                            <el-table-column fixed align="center" type="selection" width="45">

                            </el-table-column>
                            <el-table-column label="班级名称" width="180">
                                <template slot-scope="{row}">
                                    <span>{{ row.name }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column label="课程" width="150">
                                <template slot-scope="{row}">
                                    <span>{{ row.name }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column label="适龄" width="80">
                                <template slot-scope="{row}">
                                    <span>{{ row.name }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column label="人数" width="80">
                                <template slot-scope="{row}">
                                    <span>{{ row.name }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column label="开班时间">
                                <template slot-scope="{row}">
                                    <span>{{ row.name }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column label="上课时间">
                                <template slot-scope="{row}">
                                    <span>{{ row.name }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column label="老师" width="100">
                                <template slot-scope="{row}">
                                    <span>{{ row.name }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column label="教学进度" width="120">
                                <template slot-scope="{row}">
                                    <span>{{ row.name }}</span>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-pagination
                            :current-page="currentData.currentPage"
                            background
                            :page-sizes="[5, 10, 15, 20]"
                            :page-size="5"
                            :pager-count="5"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="currentData.currentTotal">
                        </el-pagination>
                    </el-col>
                </el-row>
                <span slot="footer" class="dialog-footer">
                    <span class="float-l">已选中<strong style="color:red;"> {{checkedNum}} </strong>个</span>
                    <el-button @click="dialogAssignwork.innerIsopen = false">取 消</el-button>
                    <el-button type="primary">确 定</el-button>
                </span>
            </el-dialog>


        </el-dialog>
    </div>
</template>
<script>
    export default {
        name:'assignwork',
        data(){
            var validaworktags =  (rule, value, callback) => {
                if(value.length === 0){
                    callback(new Error('请选择班级'));
                }else{
                    callback();
                }
            };
            var validapunchnum = (rule, value, callback) => {
                if (value === 0) {
                    callback(new Error('请输入打卡次数'));
                }else{
                    callback();
                }
            };
            return{
                dialogAssignwork:{
                    isOpen:false,
                    title:'布置打卡作业',
                    innerIsopen:false,
                    innerTitle:'选择班级'
                },
                serachTxt:'',
                isFullclass:'',
                tableData:[
                    {name: "王小虎" },
                    {name: "王小虎" }
                ],
                table_checked:[],
                currentData:{
                    currentPage: 1,
                    currentTotal:2,
                },
                checkedNum:0,

                workForm: {
                    worktitle: '',
                    worktags:['q','33',"第一课程第一个班"],
                    datestart:[],
                    dateend:[],
                    punchnum:'',
                    workcontent:'',
                    remind:false
                },
                workFormRules: {
                    worktitle:[
                        { required: true, message: '请输入作业标题', trigger: 'blur' }
                    ],
                    worktags:[
                       { validator: validaworktags, trigger: 'change' }
                    ],
                    datestart: [
                        { required: true, message: '请选择开始时间', trigger: 'change' }
                    ],
                    dateend: [
                        { required: true, message: '请选择结束时间', trigger: 'change' }
                    ],
                    punchnum: [
                        { validator: validapunchnum, trigger: 'change' }
                    ]
                }

            }
        },
        methods:{
            classTagdelete(tag){
                console.log(tag)
                this.workForm.worktags.splice(this.workForm.worktags.indexOf(tag), 1);
            },
            FunOpencheckclass(){
                this.dialogAssignwork.innerIsopen = true
            },
            FunTableCheck(val) {
                console.log(val.length)
                this.table_checked = val;
                this.checkedNum = val.length
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