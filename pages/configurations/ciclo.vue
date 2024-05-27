<script lang="ts" setup>
import { useDisplay } from 'vuetify'
const { mobile } = useDisplay()
import { useSnackbarStore } from '@/store/index';
const snackbarStore = useSnackbarStore()
import type { General } from '@/interfaces/general'
const apiURL = useCookie("apiURL");
const { data: itemsFetch, refresh: itemsRefresh } = await useFetch<General[]>(`${apiURL.value}/ciclo`, { method: 'GET' });
const headers = ref([
    // { align: 'start', key: 'name', sortable: true, title: 'Especialidad', },
    { key: 'n', title: 'N°' },
    { key: 'description', title: 'Descripción' },
    { key: 'actions', title: 'Acción' },
])

const page = ref(1)
const itemsPerPage = ref(10)
const search = ref('')
const selected = ref([])
const dialog = ref(false)
const dialogDelete = ref(false)
let editedIndex = ref(-1)
let editPassword = ref(false)
const editedItem = ref<General>({
    id: 0,
    description: ''
})

const defaultItem = ref<General>({
    id: 0,
    description: ''
})

const pageCount = computed(() => {
    if (!itemsFetch.value) return 1
    return Math.ceil(itemsFetch.value.length / itemsPerPage.value)
})
const nameTitleDialog = ref("")
const openDialogNewItem = () => {
    dialog.value = true
    nameTitleDialog.value = "Nuevo"
    editedItem.value = JSON.parse(JSON.stringify(defaultItem.value))
}

const openDialogEditItem = (item: General) => {
    if (!itemsFetch.value) return null
    dialog.value = true
    nameTitleDialog.value = "Editar"
    editedItem.value = JSON.parse(JSON.stringify(item))
    editedIndex.value = itemsFetch.value.indexOf(item)
}
const openDialogDeleteItem = (item: General) => {
    if (!itemsFetch.value) return null
    dialogDelete.value = true
    nameTitleDialog.value = "Eliminar"
    editedItem.value = item
}

const closeDialogItem = async () => {
    dialog.value = false
    editPassword.value = false
    nextTick(() => {
        editedItem.value = JSON.parse(JSON.stringify(defaultItem.value))
        editedIndex.value = -1
    })
}
const closeDialogDeleteItem = () => {
    dialogDelete.value = false
    nextTick(() => {
        editedItem.value = JSON.parse(JSON.stringify(defaultItem.value))
        editedIndex.value = -1
    })
}

const save = () => {
    try {
        if (!itemsFetch.value) return null
        if (editedIndex.value > -1) {
            updateItemFetch(editedItem.value)
        } else {
            registerItemFetch(editedItem.value)
        }
    } catch (error) {
        snackbarStore.setStatus("error", "Error", String(error))
    } finally {

        snackbarStore.setStatus("success", "Guardado correctamente")
    }
}

const deleteItemConfirm = () => {
    try {
        if (!itemsFetch.value) return null
        deleteItemFetch(editedItem.value.id)
        // itemsFetch.value.splice(editedIndex.value, 1)
        
        nextTick(() => {
            editedItem.value = JSON.parse(JSON.stringify(defaultItem.value))
            editedIndex.value = -1
        })
    } catch (error: any) {
        snackbarStore.setStatus("error", "Error", error)
    } finally {
        snackbarStore.setStatus("success", "Eliminado correctamente")

    }
}

const registerItemFetch = async (item: General) => {
    const response = await fetch(
        `${apiURL.value}/ciclo`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // Authorization: `Bearer ${userCookie.value.token}`,
            },
            body: JSON.stringify(item)
        }
    )
    if (response.ok) {
        snackbarStore.setStatus("success", "Guardado correctamente")
        await itemsRefresh()
        closeDialogItem()
    } else {
        snackbarStore.setStatus("error", "Error", String(response))
    }
}

const updateItemFetch = async (item: General) => {
    const response = await fetch(
        `${apiURL.value}/ciclo`,
        {
            method: "POST",//ES PUT, pero en el backend la funcion cumple las misma funcion el upser de prisma
            headers: {
                "Content-Type": "application/json",
                // Authorization: `Bearer ${userCookie.value.token}`,
            },
            body: JSON.stringify(item)
        }
    )
    if (response.ok) {
        snackbarStore.setStatus("success", "Editado correctamente")
        await itemsRefresh()
        closeDialogItem()
    } else {
        snackbarStore.setStatus("error", "Error", JSON.stringify(response))
    }
}


const deleteItemFetch = async (id: number) => {
    const response = await fetch(
        `${apiURL.value}/ciclo/${id}`, { method: "DELETE" }
    )
    if (response.ok) {
        snackbarStore.setStatus("success", "Eliminado correctamente")
        await itemsRefresh()
        closeDialogDeleteItem()
    } else {
        snackbarStore.setStatus("error", "Error", String(response))
    }
}
</script>
<template>
    <v-container fluid v-if="itemsFetch">
        <v-app-bar class="justify-center" flat append>
            <div class="justify-center mx-4">
                <v-icon class="me-1" icon="mdi-account"></v-icon>
                <span class="subheading">Ciclo</span>
            </div>
            <v-spacer></v-spacer>
            <v-btn append-icon="mdi-plus-circle" color="primary" variant="flat"
                @click="openDialogNewItem()">Nuevo</v-btn>
        </v-app-bar>
        <v-card class="justify-self-end mx-4" elevation="0">
            <v-container fluid>
                <v-row>
                    <v-col cols="12" lg="4" md="4" sm="12" xs="12">
                        <v-text-field v-model="search" append-inner-icon="mdi-magnify" label="Buscar"></v-text-field>
                    </v-col>
                </v-row>
                <v-row dense>
                    <v-data-table v-model:page="page" v-model="selected" :headers="headers" :items="itemsFetch"
                        :items-per-page="itemsPerPage" :search="search" class="elevation-1">
                        <template v-slot:item.n="{ index }">
                            {{ index + 1 + itemsPerPage * (page - 1) }}
                        </template>
                        <template v-slot:item.actions="{ item }">
                            <div class="d-flex justify-center ">
                                <v-btn class="me-2" icon="mdi-pencil" color="yellow"
                                    @click="openDialogEditItem(item)">
                                </v-btn>
                                <v-btn color="red" icon="mdi-delete" @click="openDialogDeleteItem(item)">
                                </v-btn>
                            </div>
                        </template>
                        <template v-slot:bottom>
                            <div class="text-center pt-2">
                                <v-pagination v-model="page" :length="pageCount"></v-pagination>
                            </div>
                        </template>
                    </v-data-table>
                </v-row>
                <!-- CUADRO DIALOGO -->
                <v-dialog v-model="dialog" :max-width="mobile ? '100%' : '50%'" transition="dialog-bottom-transition"
                    persistent>
                    <v-card>
                        <v-toolbar floating>
                            <v-toolbar-title>{{ nameTitleDialog }} </v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-btn icon="mdi-close" @click="closeDialogItem()"></v-btn>
                        </v-toolbar>
                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col cols="12" sm="6" md="6">
                                        <v-text-field v-model="editedItem.description" label="Descripción (*)"></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>
                        <v-card-actions class="mb-2">
                            <v-spacer></v-spacer>
                            <v-btn color="blue-darken-1" variant="elevated" @click="save()">
                                Guardar
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                <!-- DIALOG NEW , EDIT -->
                <!-- DIALGO DELETE -->
                <v-dialog v-model="dialogDelete" max-width="500px" persistent>
                    <v-card>
                        <v-card class="text-h5 px-4 py-4 text-center">¿Está seguro de que desea eliminar este
                            elemento?</v-card>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue-darken-1" variant="text" @click="closeDialogDeleteItem">Cancelar</v-btn>
                            <v-btn color="red-darken-1" variant="flat" @click="deleteItemConfirm">Eliminar</v-btn>
                            <v-spacer></v-spacer>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                <!-- DIALOG -->
            </v-container>
        </v-card>
    </v-container>
</template>
