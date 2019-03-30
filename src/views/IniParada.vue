<template>
<div>
    <Menu></Menu>
    <b-container>
    <b-card-group deck>
        <b-card class="text-center mt-5"
        header="Inicio de Parada"
        header-tag="header">
            
            <b-row class="mb-2 text-md-right">
                <b-col sm="3">
                    <label for="MaquinaId">Maquina:</label>
                </b-col>
                <b-col sm="9">
                    <b-form-select id="MaquinaId" :options="maquina" required/>
                </b-col>
            </b-row>
            <b-row class="mb-2 text-md-right">
                <b-col sm="3">
                    <label for="PiezaId">Pieza:</label>
                </b-col>
                <b-col sm="9">
                    <b-form-select id="PiezaId" :options="pieza" required/>
                </b-col>
            </b-row>
           
            <b-button  v-b-modal.modal-1 variant="outline-success">Iniciar Parada</b-button>
            <b-modal id="modal-1" title="Inicio de Parada">
                <p class="my-4">¿Seguro que desea Iniciar la Parada?</p>
            </b-modal>
            
        </b-card>
    </b-card-group>
    
</b-container>
</div>
    
</template>
<script>
import Menu from '@/components/Menu'
export default {
    
    data(){
        return{
            maquina: [
                {value: 'a', text: 'maquina que selecciono al principio', disabled:true}
            ],
            pieza: [
                {value: 'a', text: 'numero de pieza que selecciono al principio', disabled:true}
            ]
        }
    },
    components:{
        Menu
    }

}
</script>

