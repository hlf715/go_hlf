<template>
    <div id="CourseSet">
        <el-tabs v-model="tabs_active" type="card">
            <el-tab-pane label="课程管理" name="first">
                <coursegl></coursegl>
            </el-tab-pane>
            <el-tab-pane label="学杂管理" name="second">
                <mixgl></mixgl>
            </el-tab-pane>
            <el-tab-pane label="课程包" name="third">
                <coursepackage></coursepackage>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
    //局部注册组件
    import coursegl from './CourseGl'
    import mixgl from './MixGl'
    import coursepackage from './CoursePackage'
    export default {
        name:'CourseSet',
        components:{
            coursegl,
            mixgl,
            coursepackage
        },
        data(){
            return{
                tabs_active:'first'
            }
        }
    }
</script>
<style scoped>
    #CourseSet{
        background: #ffffff;
        padding: 15px;
    }
</style>