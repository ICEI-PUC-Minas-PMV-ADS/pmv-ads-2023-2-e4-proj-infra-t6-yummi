# Plano de Testes de Software

**Objetivo dos testes:** Verificar se o sistema atende aos requisitos funcionais, requisitos não funcionais e respeita as restrições definidas para o projeto.

### Testes de Requisitos Funcionais:

#### RF-001: Listagem de Pratos no Cardápio
**Objetivo:** Verificar se o sistema exibe corretamente a lista de pratos com descrições e preços.

**Passos:**
1. Acesse o cardápio do restaurante no sistema.
2. Verifique se a lista de pratos é exibida corretamente com descrições e preços.
3. Verifique se a lista de pratos está atualizada de acordo com o cardápio do restaurante.

**Critérios de Êxito:** A lista de pratos é exibida corretamente e está atualizada de acordo com o cardápio.

#### RF-002: Organização por Categorias
**Objetivo:** Verificar se o sistema organiza os pratos corretamente em categorias.

**Passos:**
1. Acesse o cardápio do restaurante no sistema.
2. Verifique se os pratos estão organizados corretamente nas categorias (entradas, pratos principais, sobremesas, etc.).

**Critérios de Êxito:** Os pratos estão organizados nas categorias corretas.

#### RF-003: Informações Detalhadas dos Pratos
**Objetivo:** Verificar se o sistema exibe informações detalhadas para cada prato.

**Passos:**
1. Acesse o cardápio do restaurante no sistema.
2. Clique em um prato para ver suas informações detalhadas.
3. Verifique se as informações detalhadas, como ingredientes e quantidades, são exibidas corretamente.

**Critérios de Êxito:** As informações detalhadas do prato são exibidas corretamente.

#### RF-004: Inclusão de Imagens
**Objetivo:** Verificar se o sistema permite a inclusão de imagens de alta qualidade para os pratos.

**Passos:**
1. Acesse a área de gerenciamento do restaurante no sistema.
2. Faça o upload de uma imagem de alta qualidade para um prato.
3. Verifique se a imagem é carregada e exibida corretamente.

**Critérios de Êxito:** A imagem é carregada e exibida corretamente.

#### RF-005: Adicionar Itens ao Carrinho
**Objetivo:** Verificar se os clientes podem adicionar itens do cardápio ao carrinho de compras e fazer um pedido.

**Passos:**
1. Acesse o cardápio do restaurante.
2. Adicione um ou mais itens ao carrinho.
3. Verifique se os itens são refletidos corretamente no carrinho.

**Critérios de Êxito:** Os itens são adicionados corretamente ao carrinho e refletidos de forma precisa.

#### RF-006: Criação de Contas Personalizadas
**Objetivo:** Verificar se o sistema permite que os restaurantes criem contas personalizadas com informações.

**Passos:**
1. Acesse a área de registro de restaurantes no sistema.
2. Preencha as informações necessárias para criar uma conta de restaurante.
3. Verifique se a conta é criada com sucesso.

**Critérios de Êxito:** A conta de restaurante é criada com sucesso.

#### RF-007: Visualização do Resumo de Pedidos
**Objetivo:** Verificar se os clientes podem visualizar o resumo de seus pedidos antes de finalizá-los.

**Passos:**
1. Adicione itens ao carrinho.
2. Acesse o carrinho e verifique se é possível visualizar o resumo dos itens e seus detalhes.
3. Finalize o pedido.

**Critérios de Êxito:** Os clientes podem visualizar o resumo de seus pedidos antes de finalizá-los.

#### RF-008: Recebimento de Pedidos em Tempo Real
**Objetivo:** Verificar se a equipe do restaurante recebe os pedidos dos clientes em tempo real.

**Passos:**
1. Faça um pedido como cliente.
2. Verifique se a equipe do restaurante recebe o pedido em tempo real.

**Critérios de Êxito:** A equipe do restaurante recebe o pedido em tempo real.

#### RF-009: Pedidos Especiais
**Objetivo:** Verificar se os clientes podem fazer pedidos especiais ou adicionais.

**Passos:**
1. Adicione um item ao carrinho.
2. Personalize o pedido com instruções especiais (por exemplo, ingredientes extras, sem cebola, molhos do lado).
3. Verifique se o pedido personalizado é refletido corretamente.

**Critérios de Êxito:** Os pedidos especiais são processados corretamente.

#### RF-010: Instruções de Utilização
**Objetivo:** Verificar se o sistema fornece instruções claras para os clientes sobre como utilizar o cardápio digital corretamente.

**Passos:**
1. Acesse a página inicial do sistema.
2. Observe as instruções fornecidas para utilização do cardápio.
3. Verifique se as instruções são claras e compreensíveis.

**Critérios de Êxito:** As instruções são claras e compreensíveis.

#### RF-011: Login com E-mail e Senha
**Objetivo:** Verificar se os usuários podem fazer login usando e-mail e senha.

**Passos:**
1. Acesse a página de login do sistema.
2. Insira o e-mail e a senha corretos.
3. Verifique se o login é bem-sucedido.

**Critérios de Êxito:** Os usuários podem fazer login com sucesso usando e-mail e senha.


### Testes de Requisitos Não Funcionais:

#### RNF-001: Compatibilidade com Dispositivos e Navegadores
**Objetivo:** Verificar se o cardápio digital é compatível com uma variedade de dispositivos e navegadores.

**Passos:**
1. Acesse o cardápio digital a partir de diferentes dispositivos (smartphones, tablets, computadores) e navegadores.
2. Verifique se o cardápio é exibido corretamente em todos os casos.

**Critérios de Êxito:** O cardápio é exibido corretamente em todos os dispositivos e navegadores testados.

#### RNF-002: Tempo de Inserção
**Objetivo:** Verificar se as operações de inserção no sistema não ultrapassam 5 segundos.

**Passos:**
1. Realize diversas operações de inserção, como adicionar itens ao carrinho.
2. Verifique se todas as operações são concluídas em menos de 5 segundos.

**Critérios de Êxito:** Todas as operações de inserção são concluídas em menos de 5 segundos.

#### RNF-003: Disponibilidade
**Objetivo:** Verificar se o sistema mantém o funcionamento de 96% do tempo em 24 horas por dia, 7 dias por semana.

**Passos:**
1. Monitore o sistema por um período de tempo representativo.
2. Registre o tempo de funcionamento e eventuais períodos de inatividade.

**Critérios de Êxito:** O sistema funciona pelo menos 96% do tempo durante o período monitorado.

#### RNF-004: Dimensionamento
**Objetivo:** Verificar se o sistema é dimensionável para lidar com picos de tráfego sem comprometer o desempenho.

**Passos:**
1. Simule picos de tráfego, como horários de pico de pedidos.
2. Monitore o desempenho do sistema durante os picos.

**Critérios de Êxito:** O sistema mantém o desempenho aceitável durante os picos de tráfego simulados.

### Testes de Restrições:

#### Restrição 01: Compatibilidade de Dispositivos
**Objetivo:** Verificar se o sistema só pode ser acessado por dispositivos compatíveis.

**Passos:**
1. Tente acessar o sistema a partir de dispositivos não compatíveis.
2. Verifique se o acesso é bloqueado ou redirecionado para uma página de erro.

**Critérios de Êxito:** O sistema bloqueia o acesso a partir de dispositivos não compatíveis.

#### Restrição 02: Limite de Tamanho e Tipo de Arquivos de Imagem
**Objetivo:** Verificar se o sistema impõe limites de tamanho e tipo de arquivos de imagem para os pratos no cardápio.

**Passos:**
1. Tente fazer o upload de imagens que excedam os limites de tamanho ou não estejam no tipo de arquivo permitido.
2. Verifique se o sistema impede o upload ou exibe uma mensagem de erro apropriada.

**Critérios de Êxito:** O sistema impede o upload de imagens que excedem os limites de tamanho ou não estão no tipo de arquivo permitido e exibe uma mensagem de erro apropriada.

 
## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
