<template>
    <div id="StaffGL" class="outercss">
        <el-row type="flex" align="middle" class="margin-bottom10">
            <el-col :span="12">
                <el-input
                    v-model="serachTxt"
                    clearable
                    placeholder="姓名、联系方式、工号"
                    class="el-input-width margin-right10 float-l"
                    size="mini">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
                <el-dropdown trigger="click" placement="bottom" szie="mini" class="margin-right10 line_height28 float-l">
					<span class="el-dropdown-link">
						岗位
                        <i class="el-icon-arrow-down el-icon--right"></i>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>黄金糕</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
                <el-radio-group v-model="radio_isOn" size="mini" class="float-l margin-right15" style="margin-top:8px;">
                    <el-radio :label="3">在职</el-radio>
                    <el-radio :label="6">离职</el-radio>
                </el-radio-group>
                <el-button type="text" plain size="mini" class="float-l" style="margin-top:1px;">
					重置
					<i class="el-icon-refresh-left"></i>
				</el-button>
            </el-col>
            <el-col :span="12">
                <el-button class="float-r margin-left10" type="primary" plain size="mini" icon="el-icon-more-outline">员工导入</el-button>
                <el-button class="float-r" type="primary" plain size="mini" icon="el-icon-s-operation" @click="OpenAddstaff">新增员工</el-button>
            </el-col>
		</el-row>

        <el-row class="margin-bottom15">
            <el-col :span="24">
                <el-table :data="tableData" row-key="id" 
                        highlight-current-row
                        :fit="true"
                        size="small"
                        :header-cell-style="{background:'#eef1f6',color:'#606266'}">

                    <el-table-column label="头像">
                        <template slot-scope="{row}">
                            <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column label="姓名">
                        <template slot-scope="{row}">
                            <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column label="工号">
                        <template slot-scope="{row}">
                            <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column label="岗位">
                        <template slot-scope="{row}">
                            <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column label="联系方式">
                        <template slot-scope="{row}">
                            <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column label="入职时间">
                        <template slot-scope="{row}">
                            <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column label="工作性质">
                        <template slot-scope="{row}">
                            <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column label="在职状态">
                        <template slot-scope="{row}">
                            <span>{{ row.name }}</span>
                        </template>
                    </el-table-column>
                    
                    <el-table-column label="录入时间">
                        <template slot-scope="{}">
                            <el-button size="mini" type="text">编辑</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-col>
        </el-row>
        <el-row>
			 <el-col :span="24">
				   <el-pagination
					 :current-page="currentData.currentPage"
					 small
					 background
					 :page-sizes="[5, 10, 15, 20]"
					 :page-size="currentData.currentSize"
					 layout="total, sizes, prev, pager, next, jumper"
					 :total="currentData.currentTotal"
				   ></el-pagination>
			</el-col>
		</el-row>

        <addstaff ref="addstaff"></addstaff>
    </div>
</template>
<script>
    import addstaff from '@/dialog/administrative/staffgl/addstaff'
    export default {
        name:'StaffGL',
        components:{
            addstaff
        },
        data(){
            return{
                serachTxt:'',
                radio_isOn:'',
                tableData:[
                    {name: "王小虎"},
                ],
                currentData:{
                    currentPage: 1,
                    currentSize: 5,
                    currentTotal:500,
                }
            }
        },
        methods:{
            OpenAddstaff(){
                let child = this.$refs.addstaff
                child.dialogAddStaff.isOpen = true
            }
        },
        created(){
            this.$http.post('http://192.168.10.189:8010/api/user/list',
                {
                    limit:this.currentData.currentSize,
                    page:this.currentData.currentPage
                },{emulateJSON:true}).then((res) => {
                    console.log(res.data)
            }).catch(function (error) {
                console.log("出错喽：" + error);
            });
        }
    }
</script>
<style scoped>

</style>