<template>
  <q-header class="header bg-dark">
    <q-toolbar>
      <q-toolbar-title class="text-weight-bolder center-title">
        Impetus Fit
      </q-toolbar-title>

      <q-btn class="logo-header button" flat round dense>
        <img src="impetus-logo.svg" alt="Impetus Fit" />
      </q-btn>
      <q-space />
      <button class="button" @click="toggleTheme">Trocar Tema</button>
    </q-toolbar>

    <q-tabs v-model="tab">
      <q-tab name="IMC" label="IMC" @click="scrollTo('imc')" />
      <q-tab
        name="gordura-corporal"
        label="Gordura Corporal"
        @click="scrollTo('gordura-corporal')"
      />
      <q-tab
        name="calculadora"
        label="Calculadora"
        @click="scrollTo('calculadora')"
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
.button {
  margin: 20px;
}
.logo-header img {
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
  width: auto;
  margin: 10px;
}
.center-title {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
</style>
