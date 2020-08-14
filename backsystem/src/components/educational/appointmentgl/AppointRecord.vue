<template>
    <div id="AppointRecord">
        <el-row class="margin-bottom15">
            <el-col :span="12">
                <el-input placeholder="输入姓名、昵称、联系方式" v-model="serachTxt" class="input-search margin-right10 float-l" size="small">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
                <el-date-picker v-model="dateTxt" type="daterange" align="right" unlink-panels size="small" class="input-date-picker float-l margin-right10"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    :picker-options="this.defaultCheckDate">
                </el-date-picker>
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
                        班级<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-button type="text" size="small" class="margin-left5">重置</el-button>
            </el-col>
            <el-col :span="12">
                <el-button class="float-r margin-left10" type="danger" size="small" icon="el-icon-more-outline">预约上课</el-button>
                <el-button class="float-r" type="danger" size="small" icon="el-icon-user">导出记录</el-button>
            </el-col>
        </el-row>

        <el-row class="margin-bottom15">
            <el-col :span="24">
                <el-table :data="tableData" row-key="id" fit highlight-current-row style="width: 100%">
                    
                    <el-table-column label="姓名（昵称）" width="280">
                        <template slot-scope="{row}">
                        <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column label="年龄" width="180">
                        <template slot-scope="{row}">
                        <span>{{ row.date }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column label="联系方式" width="180">
                        <template slot-scope="{row}">
                        <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column label="上课时间" min-width="180">
                        <template slot-scope="{row}">
                        <span>{{ row.address }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column label="班级" width="180">
                        <template slot-scope="{row}">
                        <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column label="教室" width="100">
                        <template slot-scope="{row}">
                        <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column label="上课主题" width="100">
                        <template slot-scope="{row}">
                        <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column label="点名情况" width="100">
                        <template slot-scope="{row}">
                        <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column label="操作" align="center" width="175">
                        <template slot-scope="{}">
                            <el-button size="mini" type="text">删除排课</el-button>
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

    </div>
</template>
<script>
    import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
    export default {
        name:'AppointRecord',
        data(){
            return{
                serachTxt:'',
                dateTxt:'',
                tableData:[
                    {date: "2016-05-02",name: "王小虎", address: "上海市普陀区金沙江路 1518 弄", },
                    {date: "2016-05-04",name: "王小虎", address: "上海市普陀区金沙江路 1517 弄", }
                ],
                currentData:{
                    currentPage: 1,
                    currentTotal:500,
                }
            }
        },
        computed:{
            ...mapState(['defaultCheckDate'])
        }
    }
</script>
<style scoped>

</style>