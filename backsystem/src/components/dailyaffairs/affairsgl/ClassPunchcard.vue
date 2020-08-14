<template>
    <div id="ClassPunchcard">
        <el-row class="margin-bottom15">
            <el-col :span="12">
                <el-input placeholder="请输入作业标题" v-model="serachTxt" class="input-search margin-right10 float-l" size="small">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
                <el-date-picker v-model="dateTxt" type="daterange" align="right" unlink-panels size="small" class="input-date-picker float-l"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    format="yyyy 年 MM 月 dd 日"
                    value-format="yyyy-MM-dd"
                    :picker-options="this.defaultCheckDate">
                </el-date-picker>
            </el-col>
            <el-col :span="12">
                <el-button class="float-r" type="danger" size="small" icon="el-icon-more-outline" @click="FunOpenassignwork">布置打卡作业</el-button>
            </el-col>
        </el-row>
        <el-row class="margin-bottom15">
            <el-col :span="24">
                <el-dropdown trigger="click" class="margin-right5 cr-pointer">
                    <span class="el-dropdown-link">
                        课程选择<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-dropdown trigger="click" class="margin-right5 cr-pointer">
                    <span class="el-dropdown-link">
                        班级选择<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-divider direction="vertical"></el-divider>
                <el-radio-group v-model="radio_state" class="margin-right5">
                    <el-radio :label="3">未开始</el-radio>
                    <el-radio :label="6">进行中</el-radio>
                    <el-radio :label="9">已结束</el-radio>
                </el-radio-group>
                <el-button type="text" size="small" class="margin-left5">重置</el-button>
            </el-col>
        </el-row>
        <el-row class="margin-bottom15">
            <el-col :span="24">
                <el-table :data="tableData" row-key="id" fit highlight-current-row style="width: 100%">
                    <el-table-column label="作业标题" width="300">
                        <template slot-scope="{row}">
                            <el-button size="mini" type="text">{{ row.name }}</el-button>
                        </template>
                    </el-table-column>
                    <el-table-column label="班级" width="300">
                        <template slot-scope="{row}">
                            <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="开始时间" width="100">
                        <template slot-scope="{row}">
                            <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="结束时间">
                        <template slot-scope="{row}">
                            <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="状态" width="180">
                        <template slot-scope="{row}">
                            <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="打卡进度（天）" width="180">
                        <template slot-scope="{row}">
                            <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="今日打卡人数" width="180">
                        <template slot-scope="{row}">
                            <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作" width="100">
                        <template slot-scope="{}">
                            <el-button size="mini" type="text">删除作业</el-button>
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
        <assignwork ref="assignwork"></assignwork>
    </div>
</template>
<script>
    import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
    import assignwork from '@/dialog/dailyaffairs/affairsgl/assignwork'

    export default{
        name:'ClassPunchcard',
        components:{
            assignwork
        },
        data(){
            return{
                serachTxt:'',
                dateTxt:[],
                radio_state:'',
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
        },
        methods:{
            FunOpenassignwork(){
                let child = this.$refs.assignwork
                child.dialogAssignwork.isOpen = true
            }
        }
    }
</script>
<style scoped>

</style>