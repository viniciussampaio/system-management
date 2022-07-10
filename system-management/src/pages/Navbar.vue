<template>
  <div id="nav">
    <router-link to="/" id="logo-url">
      <img src="../assets/imgs/podium.png" alt="podium" id="logo" />
    </router-link>
    <router-link to="Register">Criar Conta</router-link>
    <router-link to="Login">Login</router-link>
  </div>
</template>

<script setup></script>

<style scoped>
#nav {
  background-color: #1d3557;
  border-bottom: 4px solid #111;
  padding: 15px 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
#nav #logo-url {
  margin: auto;
  margin-left: 0;
}

#logo {
  width: 40px;
  height: 40px;
}

#nav a {
  color: #fcba03;
  text-decoration: none;
  margin: 12px;
  transition: 0.5s;
}

#nav a:hover {
  color: #fff;
}
</style>
