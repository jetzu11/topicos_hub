<template>
<div xs="12">
    <Menu/>
    <b-container cols="12" class="mt-5 mb-4">
        <b-row class="justify-content-center mt-2">
            <b-col cols="2">
                <label for="turno">Rango de Fecha:</label>
            </b-col>
            <b-col cols="6">
                <b-input-group >
                    <b-form-input id="fechaIni" type="date" disabled />
                    <b-input-group-append>
                        <b-input-group-text >Hasta</b-input-group-text>
                    </b-input-group-append>
                    <b-form-input id="fechaFin" type="date" disabled/>
                </b-input-group>
            </b-col>
        </b-row>        
    </b-container>
    
        <b-table
        :bordered="bordered"
        :hover="hover"
        :items="detalleRenOpeDe"
        :fields="fieldsRenOpeDe"
        >
            <template slot="causaEspe" >
                <b-button size="sm" variant="outline-dark" block :to="{name: 'RendiOpeDetalleEspe'}" class="mr-2">
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
                    
            fieldsRenOpeDe: [
                {key:'grupoParada',label:'Grupo de la Parada'},
                {key:'porcentaje',label:'Porcentaje %'},
                {key:'tiempo',label:'Tiempo'},
                {key:'causaEspe',label:'Causa Especifica'}
            ],
            detalleRenOpeDe:[
                {grupoParada:'DOSIFICADORA',porcentaje:'29.33%',tiempo:'100 minutos'}
                

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

