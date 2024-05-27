// import { defineStore } from "pinia";
// import type { Companies } from "@/interfaces/Company.interface"

// // import type { App } from "~/interfaces/AppInterface";
// // import type { User } from "~/interfaces/UserInterface";

// const companyStore = defineStore("companyStore", {
//     state: () => ({} as Companies),
//     getters: {
//     },
//     actions: {
//         async requestItems() {
//             const apiURL = useCookie("apiURL");
//             // const appCookie = await useCookie<App>("app");
//             // const userCookie = useCookie<User>("user");
//             const {
//                 data: companyFetch
//             } = await useFetch<Companies>((`${apiURL.value}/company`), {
//                 method: 'GET',
//                 headers: {
//                     // Authorization: "Bearer " + userCookie.value.token,
//                 }
//             })
//             if (!companyFetch.value) return
//             this.setChangeValue(JSON.parse(JSON.stringify(companyFetch.value)))
//         },
//         setChangeValue(item: Companies) {
//             this.$state = item;
//         }
//     }
// });

// export { companyStore };
