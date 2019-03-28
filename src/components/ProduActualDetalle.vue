<template>
<div xs="12">
    <Menu/>
    <h2 class="text-center mt-2">Maquina Name</h2>
    
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
   
</div>
    
</template>
<script>
import Menu from '@/components/Menu'
export default {
    
    data(){
        return{
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
    components:{
        Menu
    }

}
</script>

