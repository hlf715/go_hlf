<template>
    <div id="NotifivationSet">
        <el-row class="margin-bottom15">
            <el-col :span="24">
                <h2>老师端</h2>
            </el-col>
        </el-row>
        <el-row class="margin-bottom15">
            <el-col :span="24">
                <el-table :data="tableData1" row-key="id" fit highlight-current-row style="width: 100%">
                    <el-table-column label="触犯条件">
                        <template slot-scope="{row}">
                            <span>{{ row.functionname }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="功能描述">
                        <template slot-scope="{row}">
                            <span>{{ row.functiondescribe }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="应用端通知" width="150">
                        <template slot-scope="{row}">
                            <el-switch v-model="row.isopen" active-color="#ff4949" inactive-color="#cccccc"></el-switch>
                        </template>
                    </el-table-column>
                    <el-table-column label="短信通知" width="150">
                        <template slot-scope="{row}">
                            <el-switch v-model="row.isopen" active-color="#ff4949" inactive-color="#cccccc"></el-switch>
                        </template>
                    </el-table-column>
                    <el-table-column label="预览" width="180">
                        <template slot-scope="{}">
                            <el-button size="mini" type="text">应用效果图</el-button>
                            <el-button size="mini" type="text">短信效果图</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-col>
        </el-row>


        <el-row class="margin-bottom15">
            <el-col :span="12">
                <h2>家长端</h2>
            </el-col>
            <el-col :span="12">
                <el-button class="float-r" size="small" type="danger"  @click="FunMoreset">更多设置</el-button>
            </el-col>
        </el-row>
        <el-row class="margin-bottom15">
            <el-col :span="24">
                <el-table :data="tableData1" row-key="id" fit highlight-current-row style="width: 100%">
                    <el-table-column label="触犯条件">
                        <template slot-scope="{row}">
                            <span>{{ row.functionname }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="功能描述">
                        <template slot-scope="{row}">
                            <span>{{ row.functiondescribe }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="应用端通知" width="150">
                        <template slot-scope="{row}">
                            <el-switch v-model="row.isopen" active-color="#ff4949" inactive-color="#cccccc"></el-switch>
                        </template>
                    </el-table-column>
                    <el-table-column label="短信通知" width="150">
                        <template slot-scope="{row}">
                            <el-switch v-model="row.isopen" active-color="#ff4949" inactive-color="#cccccc"></el-switch>
                        </template>
                    </el-table-column>
                    <el-table-column label="预览" width="180">
                        <template slot-scope="{}">
                            <el-button size="mini" type="text">应用效果图</el-button>
                            <el-button size="mini" type="text">短信效果图</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-col>
        </el-row>


    </div>
</template>
<script>
    export default{
        name:'NotifivationSet',
        data(){
            return{
                tableData1: [
                    {
                        functionname: '老师上课提醒',
                        functiondescribe: '上课前一天发送上课提醒',
                        isopen:true
                    },
                    {
                        functionname: '新增潜客通知',
                        functiondescribe: '微信网、活动有新增潜客进入系统时，系统自动发送通知',
                        isopen:false
                    }
                ],
            }
        },
        methods:{
            FunMoreset(){

            }        
        }
    }
</script>
<style></style>