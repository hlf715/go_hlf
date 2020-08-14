<template>
    <div id="ClassroomGL">
        <el-row class="margin-bottom15">
            <el-col :span="24">
                <el-button class="float-r margin-left10" size="small" type="danger" icon="el-icon-plus" @click="FunLeadClassroom">导入教室</el-button>
                <el-button class="float-r" size="small" type="danger" icon="el-icon-plus" @click="FunAddClassroom">新增教室</el-button>
            </el-col>
        </el-row>
        <el-row class="margin-bottom15">
            <el-col :span="24">
                <el-table :data="tableData" row-key="id" fit highlight-current-row style="width: 100%">
                    <el-table-column label="教室名称">
                        <template slot-scope="{row}">
                            <el-button size="mini" type="text" @click="FunEdit(row)">{{ row.holidayName }}</el-button>
                        </template>
                    </el-table-column>

                    <el-table-column label="座位" width="380">
                        <template slot-scope="{row}">
                            <span>{{ row.startTime }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column label="使用班级数" width="380">
                        <template slot-scope="{row}">
                            <span>{{ row.endTime }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column label="操作" fixed="right" align="center" width="350">
                        <template slot-scope="{row}">
                           <el-switch v-model="row.isopen" active-color="#ff4949" inactive-color="#cccccc"></el-switch>
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

        <addclassroom ref="addclassroom"></addclassroom>
    </div>
</template>
<script>
    import addclassroom from '@/dialog/workbench/basicsetting/addclassroom'
    export default{
        name:'ClassroomGL',
        components:{
            addclassroom
        },
        data(){
            return{
                tableData: [
                    {
                        holidayName: '中秋节',
                        startTime: '2020-09-23',
                        endTime: '2020-09-24',
                        isopen:true
                    },
                    {
                        holidayName: '端午节',
                        startTime: '2020-07-23',
                        endTime: '2020-07-24',
                        isopen:false
                    }
                ],
                currentData:{
                    currentPage: 1,
                    currentTotal:500,
                }
            }
        },
        methods:{
            FunAddClassroom(){
                let child = this.$refs.addclassroom
                child.dialogAddclassroom.isOpen = true
            },
            FunEdit(data){
                console.log(data)
                let child = this.$refs.addclassroom
                child.dialogAddclassroom.isOpen = true
            },
            FunLeadClassroom(){
                alert("导入功能还未做")
            }
        }
    }
</script>
<style></style>