<script setup lang="ts">
const config = useRuntimeConfig()
const apiURL = useCookie("apiURL");
const token_apiperu = useCookie("token_apiperu");
apiURL.value = config.public.apiURL
token_apiperu.value = config.public.token_apiperu
</script>
<template>
	<v-app>
		<SideBar></SideBar>
		<NavBar></NavBar>
		<VMain>
			<slot />
		</VMain>
		<SnackBar></SnackBar>
	</v-app>
</template>
<style></style>