<template>
    <div id="AffairsGL" class="outercss">
        <el-tabs v-model="tabs_active" type="card">
            <el-tab-pane label="上课记录" name="1">
                <classrecord></classrecord>
            </el-tab-pane>
            <el-tab-pane label="课堂展示" name="2">
                <classshow></classshow>
            </el-tab-pane>
            <el-tab-pane label="课堂点评" name="3">
                <classcomment></classcomment>
            </el-tab-pane>
            <el-tab-pane label="课后作业" name="4">
                <classafterwork></classafterwork>
            </el-tab-pane>
            <el-tab-pane label="打卡作业" name="5">
                <classpunchcard></classpunchcard>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
    import classrecord from './ClassRecord'
    import classshow from './ClassShow'
    import classcomment from './ClassComment'
    import classafterwork from './ClassAfterwork'
    import classpunchcard from './ClassPunchcard'


    export default {
        name:'AffairsGL',
        components:{
            classrecord,
            classshow,
            classcomment,
            classafterwork,
            classpunchcard
        },
        data(){
            return{
                tabs_active:'1'
            }
        }
    }
</script>
<style scoped>

</style>