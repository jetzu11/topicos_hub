<template>
<div>
    <Menu/>
    <b-container>
    <b-card-group deck>
        <b-card class="text-center mt-5"
        header="Unidades fabricadas"
        header-tag="header">
            
            <b-row class="mb-2">
                <b-col sm="3">
                    <label for="PiezaId">Pieza:</label>
                </b-col>
                <b-col sm="9">
                    <b-form-select id="PiezaId" :options="pieza" required/>
                </b-col>
            </b-row>
            <b-row class="mb-2">
                <b-col sm="3">
                    <label for="CantidadFabricada">Cantidad fabricada:</label>
                </b-col>
                <b-col sm="9">
                    <b-form-input id="CantidadFabricada" type="number" />
                </b-col>
            </b-row>
            <b-button variant="outline-success">Guardar</b-button>
           
        </b-card>
    </b-card-group>
    <div class="mt-4">
    <b-table
      :bordered="bordered"
      :hover="hover"
      :foot-clone="footClone"
      :items="items"
      :fields="fields"
    />
  </div>
</b-container>
</div>
    
</template>
<script>
import Menu from '@/components/Menu'
export default {
    
    data(){
        return{      
            pieza: [
                {value: 'a', text: 'numero de pieza',disabled:true}
            ],
            fields: [
                {key:'pieza',sortable: true},
                {key:'cantidad',sortable: true},
                {key:'created_at', label:'Hora',sortable: true}
            ],
            items: [
            { pieza: "pieza -id-", cantidad: 10, created_at: '10:30 am' },
            { pieza: "pieza -id-", cantidad: 20, created_at: '10:30 am' },
            { pieza: "pieza -id-", cantidad: 30, created_at: '10:30 am' }
            ],
            bordered: true,
            hover: true,
            footClone: true
        }
    },
    components:{
        Menu
    }

}
</script>

