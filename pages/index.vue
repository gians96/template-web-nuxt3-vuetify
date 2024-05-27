<script setup lang="ts">

const route = useRoute()
const email = ref("");
const password = ref("");
const SingUp = () => {
  navigateTo('/characters')
};
const { ruleEmail, rulePassLen, ruleRequired } = useFormRules();

const submit = async () => {
  console.log("entra");

};
// navigateTo("/items")

definePageMeta({
  layout: "auth",
});
</script>

<template>
  <VContainer fluid class="fill-height">
    <VRow no-gutters align="center" justify="center" class="fill-height">
      <VCol cols="12" md="6" lg="5" sm="6">
        <VRow no-gutters align="center" justify="center">
          <VCol cols="12" md="6">
            <div class=" d-flex align-center justify-center mb-4">
              <v-img src="https://upload.wikimedia.org/wikipedia/commons/5/59/UNDC_logo.jpg" cover max-height="230"
                max-width="130">
              </v-img>
            </div>
            <h1>Iniciar sesión</h1>
            <p class="text-medium-emphasis">Ingresa tus datos</p>
            <VForm @submit.prevent="submit" class="mt-7">
              <div class="mt-1">
                <label class="label text-grey-darken-2" for="email">Email</label>
                <VTextField :rules="[ruleRequired, ruleEmail]" v-model="email" prepend-inner-icon="mdi-email" id="email"
                  name="email" type="email" />
              </div>
              <div class="mt-1">
                <label class="label text-grey-darken-2" for="password">Contraseña</label>
                <VTextField :rules="[ruleRequired, rulePassLen]" v-model="password"
                  prepend-inner-icon="fluent:password-20-regular" id="password" name="password" type="password" />
              </div>
              <div class="mt-5">
                <!-- <VBtn type="submit" block min-height="44" class="gradient primary" to="/characters">Ingresar</VBtn> -->
                <v-btn type="submit" block min-height="44" class="gradient primary">Ingresar</v-btn>
              </div>
            </VForm>
            <!-- <p class="text-body-2 mt-10">
              <NuxtLink to="/reset-password" class="font-weight-bold text-primary">¿Has olvidado tu contraseña?</NuxtLink>
            </p>
            <p class="text-body-2 mt-4">
              <span>¿No tienes una cuenta?
                <NuxtLink to="/signup" class="font-weight-bold text-primary">Registrate</NuxtLink>
              </span>
            </p> -->
          </VCol>
        </VRow>
      </VCol>
      <VCol class="hidden-md-and-down fill-height" md="6" lg="7">
        <div class="image-container">
          <VImg
            src="https://scontent.fpio2-1.fna.fbcdn.net/v/t39.30808-6/432918876_827290806101530_9206661442278654613_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGVMFVp_CZOXtIGhC4Ak6D3Ix60VumCUlEjHrRW6YJSUdJjTjXWY_e1kM7vwxMdvAcvjVlsr9BA345j7R7kdZ-v&_nc_ohc=C_M5joW2GpMQ7kNvgGoN2H5&_nc_ht=scontent.fpio2-1.fna&oh=00_AYCw_cxNOESFSamf-Uy1xSuB3Ies45HONU3pTR7A5RCDHA&oe=6659DB00"
            cover class="image" />
          <div class="overlay">
            <div class="text-container text-white mx-auto align-center">
              <h1 class="mb-4">SISTEMA REGISTRO DE ATENCION PSICOLOGICO</h1>
              <p>
                Software médico, ideal para clínicas y consultorios.
                Ahorra tiempo y mejora la salud de tus pacientes organizando,
                llevando tus historias clínicas y realizando videollamadas en una sola plataforma integrada.
              </p>
            </div>
          </div>
        </div>
      </VCol>
    </VRow>

  </VContainer>
</template>
<style>
.image-container {
  position: relative;
  height: 100%;
  width: 100%;
}

.image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  /* Ajusta la opacidad según tus necesidades */
  display: flex;
  align-items: center;
  justify-content: center;
}

.text-container {
  text-align: center;
  width: 50%;
}
</style>