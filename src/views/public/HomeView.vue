<template>
  <q-header class="header bg-dark">
    <q-toolbar>
      <q-btn class="logo-header button" flat round dense>
        <img src="/impetus-logo.svg" alt="Impetus Fit" />
      </q-btn>
      <q-toolbar-title class="fs16"> Impetus Fit </q-toolbar-title>

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
      <q-tab name="calculadora" label="Calculadora" @click="scrollTo('calculadora')" />
    </q-tabs>
  </q-header>

  <ImcCalculo />
  <BodyFatCalculo />
  <BodyCalculator />
</template>

<script setup lang="ts">
import BodyFatCalculo from '@/components/BodyFatCalculo.vue'

import ImcCalculo from '@/components/ImcCalculo.vue'
import BodyCalculator from '@/components/BodyCalculator.vue'
import { ref } from 'vue'

const tab = ref('imc')

function scrollTo(id: string) {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

function toggleTheme() {
  document.body.classList.toggle('light-theme')
}
</script>
<style scoped></style>
