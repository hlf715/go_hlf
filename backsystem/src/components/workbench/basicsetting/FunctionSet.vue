<template>
    <div id="FunctionSet">
        <el-row class="margin-bottom15">
            <el-col :span="24">
                <el-table :data="tableData" row-key="id" fit highlight-current-row style="width: 100%">
                    <el-table-column label="功能">
                        <template slot-scope="{row}">
                            <span>{{ row.functionname }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="功能描述">
                        <template slot-scope="{row}">
                            <span>{{ row.functiondescribe }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="状态" width="150">
                        <template slot-scope="{row}">
                            <el-switch v-model="row.isopen" active-color="#ff4949" inactive-color="#cccccc"></el-switch>
                        </template>
                    </el-table-column>
                </el-table>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    export default{
        name:'FunctionSet',
        data(){
            return{
                tableData: [
                    {
                        functionname: '拨打电话',
                        functiondescribe: '开启后，允许上课老师拨打学员电话',
                        isopen:true
                    },
                    {
                        functionname: '名单管理',
                        functiondescribe: '开启后，单独对早期线索进行电话跟进，高效开发潜在客户',
                        isopen:false
                    }
                ],
            }
        }
    }
</script>
<style></style>