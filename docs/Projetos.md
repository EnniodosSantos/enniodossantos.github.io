# Projetos

---

## Pipeline B3

Pipeline de dados de ponta a ponta para o mercado financeiro brasileiro. Cobre engenharia de dados, modelagem relacional em PostgreSQL e dashboard analítico em Streamlit com deploy em produção.

**Links:** [Dashboard](https://projeto-b3-ennio.streamlit.app/) · [GitHub](https://github.com/EnniodosSantos/projeto-b3)

#### Stack

| Camada | Tecnologia |
|---|---|
| Coleta | yfinance, Python |
| Transformação | Pandas |
| Banco de dados | PostgreSQL 16, SQLAlchemy |
| Containerização | Docker, Docker Compose |
| Análise | Jupyter, Matplotlib, Seaborn |
| Dashboard | Streamlit, Plotly |
| Nuvem | Neon (PostgreSQL serverless) |

#### O que o projeto faz

- **ETL automatizado:** extração de 5 anos de cotações de 20 ativos (ações B3 + criptomoedas) via Yahoo Finance, transformação com Pandas e carga incremental no PostgreSQL com idempotência via `ON CONFLICT DO NOTHING`.
- **Modelagem relacional:** schema normalizado (3FN) com foreign keys, constraints `CHECK`, índices B-tree e tipo `NUMERIC` para valores monetários.
- **SQL analítico:** views com window functions (`LAG`, `AVG ROWS BETWEEN`), CTEs e métricas de mercado — retorno diário, médias móveis (MM20/MM50), volatilidade anualizada e ranking de retorno em 1 ano.
- **EDA:** análise de preço normalizado (base 100), distribuição de retornos, heatmap de correlação entre ativos e volatilidade anualizada por ativo.
- **Deploy:** app público no Streamlit Cloud com banco em Neon. Lógica de conexão dual (local via Docker / produção via variável de ambiente).


---

## Previsor de Preços

Modelo de regressão para precificação de imóveis no Rio de Janeiro, voltado a proprietários e viajantes que utilizam plataformas de aluguel por temporada.

**Links:** [App](https://projeto-previsao-airbnb.streamlit.app/) · [GitHub](https://github.com/EnniodosSantos/Projeto-Previsao-Airbnb)

#### Stack

`Python` · `Scikit-learn` · `Extra Trees Regressor` · `Pandas` · `Joblib` · `Streamlit`

#### O que o projeto faz

- Pipeline completo de dados: limpeza, tratamento de outliers, encoding de variáveis categóricas e treinamento do modelo.
- Variáveis de entrada: coordenadas geográficas (latitude/longitude), sazonalidade (mês/ano) e características do imóvel.
- Interface web com Streamlit para entrada de dados e predição em tempo real.
- Deploy no Streamlit Cloud integrado ao GitHub.

---

## Lyapy

Biblioteca Python para geração e análise de séries temporais caóticas. Diferencial: usa aritmética de precisão arbitrária (módulo `decimal`) para mitigar erros de truncamento em órbitas de longo prazo.

**Links:** [Documentação](https://enniodossantos.github.io/lyapy-documentation)

#### Stack

`Python` · `NumPy` · `Matplotlib` · `Decimal`

#### O que o projeto faz

- Geração de séries caóticas com precisão arbitrária via módulo `decimal`.
- Cálculo numérico do expoente de Lyapunov com comparação direta ao valor teórico (analítico).
- Relatórios automáticos de erro e gráficos de convergência do expoente λ.
- Suporte a múltiplos mapas clássicos: Logístico, Gauss, Bernoulli, Tenda e Chebyshev.

#### Aplicações

Benchmarking de redes neurais, testes de robustez em modelos de regressão, criptografia baseada em caos e estudos de sensibilidade em sistemas dinâmicos não lineares.
