<template>
    <div id="AppointmentGL">
        <el-tabs v-model="tabs_active" type="card">
            <el-tab-pane label="约课预警" name="first">
                <appointwarn></appointwarn>
            </el-tab-pane>
            <el-tab-pane label="约课记录" name="second">
                <appointrecord></appointrecord>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
    //局部注册组件
    import appointwarn from './AppointWarn'
    import appointrecord from './AppointRecord'
    export default {
        name:'AppointmentGL',
        components:{
            appointwarn,
            appointrecord
        },
        data(){
            return{
                tabs_active:'first'
            }
        }
    }
</script>
<style scoped>
    #AppointmentGL{
        background: #ffffff;
        padding: 15px;
    }
</style>