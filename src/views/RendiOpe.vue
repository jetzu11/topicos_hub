<template>
<div xs="12">
    <Menu/>
    <b-container cols="12" class="mt-5 mb-2">
        <b-row class="justify-content-center mt-2">
            <b-col cols="2">
                <label for="turno">Rango de Fecha:</label>
            </b-col>
            <b-col cols="6">
                <b-input-group >
                    <b-form-input id="fechaIni" type="date" />
                    <b-input-group-append>
                        <b-input-group-text >Hasta</b-input-group-text>
                    </b-input-group-append>
                    <b-form-input id="fechaFin" type="date" />
                </b-input-group>
            </b-col>
        </b-row>
        
        <b-row class="justify-content-center mt-2">
            <b-col cols="2">
                <label for="turno">Turno:</label>
            </b-col>
            <b-col cols="6">
                <b-form-select id="turno" v-model="selected" :options="turnos" />
            </b-col>
        </b-row>
        
        <b-row class="justify-content-center mt-2">
            <b-button size="sm" variant="outline-dark" class="mr-2">Buscar</b-button>    
        </b-row>
    </b-container >
    
        <b-table
        :bordered="bordered"
        :hover="hover"
        :items="detalleRenOpe"
        :fields="fieldsRenOpe"
        >
            <template slot="causaPara" >
                <b-button size="sm" variant="outline-dark" block :to="{name: 'RendiOpeDetalle'}" class="mr-2">
                    Ver detalle
                </b-button>
            </template>
        </b-table>
   
    
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
            fieldsRenOpe: [
                {key:'maquina',label:'Maquina'},
                {key:'rendiOpe',label:'Rendimiento Operacional'},
                {key:'dispo',label:'Disponibilidad'},
                {key:'calidad',label:'Calidad'},
                {key:'oee',label:'OEE'},
                {key:'causaPara',label:'Causa de Parada',}
            ],
            detalleRenOpe:[
                {maquina:'DOSIFICADORA',rendiOpe:'29.33%',dispo:'20%',calidad:'100%',oee:'20.11%'},
                {maquina:'DOSIFICADORA',rendiOpe:'29.33%',dispo:'20%',calidad:'100%',oee:'20.11%'},
                {maquina:'DOSIFICADORA',rendiOpe:'29.33%',dispo:'20%',calidad:'100%',oee:'20.11%'},
                {maquina:'DOSIFICADORA',rendiOpe:'29.33%',dispo:'20%',calidad:'100%',oee:'20.11%'},
                {maquina:'DOSIFICADORA',rendiOpe:'29.33%',dispo:'20%',calidad:'100%',oee:'20.11%'}
                

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

