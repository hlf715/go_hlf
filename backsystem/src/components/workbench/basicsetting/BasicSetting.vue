<template>
    <div id="BasicSetting" class="outercss">
        <el-tabs v-model="tabs_active" type="card">
            <el-tab-pane label="校区设置" name="1">
                <campussetting></campussetting>
            </el-tab-pane>
            <el-tab-pane label="营业时间" name="2">
                <openinghours></openinghours>
            </el-tab-pane>
            <el-tab-pane label="节假日" name="3">
                <holidays></holidays>
            </el-tab-pane>
            <el-tab-pane label="周边学校" name="4">
                <aroundschool></aroundschool>
            </el-tab-pane>
            <el-tab-pane label="教室管理" name="5">
                <classroomgl></classroomgl>
            </el-tab-pane>
            <el-tab-pane label="功能设置" name="6">
                <functionset></functionset>
            </el-tab-pane>
            <el-tab-pane label="通知设置" name="7">
                <notificationset></notificationset>
            </el-tab-pane>
            <el-tab-pane label="分享设置" name="8">
                <shareset></shareset>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
    import campussetting from './CampusSetting'
    import openinghours from './OpeningHours'
    import holidays from './Holidays'
    import aroundschool from './AroundSchool'
    import classroomgl from './ClassroomGL'
    import functionset from './FunctionSet'
    import notificationset from './NotificationSet'
    import shareset from './ShareSet'
    export default{
        name:'BasicSetting',
        components:{
            campussetting,
            openinghours,
            holidays,
            aroundschool,
            classroomgl,
            functionset,
            notificationset,
            shareset
        },
        data(){
            return{
                tabs_active:'1'
            }
        }
    }
</script>
<style>

</style>