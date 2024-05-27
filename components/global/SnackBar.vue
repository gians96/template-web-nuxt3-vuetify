<script setup lang="ts">
import { useSnackbarStore } from '@/store/index';
import { useDisplay } from 'vuetify'
const { mobile } = useDisplay()
const snackbarStore = useSnackbarStore()

</script>
<template>
    <v-snackbar v-model="snackbarStore.show" :color="snackbarStore.color" location="bottom right" timeout="1400">
        <div class="d-flex justify-center align-center">
            <v-alert class="px-0 py-0 mx-0 my-0" :type="snackbarStore.color">
                <v-alert-title :class="mobile ? 'text-subtitle-1' : ''">{{ snackbarStore.title }}</v-alert-title>
                <span :class="mobile ? 'text-subtitle-2' : ''">{{ snackbarStore.text }}</span>
            </v-alert>
            <v-btn variant="text" @click="snackbarStore.show = false" icon="mdi-close-circle"> </v-btn>
        </div>
    </v-snackbar>
</template>