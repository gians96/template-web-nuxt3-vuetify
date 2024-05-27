<script lang="ts" setup>
const config = useRuntimeConfig()
const con = ref(config)
</script>
<template>
    <div>
        dashboard
        <v-btn density="compact" icon="mdi-plus"></v-btn>
        {{ config }}
    </div>
</template>