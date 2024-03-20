## Robô Google Classroom - Movimentação de alunos

Documentação: https://www.notion.so/Integra-o-Google-Classroom-97f0fb9d50de4465b2feb62e59040aa8

### Stack⚡

O programa utiliza as seguintes tecnologias abaixo:

* [node.js] - Ambiente de execução server-side para JS
* [axios] - Cliente HTTP baseado em promises para browsers e Node 
* [cron] - Ferramenta que permite executar algo em um cronograma
* [express] - Framework for node.
* [googleapis] - Biblioteca de cliente Node.js para usar APIs do Google.
* [winston] - Biblioteca de registro (logger)
* [npm] - Gerenciador de dependências

### Estrutura e responsabilidades 🧱

1. **Integração - Carga / Diário** 
    1. index.js - Arquivo raiz, responsável pela execução dos módulos.
    2. robots - Pasta que abriga os módulos:
        1. insertStudnt.js - Responsável pela inserção dos alunos nas turmas do Google classroom.
        2. removeStudent.js - Responsável pela remoção dos alunos das turmas em caso de transferência ou outro motivo.

### Instalação e configuração 🔧

Para rodar a aplicação é necessário ter o NodeJs previamente instalado.
Navegue para o diretório raiz do projeto e após isso execute os comandos abaixo para instalar as dependências e inicar o robô.

```sh
$ npm install
$ node index.js
```

A aplicação poderá ser utilizada de duas formas:
* [1] Execução Manual: Execução por linha de comando: node index.js
* [2] Por agendamento via cron: No arquivo index descomente o código que contém o job de agendamento, configure o timer para o horário desejado e comente a função start().
  
Você pode utilizar o site https://crontab.guru/ ou https://cronjob.xyz/ para obter ajuda com o horário do cron.