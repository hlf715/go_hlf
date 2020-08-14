<template>
    <div id="ChannelGL">
        <el-row class="margin-bottom15">
            <el-col :span="12">
                <el-input placeholder="请输入渠道名称、类型、备注" v-model="serachTxt" class="input-search margin-right10 float-l" size="small">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </el-col>
            <el-col :span="12">
                <el-button class="float-r" type="danger" size="small" icon="el-icon-s-operation" @click="openAddChnnel">新增渠道</el-button>
            </el-col>
        </el-row>
        <el-row class="margin-bottom15">
            <el-col :span="24">
                <el-table :data="tableData" row-key="id" fit highlight-current-row style="width: 100%">
                    <el-table-column label="渠道名称" min-width="120">
                        <template slot-scope="{row}">
                            <span>{{ row.date }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column label="渠道类型" min-width="120">
                        <template slot-scope="{row}">
                            <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column label="备注" width="500">
                        <template slot-scope="{row}">
                            <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column label="操作" align="center" width="250">
                        <template slot-scope="{}">
                            <el-button size="mini" type="text">编辑</el-button>
                            <el-button size="mini" type="text">删除</el-button>
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
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="currentData.currentTotal">
                </el-pagination>
            </el-col>
        </el-row>

        <el-dialog :title="dialogAddChanel.title" :visible.sync="dialogAddChanel.isOpen" :close-on-click-modal="false" width="580px">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
                <el-form-item label="活动名称" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="渠道类型" prop="region">
                    <el-select v-model="ruleForm.region" placeholder="请选择渠道类型">
                        <el-option label="电话来访" value="1"></el-option>
                        <el-option label="校区到访" value="2"></el-option>
                        <el-option label="地推活动" value="3"></el-option>
                        <el-option label="网络渠道" value="4"></el-option>
                        <el-option label="异业合作" value="5"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="活动形式">
                    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogAddChanel.isOpen = false">取 消</el-button>
                <el-button type="primary" @click="addChnnelConfirm('ruleForm')">确 定</el-button>
            </div>
        </el-dialog>

    </div>
</template>
<script>
    export default {
        name:'ChannelGL',
        data(){
            return{
                serachTxt:'',
                tableData:[
                    {date: "2016-05-02",name: "王小虎", address: "上海市普陀区金沙江路 1518 弄", },
                    {date: "2016-05-04",name: "王小虎", address: "上海市普陀区金沙江路 1517 弄", }
                ],
                currentData:{
                    currentPage: 1,
                    currentTotal:500,
                },

                dialogAddChanel:{
                    isOpen:false,
                    title:'新增渠道'
                },
                ruleForm: {
                    name: '',
                    region: '',
                    desc: ''
                },
                rules: {
                    name: [
                        { required: true, message: '请输入渠道名称', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    region: [
                        { required: true, message: '请选择渠道类型', trigger: 'change' }
                    ]
                }
            }
        },
        methods:{
            openAddChnnel(){
                this.dialogAddChanel.isOpen = true;
            },
            addChnnelConfirm(formName) {
                this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.dialogAddChanel.isOpen = false
                } else {
                    console.log('error submit!!');
                    return false;
                }
                });
            }
        }
    }
</script>
<style scoped>
    #ChannelGL{
        background: #ffffff;
        padding: 15px;
    }
</style>