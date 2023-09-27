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

Estamos utilizando as seguintes tecnologias e ferramentas para implementar nossa solução:

**1- Banco de Dados NoSQL:** MongoDB é a tecnologia de banco de dados NoSQL selecionada para armazenar e gerenciar nossos dados, proporcionando flexibilidade na modelagem de dados.

**2 - Desenvolvimento de Aplicativo Móvel:** Estamos utilizando o framework React Native para o desenvolvimento da interface do usuário e lógica de nosso aplicativo móvel, permitindo a criação de aplicativos multiplataforma eficientes.

**3 - Contêinerização:** Utilizamos o Docker para criar contêineres que encapsulam nosso aplicativo e suas dependências, facilitando a implantação e a execução em diferentes ambientes.

**4 - Desenvolvimento Web:** Para desenvolver a interface web da aplicação, empregamos tecnologias como JavaScript, HTML e CSS para criar uma experiência de usuário atraente e interativa.

**5 - Endpoint:** Usamos endpoints para definir os pontos de acesso específicos em nossa API onde as solicitações HTTP podem ser feitas para realizar ações ou acessar recursos específicos.

**6 - Ambiente de Desenvolvimento Integrado (IDE):** A plataforma Visual Studio Community 2019 é nossa escolha para o desenvolvimento de código, oferecendo um ambiente robusto e suporte a várias linguagens de programação.

Essas tecnologias e ferramentas foram selecionadas com base nas necessidades específicas do projeto, visando a eficiência no desenvolvimento, flexibilidade de modelagem de dados e capacidade de escala à medida que o projeto evolui.

## Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.

## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)

## Qualidade de Software


Considerando o contexto do projeto, as seguintes subcaracterísticas da norma ISO/IEC 25010 podem ser priorizadas:

**Funcionalidade:**
- Adequação funcional: Verificar se o sistema atende às funcionalidades essenciais, como exibir o cardápio, permitir pedidos e gerenciar o menu.
          
**Usabilidade:** 
- Inteligibilidade: Avaliar a clareza e a facilidade de uso da interface, tornando-a intuitiva para clientes e administradores.
- Aprendizado: Garantir que os usuários possam aprender a usar o sistema rapidamente, sem dificuldades.
    
**Confiabilidade:**
- Disponibilidade: Assegurar que o sistema esteja disponível quando os clientes desejarem acessá-lo.
          
**Eficiência:**
- Desempenho: Medir a velocidade de carregamento das páginas do cardápio e a responsividade do sistema durante picos de uso.
          
**Manutenibilidade:**
 - Modificabilidade: Avaliar quão fácil é modificar o sistema para adicionar novos itens de menu, atualizar preços ou incorporar funcionalidades adicionais.
          
**Portabilidade:**
- Adaptabilidade: Certificar-se de que o sistema possa ser acessado de forma eficaz em diferentes dispositivos, como smartphones e computadores.
          
**Segurança:**
- Confidencialidade: Garantir que as informações do cardápio sejam protegidas contra acessos não autorizados.
          
**Compatibilidade:**
- Compatibilidade com navegadores: Certificar-se de que o cardápio digital seja compatível com os principais navegadores da web.

As características e subcaracterísticas apresentadas foram escolhidas com base nas necessidades específicas de um cardápio digital, onde a experiência do usuário desempenha um papel fundamental. Abaixo está a justificativa para cada uma delas:

|Característica de Qualidade| Subcaracterísticas |Justificativa      |
|--------------------|------------------------------------|----------------------------------------|
| Funcionalidade  | Adequação funcional | A funcionalidade essencial de um cardápio digital é permitir que os clientes visualizem os itens do menu, façam pedidos e que os administradores possam gerenciar o menu. Essa subcaracterística garante que o sistema atenda a essas funções críticas.
| Usabilidade | Inteligibilidade | A clareza e facilidade de uso da interface são vitais para que clientes e administradores possam navegar pelo sistema de forma intuitiva. Isso melhora a satisfação do usuário e reduz a curva de aprendizado.
| Usabilidade | Aprendizado | Garantir que os usuários possam aprender a usar o sistema rapidamente é importante, pois torna o processo de adaptação mais suave para clientes e administradores, resultando em maior eficiência.
| Confiabilidade | Disponibilidade | A disponibilidade contínua do sistema é crucial, pois os clientes devem acessar o cardápio digital a qualquer momento. Isso impede interrupções no serviço.
| Eficiência | Desempenho | A velocidade de carregamento das páginas do cardápio afeta diretamente a experiência do usuário. Medir o desempenho durante picos de uso ajuda a garantir que o sistema seja responsivo em todos os momentos.
| Manutenibilidade | Modificabilidade | A facilidade de modificar o sistema para adicionar novos itens de menu, atualizar preços ou incorporar funcionalidades adicionais é crucial para manter o cardápio atualizado e adaptado às constantes mudança.
| Portabilidade | Adaptabilidade | Garantir que o sistema seja acessível em diferentes dispositivos, como smartphones e computadores, é essencial para atender a uma variedade de usuários.
| Segurança | Confidencialidade | Proteger as informações do cardápio contra acessos não autorizados é fundamental para manter a integridade dos dados.
| Compatibilidade | Compatibilidade com navegadores | Certificar-se de que o cardápio digital funcione perfeitamente nos principais navegadores da web garante que os usuários possam acessá-lo independentemente do navegador que preferem.


|Subcaracterísticas| Métrica |Escala      |Peso      |
|--------------------|------------------------------------|----------------------------------------|----------------------------------------|
| Adequação funcional | Todas funcionalidades essenciais foram implementadas? | 1) Atende completamente<BR> 2) Atende parcialmente<BR> 3) Não atende  | ALTO  |
| Inteligibilidade: | Os usuários conseguem acessar com total intuitividade e facilidade? | 1) Atende completamente<BR> 2) Atende parcialmente<BR> 3) Não atende  | ALTO  |
| Aprendizado | Novos usuários concluem tarefas simples rapidamente? | 1) Atende completamente<BR> 2) Atende parcialmente<BR> 3) Não atende  | ALTO  |
| Disponibilidade | O sistema está acessível e funcionando quando os usuários precisam dele? | 1) Atende completamente<BR> 2) Atende parcialmente<BR> 3) Não atende | ALTO  |
| Desempenho | O sistema responde às ações e solicitações rapidamente? | 1 ) Atende completamente<BR> 2) Atende parcialmente<BR> 3) Não atende  | ALTO  |
| Modificabilidade | É fácil realizar alterações no sistema? | 1) Atende completamente<BR> 2) Atende parcialmente<BR> 3) Não atende  | ALTO  |
| Adaptabilidade | É satisfatória a experiência do usuário em dispositivos diferentes? | 1) Atende completamente<BR> 2) Atende parcialmente<BR> 3) Não atende  | ALTO  |
| Confidencialidade | É mínimo o número de tentativas de acesso não autorizado? | 1) Atende completamente<BR> 2) Atende parcialmente<BR> 3) Não atende  | ALTO  |
| Compatibilidade com navegadores | Todas as funcionalidades são compatíveis com diferentes navegadores? | 1) Atende completamente<BR> 2) Atende parcialmente<BR> 3) Não atende  | ALTO  |
