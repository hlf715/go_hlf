<template>
    <div id="ClassRecord">
        <el-row class="margin-bottom15">
            <el-col :span="24">
                <el-date-picker v-model="dateTxt" type="daterange" align="right" unlink-panels size="small" class="input-date-picker float-l"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    format="yyyy 年 MM 月 dd 日"
                    value-format="yyyy-MM-dd"
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
                        班级<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-dropdown trigger="click" class="margin-right5 cr-pointer">
                    <span class="el-dropdown-link">
                        老师选择<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-dropdown trigger="click" class="margin-right5 cr-pointer">
                    <span class="el-dropdown-link">
                        上课主题<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-divider direction="vertical"></el-divider>
                <el-radio-group v-model="radio_filt" size="mini" class="margin-right5">
                    <el-radio :label="3">未上传展示</el-radio>
                    <el-radio :label="6">未点评学员</el-radio>
                    <el-radio :label="9">未布置作业</el-radio>
                </el-radio-group>
                <el-divider direction="vertical"></el-divider>
                <el-radio-group v-model="radio_classtype" class="margin-right5">
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
                    <el-table-column label="上课时间" width="180">
                        <template slot-scope="{row}">
                            <el-button size="mini" type="text">{{ row.name }}</el-button>
                        </template>
                    </el-table-column>
                    <el-table-column label="课程" width="180">
                        <template slot-scope="{row}">
                            <span>{{ row.date }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="班级" width="110">
                        <template slot-scope="{row}">
                            <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="教室" min-width="80">
                        <template slot-scope="{row}">
                            <span>{{ row.address }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="授课时间" width="80">
                        <template slot-scope="{row}">
                            <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="课次" width="180">
                        <template slot-scope="{row}">
                            <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="老师" width="180">
                        <template slot-scope="{row}">
                            <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="点名时间" width="120">
                        <template slot-scope="{row}">
                            <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="到课人数" width="200">
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
    export default{
        name:'ClassRecord',
        data(){
            return{
                dateTxt:[],
                radio_filt:'',
                radio_classtype:'',
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
    }
</script>
<style scoped>

</style>