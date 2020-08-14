<template>
    <div id="MixGl">
        <el-row class="margin-bottom15">
            <el-col :span="12">
                <el-input placeholder="输入姓名、昵称、联系方式" v-model="serachTxt" class="input-search margin-right10 float-l" size="small">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
                <el-radio-group v-model="radio_isOpen" class="margin-right5">
                    <el-radio :label="3">启用</el-radio>
                    <el-radio :label="6">禁用</el-radio>
                </el-radio-group>
                <el-button type="text" size="small" class="margin-left5">重置</el-button>
            </el-col>
            <el-col :span="12">
                <el-button class="float-r" type="danger" size="small" icon="el-icon-more-outline">新增学杂</el-button>
            </el-col>
        </el-row>


       

        <el-row class="margin-bottom15">
            <el-col :span="24">
                <el-table :data="tableData" row-key="id" fit highlight-current-row style="width: 100%">
                    
                    <el-table-column label="学杂">
                        <template slot-scope="{row}">
                            <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column label="单价" width="300">
                        <template slot-scope="{row}">
                            <span>{{ row.address }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column label="类型" width="300">
                        <template slot-scope="{row}">
                            <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column label="状态" align="center" width="150">
                        <template slot-scope="{row}">
                            <el-switch v-model="row.isStart" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
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
        name:'MixGl',
        data(){
            return{
                serachTxt:'',
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