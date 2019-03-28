<template>
    <div class="container mt-5">
    <div class="row justify-content-center">
        <div class="col-md-8">            
            <div class="card">
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
                            <label for="password" class="col-md-4 col-form-label text-md-right">Contraseña</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control" name="password" required>

                            </div>
                        </div>
                        <div class="form-group row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <b-button block :to="{name:'Welcome'}" variant="btn btn-primary">Iniciar Sesion</b-button>
                               
                            </div>
                             <div class="col-md-12 offset-md-4">
                                 <a class="btn btn-link" href="#">
                                    ¿Has olvidado tu contraseña?
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

</template>
<script>
export default {
}
</script>
