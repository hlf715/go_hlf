<template>
    <div id="OrderPush">
        <el-row class="margin-bottom15" style="height:32px;line-height:32px;">
            <el-col :span="12">
                <el-input placeholder="输入学员姓名，联系方式" v-model="serachTxt" class="input-search margin-right10 float-l" size="small">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </el-col>
            <el-col :span="12">
                <el-button class="float-r margin-left10" type="danger" size="small" icon="el-icon-more-outline" plain>更多</el-button>
                <el-button class="float-r" type="danger" size="small" icon="el-icon-user">推单二维码</el-button>
                <el-button class="float-r" type="danger" size="small" icon="el-icon-s-operation">新增推单</el-button>
            </el-col>
        </el-row>

        <el-row class="margin-bottom15" style="height:32px;line-height:32px;">
            <el-col :span="24">
                
                <el-dropdown trigger="click" class="margin-right10 cr-pointer float-l">
                    <span class="el-dropdown-link">
                        顾问<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                        <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                
                <el-radio-group v-model="radio_isPay" class="margin-right5 float-l margin-top10">
                    <el-radio :label="3">待支付</el-radio>
                    <el-radio :label="6">已支付</el-radio>
                    <el-radio :label="9">已过期</el-radio>
                </el-radio-group>
                <span class="float-l margin-right10">|</span>
                <el-radio-group v-model="radio_isSee" class="margin-right5 float-l margin-top10">
                    <el-radio :label="3">提醒失败</el-radio>
                    <el-radio :label="6">未查看</el-radio>
                    <el-radio :label="9">已查看</el-radio>
                </el-radio-group>


                <el-button class="float-l" style="padding-top:10px;" type="text" @click="FunReset">重置</el-button>
                
            </el-col>
        </el-row>

        <el-row class="margin-bottom15">
            <el-col :span="24">
            
                <el-table :data="tableData" @selection-change="FunTableCheck" row-key="id" fit highlight-current-row style="width: 100%">
                                
                    <el-table-column fixed align="center" type="selection" width="45">

                    </el-table-column>
                    <el-table-column fixed label="学员姓名" width="180">
                        <template slot-scope="{row}">
                        <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column fixed label="联系方式" width="180">
                        <template slot-scope="{row}">
                        <span>{{ row.date }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="订单内容" width="150">
                        <template slot-scope="{row}">
                        <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="订单价格" width="150">
                        <template slot-scope="{row}">
                        <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="推单待收" width="">
                        <template slot-scope="{row}">
                        <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="对内备注" width="100">
                        <template slot-scope="{row}">
                        <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="顾问" align="center" width="150">
                        <template slot-scope="{}">
                            
                        </template>
                    </el-table-column>
                    <el-table-column label="付款截至日期" align="center" width="150">
                        <template slot-scope="{}">
                            
                        </template>
                    </el-table-column>
                    <el-table-column label="上次提醒时间" align="center" width="150">
                        <template slot-scope="{}">
                            
                        </template>
                    </el-table-column>
                    <el-table-column fixed="right" align="center" width="175">
                        <template slot="header" slot-scope="{}">
                            <el-button type="text">自定义显示列<i class="el-icon-edit el-icon--right"></i></el-button>
                        </template>
                        <template slot-scope="{}">
                            <el-button size="mini" type="text">跟进</el-button>
                            <el-button size="mini" type="text">试听</el-button>
                            <el-button size="mini" type="text">报名</el-button>
                            <el-button size="mini" type="text">更多</el-button>
                        </template>
                    </el-table-column>
                </el-table>

            </el-col>
        </el-row>



            <el-row class="margin-bottom15">
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

    </div>
</template>
<script>
    export default {
        neme:"OrderPush",
        data(){
            return{
                serachTxt:'',
                radio_isPay:'',
                radio_isSee:'',
                tableData: [
                    {date: "2016-05-02",name: "王小虎", address: "上海市普陀区金沙江路 1518 弄", }
                ],
                table_checked:[],
                currentData:{
                    currentPage: 1,
                    currentTotal:0,
                }
            }
        },
        methods:{
            FunTableCheck(val) {
                console.log(val)
                this.table_checked = val;
            },
            FunReset(){
                
            }
        }
    }
</script>
<style scoped>
    #OrderPush{
        background: #ffffff;
        padding: 15px;
    }
</style>