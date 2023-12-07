# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

## Avaliação

### Registro de Testes - Requisitos Funcionais:

#### RF-001: Listagem de Pratos no Cardápio

- **Objetivo:** Verificar se o sistema exibe corretamente a lista de pratos com descrições e preços.
- **Passos:**
    1. Acessei o cardápio do restaurante no sistema.
    2. Verifiquei se a lista de pratos foi exibida corretamente com descrições e preços.
    3. Confirmei se a lista de pratos estava atualizada de acordo com o cardápio do restaurante.
- **Critérios de Êxito:** A lista de pratos é exibida corretamente e está atualizada de acordo com o cardápio.
- **Resultado:** Concluído com sucesso.

#### RF-002: Organização por Categorias

- **Objetivo:** Verificar se o sistema organiza os pratos corretamente em categorias.
- **Passos:**
    1. Acessei o cardápio do restaurante no sistema.
    2. Verifiquei se os pratos estão organizados corretamente nas categorias (entradas, pratos principais, sobremesas, etc.).
- **Critérios de Êxito:** Os pratos estão organizados nas categorias corretas.
- **Resultado:** Concluído com sucesso.

#### RF-003: Informações Detalhadas dos Pratos

- **Objetivo:** Verificar se o sistema exibe informações detalhadas para cada prato.
- **Passos:**
    1. Acessei o cardápio do restaurante no sistema.
    2. Cliquei em um prato para ver suas informações detalhadas.
    3. Verifiquei se as informações detalhadas, como ingredientes e quantidades, foram exibidas corretamente.
- **Critérios de Êxito:** As informações detalhadas do prato são exibidas corretamente.
- **Resultado:** Concluído com sucesso.

#### RF-004: Inclusão de Imagens

- **Objetivo:** Verificar se o sistema permite a inclusão de imagens de alta qualidade para os pratos.
- **Passos:**
    1. Acessei a área de gerenciamento do restaurante no sistema.
    2. Fiz o upload de uma imagem de alta qualidade para um prato.
    3. Verifiquei se a imagem foi carregada e exibida corretamente.
- **Critérios de Êxito:** A imagem é carregada e exibida corretamente.
- **Resultado:** Concluído com sucesso.

#### RF-005: Adicionar Itens ao Carrinho

- **Objetivo:** Verificar se os clientes podem adicionar itens do cardápio ao carrinho de compras e fazer um pedido.
- **Passos:**
    1. Acessei o cardápio do restaurante.
    2. Adicionei um ou mais itens ao carrinho.
    3. Verifiquei se os itens foram refletidos corretamente no carrinho.
- **Critérios de Êxito:** Os itens foram adicionados ao carrinho e refletidos de forma precisa.
- **Resultado:** Não implementado.

#### RF-006: Criação de Contas Personalizadas

- **Objetivo:** Verificar se o sistema permite que os restaurantes criem contas personalizadas com informações.
- **Passos:**
    1. Acessei a área de registro de restaurantes no sistema.
    2. Preenchi as informações necessárias para criar uma conta de restaurante.
    3. Verifiquei se a conta foi criada com sucesso.
- **Critérios de Êxito:** A conta de restaurante é criada com sucesso.
- **Resultado:** Recurso não foi implementado.

#### RF-007: Visualização do Resumo de Pedidos

- **Objetivo:** Verificar se os clientes podem visualizar o resumo de seus pedidos antes de finalizá-los.
- **Passos:**
    1. Adicionei itens ao carrinho.
    2. Acessei o carrinho e verifiquei se era possível visualizar o resumo dos itens e seus detalhes.
    3. Finalizei o pedido.
- **Critérios de Êxito:** Os clientes podem visualizar o resumo de seus pedidos antes de finalizá-los.
- **Resultado:** Não implementado.

#### RF-008: Recebimento de Pedidos em Tempo Real

- **Objetivo:** Verificar se a equipe do restaurante recebe os pedidos dos clientes em tempo real.
- **Passos:**
    1. Fiz um pedido como cliente.
    2. Verifiquei se a equipe do restaurante recebeu o pedido em tempo real.
- **Critérios de Êxito:** A equipe do restaurante não recebe o pedido em tempo real.
- **Resultado:** Não implementado.

#### RF-009: Pedidos Especiais

- **Objetivo:** Verificar se os clientes podem fazer pedidos especiais ou adicionais.
- **Passos:**
    1. Adicionei um item ao carrinho.
    2. Personalizei o pedido com instruções especiais (por exemplo, ingredientes extras, sem cebola, molhos do lado).
    3. Verifiquei se o pedido personalizado foi refletido corretamente.
- **Critérios de Êxito:** Os pedidos especiais são processados corretamente.
- **Resultado:** Não implementado.

#### RF-010: Instruções de Utilização

- **Objetivo:** Verificar se o sistema fornece instruções claras para os clientes sobre como utilizar o cardápio digital corretamente.
- **Passos:**
    1. Acessei a página inicial do sistema.
    2. Observei as instruções fornecidas para utilização do cardápio.
    3. Verifiquei se as instruções eram claras e compreensíveis.
- **Critérios de Êxito:** As instruções são claras e compreensíveis.
- **Resultado:** Concluído com sucesso.

#### RF-011: Login com E-mail e Senha

- **Objetivo:** Verificar se os usuários podem fazer login usando e-mail e senha.
- **Passos:**
    1. Acessei a página de login do sistema.
    2. Inseri o e-mail e a senha corretos.
    3. Verifiquei se o login foi bem-sucedido.
- **Critérios de Êxito:** Os usuários podem fazer login com sucesso usando e-mail e senha.
- **Resultado:** Concluído com sucesso.

### Registro de Testes - Requisitos Não Funcionais:

#### RNF-001: Compatibilidade com Dispositivos e Navegadores

- **Objetivo:** Verificar se o cardápio digital é compatível com uma variedade de dispositivos e navegadores.
- **Passos:**
    1. Acessei o cardápio digital a partir de diferentes dispositivos (smartphones, tablets, computadores) e navegadores.
    2. Verifiquei se o cardápio foi exibido corretamente em todos os casos.
- **Critérios de Êxito:** O cardápio é exibido corretamente em todos os dispositivos e navegadores testados.
- **Resultado:** Não realizado.
  
#### RNF-002: Tempo de Inserção

- **Objetivo:** Verificar se as operações de inserção no sistema não ultrapassam 5 segundos.
- **Passos:**
    1. Realizei diversas operações de inserção, como adicionar itens ao carrinho.
    2. Verifiquei se todas as operações foram concluídas em menos de 5 segundos.
- **Critérios de Êxito:** Todas as operações de inserção são concluídas em menos de 5 segundos.
- **Resultado:** Não realizado.
  
#### RNF-003: Disponibilidade

- **Objetivo:** Verificar se o sistema mantém o funcionamento de 96% do tempo em 24 horas por dia, 7 dias por semana.
- **Passos:**
    1. Monitorei o sistema por um período de tempo representativo.
    2. Registrei o tempo de funcionamento e eventuais períodos de inatividade.
- **Critérios de Êxito:** O sistema funciona pelo menos 96% do tempo durante o período monitorado.
- **Resultado:** Não realizado.
  
#### RNF-004: Dimensionamento

- **Objetivo:** Verificar se o sistema é dimensionável para lidar com picos de tráfego sem comprometer o desempenho.
- **Passos:**
    1. Simulei picos de tráfego, como horários de pico de pedidos.
    2. Monitorei o desempenho do sistema durante os picos.
- **Critérios de Êxito:** O sistema mantém o desempenho aceitável durante os picos de tráfego simulados.
- **Resultado:** Não realizado.

### Registro de Testes - Testes de Restrições:

#### Restrição 01: Compatibilidade de Dispositivos

- **Objetivo:** Verificar se o sistema só pode ser acessado por dispositivos compatíveis.
- **Passos:**
    1. Tentei acessar o sistema a partir de dispositivos não compatíveis.
    2. Verifiquei se o acesso foi bloqueado ou redirecionado para uma página de erro.
- **Critérios de Êxito:** O sistema bloqueia o acesso a partir de dispositivos não compatíveis.
- **Resultado:** Não realizado.
  
#### Restrição 02: Limite de Tamanho e Tipo de Arquivos de Imagem

- **Objetivo:** Verificar se o sistema impõe limites de tamanho e tipo de arquivos de imagem para os pratos no cardápio.
- **Passos:**
    1. Tentei fazer o upload de imagens que excedessem os limites de tamanho ou não estivessem no tipo de arquivo permitido.
    2. Verifiquei se o sistema impediu o upload ou exibiu uma mensagem de erro apropriada.
- **Critérios de Êxito:** O sistema impede o upload de imagens que excedem os limites de tamanho ou não estão no tipo de arquivo permitido e exibe uma mensagem de erro apropriada.
- **Resultado:** Não realizado.


> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
