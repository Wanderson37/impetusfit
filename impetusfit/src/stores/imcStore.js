import { defineStore } from "pinia";

export const useImcStore = defineStore("imc", {
  state: () => ({
    weight: null, // Peso
    height: null, // Altura
    imc: null, // Resultado do IMC
    category: "", // Categoria do IMC
  }),
  actions: {
    calculateIMC() {
      if (this.weight && this.height) {
        const heightInMeters = this.height / 100;
        this.imc = (this.weight / heightInMeters ** 2).toFixed(2);

        // Define a categoria do IMC
        if (this.imc < 18.5) {
          this.category = "Abaixo do peso";
        } else if (this.imc < 24.9) {
          this.category = "Peso normal";
        } else if (this.imc < 29.9) {
          this.category = "Sobrepeso";
        } else {
          this.category = "Obesidade";
        }
      }
    },
    resetIMC() {
      this.weight = null;
      this.height = null;
      this.imc = null;
      this.category = "";
    },
  },
});
