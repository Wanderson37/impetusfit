import { defineStore } from "pinia";

export const useBodyFatStore = defineStore("bodyFat", {
  state: () => ({
    gender: "",
    height: null,
    neck: null,
    waist: null,
    hip: null,
    bodyFat: null,
  }),
  actions: {
    calculateBodyFat() {
      const h = this.height / 100; // Altura em metros
      const neck = this.neck;
      const waist = this.waist;
      const hip = this.hip;

      if (this.gender === "male") {
        // Fórmula para homens
        this.bodyFat =
          495 /
            (1.0324 -
              0.19077 * Math.log10(waist - neck) +
              0.15456 * Math.log10(h * 100)) -
          450;
      } else {
        // Fórmula para mulheres
        this.bodyFat =
          495 /
            (1.29579 -
              0.35004 * Math.log10(waist + hip - neck) +
              0.221 * Math.log10(h * 100)) -
          450;
      }
    },
    resetBodyFat() {
      this.gender = "";
      this.height = null;
      this.neck = null;
      this.waist = null;
      this.hip = null;
      this.bodyFat = null;
    },
  },
});
