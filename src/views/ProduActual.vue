<template>
    <div>
        <Menu />
        <b-card v-for="proceso in procesos" :key="proceso.index" class="text-center m-2">

            <b-card-header style="background:#f8b739">
                <h6 slot="header" style="color:white">PROCESO DE {{proceso.title}}</h6>
            </b-card-header>
            <b-table :bordered="bordered" :hover="hover" :items="detalleTiempo" :fields="fieldsTiPro">
                <template slot="verDetalle">
                    <b-button size="sm" variant="outline-dark" block :to="{name: 'ProduActualDetalle'}" class="mr-2">
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
            procesos:[
                {index:1,title:'DOSIFICADO'},
                {index:2,title:'EMBUTIDO'},
                {index:3,title:'DOSIFICADO'},
                {index:4,title:'EMBUTIDO'},
                {index:5,title:'DOSIFICADO'},
                {index:6,title:'EMBUTIDO'},
                {index:7,title:'DOSIFICADO'}

                ],
            fieldsTiPro: [
                {key:'maquina',label:'Maquina'},
                {key:'estado',label:'Estado'},
                {key:'verDetalle',label:'Detalles'}
            ],
            detalleTiempo:[
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

