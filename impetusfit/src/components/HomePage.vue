<template>
  <q-layout view="hHh lpr fFf">
    <HeaderPage />
    <ImcCalculator />
    <BodyFatCalculo />
    <BodyCalculator />
  </q-layout>
</template>

<script setup>
import BodyFatCalculo from "./BodyFatCalculo.vue";
import HeaderPage from "./HeaderPage.vue";
import ImcCalculator from "./ImcCalculator.vue";
import BodyCalculator from "./BodyCalculator.vue";
</script>
<style scoped></style>
