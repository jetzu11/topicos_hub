<template>
<div>
    <Menu></Menu>
    <b-container>
    <b-card-group deck>
        <b-card class="text-center mt-5"
        header="Inicio de hora Programada"
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
            <b-row class="mb-2 text-md-right">
                <b-col sm="3">
                    <label for="horaProgramad">Inicio de hora programada:</label>
                </b-col>
                <b-col sm="9">
                    <b-form-input id="horaProgramad" type="time" value="10:40"/>
                </b-col>
            </b-row>
            <b-button  v-b-modal.modal-1 variant="outline-success">Guardar</b-button>
            <b-modal id="modal-1" title="Inicio de Jornada">
                <p class="my-4">¿Desea confirmar el inicio de jornada?</p>
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
                { value: 'a', text: 'This is First option' },
                { value: 'b', text: 'Selected Option' },
            ],
            pieza: [
                {value: 'a', text: 'no activada aun esperar por favor',disabled:true}
            ]
        }
    },
    components:{
        Menu
    }

}
</script>

