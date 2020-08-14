<template>
    <div id="VisitQuery">
        <el-row class="margin-bottom15" style="height:32px;line-height:32px;">
            <el-col :span="24">
                <el-input placeholder="输入姓名、昵称、联系方式" v-model="serachTxt" class="input-search margin-right10 float-l" size="small">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
                <el-dropdown trigger="click" class="margin-right10 cr-pointer float-l">
                    <span class="el-dropdown-link">
                        预约来访时间<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                        <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
                        <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
                        <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
                        <el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-dropdown trigger="click" class="margin-right10 cr-pointer float-l">
                    <span class="el-dropdown-link">
                        顾问<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                        <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
                        <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
                        <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
                        <el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>


                <el-radio-group v-model="radio" class="margin-right5 float-l margin-top10">
                    <el-radio :label="3">待签到</el-radio>
                    <el-radio :label="6">已签到</el-radio>
                    <el-radio :label="9">已取消</el-radio>
                </el-radio-group>



                <el-button class="float-l" style="padding-top:10px;" type="text">重置</el-button>
                
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
                    <el-table-column label="顾问" width="150">
                        <template slot-scope="{row}">
                        <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="预约来访时间" width="150">
                        <template slot-scope="{row}">
                        <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="备注" width="">
                        <template slot-scope="{row}">
                        <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="状态" width="100">
                        <template slot-scope="{row}">
                        <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作" align="center" width="150">
                        <template slot-scope="{}">
                            
                        </template>
                    </el-table-column>
                </el-table>

            </el-col>
        </el-row>



            <el-row class="margin-bottom15">
                <el-col :span="12">
                    <span class="float-l margin-right10" style="line-height:32px;">已选中<strong style="color:red;">0</strong>个</span>
                    <el-button class="float-l" type="danger" size="small" plain>取消预约</el-button>
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
        neme:"VisitQuery",
        data(){
            return{
                serachTxt:'',
                radio:'',
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
        }
    }
</script>
<style scoped>
    #VisitQuery{
        background: #ffffff;
        padding: 15px;
    }
    
</style>