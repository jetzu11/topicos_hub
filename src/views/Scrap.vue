<template>
<div>
    <Menu/>
    <b-container>
    <b-card-group deck>
        <b-card class="text-center mt-5"
        header="Scrap"
        header-tag="header">
            
            <b-row class="mb-2 text-md-right">
                <b-col sm="3">
                    <label for="PiezaId">Pieza:</label>
                </b-col>
                <b-col sm="9">
                    <b-form-select id="PiezaId" :options="pieza" required/>
                </b-col>
            </b-row>
            <b-row class="mb-2 text-md-right">
                <b-col sm="3">
                    <label for="scrap">Razon del Scrap:</label>
                </b-col>
                <b-col sm="9">
                    <model-list-select
                        id="scrap" 
                        :list="options1"
                        v-model="objectItem"
                        option-value="code"
                        option-text="name"
                        placeholder="select item">
                    </model-list-select>
                </b-col>
            </b-row>
            <b-row class="mb-2 text-md-right">
                <b-col sm="3">
                    <label for="CantidadScrap">Cantidad de Scrap:</label>
                </b-col>
                <b-col sm="9">
                    <b-form-input v-model="cantidad" id="CantidadScrap" type="number" />
                </b-col>
            </b-row>
            <b-button v-b-modal.modal-1 variant="outline-success">Guardar</b-button>
            <b-modal id="modal-1" title="Reporte de Scrap">
                <p class="my-4">¿Seguro que desea cargar la cantidad de {{cantidad}}?</p>
            </b-modal>
            
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
import { ModelListSelect  } from 'vue-search-select'
export default {
    
    data(){
        return{
            cantidad:0, 
            options1: [
                { code: '01', name: 'aa'},
                { code: '02', name: 'ab'},
                { code: '03', name: 'bc'},
                { code: '04', name: 'cd'},
                { code: '05', name: 'de'},
                { code: '06', name: 'ef'}
            ],
            objectItem: {},          
            pieza: [
                {value: 'a', text: 'numero de pieza'}
            ],
            fields: [
                {key:'pieza',sortable: true},
                {key:'cantidad',sortable: true},
                {key:'cantidadScrap',label:'Cantidad del Scrap',sortable: true},
                {key:'created_at', label:'Hora',sortable: true}
            ],
            items: [
            { pieza: "pieza 1-id-", cantidad: 10, cantidadScrap:310, created_at: '10:10 am' },
            { pieza: "pieza 2-id-", cantidad: 20, cantidadScrap:320, created_at: '10:20 am' },
            { pieza: "pieza 3-id-", cantidad: 30, cantidadScrap:220, created_at: '10:30 am' }
            ],
            bordered: true,
            hover: true,
            footClone: true
        }
    }, 
    components: {
      ModelListSelect,
      Menu
    }

}
</script>

