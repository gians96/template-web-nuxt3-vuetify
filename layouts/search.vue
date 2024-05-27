<script setup lang="ts">
const config = useRuntimeConfig()
const apiURL = useCookie("apiURL");
apiURL.value = config.public.apiURL
// import { companyStore } from '@/store/company'
// const companyStoreObj = companyStore()
// await companyStoreObj.requestItems()
onMounted(async () => {
})
// company.value = CompaniesFetch.data 
</script>

<template>
	<div>
		<VApp>
			<VMain>
				<slot />
			</VMain>
		</VApp>
	</div>
</template>