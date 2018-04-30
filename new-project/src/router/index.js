import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/layout'
import IndexPage from '@/pages/index'
import VueResource from 'vue-resource'
import DetailPage from '@/pages/detail'
import orderListPage from '@/pages/orderList'
import DetailAnaPage from '@/pages/detail/analysis'
import DetailCouPage from '@/pages/detail/count'
import DetailForPage from '@/pages/detail/forecast'
import DetailPubPage from '@/pages/detail/publish'

Vue.use(VueResource)
Vue.use(Router)

export default new Router({
  mode: 'history',
	routes: [
	    {
	    	path: '/',
	    	component: IndexPage
	    },
	    {
	    	path:'/orderList',
	    	component:orderListPage
	    },
	    {
	    	path: '/detail',
	    	component: DetailPage,
	    	redirect: '/detail/analysis',
	    	children: [
	    	    {
	    	    	path: 'analysis',
	    	    	component: DetailAnaPage
	    	    },
	    	    {
	    	    	path: 'count',
	    	    	component: DetailCouPage
	    	    },
	    	    {
	    	    	path: 'forecast',
	    	    	component: DetailForPage
	    	    },
	    	    {
	    	    	path: 'publish',
	    	    	component: DetailPubPage
	    	    }
	    	]
	    }
	]
})
