<template>
    <div id="RenewalWarn">
        <el-row class="margin-bottom15">
            <el-col :span="12">
                <el-input placeholder="输入姓名、昵称、联系方式" v-model="serachTxt" class="input-search margin-right10 float-l" size="small">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
                <el-dropdown trigger="click" class="margin-right10 cr-pointer float-l" style="height:32px;line-height:32px;">
                    <span class="el-dropdown-link">
                        课程<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-dropdown trigger="click" class="margin-right10 cr-pointer float-l" style="height:32px;line-height:32px;">
                    <span class="el-dropdown-link">
                        顾问<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-checkbox class="float-l margin-right10" v-model="isLackclass" style="height:32px;line-height:32px;">欠课</el-checkbox>
                <el-checkbox class="float-l" v-model="isRemind" style="height:32px;line-height:32px;">未提醒</el-checkbox>
                <el-button class="float-l margin-left10" style="padding-top:10px;" type="text" @click="FunReset">重置</el-button>
            </el-col>
            <el-col :span="12">
                <el-button class="float-r" type="danger" size="small" icon="el-icon-s-operation">预警设置</el-button>
            </el-col>
        </el-row>

        <el-row class="margin-bottom15">
            <el-col :span="24">
                <el-table :data="tableData" @selection-change="FunTableCheck" row-key="id" fit highlight-current-row style="width: 100%">
                    
                    <el-table-column fixed align="center" type="selection" width="45">

                    </el-table-column>

                    <el-table-column fixed label="姓名（昵称）" width="200">
                        <template slot-scope="{row}">
                            <span>{{ row.date }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column label="年龄" width="110">
                        <template slot-scope="{row}">
                            <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column label="联系方式" min-width="150">
                        <template slot-scope="{row}">
                            <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column label="课程" width="180">
                        <template slot-scope="{row}">
                            <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column label="剩余" width="280">
                        <template slot-scope="{row}">
                            <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column label="欠课" width="80">
                        <template slot-scope="{row}">
                            <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column label="上次提醒时间" width="180">
                        <template slot-scope="{row}">
                            <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column label="操作" fixed="right" align="center" width="230">
                        <template slot-scope="{}">
                            <el-button size="mini" type="text">点名</el-button>
                            <el-button size="mini" type="text">排课变更</el-button>
                            <el-button size="mini" type="text">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>

            </el-col>
        </el-row>


        <el-row>
            <el-col :span="12">
                <span class="float-l margin-right10" style="line-height:32px;">已选中<strong style="color:red;">0</strong>个</span>
                <el-button class="float-l" type="danger" size="small" plain>批量提醒</el-button>
            </el-col>
            <el-col :span="12">
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


    </div>
</template>
<script>
    export default {
        name:'RenewalWarn',
        data(){
            return{
                serachTxt:'',
                isLackclass:false,
                isRemind:false,

                tableData:[
                    {date: "2016-05-02",name: "王小虎", address: "上海市普陀区金沙江路 1518 弄", },
                    {date: "2016-05-04",name: "王小虎", address: "上海市普陀区金沙江路 1517 弄", }
                ],
                table_checked:[],


                currentData:{
                    currentPage: 1,
                    currentTotal:500,
                }
            }
        },
        methods:{
            FunReset(){

            },

            FunTableCheck(val) {
                console.log(val)
                this.table_checked = val;
            },
        },
        computed:{

        }
    }
</script>
<style scoped>
    #RenewalWarn{
        background: #ffffff;
        padding: 15px;
    }
</style>