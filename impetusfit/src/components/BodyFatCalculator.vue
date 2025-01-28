<template>
  <section id="body-fat-calculator" class="calculator-section">
    <h2 class="text-center">Cálculo de Gordura Corporal</h2>
    <p class="text-center">
      Método baseado na Marinha Americana. Preencha os campos abaixo:
    </p>

    <form @submit.prevent="calculate">
      <div class="form-group">
        <label for="gender">Gênero:</label>
        <select v-model="gender" id="gender" required>
          <option value="">Selecione...</option>
          <option value="male">Masculino</option>
          <option value="female">Feminino</option>
        </select>
      </div>

      <div class="form-group">
        <label for="height">Altura (cm):</label>
        <input type="number" v-model="height" id="height" required />
      </div>

      <div class="form-group">
        <label for="neck">Circunferência do Pescoço (cm):</label>
        <input type="number" v-model="neck" id="neck" required />
      </div>

      <div class="form-group">
        <label for="waist">Circunferência da Cintura (cm):</label>
        <input type="number" v-model="waist" id="waist" required />
      </div>

      <div v-if="gender === 'female'" class="form-group">
        <label for="hip">Circunferência do Quadril (cm):</label>
        <input type="number" v-model="hip" id="hip" />
      </div>
      <div class="form-group button-container">
        <button type="submit" class="calculate-btn">Calcular</button>
      </div>
    </form>

    <div v-if="bodyFat !== null" class="result">
      <h3>Resultado:</h3>
      <p>
        Sua porcentagem de gordura corporal é aproximadamente
        <strong>{{ bodyFat.toFixed(2) }}%.</strong>
      </p>
    </div>
  </section>
</template>

<script setup>
import { useBodyFatStore } from "../stores/bodyFatStore";
import { computed } from "vue";

const bodyFatStore = useBodyFatStore();
const gender = computed({
  get: () => bodyFatStore.gender,
  set: (value) => (bodyFatStore.gender = value),
});
const height = computed({
  get: () => bodyFatStore.height,
  set: (value) => (bodyFatStore.height = value),
});
const neck = computed({
  get: () => bodyFatStore.neck,
  set: (value) => (bodyFatStore.neck = value),
});
const waist = computed({
  get: () => bodyFatStore.waist,
  set: (value) => (bodyFatStore.waist = value),
});
const hip = computed({
  get: () => bodyFatStore.hip,
  set: (value) => (bodyFatStore.hip = value),
});
const bodyFat = computed(() => bodyFatStore.bodyFat);
const calculate = () => {
  bodyFatStore.calculateBodyFat();
};
</script>

<style scoped>
h2 {
  font-size: 1.8rem;
}
.calculator-section {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  border-radius: 10px;
}

.text-center {
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input,
select {
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  max-width: 200px;
}

.button-container {
  display: flex;
  justify-content: center;
  width: 100%;
}
.calculate-btn {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: var(--q-primary);
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  max-width: 90px;
}

.calculate-btn:hover {
  background-color: var(--q-secondary);
}

.result {
  margin-top: 20px;
  padding: 15px;

  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
