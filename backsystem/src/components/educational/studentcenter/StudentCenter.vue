<template>
    <div id="StudentCenter">
        <el-tabs v-model="tabs_active" type="card">
            <el-tab-pane label="学员列表" name="first">
                <studentlist></studentlist>
            </el-tab-pane>
            <el-tab-pane label="报课明细" name="second">
                <reportdetails></reportdetails>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
    //局部注册组件
    import studentlist from './StudentList'
    import reportdetails from './ReportDetails'
    export default {
        name:'StudentCenter',
        components:{
            studentlist,
            reportdetails
        },
        data(){
            return{
                tabs_active:'first',
            }
        }
    }
</script>
<style scoped>
    #StudentCenter{
        background: #ffffff;
        padding: 15px;
    }
</style>