<template>
    <div id="OnlineCourse" class="outercss">
        <el-row class="margin-bottom15">
            <el-col :span="12">
                <el-input placeholder="请输入课程名称" v-model="serachTxt" class="input-search margin-right10 float-l" size="small">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
                <el-dropdown trigger="click" class="margin-right5 cr-pointer line_height32">
                    <span class="el-dropdown-link">
                        选择老师<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-divider direction="vertical"></el-divider>
                <el-radio-group v-model="radio_isEnable" class="margin-right5">
                    <el-radio :label="3">启用</el-radio>
                    <el-radio :label="6">禁用</el-radio>
                </el-radio-group>
                <el-button type="text" size="small" class="margin-left5">重置</el-button>
            </el-col>
            <el-col :span="12">
                <el-button class="float-r margin-left10" type="danger" size="small" icon="el-icon-more-outline" plain>使用说明</el-button>
                <el-button class="float-r" type="danger" size="small" icon="el-icon-more-outline" @click="FunOpencreatecourse">创建线上课程</el-button>
            </el-col>
        </el-row>
        <el-row class="margin-bottom15">
            <el-col :span="24">
                <el-table :data="tableData" row-key="id" fit highlight-current-row style="width: 100%">
                    <el-table-column label="课程名称" width="300">
                        <template slot-scope="{row}">
                            <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="开课时间" width="100">
                        <template slot-scope="{row}">
                            <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="课程负责老师" width="250">
                        <template slot-scope="{row}">
                            <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="安排课次">
                        <template slot-scope="{row}">
                            <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="学员人数" width="180">
                        <template slot-scope="{row}">
                            <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="未点评作业" width="180">
                        <template slot-scope="{row}">
                            <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="留言数" width="100">
                        <template slot-scope="{row}">
                            <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="状态" width="100">
                        <template slot-scope="{row}">
                            <el-switch v-model="row.state" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作" width="100">
                        <template slot-scope="{}">
                            <el-button size="mini" type="text">数据</el-button>
                            <el-divider direction="vertical"></el-divider>
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

        <createcourse ref="createcourse"></createcourse>
    </div>
</template>
<script>
    import createcourse from '@/dialog/dailyaffairs/onlinecourse/createcourse'
    export default {
        name:'OnlineCourse',
        components:{
            createcourse
        },
        data(){
            return{
                serachTxt:'',
                radio_isEnable:'',
                tableData:[
                    {date: "2016-05-02",name: "王小虎", state: false, },
                    {date: "2016-05-04",name: "王小虎", state: true, }
                ],
                currentData:{
                    currentPage: 1,
                    currentTotal:500,
                }
            }
        },
        methods:{
            FunOpencreatecourse(){
                let child = this.$refs.createcourse
                child.dialogCreatecourse.isOpen = true
            }
        }
    }
</script>
<style scoped>

</style>