<template>
  <q-header class="header bg-dark">
    <q-toolbar>
      <q-toolbar-title class="text-weight-bolder center-title">
        Impetus Fit
      </q-toolbar-title>

      <q-btn class="logo-header" flat round dense>
        <img src="impetus-logo.svg" alt="Impetus Fit" />
      </q-btn>
      <q-space />
      <button class="round-star-label" @click="toggleTheme">Trocar Tema</button>
    </q-toolbar>

    <q-tabs v-model="tab">
      <q-tab name="IMC" label="IMC" @click="scrollTo('imc')" />
      <q-tab name="gordura-corporal" label="Gordura Corporal" />
      <q-tab
        name="grafico-de-desenvolvimento"
        label="Gráfico de Desenvolvimento"
      />
    </q-tabs>
  </q-header>
</template>

<script setup>
import { ref } from "vue";

const tab = ref("imc");

function scrollTo(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

function toggleTheme() {
  document.body.classList.toggle("light-theme");
}
</script>

<style scoped>
.header {
  position: fixed;
  margin-top: 0;
}
.logo-header img {
  width: 50px;
  margin: 10px;
}
.center-title {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
</style>
