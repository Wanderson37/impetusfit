<template>
  <q-layout view="hHh lpr fFf">
    <HeaderPage />
    <ImcCalculo />
    <BodyFatCalculo />
    <BodyCalculator />
  </q-layout>
</template>

<script setup>
import BodyFatCalculo from "./BodyFatCalculo.vue";
import HeaderPage from "./HeaderPage.vue";
import ImcCalculo from "./ImcCalculo.vue";
import BodyCalculator from "./BodyCalculator.vue";
</script>
<style scoped></style>
