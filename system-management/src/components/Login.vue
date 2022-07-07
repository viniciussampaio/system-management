<script>
import { useQuasar } from "quasar";
import { ref } from "vue";

export default {
  setup() {
    const $q = useQuasar();

    const name = ref(null);
    const age = ref(null);
    const email = ref(null);
    const password = ref(null);
    const confirmPassword = ref(null);

    return {
      name,
      age,
      email,
      password,
      confirmPassword,

      onSubmit() {
        $q.notify({
          color: "positive",
          textColor: "white",
          icon: "check",
          message: "Cadastrado com sucesso",
        });
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
          <p class="mt-2">Login</p>
          <q-form @submit="onSubmit" class="q-col-gutter-md" ref="myForm">
            <q-input filled v-model="email" label="Email" type="email" />
            <q-input filled v-model="password" label="Senha" type="password" />

            <div>
              <q-btn label="Entrar" type="submit" color="primary" />
            </div>
            <router-link to="/register">Criar conta</router-link>
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
