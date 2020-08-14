import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    // 登录
    {
      path: '/login',
      name: 'Login',
      meta: {

      },
      component: () => import('@/components/login/Login')
    },
    // 工作台
    {
      path: '/',
      name: 'WorkBench',
      meta: {

      },
      component: () => import('@/components/workbench/WorkBench')
    },
    {
      path: '/basicsetting/BasicSetting',
      name: 'BasicSetting',
      meta:{

      },
      component: () => import('@/components/workbench/basicsetting/BasicSetting')
    },

    // 易知独秀
    {
      path: '/uniquebranch/WebsiteSet',
      name: 'WebsiteSet',
      meta: {

      },
      component: () => import('@/components/uniquebranch/WebsiteSet')
    },
    {
      path: '/uniquebranch/ActivityGL',
      name: 'ActivityGL',
      meta: {

      },
      component: () => import('@/components/uniquebranch/ActivityGL')
    },
    {
      path: '/uniquebranch/ShowCourse',
      name: 'ShowCourse',
      meta: {

      },
      component: () => import('@/components/uniquebranch/ShowCourse')
    },


    //营销中心
    {
      path: '/marketingcenter/GoodsGL',
      name: 'GoodsGL',
      meta: {

      },
      component: () => import('@/components/marketingcenter/GoodsGL')
    },

    {
      path: '/marketingcenter/CouponGL',
      name: 'CouponGL',
      meta: {

      },
      component: () => import('@/components/marketingcenter/CouponGL')
    },
    {
      path: '/marketingcenter/QuestionnaireGL',
      name: 'QuestionnaireGL',
      meta: {

      },
      component: () => import('@/components/marketingcenter/QuestionnaireGL')
    },
    {
      path: '/marketingcenter/ReferralGL',
      name: 'ReferralGL',
      meta: {

      },
      component: () => import('@/components/marketingcenter/ReferralGL')
    },


    //销售管理
    {
      path: '/sales/NamelistGL',
      name: 'NamelistGL',
      meta: {

      },
      component: () => import('@/components/sales/namelistgl/NamelistGL')
    },
    {
      path: '/sales/PotentialGL',
      name: 'PotentialGL',
      meta: {

      },
      component: () => import('@/components/sales/potentialgl/PotentialGL')
    },
    {
      path: '/sales/VisitQuery',
      name: 'VisitQuery',
      meta: {

      },
      component: () => import('@/components/sales/VisitQuery')
    },
    {
      path: '/sales/AuditionGL',
      name: 'AuditionGL',
      meta: {

      },
      component: () => import('@/components/sales/AuditionGL')
    },
    {
      path: '/sales/OrderPush',
      name: 'OrderPush',
      meta: {

      },
      component: () => import('@/components/sales/OrderPush')
    },
    {
      path: '/sales/RenewalWarn',
      name: 'RenewalWarn',
      meta: {

      },
      component: () => import('@/components/sales/RenewalWarn')
    },
    {
      path: '/sales/ChannelGL',
      name: 'ChannelGL',
      meta: {

      },
      component: () => import('@/components/sales/ChannelGL')
    },

    //教务管理
    {
      path: '/educational/StudentCenter',
      name: 'StudentCenter',
      meta: {

      },
      component: () => import('@/components/educational/studentcenter/StudentCenter')
    },

    {
      path: '/educational/ClasslGL',
      name: 'ClasslGL',
      meta: {

      },
      component: () => import('@/components/educational/classgl/ClasslGL')
    },


    {
      path: '/educational/TimetableGL',
      name: 'TimetableGL',
      meta: {

      },
      component: () => import('@/components/educational/TimetableGL')
    },
    {
      path: '/educational/AppointmentGL',
      name: 'AppointmentGL',
      meta: {

      },
      component: () => import('@/components/educational/appointmentgl/AppointmentGL')
    },
    {
      path: '/educational/CourseSet',
      name: 'CourseSet',
      meta: {

      },
      component: () => import('@/components/educational/courseset/CourseSet')
    },
    {
      path: '/educational/DataGL',
      name: 'DataGL',
      meta: {

      },
      component: () => import('@/components/educational/DataGL')
    },


    //日常课务
    {
      path: '/dailyaffairs/AffairsGL',
      name: 'AffairsGL',
      meta: {

      },
      component: () => import('@/components/dailyaffairs/affairsgl/AffairsGL')
    },
    {
      path: '/dailyaffairs/OnlineCourse',
      name: 'OnlineCourse',
      meta: {

      },
      component: () => import('@/components/dailyaffairs/onlinecourse/OnlineCourse')
    },
    {
      path: '/dailyaffairs/IntegralGL',
      name: 'IntegralGL',
      meta: {

      },
      component: () => import('@/components/dailyaffairs/IntegralGL')
    },
    {
      path: '/dailyaffairs/MakeupLessons',
      name: 'MakeupLessons',
      meta: {

      },
      component: () => import('@/components/dailyaffairs/MakeupLessons')
    },
    {
      path: '/dailyaffairs/StudentSignin',
      name: 'StudentSignin',
      meta: {

      },
      component: () => import('@/components/dailyaffairs/StudentSignin')
    },
    {
      path: '/dailyaffairs/PickupGL',
      name: 'PickupGL',
      meta: {

      },
      component: () => import('@/components/dailyaffairs/PickupGL')
    },

    //我的授课
    {
      path: '/myteaching/MyTimetable',
      name: 'MyTimetable',
      meta: {

      },
      component: () => import('@/components/myteaching/MyTimetable')
    },
    {
      path: '/myteaching/PunchIn',
      name: 'PunchIn',
      meta: {

      },
      component: () => import('@/components/myteaching/PunchIn')
    },
    {
      path: '/myteaching/OnlineCourse',
      name: 'OnlineCourse',
      meta: {

      },
      component: () => import('@/components/myteaching/OnlineCourse')
    },

    //行政管理
    {
      path: '/administrative/NoticeGL',
      name: 'NoticeGL',
      meta: {

      },
      component: () => import('@/components/administrative/NoticeGL')
    },
    {
      path: '/administrative/StockGL',
      name: 'StockGL',
      meta: {

      },
      component: () => import('@/components/administrative/StockGL')
    },
    {
      path: '/administrative/StationGL',
      name: 'StationGL',
      meta: {

      },
      component: () => import('@/components/administrative/StationGL')
    },
    {
      path: '/administrative/StaffGL',
      name: 'StaffGL',
      meta: {

      },
      component: () => import('@/components/administrative/staffgl/StaffGL')
    },
    {
      path: '/administrative/StaffCheck',
      name: 'StaffCheck',
      meta: {

      },
      component: () => import('@/components/administrative/StaffCheck')
    },


    //财务管理
    {
      path: '/finance/OrderGL',
      name: 'OrderGL',
      meta: {

      },
      component: () => import('@/components/finance/OrderGL')
    },
    {
      path: '/finance/DetailedCash',
      name: 'DetailedCash',
      meta: {

      },
      component: () => import('@/components/finance/DetailedCash')
    },
    {
      path: '/finance/YishouBao',
      name: 'YishouBao',
      meta: {

      },
      component: () => import('@/components/finance/YishouBao')
    },
    {
      path: '/finance/CostCash',
      name: 'CostCash',
      meta: {

      },
      component: () => import('@/components/finance/CostCash')
    },
    {
      path: '/finance/WagesGL',
      name: 'WagesGL',
      meta: {

      },
      component: () => import('@/components/finance/WagesGL')
    },
    {
      path: '/finance/SystemService',
      name: 'SystemService',
      meta: {

      },
      component: () => import('@/components/finance/SystemService')
    },


    //统计分析
    {
      path: '/statistical/SalesStatistics',
      name: 'SalesStatistics',
      meta: {

      },
      component: () => import('@/components/statistical/SalesStatistics')
    },
    {
      path: '/statistical/EducationalSummary',
      name: 'EducationalSummary',
      meta: {

      },
      component: () => import('@/components/statistical/EducationalSummary')
    },
    {
      path: '/statistical/NamelistAnalysis',
      name: 'NamelistAnalysis',
      meta: {

      },
      component: () => import('@/components/statistical/NamelistAnalysis')
    },
    {
      path: '/statistical/FinanceAnalysis',
      name: 'FinanceAnalysis',
      meta: {

      },
      component: () => import('@/components/statistical/FinanceAnalysis')
    },
  ],
  mode: 'history'
})
