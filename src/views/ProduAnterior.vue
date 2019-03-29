<template>
    <div xs="12">
        <Menu />
        <b-container cols="6" class="mt-5">
            <b-row class="justify-content-center">
                <b-col col lg="1">
                    <label for="type-date">Fecha:</label>
                </b-col>
                <b-col cols="4">
                    <b-form-input id="type-date" type="date" />
                </b-col>
            </b-row>
            <b-row class="justify-content-center mt-4">
                <b-col col lg="1">
                    <label for="turno">Turno:</label>
                </b-col>
                <b-col cols="4">
                    <b-form-select id="turno" v-model="selected" :options="turnos" />
                </b-col>
            </b-row>
            <b-row class="justify-content-center mt-2">
                <b-button size="sm" variant="outline-dark" @click="tableinfo" class="mr-2">Buscar</b-button>
            </b-row>
        </b-container>

        <b-card class="text-center m-2" v-for="proceso in procesos" :key="proceso.index">
            <b-card-header style="background:#f8b739">
                <h6 slot="header" style="color:white">PROCESO DE {{proceso.title}}</h6>
            </b-card-header>
            <b-table :bordered="bordered" :hover="hover" :items="detalleProAn" :fields="fieldsProAn">
                <template slot="verDetalle">
                    <b-button size="sm" variant="outline-dark" block :to="{name: 'ProduAnteriorDetalle'}" class="mr-2">
                        Ver detalle
                    </b-button>
                </template>
            </b-table>
        </b-card>
    </div>
</template>
<script>
import Menu from '@/components/Menu'
export default {
    
    data(){
        return{
            selected:'',
            turnos: [
            { value: 1, text: 'Primer turno' },
            { value: 2, text: 'Segundo turno' } 
            ],
            procesos:[
                {index:1,title:'DOSIFICADO'},
                {index:2,title:'EMBUTIDO'},
                {index:3,title:'DOSIFICADO'},
                {index:4,title:'EMBUTIDO'},
                {index:5,title:'DOSIFICADO'},
                {index:6,title:'EMBUTIDO'},
                {index:7,title:'DOSIFICADO'}

                ],
            fieldsProAn: [
                {key:'maquina',label:'Maquina'},
                {key:'estado',label:'Estado',},
                {key:'verDetalle',label:'Detalles',}
            ],
            detalleProAn:[
                {maquina:'DOSIFICADORA',estado:'No programada'},
                {maquina:'DOSIFICADORA',estado:'No programada'},
                {maquina:'DOSIFICADORA',estado:'Activa'}

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

