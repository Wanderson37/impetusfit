<template>
  <q-header class="header bg-dark">
    <q-toolbar>
      <q-toolbar-title class="text-weight-bolder center-title">
        Impetus Fit
      </q-toolbar-title>

      <q-btn class="logo-header" flat round dense>
        <img src="impetus-logo.svg" alt="Impetus Fit" />
      </q-btn>
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
  text-align: center;
  width: auto;
  font-size: 3rem;
  font-style: italic;
  padding: 0;
  background: linear-gradient(to bottom, var(--q-primary), var(--q-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
