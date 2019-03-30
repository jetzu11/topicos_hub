<template>
<div xs="12">
    <Menu></Menu>
    <h2 class="text-center mt-2">Resumen de Jornada</h2>
    <b-card-group deck>
        <b-card class="text-center mt-2"
        header="Detalle de Tiempo Programado"
        header-tag="header">
            <b-table
            :bordered="bordered"
            :hover="hover"
            :items="detalleTiempo"
            :fields="fieldsTiPro"
            />

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
        header="Detalle del la cantidad de Scrap"
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
    <b-container class="mt-2 mb-4 text-center">
        <b-button  @click="showModal" id="showBtn" variant="outline-warning">Fin de Producción</b-button>
        <b-modal ref="myModalRef" hide-footer title="Fin de Produccion">
            <div class="d-block text-center">
                <h5>¿Desea finalizar la Producción?</h5>
            </div>
            <div class="col-xs-12">
                <b-button class="mt-3 mr-3 p-2" variant="success"  @click="toggleModal">Aceptar</b-button>
                <b-button class="mt-3 mr-3 p-2" variant="danger"  @click="hideModal">Cerrar</b-button>
            </div>
            </b-modal>
    </b-container>
</div>
    
</template>
<script>
import Menu from '@/components/Menu'
export default {

    data(){
        return{
            fieldsTiPro: [
                {key:'horaInicio',label:'Hora de Inicio'},
                {key:'horaFin',label:'Hora de Fin',}
            ],
            fieldsProPie: [
                {key:'maquina', label:'Maquina'},
                {key:'pieza', label:'Pieza'},
                {key:'cantidad', label:'Cantidad'}
            ],
            fieldsCanScra: [
                {key:'pieza', label: 'Pieza'},
                {key:'causa', label:'Causa'},
                {key:'cantidad', label:'Cantidad'}
            ],
            fieldsParRea: [
                {key:'maquina',label:'Maquina'},
                {key:'razon',label:'Razon de la Parada'},
                {key:'created_at', label:'Inicio'},
                {key:'created_do', label:'Fin'}
            ],
            detalleTiempo:[
                {horaInicio:'08:00 am',horaFin:'02:00 pm'}
            ],
            detalleProPie: [
                { maquina: 'maquina 1', pieza:'pieza 1', cantidad: '10 pza' },
                { maquina: 'maquina 1', pieza:'pieza 1', cantidad: '10 pza' },
                { maquina: 'maquina 1', pieza:'pieza 1', cantidad: '10 pza' }
            ],
            detalleScrap: [
                { pieza: 'pieza 1', causa:'causa-1', cantidad: '10 pza' },
                { pieza: 'pieza 1', causa:'causa-1', cantidad: '10 pza' },
                { pieza: 'pieza 1', causa:'causa-1', cantidad: '10 pza' }
            ],
            detalleParRea: [
                {   maquina: 'maquina 1', 
                    razon:'razon de la parada-1', 
                    created_at: '2018-02-02 10:58 am',
                    created_do:'2018-02-02 02:00 pm'
                },
                {   maquina: 'maquina 1', 
                    razon:'razon de la parada-1', 
                    created_at: '2018-02-02 10:58 am',
                    created_do:'2018-02-02 02:00 pm'
                },
            ],
            bordered: true,
            hover: true
        }
        
    },
    methods: {
        showModal() {
                this.$refs.myModalRef.show()
        },
        hideModal() {
            this.$refs.myModalRef.hide()
        },
        toggleModal() {
            // We pass the ID of the button that we want to return focus to when
            // the modal has hidden
            this.$refs.myModalRef.toggle('#toggleBtn')
        }
    },
    components:{
        Menu
    }

}
</script>

