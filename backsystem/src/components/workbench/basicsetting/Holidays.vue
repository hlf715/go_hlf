<template>
    <div id="Holidays">
        <el-row class="margin-bottom15">
            <el-col :span="24">
                <el-button class="float-r" size="small" type="danger" icon="el-icon-plus" @click="FunAddHoliday">节假日</el-button>
            </el-col>
        </el-row>
        <el-row class="margin-bottom15">
            <el-col :span="24">
                <el-table :data="tableData" row-key="id" fit highlight-current-row style="width: 100%">
                    <el-table-column label="节假日">
                        <template slot-scope="{row}">
                        <span>{{ row.holidayName }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column label="开始时间" width="380">
                        <template slot-scope="{row}">
                        <span>{{ row.startTime }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column label="结束时间" width="380">
                        <template slot-scope="{row}">
                        <span>{{ row.endTime }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column label="操作" fixed="right" align="center" width="350">
                        <template slot-scope="{row}">
                            <el-button size="mini" type="text" @click="FunEdit(row)">编辑</el-button>
                            <el-button size="mini" type="text" @click="FunDelete(row)">删除</el-button>
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

        <addholiday ref="addholiday"></addholiday>
    </div>
</template>

<script>
    import addholiday from '@/dialog/workbench/basicsetting/addholiday'
    export default{
        name:'Holidays',
        components:{
            addholiday
        },
        data(){
            return {
                tableData: [
                    {
                        holidayName: '中秋节',
                        startTime: '2020-09-23',
                        endTime: '2020-09-24'
                    },
                    {
                        holidayName: '端午节',
                        startTime: '2020-07-23',
                        endTime: '2020-07-24'
                    }
                ],
                currentData:{
                    currentPage: 1,
                    currentTotal:500,
                }
            }
        },
        methods: {
            FunAddHoliday(){
                let child = this.$refs.addholiday
                child.resetForm('form_holiday')
                child.dialogAddholiday.isOpen = true
            },
            FunEdit(data){
                let defaultArr = [],starttime = '',endtime = ''
                let child = this.$refs.addholiday
                child.resetForm('form_holiday')
                starttime = data.startTime
                endtime = data.endTime
                defaultArr.push(starttime)
                defaultArr.push(endtime)
                child.form_holiday.holidayname = data.holidayName
                child.form_holiday.datetxt = defaultArr
                child.dialogAddholiday.isOpen = true
            },
            FunDelete(data){
                this.$confirm('确认删除该节假日?', '提示', {
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
<style scoped>

</style>