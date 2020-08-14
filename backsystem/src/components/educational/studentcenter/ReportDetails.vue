<template>
    <div id="ReportDetails">
        <el-row class="margin-bottom15">
            <el-col :span="24">
                <el-input placeholder="输入姓名、昵称、联系方式" v-model="serachTxt" class="input-search margin-right10 float-l" size="small">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
                <el-date-picker v-model="dateTxt" type="daterange" align="right" unlink-panels size="small" class="input-date-picker float-l"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    :picker-options="this.defaultCheckDate">
                </el-date-picker>
            </el-col>
        </el-row>
        <el-row class="margin-bottom15">
            <el-col :span="24">
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
                <el-radio-group v-model="radio_monOrclass" class="margin-right5">
                    <el-radio :label="3">按课时</el-radio>
                    <el-radio :label="6">按月</el-radio>
                </el-radio-group>
                <el-radio-group v-model="isOverclass" class="margin-right5">
                    <el-radio :label="3">未结课</el-radio>
                    <el-radio :label="6">已结课</el-radio>
                </el-radio-group>
                <el-button type="text" size="small" class="margin-left5">重置</el-button>
            </el-col>
        </el-row>


        <el-row class="margin-bottom15">
            <el-col :span="24">
                <el-table :data="tableData" @selection-change="FunTableCheck" row-key="id" fit highlight-current-row style="width: 100%">
                    
                    <el-table-column fixed align="center" type="selection" width="45">

                    </el-table-column>

                    <el-table-column fixed label="姓名" width="80">
                        <template slot-scope="{row}">
                        <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column fixed label="联系方式" width="180">
                        <template slot-scope="{row}">
                        <span>{{ row.date }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column label="意向度" width="110">
                        <template slot-scope="{row}">
                        <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column label="意向课程" min-width="180">
                        <template slot-scope="{row}">
                        <span>{{ row.address }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column label="顾问" width="80">
                        <template slot-scope="{row}">
                        <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column label="最近跟进时间" width="180">
                        <template slot-scope="{row}">
                        <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column label="最近跟进记录" width="180">
                        <template slot-scope="{row}">
                        <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>

                    

                    <el-table-column label="录入时间" width="120">
                        <template slot-scope="{row}">
                        <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>
                    

                    <el-table-column label="操作" align="center" width="200">
                        <template slot-scope="{}">
                            <el-button size="mini" type="text">结课</el-button>
                            <el-button size="mini" type="text">变更有效期</el-button>
                            <el-button size="mini" type="text">变更记录</el-button>
                        </template>
                    </el-table-column>
                </el-table>

            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <span class="float-l margin-right10" style="line-height:32px;">已选中<strong style="color:red;">0</strong>个</span>
                <el-button class="float-l" type="danger" size="small" plain>批量结课</el-button>
                <el-button class="float-l" type="danger" size="small" plain>变更有效期</el-button>
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
    import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
    export default {
        name:'ReportDetails',
        data(){
            return{
                serachTxt:'',
                dateTxt:'',
                radio_monOrclass:'',
                isOverclass:'',
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
        computed:{
            ...mapState(['defaultCheckDate'])
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

</style>