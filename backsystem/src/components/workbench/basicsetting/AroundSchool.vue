<template>
    <div id="ClassroomGL">
        <el-row class="margin-bottom15">
            <el-col :span="12">
                <span class="float-l" style="height:32px;line-height:32px;">注：新增周边学校的名称，便于登记学员信息时快速选择学员的就读学校</span>
            </el-col>
            <el-col :span="12">
                <el-button class="float-r" size="small" type="danger" icon="el-icon-plus" @click="FunAddSchool">新增学校</el-button>
            </el-col>
        </el-row>

        <el-row class="margin-bottom15">
            <el-col :span="24">
                <el-table :data="tableData" row-key="id" fit highlight-current-row style="width: 100%">
                    <el-table-column label="学校名称">
                        <template slot-scope="{row}">
                            <span>{{ row.schoolname }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作" width="150">
                        <template slot-scope="{row}">
                            <el-button size="mini" type="text" @click="FunEdit(row)">编辑</el-button>
                            <el-button size="mini" type="text" @click="FunDelete(row)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-col>
        </el-row>
        <addschool ref="addschool"></addschool>
    </div>
</template>
<script>
    import addschool from '@/dialog/workbench/basicsetting/addschool'
    export default{
        name:'ClassroomGL',
        components:{
            addschool
        },
        data(){
            return{
                tableData: [
                    {
                        schoolname: '浙江大学',
                        startTime: '2020-09-23',
                        endTime: '2020-09-24'
                    },
                    {
                        schoolname: '清华大学',
                        startTime: '2020-07-23',
                        endTime: '2020-07-24'
                    }
                ],
            }
        },
        methods:{
            FunAddSchool(){
                let child = this.$refs.addschool
                child.resetForm('form_addschool')
                child.dialogAddschool.isOpen = true
            },
            FunEdit(data){
                let child = this.$refs.addschool
                child.form_addschool.schoolname = data.schoolname
                child.dialogAddschool.isOpen = true
            },
            FunDelete(data){
                this.$confirm('确认删除该学校?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '需要请求接口才能删除成功!'
                    });
                }).catch(() => {
                    return false       
                });
            }
        }
    }
</script>
<style></style>