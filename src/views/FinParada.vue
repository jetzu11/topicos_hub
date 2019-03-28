<template>
<div>
    <Menu></Menu>
    <b-container>
        <b-card-group deck>
            <b-card class="text-center mt-5"
            header="Fin de Parada"
            header-tag="header">
                
                <b-row class="mb-2">
                    <b-col sm="3">
                        <label for="MaquinaId">Maquina:</label>
                    </b-col>
                    <b-col sm="9">
                        <b-form-select id="MaquinaId" :options="maquina" required/>
                    </b-col>
                </b-row>
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
                        <label for="scrap">Causa de Parada:</label>
                    </b-col>
                    <b-col sm="9">
                        <model-select 
                            :options="options"
                            id="scrap"
                            v-model="item"
                            placeholder="select item">
                        </model-select>
                    </b-col>
                </b-row>
            
                <b-button @click="selectOption" variant="outline-success">Iniciar Parada</b-button>
                
            </b-card>
        </b-card-group>    
    </b-container>
</div>    
</template>
<script>
import Menu from '@/components/Menu'
import {ModelSelect } from 'vue-search-select'
export default {

    data(){
        return{
            options: [
                {value: '1', text: 'Causa de la parada 1' },
                {value: '2', text: 'Causa de la parada 2' },
                {value: '3', text: 'Causa de la parada 3' },
                {value: '4', text: 'Causa de la parada 4' },
                {value: '5', text: 'Causa de la parada 5' },
                {value: '6', text: 'Causa de la parada 6' }
            ],
            item: {
                value: '', 
                text: ''},
            maquina: [
                {value: 'a', text: 'maquina que selecciono al principio', disabled:true}
            ],
            pieza: [
                {value: 'a', text: 'numero de pieza que selecciono al principio', disabled:true}
            ]
        }
    },
    methods:{
        selectOption () {
        // select option from parent component
        console.log(this.item.text,this.item.value);
        alert(this.item.text+this.item.value);
      }
    },
    components:{
        ModelSelect,
        Menu
    }

}
</script>

