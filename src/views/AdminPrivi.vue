<template>
<div xs="12">
  <Menu></Menu>
  <b-card no-body>
    <b-tabs card>
      <b-tab>
        <div slot="title">
          <strong>Operador</strong>
        </div>
        <b-input-group prepend="Ficha" class="mt-3">
          <b-form-input v-model="ficha" type="number" />
          <b-input-group-append>
            <b-button variant="outline-success">Buscar</b-button>
          </b-input-group-append>
        </b-input-group>
        <b-row>
          <b-col sm="3">
            <label for="user" class=mt-3>Usuario: {{ficha}}</label>
          </b-col>
        </b-row>
        <b-card class="text-center mt-2">
          <b-card-header style="background:#f8b739">
          <h6 slot="header" style="color:white">Administracion de Privilegios</h6>
          </b-card-header>
          <b-table :bordered="bordered" :hover="hover" :items="privilegiosOp" :fields="fieldsTiPro">
            <template slot="estado" >
              <b-form-checkbox switch name="check-button">
              </b-form-checkbox>
            </template>

          </b-table>

        </b-card>
      </b-tab>

      <b-tab>
        <div slot="title">
          <strong>Supervisor</strong>
        </div>
        <b-input-group prepend="Ficha" class="mt-3">
          <b-form-input v-model="ficha" type="number" />
          <b-input-group-append>
            <b-button variant="outline-success">Buscar</b-button>
          </b-input-group-append>
        </b-input-group>
        <b-row>
          <b-col sm="3">
            <label for="user" class=mt-3>Usuario: {{ficha}}</label>
          </b-col>
        </b-row>
        <b-card class="text-center mt-2">
          <b-card-header style="background:#f8b739">
          <h6 slot="header" style="color:white">Administracion de Privilegios</h6>
          </b-card-header>
          <b-table :bordered="bordered" :hover="hover" :items="privilegiosSup" :fields="fieldsTiPro">
            <template slot="estado" >
              <b-form-checkbox switch name="check-button">
              </b-form-checkbox>
            </template>
          </b-table>
        </b-card>
      </b-tab>
      <b-tab>
        <div slot="title">
          <strong>Administrador</strong>
        </div>
        <b-input-group prepend="Ficha" class="mt-3">
          <b-form-input v-model="ficha" type="number" />
          <b-input-group-append>
            <b-button variant="outline-success">Buscar</b-button>
          </b-input-group-append>
        </b-input-group>
        <b-row>
          <b-col sm="3">
            <label for="user" class=mt-3>Usuario: {{ficha}}</label>
          </b-col>
        </b-row>
        <b-card class="text-center mt-2">
          <b-card-header style="background:#f8b739">
          <h6 slot="header" style="color:white">Administracion de Privilegios</h6>
          </b-card-header>
          <b-table :bordered="bordered" :hover="hover" :items="privilegiosAdm" :fields="fieldsTiPro">
            <template slot="estado" >
              <b-form-checkbox switch name="check-button">
              </b-form-checkbox>
            </template>
          </b-table>
        </b-card>
      </b-tab>
    </b-tabs>
  </b-card>
</div>
</template>
<script>
import Menu from '@/components/Menu'
export default {
    
    data(){
        return{
          ficha:'',
            privilegiosOp:[
                {index:1,privilegio:'Unidades Fabricadas',type:'OPERADOR', estado: 'accepted'},
                {index:2,privilegio:'Inicio de Producción',type:'OPERADOR',estado: 'accepted'},
                {index:3,privilegio:'Inicio de Parada',type:'OPERADOR',estado: 'not_accepted'},
                {index:4,privilegio:'Fin de Producción',type:'OPERADOR',estado: 'accepted'},
                {index:5,privilegio:'Fin de Parada',type:'OPERADOR',estado: 'not_accepted'}
                ],
            privilegiosSup:[
            	{index:1,privilegio:'Ver Producción (Anterior)',type:'SUPERVISOR'},
                {index:2,privilegio:'Ver Producción (Actual)',type:'SUPERVISOR'},
                {index:3,privilegio:'Rendimiento Operacional (Anterior)',type:'SUPERVISOR'}
                ],
            privilegiosAdm:[
            	{index:1,privilegio:'Agregar Pza-Maquina',type:'ADMINISTRADOR'},
                {index:2,privilegio:'Agregar Maquina-Proceso',type:'ADMINISTRADOR'},
                {index:3,privilegio:'Administrar Privilegios',type:'ADMINISTRADOR'},
                {index:4,privilegio:'Administrar Pieza',type:'ADMINISTRADOR'}
            ],
            fieldsTiPro: [
                {key:'privilegio',label:'Privilegios'},
                {key:'estado',label:'Estado'}
            ],
            checked: false,
            bordered: true,
            hover: true
        }
        
    },
    components:{
      Menu
    }
}
</script>

