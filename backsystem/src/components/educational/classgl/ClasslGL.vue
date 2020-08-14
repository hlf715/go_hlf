<template>
    <div id="ClasslGL">
        <el-tabs v-model="tabs_active" type="card">
            <el-tab-pane label="在课" name="first">
                <atclass></atclass>
            </el-tab-pane>
            <el-tab-pane label="已结业" name="second">
                <completed></completed>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
    import atclass from './AtClass'
    import completed from './Completed'
    export default {
        name:'ClasslGL',
        components:{
            atclass,
            completed
        },
        data(){
            return{
               tabs_active:'first'     
            }
        }
    }
</script>
<style scoped>
    #ClasslGL{
        background: #ffffff;
        padding: 15px;
    }
</style>