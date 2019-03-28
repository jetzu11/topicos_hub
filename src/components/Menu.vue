<template>
<div class="app" >
  <div>
      <b-navbar toggleable="md" type="dark" style="background-color: #4a6f90">
        <b-navbar-brand href="#">
            <img :src="logoSrc" width="60px" height="40px" alt="Wix" />
        </b-navbar-brand>
        <b-navbar-toggle target="nav_collapse"/>
        <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
        

          <b-nav-item to="#">Mann+Hummel</b-nav-item>

          <!-- Navbar dropdowns -->
          <b-nav-item-dropdown text="Produccion" right>
            <b-dropdown-item :to="{name: 'IniPro'}">Inicio de Producción</b-dropdown-item>
            <b-dropdown-divider />
            <b-dropdown-item :to="{name: 'UniFabricadas'}">Unidades Fabricadas</b-dropdown-item>
            <b-dropdown-divider />
            <b-dropdown-item :to="{name: 'Scrap'}">Scrap</b-dropdown-item>
            <b-dropdown-divider />
            <b-dropdown-item :to="{name: 'IniParada'}">Inicio de Parada</b-dropdown-item>
            <b-dropdown-divider />
            <b-dropdown-item :to="{name: 'FinParada'}">Fin de Parada</b-dropdown-item>
            <b-dropdown-divider />
            <b-dropdown-item :to="{name: 'FinProduccion'}">Fin de Produccion</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="Supervisor" right>
            <b-dropdown-item :to="{name: 'ProduActual'}">Ver Produccion (Actual) </b-dropdown-item>
            <b-dropdown-divider />
            <b-dropdown-item :to="{name: 'ProduAnterior'}">Ver Produccion (Anterior)</b-dropdown-item>
            <b-dropdown-divider />
            <b-dropdown-item :to="{name: 'RendiOpe'}">Rendimiento Operacional (Anterior)</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="Administrar" right>
            <b-dropdown-item :to="{name: 'AdminPrivi'}">Administrar Privilegios</b-dropdown-item>
            <b-dropdown-divider />
            <b-dropdown-item :to="{name: 'AdminPieza'}">Administrar Pieza</b-dropdown-item>
            <b-dropdown-divider />
            <b-dropdown-item :to="{name: 'PiezaMaquina'}">Agregar Pieza-Maquina</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="Name User" right>
            <b-dropdown-item :to="{name: 'login'}">Cerrar Sesión</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
      </b-navbar>
  </div>
  <div>
    
  </div>
</div>
</template>
<script>
export default {
    name: "Menu",
    data(){
      return{
        logoSrc: require('@/assets/WixFilter.png')
      }
    }
}
</script>

