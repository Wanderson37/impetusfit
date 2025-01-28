<template>
  <div class="imc-calculator">
    <!-- Formulário -->
    <form @submit.prevent="calculateIMC">
      <div class="input-group">
        <label for="weight">Peso (kg):</label>
        <input
          type="number"
          id="weight"
          v-model.number="weight"
          placeholder="Digite seu peso"
          required
        />
      </div>
      <div class="input-group">
        <label for="height">Altura (cm):</label>
        <input
          type="number"
          id="height"
          v-model.number="height"
          placeholder="Digite sua altura"
          required
        />
      </div>
      <button type="submit" class="btn">Calcular</button>
      <button type="button" @click="resetIMC" class="btn btn-reset">
        Limpar
      </button>
    </form>

    <!-- Resultado -->
    <div v-if="imc" class="result">
      <p><strong>IMC:</strong> {{ imc }}</p>
      <p><strong>Categoria:</strong> {{ category }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useImcStore } from "../stores/imcStore";

const imcStore = useImcStore();

const weight = computed({
  get: () => imcStore.weight,
  set: (value) => (imcStore.weight = value),
});

const height = computed({
  get: () => imcStore.height,
  set: (value) => (imcStore.height = value),
});

const imc = computed(() => imcStore.imc);
const category = computed(() => imcStore.category);

const calculateIMC = () => {
  imcStore.calculateIMC();
};

const resetIMC = () => {
  imcStore.resetIMC();
};
</script>

<style scoped>
.imc-calculator {
  max-width: 400px;
  margin: auto;

  text-align: center;
  font-family: Arial, sans-serif;
}

.input-group {
  margin-bottom: 15px;
}

.input-group label {
  display: block;
  margin-bottom: 5px;
}

.input-group input {
  width: 100%;
  padding: 8px;
  font-size: 1rem;
}

.btn {
  padding: 10px 20px;
  margin-right: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}

.btn-reset {
  background-color: #dc3545;
}

.result {
  margin-top: 20px;
  font-size: 1.2rem;
}
</style>
