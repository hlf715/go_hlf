<template>
    <div id="StudentList">
        <el-row class="margin-bottom15">
            <el-col :span="24">
                <el-radio-group size="medium" v-model="radio_check">
                    <el-radio-button label="1">在读</el-radio-button>
                    <el-radio-button label="2">历史</el-radio-button>
                </el-radio-group>
            </el-col>
        </el-row>
        <el-row v-if="radio_check == 1" class="margin-bottom15">
            <el-col :span="24">
                <studying></studying>
            </el-col>
        </el-row>
        <el-row v-if="radio_check == 2" class="margin-bottom15">
            <el-col :span="24">
                <history></history>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import studying from './Studying'
    import history from './History'
    export default {
        name:'StudentList',
        components:{
            studying,
            history
        },
        data(){
            return{
                radio_check:'1'
            }
        }
    };
</script>
<style scoped>
   
</style>