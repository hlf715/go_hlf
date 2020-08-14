<template>
    <div id="Completed">
        <el-row class="margin-bottom15">
            <el-col :span="12">
                <el-input placeholder="输入班级名称" v-model="serachTxt" class="input-search margin-right10 float-l" size="small">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
                <el-date-picker v-model="dateTxt" type="daterange" align="right" unlink-panels size="small" class="input-date-picker float-l"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    :picker-options="this.defaultCheckDate">
                </el-date-picker>
            </el-col>
            <el-col :span="12">
                <el-button class="float-r margin-left10" type="danger" size="small" icon="el-icon-more-outline">批量升班</el-button>
                <el-button class="float-r" type="danger" size="small" icon="el-icon-user">新增班级</el-button>
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
                        老师<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-dropdown trigger="click" class="margin-right5 cr-pointer">
                    <span class="el-dropdown-link">
                        班主任<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>




                <el-radio-group v-model="radio_pattern" class="margin-right5">
                    <el-radio :label="3">一对一</el-radio>
                    <el-radio :label="6">一对多</el-radio>
                    <el-radio :label="9">活动班</el-radio>
                </el-radio-group>


                <el-button type="text" size="small" class="margin-left5">重置</el-button>
            </el-col>
        </el-row>
        

        <el-row class="margin-bottom15">
            <el-col :span="24">
                <el-table :data="tableData" row-key="id" fit highlight-current-row style="width: 100%">
                    
                    <el-table-column fixed label="班级" width="220">
                        <template slot-scope="{row}">
                        <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column fixed label="课程" width="220">
                        <template slot-scope="{row}">
                        <span>{{ row.date }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column label="适龄" width="220">
                        <template slot-scope="{row}">
                        <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column label="学员人数" min-width="120">
                        <template slot-scope="{row}">
                        <span>{{ row.address }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column label="老师" width="220">
                        <template slot-scope="{row}">
                        <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column label="授课次数" width="80">
                        <template slot-scope="{row}">
                        <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column label="结业时间">
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
        name:'Completed',
        data(){
            return{
                serachTxt:'',
                dateTxt:'',
                radio_pattern:'',
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