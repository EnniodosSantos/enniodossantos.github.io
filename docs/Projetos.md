No índice ao lado é possivel navegar pelos meus projetos

--------------

## Lyapy: Biblioteca para Geração e Análise de Caos

Lyapy é uma biblioteca em Python focada na geração e análise de séries temporais caóticas. Diferente de geradores comuns, ela utiliza aritmética de precisão arbitrária, expoentes de Lyapunov exato e variável e medidas invariantes de varios mapas caóticos

#### Funcionalidades

- Geração de Alta Precisão: Implementação baseada no módulo decimal para mitigar erros de truncamento em órbitas de longo prazo.

- Expoente de Lyapunov: Ferramentas para estimativa numérica e comparação direta com valores teóricos (analíticos).

- Análise de Convergência: Geração automática de relatórios de erro e gráficos de evolução do caos ($\lambda$).

- Ecossistema de Mapas: Suporte a diversos sistemas clássicos como Mapas Logístico, Gauss, Bernoulli, Tenda e Chebyshev.

#### Tecnologias e Metodologias

Linguagem: Python.Matemática: Sistemas Dinâmicos Discretos e Teoria Ergódica.
Bibliotecas: NumPy (processamento), Matplotlib (visualização), Decimal (precisão).
Paradigma: Orientação a Objetos para extensibilidade de novos mapas.

#### Aplicações

- Ideal para Benchmarking de Redes Neurais, 

- Testes de robustez em modelos de regressão, 

- Criptografia baseada em caos,

- Estudos de sensibilidade de Sistemas Dinamicos Não Lineares,

#### Links do ProjetoDocumentação/

[Documentação do Projeto](https://enniodossantos.github.io/lyappy-docs/)

[Repositório no GitHub]

-------------

## Previsor de Preços com Machine Learning

Este projeto foi desenvolvido para auxiliar proprietários e viajantes a precificarem imóveis de forma justa e competitiva na cidade do Rio de Janeiro, utilizando algoritmos de Machine Learning.

#### Funcionalidades

- **Interface Web Intuitiva**: Desenvolvida com Streamlit para entrada de dados em tempo real.

- **Análise Multivariada**: O modelo processa coordenadas geográficas (Latitude/Longitude), sazonalidade (Mês/Ano) e características estruturais do imóvel.

- **Pipeline de Dados**: Implementação completa de limpeza, tratamento de outliers, codificação de variáveis categóricas e treinamento do modelo

#### Tecnologias e Metodologias

- **Linguagem**: Python.

- **Algoritmo**: Extra Trees Regressor.

- **Bibliotecas**: Scikit-learn, Pandas, Joblib.

    **Deploy**: Streamlit Cloud integrado ao GitHub.

- Links do Projeto

[Acesse a Aplicação](https://projeto-previsao-airbnb.streamlit.app/)

[Resitório no GitHub](https://github.com/EnniodosSantos/Projeto-Previsao-Airbnb)
