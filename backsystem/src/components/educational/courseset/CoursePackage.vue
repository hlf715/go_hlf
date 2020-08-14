<template>
    <div id="CoursePackage">
        <el-row class="margin-bottom15">
            <el-col :span="12">
                <el-input placeholder="输入姓名、昵称、联系方式" v-model="serachTxt" class="input-search margin-right10 float-l" size="small">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </el-col>
            <el-col :span="12">
                <el-button class="float-r" type="danger" size="small" icon="el-icon-more-outline">课程包</el-button>
            </el-col>
        </el-row>

        <el-row class="margin-bottom15">
            <el-col :span="24">
                <el-table :data="tableData" row-key="id" fit highlight-current-row style="width: 100%">
                    
                    <el-table-column label="课程包">
                        <template slot-scope="{row}">
                            <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column label="课程数量" width="300">
                        <template slot-scope="{row}">
                            <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column label="学杂数量" width="300">
                        <template slot-scope="{row}">
                            <span>{{ row.address }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column label="课程包金额" width="300">
                        <template slot-scope="{row}">
                            <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column label="状态" align="center" width="150">
                        <template slot-scope="{}">
                            <el-button size="mini" type="text">编辑</el-button>
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

    </div>
</template>
<script>
    export default {
        name:'CoursePackage',
        data(){
            return{
                serachTxt:'',
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