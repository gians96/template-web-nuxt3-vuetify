<script setup lang="ts">
import { useStore } from '@/store/index'
const store = useStore()
const user = ref({
  initials: 'GA',
  fullName: 'Gianmarcos Daniel Arias Bonifacio',
  shorName: 'Gianmarcos',
  rule: "Administrador",
  email: 'john.doe@doe.com',
})

import { useDisplay } from 'vuetify'
const { mobile } = useDisplay()
</script>

<template>
  <v-app-bar>
    <v-btn variant="text" icon="mdi-menu"
      @click.stop="mobile ? store.setChangeDrawer() : store.setChangeRail()"></v-btn>
    <v-spacer></v-spacer>

    <v-avatar class="hidden-sm-and-down" color="grey-darken-1" size="32" v-if="false"></v-avatar>
    <!-- LIST -->
    <!-- <v-menu rounded :close-on-content-click="false">
      <template v-slot:activator="{ props }">
        <v-list v-if="!mobile" class="hidden-sm-and-down" v-bind="props" style="cursor: pointer">
          <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/john.png" :title="user.shorName"
            :subtitle="user.email">
          </v-list-item>
        </v-list>
        <v-btn v-if="mobile" icon v-bind="props">
          <v-avatar color="brown" size="default">
            <span class="text-h5">{{ user.initials }}</span>
          </v-avatar>
        </v-btn>
      </template>
      <v-card>
        <v-card-text>
          <div class="mx-auto text-center">
            <v-avatar color="brown">
              <span class="text-h5">{{ user.initials }}</span>
            </v-avatar>
            <h3>{{ user.fullName }}</h3>
            <p class="text-caption mt-1">
              {{ user.email }}
            </p>
            <v-divider class="my-3"></v-divider>
            <v-btn block rounded variant="text">
              Editar Cuenta
            </v-btn>
            <v-divider class="my-3"></v-divider>
            <v-btn block rounded variant="text">
              Salir
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-menu> -->
  </v-app-bar>
</template>
