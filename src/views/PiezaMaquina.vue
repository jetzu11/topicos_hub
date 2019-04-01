<template>
    <div>
        <Menu></Menu>
        <b-container>
            <b-card-group deck>
                <b-card class="text-center mt-5" header="Agregar Pieza-Maquina" header-tag="header">
                    <b-row class="mb-2">
                        <b-col sm="3">
                            <label for="PiezaId">Maquina:</label>
                        </b-col>
                        <b-col sm="9">
                            <b-input-group>
                                <b-form-select v-model="selected" :options="options" id="PiezaId" />
                            </b-input-group>
                        </b-col>
                    </b-row>
                    <b-row class="mb-2">
                        <b-col sm="3">
                            <label for="PiezaId">Pieza:</label>
                        </b-col>
                        <b-col sm="9">
                            <b-input-group>
                                <b-form-input v-model="filter" placeholder="Buscar..." id="PiezaId" />
                                <b-input-group-append>
                                    <b-button :disabled="!filter" @click="filter = ''">Limpiar</b-button>
                                </b-input-group-append>
                            </b-input-group>
                        </b-col>
                    </b-row>
                </b-card>
            </b-card-group>
            <div class="mt-4">
                <b-table show-empty :bordered="bordered" :hover="hover" :foot-clone="footClone" :items="items"
                    :fields="fields" :filter="filter">
                    <div slot="asignar" slot-scope="row">
                        <template v-if="row.item.tiempoOp=='Pieza No Asignada'">
                            <b-button size="sm" @click="info(row.item,row.index,$event.target)"
                                variant="primary outline-dark" block class="mr2">
                                Asignar
                            </b-button>
                        </template>
                    </div>
                    <div slot="modificar" slot-scope="row">
                        <template v-if="row.item.tiempoOp!='Pieza No Asignada'">
                            <b-button size="sm" @click="info(row.item,row.index,$event.target)"
                                variant="primary outline-dark" block class="mr2">
                                Modificar
                            </b-button>
                        </template>


                    </div>
                    <div slot="eliminar" slot-scope="row">
                        <template v-if="row.item.tiempoOp!='Pieza No Asignada'">
                            <b-button size="sm" variant="danger outline-dark" block class=mr2>
                                Eliminar
                            </b-button>
                        </template>

                    </div>
                </b-table>

                <b-modal id="modalInfo" @hide="resetModal" :title="modalInfo.title">
                    <form @submit.stop.prevent="handleSubmit">
                        <label>Descripción</label>
                        <b-form-input type="text" :value="modalInfo.descripcion" readonly />
                        <label>Tiempo de Operación</label>
                        <b-form-input type="text" :value="modalInfo.t" />
                    </form>
                </b-modal>
            </div>
        </b-container>
    </div>
</template>
<script>
import Menu from '@/components/Menu'
export default {
    data(){
        return{ 
        	items: [
            { pieza: "17-0001", descripcion: 'Pieza1', tiempoOp: '0.044' },
            { pieza: "17-0002", descripcion: 'Pieza2', tiempoOp: '0.044' },
            { pieza: "17-0003", descripcion: 'Pieza3', tiempoOp: '0.044' },
            { pieza: "99-0009", descripcion: 'Pieza4', tiempoOp: 'Pieza No Asignada' }
            ],  
        	selected:null,   
            fields: [
                {key:'pieza',label:'Nro Pieza',sortable: true},
                {key:'descripcion',label:'Descripción',sortable: true},
                {key:'tiempoOp', label:'Tiempo de Operación',sortable: true},
                {key:'modificar'},
                {key:'eliminar'},
                {key: 'asignar'}
            ],
            options:[
            	{ value: null, text: 'Seleccione...' },
            	{ value: 'a', text: 'Maquina nombre 1' },
		        { value: 'b', text: 'Maquina nombre 2' }
            ],
            filter:null,
            bordered: true,
            hover: true,
            modalInfo: { title: '', descripcion: '', t:'' }
        }

    },
    methods:{
    	info(item, index, button) {
        this.modalInfo.title = 'Pieza:'+item.pieza
        this.modalInfo.descripcion=item.descripcion
        this.modalInfo.t=item.tiempoOp
        this.$root.$emit('bv::show::modal', 'modalInfo', button)
      },
      resetModal() {
        this.modalInfo.title = ''
        this.modalInfo.descripcion=''
        this.modalInfo.t=''
      }

    },
    components:{
        Menu
    }
    
   
}
</script>



