<template>
    <div id="afterworkset">
        <el-dialog width="720px" :title="dialogAfterworkset.title" :visible.sync="dialogAfterworkset.isOpen" :close-on-click-modal="false">
            <el-row class="margin-bottom5">
                <el-col :span="24">
                    <span class="float-l line_height32">提醒课程：</span>
                    <el-button class="float-l" type="text" size="small" icon="el-icon-plus" @click="FunOpeninner">添加需要上传展示的课程</el-button>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <el-table :data="tableData" row-key="id" fit highlight-current-row style="width: 100%">
                        <el-table-column label="课程名称">
                            <template slot-scope="{row}">
                                <span>{{ row.name }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="操作" width="80">
                            <template slot-scope="{}">
                                <i class="el-icon-delete cr-pointer"></i>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-col>
            </el-row>
            
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogAfterworkset.isOpen = false">取 消</el-button>
                <el-button type="primary">确 定</el-button>
            </span>
           

            <el-dialog width="720px" :title="dialogAfterworkset.innerTitle" :visible.sync="dialogAfterworkset.innerIsopen" append-to-body :close-on-click-modal="false">
                <el-row class="margin-bottom10">
                    <el-col :span="24">
                        <el-input placeholder="请输入课程名称" v-model="serachTxt" class="input-search margin-right10 float-l" size="small">
                            <el-button slot="append" icon="el-icon-search"></el-button>
                        </el-input>
                        <el-radio-group v-model="classtype" class="margin-right5">
                            <el-radio :label="2">标准课</el-radio>
                            <el-radio :label="4">通用课</el-radio>
                            <el-radio :label="6">一对一</el-radio>
                            <el-radio :label="8">一对多</el-radio>
                        </el-radio-group>
                         <el-button type="text" size="small" class="margin-left5">重置</el-button>
                    </el-col>
                </el-row>

                <el-row class="margin-bottom10">
                    <el-col :span="24">
                        <el-table :data="tableData"  @selection-change="FunTableCheck" row-key="id" fit highlight-current-row style="width: 100%">
                            <el-table-column fixed align="center" type="selection" width="45">

                            </el-table-column>
                            <el-table-column label="课程名称" width="180">
                                <template slot-scope="{row}">
                                    <span>{{ row.name }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column label="上课方式" width="180">
                                <template slot-scope="{row}">
                                    <span>{{ row.name }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column label="类型" width="180">
                                <template slot-scope="{row}">
                                    <span>{{ row.name }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column label="课程类型">
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
                    <el-button @click="dialogAfterworkset.innerIsopen = false">取 消</el-button>
                    <el-button type="primary">确 定</el-button>
                </span>
            </el-dialog>
        </el-dialog>
    </div>
</template>
<script>
    export default {
        name:'afterworkset',
        data(){
            return{
                dialogAfterworkset:{
                    isOpen:false,
                    title:'展示设置',
                    innerIsopen:false,
                    innerTitle:'选择课程'
                },
                tableData:[
                    {name: "王小虎" },
                    {name: "王小虎" }
                ],
                table_checked:[],

                serachTxt:'',
                classtype:'',

                

                checkedNum:0,
                currentData:{
                    currentPage: 1,
                    currentTotal:2,
                }
            }
        },
        methods:{
            FunOpeninner(){
                this.dialogAfterworkset.innerIsopen = true
            },
            FunTableCheck(val) {
                console.log(val.length)
                this.table_checked = val;
                this.checkedNum = val.length
            },
        }
    }
</script>
<style scoped>

</style>