<script>
import { useQuasar } from "quasar";
import { ref } from "vue";

export default {
  setup() {
    const $q = useQuasar();

    const name = ref("");
    const email = ref("");
    const password = ref("");
    const loading = ref(false);
    const progress = ref(false);
    const simulateProgress = ref(false);

    return {
      name,
      email,
      password,
      loading,
      progress,
      simulateProgress,

      onSubmit() {
        loading.value = true;
        setTimeout(() => {
          $q.notify({
            color: "positive",
            textColor: "white",
            icon: "check",
            message: "Cadastrado com sucesso",
          });
          loading.value = false;
        }, 2000);
      },
    };
  },
};
</script>

<template>
  <div class="container">
    <div class="logo">
      <img alt="laptop logo" src="../assets/imgLaptop.png" />
    </div>
    <div class="forms">
      <q-card class="my-card">
        <q-card-section>
          <p class="mt-2">Cadastro</p>
          <q-form class="q-col-gutter-md" ref="myForm">
            <q-input
              filled
              v-model="name"
              label="Nome"
              hint="Digite o nome completo"
              lazy-rules
              :rules="[(val) => (val && val.length > 7) || 'Nome inválido']"
            />
            <q-input
              filled
              v-model="email"
              label="Email"
              hint="Digite um email"
              type="email"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 7) || 'Insira um email válido',
              ]"
            />
            <q-input
              filled
              v-model="password"
              label="Senha"
              hint="Digite uma senha"
              type="password"
              lazy-rules
              :rules="[
                (val) => (val && val.length >= 6) || 'Mínimo de 6 caracteres',
              ]"
            />

            <div>
              <q-btn
                label="Cadastrar"
                :loading="loading"
                @click="onSubmit()"
                color="primary"
              />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}

.forms {
  width: 25%;
}

p {
  font-size: 20px;
  font-weight: bold;
  color: black;
}
</style>
