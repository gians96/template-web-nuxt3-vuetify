<script setup lang="ts">
import { useStore } from '@/store/index'
import { useDisplay } from 'vuetify'
const store = useStore()
const { mobile } = useDisplay()

const menus = ref([
  {
    icon: "mdi-sale", title: "Dashboard", value: "dashboard", to: "/dashboard", view: true,
    toSub: null
  },
  {
    icon: "mdi-cog-outline", title: "Configuración", value: "configuracion", to: "/configurations", view: true,
    toSub: [
      // { title: "Configuración", value: "configuracion", to: "/companies", view: true },
      { title: "Area personal", value: "area personal", to: "/configurations/area-personal", view: true },
      { title: "Ciclo", value: "ciclo", to: "/configurations/ciclo", view: true },
      { title: "Escuela Profesional", value: "escuela profesional", to: "/configurations/escuela-profesional", view: true },
      { title: "Interpretación atención", value: "interpretacion atencion", to: "/configurations/interpretacion-atencion", view: true },
      { title: "Lugar", value: "lugar", to: "/configurations/lugar", view: true },
      { title: "Motivo Atención", value: "motivo atencion", to: "/configurations/motivo-atencion", view: true },
      { title: "Presunción Diagnostica", value: "presuncion diagnostica", to: "/configurations/presuncion-diagnostica", view: true },
      { title: "Tipo documento", value: "tipo documento", to: "/configurations/tipo-documento", view: true },
      { title: "Tipo paciente", value: "tipo paciente", to: "/configurations/tipo-paciente", view: true },
    ]
  }
])

</script>
<template>
  <v-navigation-drawer expand-on-hover v-model="store.drawer" :temporary="mobile" :rail="!mobile ? store.rail : false"
    theme="dark">
    <v-list-item class="d-flex align-center justify-center"
      prepend-avatar="https://upload.wikimedia.org/wikipedia/commons/5/59/UNDC_logo.jpg" nav>

    </v-list-item>
    <v-divider></v-divider>

    <v-list nav>
      <div v-for="menu in menus" :key="menu.to">
        <v-list-item v-if="!menu.toSub && menu.view" :prepend-icon="menu.icon" :title="menu.title" :value="menu.value"
          :to="menu.to"></v-list-item>
        <v-list-group v-if="menu.toSub && menu.view" :value="menu.title" class="v-list-group__items">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" :prepend-icon="menu.icon" :title="menu.title"></v-list-item>
          </template>
          <div v-for="subMenu in menu.toSub" :key="subMenu.to">
            <v-list-item v-if="subMenu.view" height="12px" prepend-icon="mdi-vector-point" :title="subMenu.title"
              :value="subMenu.value" :to="subMenu.to">
            </v-list-item>
          </div>

        </v-list-group>
      </div>
    </v-list>
  </v-navigation-drawer>
</template>

<style>
.v-list-group__items {
  --indent-padding: -0.50rem !important;
}
</style>