<template>
  <section id="imc" class="info-section">
    <h2>Cálculo do Índice de Massa Corporal (IMC)</h2>

    <p>
      O <strong>Índice de Massa Corporal (IMC)</strong> é um parâmetro utilizado
      para avaliar se uma pessoa está dentro do peso ideal para sua altura. É um
      cálculo simples, mas muito utilizado em avaliações de saúde e nutrição.
    </p>

    <div class="formula-box">
      <h3>Fórmula do IMC</h3>
      <p>O IMC é calculado dividindo o peso pela altura ao quadrado:</p>
      <pre>
IMC = Peso (kg) ÷ Altura² (m²)
      </pre>
    </div>

    <div class="formula-box">
      <h3>Classificação do IMC</h3>
      <p>
        Segundo a **Organização Mundial da Saúde (OMS)**, o IMC se encaixa em
        diferentes categorias:
      </p>
      <ul>
        <li><strong>Abaixo de 18.5:</strong> Abaixo do peso</li>
        <li><strong>18.5 - 24.9:</strong> Peso normal</li>
        <li><strong>25 - 29.9:</strong> Sobrepeso</li>
        <li><strong>30 - 34.9:</strong> Obesidade Grau I</li>
        <li><strong>35 - 39.9:</strong> Obesidade Grau II (severa)</li>
        <li><strong>Acima de 40:</strong> Obesidade Grau III (mórbida)</li>
      </ul>
    </div>

    <h3>Exemplo de Cálculo</h3>
    <p><strong>Para uma pessoa com 75kg e 1.75m de altura:</strong></p>
    <pre>
IMC = 75 ÷ (1.75 × 1.75) 
IMC = 75 ÷ 3.0625
IMC = 24.5 (Peso normal)
    </pre>

    <h3>Considerações Importantes</h3>
    <ul>
      <li>
        ✔️ O IMC **não distingue massa magra de gordura**, podendo não ser ideal
        para atletas.
      </li>
      <li>
        ✔️ É um método **simples**, mas pode ser complementado com outras
        avaliações, como percentual de gordura.
      </li>
      <li>
        ✔️ Pessoas com **muita musculatura** podem ter um IMC elevado sem estar
        com excesso de gordura.
      </li>
      <li>
        ✔️ Sempre consulte um profissional de saúde para uma avaliação mais
        completa.
      </li>
    </ul>

    <p>
      O IMC é uma referência útil para entender seu estado físico, mas não deve
      ser o único critério para avaliar a saúde.
    </p>
    <span>
      <p>
        <strong>Fonte: </strong>
        <a
          href="https://vidasaudavel.einstein.br/calcular-o-seu-imc/#:~:text=O%20que%20%C3%A9%20o%20IMC,obesidade%20grau%20III%20ou%20m%C3%B3rbida."
        >
          O que é o IMC?
        </a>
      </p>
    </span>
  </section>
</template>

<style scoped>
.info-section {
  max-width: 800px;
  margin: 0 auto;
  margin-top: 100px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
}

h2 {
  text-align: center;
  font-size: 1.8rem;
}

p {
  font-size: 1rem;

  line-height: 1.5;
}

.formula-box {
  padding: 15px;

  border-radius: 5px;
  margin-bottom: 15px;
}

h3 {
  font-size: 1.4rem;
  margin-bottom: 8px;
}

pre {
  padding: 10px;
  border-radius: 5px;
  font-size: 1rem;
  white-space: pre-wrap;
}

ul {
  list-style: none;
  padding-left: 0;
}

ul li {
  background-size: 16px;
  padding-left: 25px;
  margin-bottom: 5px;
}
</style>
