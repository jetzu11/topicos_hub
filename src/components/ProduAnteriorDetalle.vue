<template>
<div xs="12">
    <Menu/>
    <h2 class="text-center mt-2">Maquina-Fecha</h2>
    
    <b-card-group deck>
        <b-card class="text-center mt-5"
        header="Detalle del tiempo programado"
        header-tag="header">
            <b-table
            :bordered="bordered"
            :hover="hover"
            :items="detalleTiemPro"
            :fields="fieldsTiemPro"
            >
                <template slot="opcion" slot-scope="row" >
                    <b-button @click="info(row.item,row.index,$event.target)" size="sm" variant="outline-dark" block  class="mr-2">
                        Ajuste Registro
                    </b-button>
                </template>
            </b-table>
                       
        </b-card>
    </b-card-group>
    <b-card-group deck>
        <b-card class="text-center mt-5"
        header="Detalle de la cantidad producida por pieza"
        header-tag="header">
            <b-table
            :bordered="bordered"
            :hover="hover"
            :items="detalleProPie"
            :fields="fieldsProPie"
            >
                <template slot="opcion" >
                    <b-button v-b-modal.eliminar size="sm" variant="danger" block  class="mr-2">
                        Eliminar Registro
                    </b-button>                    
                </template>
            </b-table>
            <div class="card-footer text-right">
                <b-button @click="agregarCantidad()" size="sm" variant="outline-success" class="mr-2">
                    Agregar Registro
                </b-button>
            </div>
        </b-card>
    </b-card-group>
    <b-card-group deck>
        <b-card class="text-center mt-5"
        header="Detalle de la cantidad de Scrap"
        header-tag="header">
            <b-table
            :bordered="bordered"
            :hover="hover"
            :items="detalleScrap"
            :fields="fieldsCanScra"
            >
            <template slot="opcion" >
                <b-button v-b-modal.eliminar size="sm" variant="danger" block  class="mr-2">
                    Eliminar Registro
                </b-button>                    
            </template>
            </b-table>
            <div class="card-footer text-right">
                <b-button @click="agregarScrap()" size="sm" variant="outline-success" class="mr-2">
                    Agregar Registro
                </b-button>
            </div>         
        </b-card>
    </b-card-group>
    <b-card-group deck>
        <b-card class="text-center mt-5"
        header="Detalle de las paradas realizadas"
        header-tag="header">            
           <b-table
            :bordered="bordered"
            :hover="hover"
            :items="detalleParRea"
            :fields="fieldsParRea"
            >
            <template slot="opcion" >
                <b-button v-b-modal.eliminar size="sm" variant="danger" class="mr-1">
                    Eliminar Registro
                </b-button>
                <b-button v-b-modal.comentario size="sm" class="btn btn-warning" >
                    Agregar Comentario
                </b-button>                    
            </template>
           </b-table>
           <div class="card-footer text-right">
                <b-button @click="agregarPara()" size="sm" variant="outline-success" class="mr-2">
                    Agregar Registro
                </b-button>
            </div>   
        </b-card>
    </b-card-group>
  <!-- Modal Component -->
    <b-modal id="eliminar" title="Inicio de Jornada">
        <p class="my-4">¿Seguro que desea eliminar el Registro?</p>
    </b-modal>
    <b-modal id="comentario" title="Agregar Comentario">
        <label>Comentario</label>
        <b-form-input  type="text" />
    </b-modal>
    <b-modal id="modalInfo" @hide="resetModal" :title="modalInfo.title">
        <form @submit.stop.prevent="handleSubmit">
            <label>Hora de Inicio</label>
            <b-form-input type="date" :value="modalInfo.created_at" />
            <label>Hora de Fin</label>
            <b-form-input type="date" :value="modalInfo.created_do" />            
        </form>
    </b-modal>
   <b-modal id="agregarRegisCanti" @hide="resetModal" :title="agregarRegisCanti.title">
        <form @submit.stop.prevent="handleSubmit">
            <label>Operario</label>
            <b-form-select> <option value="uno">OPERARIO 412</option></b-form-select>
            <label>Pieza</label>
            <b-form-select> <option value="uno">Pieza 412</option></b-form-select>
            <label>Cantidad</label>
            <b-form-input  type="number" value="0" />        
        </form>
    </b-modal>
    <b-modal id="agregarRegiScrap" @hide="resetModal" :title="agregarRegiScrap.title">
        <form @submit.stop.prevent="handleSubmit">
            <label>Operario</label>
            <b-form-select> <option value="uno">OPERARIO 412</option></b-form-select>
            <label>Pieza Fabricada</label>
            <b-form-select> <option value="uno">Pieza 412</option></b-form-select>
            <label>Pieza Scrap</label>
            <b-form-input  type="text"  />
            <label>Razon del Scrap</label>
            <b-form-select> <option value="uno">Razon Scrap 412</option></b-form-select>
            <label>Cantidad</label>
            <b-form-input  type="number" value="0" />        
        </form>
    </b-modal>
    <b-modal id="agregarRegiPara" @hide="resetModal" :title="agregarRegiPara.title">
        <form @submit.stop.prevent="handleSubmit">
            <label>Operario</label>
            <b-form-select> <option value="uno">OPERARIO 412</option></b-form-select>
            <label>Pieza Fabricada</label>
            <b-form-select> <option value="uno">Pieza 412</option></b-form-select>
            <label>Horario de Inicio</label>
            <b-form-input  type="date"  />
            <label>Horario de Fin</label>
            <b-form-input  type="date"  />
            <label>Razon de la Parada</label>
            <b-form-select> <option value="uno">Razon Parada 412</option></b-form-select>
            <label>Comentario</label>
            <b-form-input  type="text" />
        </form>
    </b-modal>
</div>
    
</template>
<script>
import Menu from '@/components/Menu'
export default {
    
    data(){
        return{
            fieldsTiemPro: [
                {key:'fichaUsuario', label:'Ficha/Usuario'},
                {key:'created_at', label:'Hora de Inicio'},
                {key:'created_do', label:'Hora de Fin'},
                {key:'opcion', label:'Opcion'}
            ],
            fieldsProPie: [
                {key:'fichaUsuario', label:'Ficha/Usuario'},
                {key:'pieza', label:'Pieza'},
                {key:'cantidad', label:'Cantidad'},
                {key:'fechaHora', label:'Fecha y Hora'},
                {key:'opcion', label:'Opcion'}
            ],
            fieldsCanScra: [
                {key:'fichaUsuario', label:'Ficha/Usuario'},
                {key:'pieza', label:'Pieza'},
                {key:'causa', label:'Causa del Scrap'},
                {key:'cantidad', label:'Cantidad'},
                {key:'fechaHora', label:'Fecha y Hora'},
                {key:'opcion', label:'Opcion'}
            ],
            fieldsParRea: [
                {key:'fichaUsuario', label:'Ficha/Usuario'},
                {key:'razonParada', label:'Razon de la Parada'},
                {key:'created_at', label:'Inicio'},
                {key:'created_do', label:'Fin'},
                {key:'opcion', label:'Opcion'}
            ],
            detalleTiemPro: [
                { fichaUsuario: 'Jesus 1', created_at:'07/02/2019', created_do: '07/02/2019' },
                { fichaUsuario: 'Edgar 1', created_at:'07/02/2019', created_do: '07/02/2019' }
            ],
            detalleProPie: [
                { fichaUsuario: 'Jesus 1', pieza:'17-61040D SOBRETAPA DOSIF. 51040', cantidad: '10 pza',fechaHora:'24/03/2018 14:44:40' },
                { fichaUsuario: 'Edgar 1', pieza:'17-61040D SOBRETAPA DOSIF. 51040', cantidad: '10 pza',fechaHora:'24/03/2018 14:44:40' },
                { fichaUsuario: 'Jesus 1', pieza:'17-61040D SOBRETAPA DOSIF. 51040', cantidad: '10 pza',fechaHora:'24/03/2018 14:44:40' }
            ],
            detalleScrap: [
                { fichaUsuario: 'Jesus', pieza:'pieza-1', causa: 'causa de scrap',cantidad:'10 pza',fechaHora:'24/03/2018' },
                { fichaUsuario: 'Edgar', pieza:'pieza-1', causa: 'causa de scrap',cantidad:'10 pza',fechaHora:'24/03/2018' }
            ],
            detalleParRea: [
                {   fichaUsuario: 'Jesus 1', 
                    razonParada:'razon de la parada-1', 
                    created_at: '2018-02-02 10:58 am',
                    created_do:'2018-02-02 02:00 pm'
                },
                {   fichaUsuario: 'Edgar 1', 
                    razonParada:'razon de la parada-1', 
                    created_at: '2018-02-02 10:58 am',
                    created_do:'2018-02-02 02:00 pm'
                },
            ],
            modalInfo: { title: '', created_at: '', created_do:'' },
            agregarRegisCanti:{title:'',operario:'',cantidad:''},
            agregarRegiScrap:{title:'',operario:'',piezaFabri:'',piezaScrap:'',razonScrap:'',cantidad:''},
            agregarRegiPara:{title:'',operario:'',piezaFabri:'',created_at:'',created_do:'',razonPara:''},
            bordered: true,
            hover: true
        }
        
    },
    methods: {
        info(item, index, button) {
            
            this.modalInfo.title = 'Ajuste del tiempo programado'
            this.modalInfo.created_at=item.created_at
            this.modalInfo.created_do=item.created_do
            this.$root.$emit('bv::show::modal', 'modalInfo', button)
        },
        agregarCantidad() {
            this.agregarRegisCanti.title='Agregar nuevo registro'
            this.$root.$emit('bv::show::modal', 'agregarRegisCanti')
        },
        agregarScrap() {
            this.agregarRegiScrap.title='Agregar nuevo registro'
            this.$root.$emit('bv::show::modal', 'agregarRegiScrap')
        },
        agregarPara() {
            this.agregarRegiPara.title='Agregar nuevo registro'
            this.$root.$emit('bv::show::modal', 'agregarRegiPara')
        },
        
        resetModal() {
            this.modalInfo.title = ''
            this.modalInfo.created_at=''
            this.modalInfo.created_do=''
        }
      
    },
    components:{
        Menu
    }

}
</script>

