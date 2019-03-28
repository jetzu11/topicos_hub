<template>
    <div class="container mt-5">
    <div class="row justify-content-center">
        <div class="col-md-8">            
            <b-card class="shadow p-3 mb-5 bg-white rounded">
                <div class="card-header text-center">Sistema de Producción</div>

                <div class="card-body">
                    <form method="POST" action="">
                        <div class="form-group row">
                            <label for="ficha" class="col-md-4 col-form-label text-md-right">Ficha:</label>

                            <div class="col-md-6">
                                <input id="ficha" type="number" class="form-control" name="ficha" value="" required autofocus>

                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">Contraseña:</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control" name="password" required>

                            </div>
                        </div>
                        <div class="form-group ">
                            <div class="col-md-12 text-center" >
                                <b-button :to="{name:'Welcome'}" variant="btn btn-primary">Iniciar Sesion</b-button>
                               
                            </div>
                             <div class="col-md-12 text-center">
                                 <a v-b-modal.modal-prevent class="btn btn-link" href="#">
                                    ¿Has olvidado tu contraseña?
                                </a>
                            </div>
                        </div>
                    </form>
                    <b-modal
                    id="modal-prevent"  
                    ref="modal"
                    title="Recuperar Contraseña"
                    @ok="handleOk"
                    @shown="clearName"
                    >
                        <form @submit.stop.prevent="handleSubmit">
                            <b-form-input v-model="name" placeholder="Ingrese su correo"></b-form-input>
                        </form>
                    </b-modal>
                </div>
            </b-card>
            
        </div>
    </div>
</div>

</template>
<script>
 export default {
    data() {
      return {
        name: '',
        names: []
      }
    },
    methods: {
      clearName() {
        this.name = ''
      },
      handleOk(evt) {
        // Prevent modal from closing
        evt.preventDefault()
        if (!this.name) {
          alert('Ingrese el correo')
        } else {
          this.handleSubmit()
        }
      },
      handleSubmit() {
        this.names.push(this.name)
        this.clearName()
        this.$nextTick(() => {
          // Wrapped in $nextTick to ensure DOM is rendered before closing
          this.$refs.modal.hide()
        })
      }
    }
  }
</script>
