<template>
    <div id="AuditionGL">
        <el-tabs v-model="tabs_active" type="card">
            <el-tab-pane  label="试听记录" name="first">
                <el-row class="margin-bottom15">
                    <el-col :span="24">
                        <el-input placeholder="输入姓名、昵称、联系方式" v-model="serachTxt" class="input-search margin-right10 float-l" size="small">
                            <el-button slot="append" icon="el-icon-search"></el-button>
                        </el-input>
                        <el-date-picker v-model="dateTxt" type="daterange" align="right" unlink-panels size="small" class="input-date-picker float-l"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                            :picker-options="this.defaultCheckDate">
                        </el-date-picker>
                    </el-col>
                </el-row>
                <el-row class="margin-bottom15" style="height:32px;line-height:32px;">
                    <el-col :span="24">
                        <el-dropdown trigger="click" class="margin-right10 cr-pointer float-l">
                            <span class="el-dropdown-link">
                                课程<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                        <el-dropdown trigger="click" class="margin-right10 cr-pointer float-l">
                            <span class="el-dropdown-link">
                                老师<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                        <el-dropdown trigger="click" class="margin-right10 cr-pointer float-l">
                            <span class="el-dropdown-link">
                                顾问<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                        
                        <el-radio-group v-model="radio_listen" class="margin-right5 float-l margin-top10">
                            <el-radio :label="2">已安排</el-radio>
                            <el-radio :label="4">已试听</el-radio>
                            <el-radio :label="4">未到课</el-radio>
                            <el-radio :label="6">已过期</el-radio>
                        </el-radio-group>
                        <el-button class="float-l" style="padding-top:10px;" type="text" @click="FunReset">重置</el-button>
                    </el-col>
                </el-row>


                <el-row class="margin-bottom15">
                    <el-col :span="24">
                        <el-table :data="tableData" row-key="id" fit highlight-current-row style="width: 100%">
                           
                            <el-table-column fixed label="学员姓名" width="150">
                                <template slot-scope="{row}">
                                    <span>{{ row.name }}</span>
                                </template>
                            </el-table-column>

                            <el-table-column fixed label="联系方式" width="200">
                                <template slot-scope="{row}">
                                    <span>{{ row.date }}</span>
                                </template>
                            </el-table-column>

                            <el-table-column label="顾问" width="110">
                                <template slot-scope="{row}">
                                    <span>{{ row.name }}</span>
                                </template>
                            </el-table-column>

                            <el-table-column label="试听课程" min-width="150">
                                <template slot-scope="{row}">
                                    <span>{{ row.name }}</span>
                                </template>
                            </el-table-column>

                            <el-table-column label="试听班级" width="180">
                                <template slot-scope="{row}">
                                    <span>{{ row.name }}</span>
                                </template>
                            </el-table-column>

                            <el-table-column label="试听时间" width="280">
                                <template slot-scope="{row}">
                                    <span>{{ row.name }}</span>
                                </template>
                            </el-table-column>

                            <el-table-column label="老师" width="80">
                                <template slot-scope="{row}">
                                    <span>{{ row.name }}</span>
                                </template>
                            </el-table-column>

                            <el-table-column label="教室" width="180">
                                <template slot-scope="{row}">
                                    <span>{{ row.name }}</span>
                                </template>
                            </el-table-column>

                            <el-table-column label="试听状态" width="130">
                                <template slot-scope="{row}">
                                    <span>{{ row.name }}</span>
                                </template>
                            </el-table-column>

                            <el-table-column label="操作" fixed="right" align="center" width="230">
                                <template slot-scope="{}">
                                    <el-button size="mini" type="text">标记为已试听</el-button>
                                    <el-button size="mini" type="text">重新预约</el-button>
                                    <el-button size="mini" type="text">取消预约</el-button>
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


            </el-tab-pane>
            <el-tab-pane label="试听课课表" name="second">
                <el-row class="margin-bottom15">
                    <el-col :span="12">
                        <el-date-picker v-model="dateTxt" type="daterange" align="right" unlink-panels size="small" class="input-date-picker float-l"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                            :picker-options="this.defaultCheckDate">
                        </el-date-picker>
                    </el-col>
                    <el-col :span="12">
                        <el-button class="float-r" type="danger" size="small" icon="el-icon-s-operation">安排试听课</el-button>
                    </el-col>
                </el-row>
                <el-row class="margin-bottom15" style="height:32px;line-height:32px;">
                    <el-col :span="24">
                        <el-dropdown trigger="click" class="margin-right10 cr-pointer float-l">
                            <span class="el-dropdown-link">
                                选择课程<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                        <el-dropdown trigger="click" class="margin-right10 cr-pointer float-l">
                            <span class="el-dropdown-link">
                                选择老师<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                        <el-dropdown trigger="click" class="margin-right10 cr-pointer float-l">
                            <span class="el-dropdown-link">
                                创建人<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                        
                        <el-radio-group v-model="radio_isCourse" class="margin-right5 float-l" style="margin-top:10px;">
                            <el-radio :label="2">已上</el-radio>
                            <el-radio :label="4">未上</el-radio>
                        </el-radio-group>
                        <el-button class="float-l" style="padding-top:10px;" type="text" @click="FunReset">重置</el-button>
                    </el-col>
                </el-row>


                <el-row class="margin-bottom15">
                    <el-col :span="24">
                        <el-table :data="tableData" row-key="id" fit highlight-current-row style="width: 100%">
                           
                            <el-table-column fixed label="上课时间" width="200">
                                <template slot-scope="{row}">
                                    <span>{{ row.date }}</span>
                                </template>
                            </el-table-column>

                            <el-table-column label="课程" width="110">
                                <template slot-scope="{row}">
                                    <span>{{ row.name }}</span>
                                </template>
                            </el-table-column>

                            <el-table-column label="老师" min-width="150">
                                <template slot-scope="{row}">
                                    <span>{{ row.name }}</span>
                                </template>
                            </el-table-column>

                            <el-table-column label="教室" width="180">
                                <template slot-scope="{row}">
                                    <span>{{ row.name }}</span>
                                </template>
                            </el-table-column>

                            <el-table-column label="实到/应到" width="280">
                                <template slot-scope="{row}">
                                    <span>{{ row.name }}</span>
                                </template>
                            </el-table-column>

                            <el-table-column label="状态" width="80">
                                <template slot-scope="{row}">
                                    <span>{{ row.name }}</span>
                                </template>
                            </el-table-column>

                            <el-table-column label="创建人" width="180">
                                <template slot-scope="{row}">
                                    <span>{{ row.name }}</span>
                                </template>
                            </el-table-column>

                            <el-table-column label="操作" fixed="right" align="center" width="230">
                                <template slot-scope="{}">
                                    <el-button size="mini" type="text">点名</el-button>
                                    <el-button size="mini" type="text">排课变更</el-button>
                                    <el-button size="mini" type="text">删除</el-button>
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
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
    import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
    export default {
        name:'AuditionGL',
        data(){
            return{
                tabs_active:'first',
                serachTxt:'',
                dateTxt:'',
                radio_listen:'',
                tableData:[
                    {date: "2016-05-02",name: "王小虎", address: "上海市普陀区金沙江路 1518 弄", },
                    {date: "2016-05-04",name: "王小虎", address: "上海市普陀区金沙江路 1517 弄", }
                ],
                
                currentData:{
                    currentPage: 1,
                    currentTotal:500,
                },

                // second  tab  
                radio_isCourse:'',


            }
        },
        methods:{
            FunReset(){

            }
        },
        computed:{
            ...mapState(['defaultCheckDate'])
        }
    }
</script>
<style scoped>
    #AuditionGL{
        background: #ffffff;
        padding: 15px;
    }
</style>