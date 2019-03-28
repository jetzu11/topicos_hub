<template>
<div xs="12">
    <Menu/>
    <h2 class="text-center mt-2">Maquina-Fecha</h2>
    
    <b-card-group deck>
        <b-card class="text-center mt-5"
        header="Detalle del tiempo programado"
        header-tag="header">
            <b-table
            :bordered="bordered"
            :hover="hover"
            :items="detalleTiemPro"
            :fields="fieldsTiemPro"
            >
                <template slot="opcion" >
                    <b-button v-b-modal.detaTiemProAjuste size="sm" variant="outline-dark" block  class="mr-2">
                        Ajuste Registro
                    </b-button>
                </template>
            </b-table>
                       
        </b-card>
    </b-card-group>
    <b-card-group deck>
        <b-card class="text-center mt-5"
        header="Detalle de la cantidad producida por pieza"
        header-tag="header">
            <b-table
            :bordered="bordered"
            :hover="hover"
            :items="detalleProPie"
            :fields="fieldsProPie"
            />
                       
        </b-card>
    </b-card-group>
    <b-card-group deck>
        <b-card class="text-center mt-5"
        header="Detalle de la cantidad de Scrap"
        header-tag="header">
            <b-table
            :bordered="bordered"
            :hover="hover"
            :items="detalleScrap"
            :fields="fieldsCanScra"
            />
                       
        </b-card>
    </b-card-group>
    <b-card-group deck>
        <b-card class="text-center mt-5"
        header="Detalle de las paradas realizadas"
        header-tag="header">            
           <b-table
            :bordered="bordered"
            :hover="hover"
            :items="detalleParRea"
            :fields="fieldsParRea"
            />
        </b-card>
    </b-card-group>
  <!-- Modal Component -->
   <b-modal
      id="detaTiemProAjuste"
      ref="modal"
      title="Ajuste del tiempo programado"
      @ok="handleOk"
    >
      <form @submit.stop.prevent="handleSubmit">
        <b-row class="justify-content-center" >
            <b-col col lg="4">
                <label for="horaIni">Hora de Inicio:</label>
            </b-col>
            <b-col cols="8">
                <b-form-input id="horaIni" type="date" />
            </b-col>
        </b-row>
        <b-row class="justify-content-center mt-2" >
            <b-col col lg="4">
                <label for="horaFin">Hora de Fin:</label>
            </b-col>
            <b-col cols="8">
                <b-form-input id="horaFin" type="date" />
            </b-col>
        </b-row>
      </form>
    </b-modal>
   
</div>
    
</template>
<script>
import Menu from '@/components/Menu'
export default {
    
    data(){
        return{
            fieldsTiemPro: [
                {key:'fichaUsuario', label:'Ficha/Usuario'},
                {key:'created_at', label:'Hora de Inicio'},
                {key:'created_do', label:'Hora de Fin'},
                {key:'opcion', label:'Opcion'}
            ],
            fieldsProPie: [
                {key:'fichaUsuario', label:'Ficha/Usuario'},
                {key:'pieza', label:'Pieza'},
                {key:'cantidad', label:'Cantidad'},
                {key:'fechaHora', label:'Fecha y Hora'}
            ],
            fieldsCanScra: [
                {key:'fichaUsuario', label:'Ficha/Usuario'},
                {key:'pieza', label:'Pieza'},
                {key:'causa', label:'Causa del Scrap'},
                {key:'cantidad', label:'Cantidad'},
                {key:'fechaHora', label:'Fecha y Hora'}
            ],
            fieldsParRea: [
                {key:'fichaUsuario', label:'Ficha/Usuario'},
                {key:'razonParada', label:'Razon de la Parada'},
                {key:'created_at', label:'Inicio'},
                {key:'created_do', label:'Fin'}
            ],
            detalleTiemPro: [
                { fichaUsuario: 'Jesus 1', created_at:'2018/02/03 7:00am', created_do: '2018/02/03 2:00pm' },
                { fichaUsuario: 'Edgar 1', created_at:'2018/02/03 7:00am', created_do: '2018/02/03 2:00pm' }
            ],
            detalleProPie: [
                { fichaUsuario: 'Jesus 1', pieza:'pieza 1', cantidad: '10 pza',fechaHora:'24/03/2018' },
                { fichaUsuario: 'Edgar 1', pieza:'pieza 2', cantidad: '10 pza',fechaHora:'24/03/2018' },
                { fichaUsuario: 'Jesus 1', pieza:'pieza 3', cantidad: '10 pza',fechaHora:'24/03/2018' }
            ],
            detalleScrap: [
                { fichaUsuario: 'Jesus', pieza:'pieza-1', causa: 'causa de scrap',cantidad:'10 pza',fechaHora:'24/03/2018' },
                { fichaUsuario: 'Edgar', pieza:'pieza-1', causa: 'causa de scrap',cantidad:'10 pza',fechaHora:'24/03/2018' }
            ],
            detalleParRea: [
                {   fichaUsuario: 'Jesus 1', 
                    razonParada:'razon de la parada-1', 
                    created_at: '2018-02-02 10:58 am',
                    created_do:'2018-02-02 02:00 pm'
                },
                {   fichaUsuario: 'Edgar 1', 
                    razonParada:'razon de la parada-1', 
                    created_at: '2018-02-02 10:58 am',
                    created_do:'2018-02-02 02:00 pm'
                },
            ],
            bordered: true,
            hover: true
        }
        
    },
    methods: {
      handleOk(evt) {
        // Prevent modal from closing
        evt.preventDefault()
        if (!this.name) {
          alert('Please enter your name')
        } else {
          this.handleSubmit()
        }
      },
      handleSubmit() {
        this.names.push(this.name)
        this.clearName()
        this.$nextTick(() => {
          // Wrapped in $nextTick to ensure DOM is rendered before closing
          this.$refs.modal.hide()
        })
      }
    },
    components:{
        Menu
    }

}
</script>

