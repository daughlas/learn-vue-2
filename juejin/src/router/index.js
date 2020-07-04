import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '../components/home'
import ButtonComponent from '../components/button'
import ReferenceComponent from '../components/reference'
import ProvideAndInjectComponent from '../components/provide-and-inject'
import FormComponent from '../components/form'
import DisplayComponent from '../components/display'
import AlertComponent from '../components/alert/index.vue'
import RenderComponent from '../components/render/index.vue'
import MenuComponent from '../components/menu/index.vue'
import TabComponent from '../components/new-tab/index.vue'
import TableComponent from '../components/table/index.vue'
import CheckboxComponent from '../components/checkbox'

export default new Router({
  routes: [
    {path: '/', redirect: 'home'},
    {path: '/home', component: HomeComponent},
    {path: '/button', component: ButtonComponent},
    {path: '/reference', component: ReferenceComponent},
    {path: '/provide-and-inject', component: ProvideAndInjectComponent},
    {path: '/form', component: FormComponent},
    {path: '/display', component: DisplayComponent},
    {path: '/checkbox', component: CheckboxComponent},
    {path: '/alert', component: AlertComponent},
    {path: '/render', component: RenderComponent},
    {path: '/menu', component: MenuComponent },
    {path: '/tab', component: TabComponent},
    {path: '/table', component: TableComponent}
  ]
})

Vue.use(Router)