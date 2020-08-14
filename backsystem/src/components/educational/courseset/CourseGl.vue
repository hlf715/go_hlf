<template>
    <div id="CourseGl">
        <el-row class="margin-bottom15">
            <el-col :span="12">
                <el-input placeholder="输入姓名、昵称、联系方式" v-model="serachTxt" class="input-search margin-right10 float-l" size="small">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </el-col>
            <el-col :span="12">
                <el-button class="float-r margin-left10" type="danger" size="small" icon="el-icon-more-outline">新增课程</el-button>
                <el-button class="float-r" type="danger" size="small" icon="el-icon-user">学期设置</el-button>
            </el-col>
        </el-row>
        <el-row class="margin-bottom15">
            <el-col :span="24">
                <el-radio-group v-model="radio_classtype" class="margin-right5">
                    <el-radio :label="3">标准课</el-radio>
                    <el-radio :label="6">通用课</el-radio>
                </el-radio-group>
                <el-radio-group v-model="radio_pattern" class="margin-right5">
                    <el-radio :label="3">一对一</el-radio>
                    <el-radio :label="6">一对多</el-radio>
                </el-radio-group>
                <el-radio-group v-model="radio_isOpen" class="margin-right5">
                    <el-radio :label="3">启用</el-radio>
                    <el-radio :label="6">禁用</el-radio>
                </el-radio-group>
                <el-button type="text" size="small" class="margin-left5">重置</el-button>
            </el-col>
        </el-row>

        <el-row class="margin-bottom15">
            <el-col :span="24">
                <el-table :data="tableData" row-key="id" fit highlight-current-row style="width: 100%">
                    
                    <el-table-column label="课程名称" width="220">
                        <template slot-scope="{row}">
                        <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column label="类型" min-width="220">
                        <template slot-scope="{row}">
                        <span>{{ row.address }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column label="上课方式" width="220">
                        <template slot-scope="{row}">
                        <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column label="适龄" width="220">
                        <template slot-scope="{row}">
                        <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column label="状态">
                        <template slot-scope="{row}">
                        <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column label="操作" align="center" width="175">
                        <template slot-scope="{}">
                            <el-button size="mini" type="text">报名设置</el-button>
                            <el-button size="mini" type="text">复制</el-button>
                            <el-button size="mini" type="text">禁用</el-button>
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
    export default {
        name:'CourseGl',
        data(){
            return{
                serachTxt:'',
                radio_classtype:'',
                radio_pattern:'',
                radio_isOpen:'',

                tableData:[
                    {date: "2016-05-02",name: "王小虎", address: "上海市普陀区金沙江路 1518 弄", },
                    {date: "2016-05-04",name: "王小虎", address: "上海市普陀区金沙江路 1517 弄", }
                ],
                currentData:{
                    currentPage: 1,
                    currentTotal:500,
                }
            }
        }
        
    }
</script>
<style scoped>

</style>