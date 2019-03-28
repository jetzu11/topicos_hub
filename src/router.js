import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login.vue'
import Welcome from '@/views/Welcome'
import IniPro from '@/views/IniPro.vue'
import UniFabricadas from '@/views/UniFabricadas'
import Scrap from '@/views/Scrap'
import IniParada from '@/views/IniParada.vue'
import FinParada from '@/views/FinParada'
import FinProduccion from '@/views/FinProduccion'
import ProduActual from '@/views/ProduActual'
import ProduActualDetalle from '@/components/ProduActualDetalle'
import ProduAnterior from '@/views/ProduAnterior'
import ProduAnteriorDetalle from '@/components/ProduAnteriorDetalle'
import RendiOpe from '@/views/RendiOpe'
import RendiOpeDetalle from '@/components/RendiOpeDetalle'
import RendiOpeDetalleEspe from '@/components/RendiOpeDetalleEspe'
import AdminPrivi from '@/views/AdminPrivi'
import AdminPieza from '@/views/AdminPieza'
import PiezaMaquina from '@/views/PiezaMaquina'
import CerrarSession from '@/views/CerrarSession'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/Welcome',
      name: 'Welcome',
      component: Welcome
      
    },
    {
      path: '/IniPro',
      name: 'IniPro',
      component: IniPro
        
    },
    {
      path: '/UniFabricadas',
      name: 'UniFabricadas',
      component: UniFabricadas
        
    },
    {
      path: '/Scrap',
      name: 'Scrap',
      component: Scrap
      
    },
    {
      path: '/IniParada',
      name: 'IniParada',
      component: IniParada
        
    },
    {
      path: '/FinParada',
      name: 'FinParada',
      component: FinParada
        
    },
    {
      path: '/FinProduccion',
      name: 'FinProduccion',
      component: FinProduccion
        
    },
    {
      path: '/ProduActual',
      name: 'ProduActual',
      component: ProduActual
      
    },
    {
        path: '/ProduActualDetalle',
        name: 'ProduActualDetalle',
        component: ProduActualDetalle
        
    },
    {
        path: '/ProduAnterior',
        name: 'ProduAnterior',
        component: ProduAnterior
        
    },
    {
        path:'/ProduAnteriorDetalle',
        name: 'ProduAnteriorDetalle',
        component: ProduAnteriorDetalle
    },
    {
        path: '/RendiOpe',
        name: 'RendiOpe',
        component: RendiOpe
        
    },
    {
        path: '/RendiOpeDetalle',
        name: 'RendiOpeDetalle',
        component: RendiOpeDetalle
        
    },
    {
        path: '/RendiOpeDetalleEspe',
        name: 'RendiOpeDetalleEspe',
        component: RendiOpeDetalleEspe
        
    },
    {
      path: '/AdminPrivi',
      name: 'AdminPrivi',
      component: AdminPrivi
      
    },
    {
        path: '/AdminPieza',
        name: 'AdminPieza',
        component: AdminPieza
        
    },
    {
        path: '/PiezaMaquina',
        name: 'PiezaMaquina',
        component: PiezaMaquina
        
    },
    {
      path: '/CerrarSession',
      name: 'CerrarSession',
      component: CerrarSession
      
    }
  ]
})
