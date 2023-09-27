# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Arquitetura da Solução](img/Arquitetura%20Yummi.jpeg)





## Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.


**Yummi - Cardápio Digital**
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t6-yummi/assets/101661631/32d22030-d613-47f8-8a19-6b7f24fad1aa)

## Modelo ER

Nesta etapa, não será necessário criar um modelo relacional, pois nossos dados podem ter formatos diferentes. Sendo assim, para este projeto, decidimos utilizar um banco de dados NoSQL em vez de um banco de dados relacional, devido às necessidades específicas do nosso sistema. A flexibilidade de esquema oferecida pelos bancos de dados NoSQL é essencial para lidar com dados variáveis e semiestruturados, permitindo que adaptemos a estrutura dos dados conforme necessário. Além disso, a simplicidade na modelagem de dados e a ausência de um modelo relacional rígido simplificam o desenvolvimento e a manutenção do sistema, permitindo que nosso grupo se concentre na implementação das funcionalidades essenciais do projeto.

## Esquema Relacional

Neste projeto, optamos por não adotar um esquema relacional devido à natureza variável e semiestruturada dos nossos dados, que tornaria a criação de tabelas e relacionamentos complexa e inflexível. Além disso, prevemos mudanças frequentes na estrutura dos dados, o que seria mais facilmente gerenciado com um banco de dados NoSQL, oferecendo simplicidade e flexibilidade na modelagem de dados para atender às nossas necessidades que estão em constante evolução.

## Modelo Físico

**UserCreate**

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t6-yummi/assets/101661631/93ce1f3f-af03-479c-98d4-3c15d24bac09)

**ProductCreate**

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t6-yummi/assets/101661631/8b0ac152-d350-4bb6-bb34-eabb3948ab8b)



## Tecnologias Utilizadas

Descreva aqui qual(is) tecnologias você vai usar para resolver o seu problema, ou seja, implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.

Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.

## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)

## Qualidade de Software

Conceituar qualidade de fato é uma tarefa complexa, mas ela pode ser vista como um método gerencial que através de procedimentos disseminados por toda a organização, busca garantir um produto final que satisfaça às expectativas dos stakeholders.

No contexto de desenvolvimento de software, qualidade pode ser entendida como um conjunto de características a serem satisfeitas, de modo que o produto de software atenda às necessidades de seus usuários. Entretanto, tal nível de satisfação nem sempre é alcançado de forma espontânea, devendo ser continuamente construído. Assim, a qualidade do produto depende fortemente do seu respectivo processo de desenvolvimento.

A norma internacional ISO/IEC 25010, que é uma atualização da ISO/IEC 9126, define oito características e 30 subcaracterísticas de qualidade para produtos de software.
Com base nessas características e nas respectivas sub-características, identifique as sub-características que sua equipe utilizará como base para nortear o desenvolvimento do projeto de software considerando-se alguns aspectos simples de qualidade. Justifique as subcaracterísticas escolhidas pelo time e elenque as métricas que permitirão a equipe avaliar os objetos de interesse.

> **Links Úteis**:
>
> - [ISO/IEC 25010:2011 - Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — System and software quality models](https://www.iso.org/standard/35733.html/)
> - [Análise sobre a ISO 9126 – NBR 13596](https://www.tiespecialistas.com.br/analise-sobre-iso-9126-nbr-13596/)
> - [Qualidade de Software - Engenharia de Software 29](https://www.devmedia.com.br/qualidade-de-software-engenharia-de-software-29/18209/)
