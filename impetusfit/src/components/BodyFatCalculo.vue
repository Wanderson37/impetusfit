<template>
  <section class="info-section">
    <h2>📌 Cálculo de Gordura Corporal – Método da Marinha Americana</h2>

    <p>
      A fórmula da Marinha Americana é um método amplamente utilizado para
      estimar a
      <strong>porcentagem de gordura corporal</strong> com base em medidas
      antropométricas. O cálculo é diferente para homens e mulheres,
      considerando a distribuição de gordura no corpo.
    </p>

    <div class="formula-box">
      <h3>🧑 Fórmula para Homens</h3>
      <p>
        O cálculo leva em conta a
        <strong>circunferência do pescoço e da cintura</strong>, além da altura.
      </p>
      <pre>
% Gordura = 495 ÷ (1.0324 - 0.19077 × log₁₀(Cintura - Pescoço) 
                    + 0.15456 × log₁₀(Altura)) - 450
      </pre>
    </div>

    <div class="formula-box">
      <h3>👩 Fórmula para Mulheres</h3>
      <p>
        No caso das mulheres, a circunferência do
        <strong>quadril</strong> também é considerada.
      </p>
      <pre>
% Gordura = 495 ÷ (1.29579 - 0.35004 × log₁₀(Cintura + Quadril - Pescoço) 
                    + 0.221 × log₁₀(Altura)) - 450
      </pre>
    </div>

    <h3>🔎 Exemplo de Cálculo</h3>
    <p><strong>Para um homem:</strong></p>
    <ul>
      <li>Altura: 175 cm</li>
      <li>Cintura: 85 cm</li>
      <li>Pescoço: 40 cm</li>
      <li>
        Resultado: Aproximadamente <strong>18% de gordura corporal</strong>
      </li>
    </ul>

    <p><strong>Para uma mulher:</strong></p>
    <ul>
      <li>Altura: 165 cm</li>
      <li>Cintura: 70 cm</li>
      <li>Pescoço: 35 cm</li>
      <li>Quadril: 95 cm</li>
      <li>
        Resultado: Aproximadamente <strong>25% de gordura corporal</strong>
      </li>
    </ul>

    <h3>⚠️ Considerações Importantes</h3>
    <ul>
      <li>
        ✔️ Este método é uma <strong>estimativa</strong> e pode não ser 100%
        preciso.
      </li>
      <li>
        ✔️ Utilize uma <strong>fita métrica flexível</strong> e mantenha uma
        postura neutra ao medir.
      </li>
      <li>
        ✔️ O cálculo usa <strong>logaritmo na base 10</strong>, então valores
        errados podem gerar erros.
      </li>
      <li>
        ✔️ Outras formas de medição, como <strong>bioimpedância</strong> e
        <strong>dobra cutânea</strong>, podem complementar essa análise.
      </li>
    </ul>

    <p>
      Esse método é amplamente utilizado por militares para monitorar o
      condicionamento físico, mas também pode ser útil para quem deseja
      acompanhar sua <strong>evolução corporal</strong>.
    </p>
    <span>
      <p>
        <strong>Fonte: </strong>
        <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6650177/"
          >Comparison of Bioelectrical Impedance and Navy Seal Formula to
          Measure Body Composition in Medical Students
        </a>
      </p>
    </span>
  </section>
</template>

<style scoped>
.info-section {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
}

h2 {
  text-align: center;
  font-size: 1.8rem;
  color: #333;
}

p {
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
}

.formula-box {
  background: #e3f2fd;
  padding: 15px;
  border-left: 5px solid #2196f3;
  border-radius: 5px;
  margin-bottom: 15px;
}

h3 {
  color: #222;
  font-size: 1.4rem;
  margin-bottom: 8px;
}

pre {
  background: #ddd;
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
  background: url("https://cdn-icons-png.flaticon.com/16/845/845646.png") left
    center no-repeat;
  background-size: 16px;
  padding-left: 25px;
  margin-bottom: 5px;
  color: #444;
}
</style>
