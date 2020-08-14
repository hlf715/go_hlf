<template>
  <div id="NamelistGL" class="outercss">
    <el-row class="margin-bottom15">
      <el-col :span="12">
        <el-input
          v-model="serachTxt"
          clearable
          placeholder="姓名、家长姓名、联系方式"
          class="el-input-width margin-right10 float-l"
          size="mini"
        >
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <el-date-picker
          v-model="dateTxt"
          type="daterange"
          size="mini"
          :editable="false"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          format="yyyy 年 MM 月 dd 日"
          value-format="yyyy-MM-dd"
          :picker-options="this.defaultCheckDate"
        ></el-date-picker>
      </el-col>
      <el-col :span="12">
        <el-dropdown trigger="click" class="float-r margin-left10" v-show="false">
          <el-button type="primary" size="mini" icon="el-icon-more-outline">更多</el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>导入名单</el-dropdown-item>
            <el-dropdown-item>导出名单</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-button
          class="float-r margin-left10"
          type="primary"
          plain
          size="mini"
          icon="el-icon-user"
        >名单分配</el-button>
        <el-button
          class="float-r"
          type="primary"
          plain
          size="mini"
          icon="el-icon-s-operation"
          @click="OpenPushset"
        >地推设置</el-button>
      </el-col>
    </el-row>
    <el-row class="margin-bottom15">
      <el-col :span="24">
        <el-dropdown trigger="click" placement="bottom" class="margin-right10">
          <span class="el-dropdown-link">
            状态
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown trigger="click" placement="bottom" class="margin-right10">
          <span class="el-dropdown-link">
            销售
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown trigger="click" placement="bottom" class="margin-right10">
          <span class="el-dropdown-link">
            采单员
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown trigger="click" placement="bottom" class="margin-right10">
          <span class="el-dropdown-link">
            来源渠道
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <el-checkbox v-model="isNochannel">无渠道</el-checkbox>

        <el-button type="text" plain size="mini" class="margin-left10" @click="FunReset">
          重置
          <i class="el-icon-refresh-left"></i>
        </el-button>
      </el-col>
    </el-row>

    <el-row class="margin-bottom15">
      <el-col :span="24">
        <el-table
          :data="tableData"
          row-key="id"
          highlight-current-row
          :fit="true"
          size="small"
          :header-cell-style="{background:'#eef1f6',color:'#606266'}"
        >
          <el-table-column label="姓名">
            <template slot-scope="{row}">
              <span>{{ row.name }}</span>
            </template>
          </el-table-column>
          <el-table-column label="家长">
            <template slot-scope="{row}">
              <span>{{ row.name }}</span>
            </template>
          </el-table-column>
          <el-table-column label="联系方式">
            <template slot-scope="{row}">
              <span>{{ row.name }}</span>
            </template>
          </el-table-column>
          <el-table-column label="备注">
            <template slot-scope="{row}">
              <span>{{ row.name }}</span>
            </template>
          </el-table-column>
          <el-table-column label="电话销售">
            <template slot-scope="{row}">
              <span>{{ row.name }}</span>
            </template>
          </el-table-column>
          <el-table-column label="采单员">
            <template slot-scope="{row}">
              <span>{{ row.name }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作时间">
            <template slot-scope="{row}">
              <span>{{ row.date }}</span>
            </template>
          </el-table-column>
          <el-table-column label="状态">
            <template slot-scope="{row}">
              <span>{{ row.name }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="150">
            <template slot-scope="{}">
              <el-button size="mini" type="success">编辑</el-button>
              <el-button size="mini" type="danger">删除</el-button>
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
          :page-size="5"
          layout="total, sizes, prev, pager, next, jumper"
          :total="currentData.currentTotal"
        ></el-pagination>
      </el-col>
    </el-row>

    <pushset ref="pushset"></pushset>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import pushset from "@/dialog/sales/namelistgl/pushset";
export default {
  name: "NamelistGL",
  components: {
    pushset,
  },
  data() {
    return {
      serachTxt: "",
      dateTxt: [],
      isNochannel: false,
      tableData: [
        { date: "2016-05-02", name: "王小虎" },
        { date: "2016-05-04", name: "王小虎" },
      ],
      currentData: {
        currentPage: 1,
        currentTotal: 500,
      },
      dialogPushSet: {
        title: "地推设置",
        isOpen: false,
        innerTitle: "",
        innerIsopen: false,
      },
    };
  },
  computed: {
    ...mapState(["defaultCheckDate"]),
  },
  methods: {
    OpenPushset() {
      let child = this.$refs.pushset
      child.dialogPushSet.isOpen = true;
    },
    FunReset() {
      this.serachTxt = "";
      this.dateTxt = [];
      this.isNochannel = false;
    },
  },
};
</script>
<style scoped>
</style>