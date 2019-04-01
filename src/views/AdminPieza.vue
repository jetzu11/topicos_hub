<template>
  <div>
    <Menu></Menu>
    <b-container>
      <b-card-group deck>
        <b-card class="text-center mt-5" header="Administrar Piezas" header-tag="header">
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
        <b-table show-empty :bordered="bordered" :hover="hover" :foot-clone="footClone" :items="items" :fields="fields"
          :filter="filter">
          <template slot="visible">
            <b-form-checkbox checked=true>
            </b-form-checkbox>
          </template>
          <template slot="modificar" slot-scope="row">
            <b-button size="sm" @click="info(row.item,row.index,$event.target)" variant="primary outline-dark" block
              class="mr2">
              Modificar
            </b-button>
          </template>
          <template slot="eliminar">
            <b-button size="sm" variant="danger outline-dark" block class=mr2>
              Eliminar
            </b-button>
          </template>
        </b-table>

        <b-modal id="modalInfo" @hide="resetModal" :title="modalInfo.title">
          <form @submit.stop.prevent="handleSubmit">
            <label>Descripción</label>
            <b-form-input type="text" :value="modalInfo.descripcion" />
            <label>Unidad de Medida</label>
            <b-form-input type="text" :value="modalInfo.uni" />
            <label>Visible</label>
            <b-form-checkbox id="checkbox1" name="checkbox1" v-model="status" value="accepted"
              unchecked-value="not_accepted">
            </b-form-checkbox>
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
            { pieza: "17-0001", descripcion: 'Pieza1', uni_medi: 'UND' ,visible:'accepted'},
            { pieza: "17-0002", descripcion: 'Pieza2', uni_medi: 'UND' ,visible:'not_accepted'},
            { pieza: "17-0003", descripcion: 'Pieza3', uni_medi: 'L' ,visible:'not_accepted'}
            ],     
            fields: [
                {key:'pieza',label:'Nro Pieza',sortable: true},
                {key:'descripcion',label:'Descripción',sortable: true},
                {key:'uni_medi', label:'Unidad De Medida',sortable: true},
                {key:'visible',label:'Visible',sortable:true},
                {key:'modificar'},
                {key:'eliminar'},
                
            ],
            status: 'accepted',
            filter:null,
            bordered: true,
            hover: true,
            modalInfo: { title: '', descripcion: '', uni:'' }
        }

    },
    methods:{
    	info(item, index, button) {
        this.modalInfo.title = 'Pieza:'+item.pieza
        this.modalInfo.descripcion=item.descripcion
        this.modalInfo.uni=item.uni_medi
        this.$root.$emit('bv::show::modal', 'modalInfo', button)
      },
      resetModal() {
        this.modalInfo.title = ''
        this.modalInfo.descripcion=''
        this.modalInfo.uni=''
      }

    },
    components:{
      Menu
    }
    
   
}
</script>

