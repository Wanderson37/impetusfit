<template>
  <q-layout view="hHh lpr fFf">
    <HeaderPage />
    <ImcCalculator />
    <BodyFatCalculator />
    <BodyCalculator />
  </q-layout>
</template>

<script setup>
import BodyFatCalculator from "./BodyFatCalculator.vue";
import HeaderPage from "./HeaderPage.vue";
import ImcCalculator from "./ImcCalculator.vue";
import BodyCalculator from "./BodyCalculator.vue";
</script>
<style scoped></style>
