# FixMyCar

Aplicativo mobile acadêmico de apoio ao cuidado do veículo, desenvolvido por Paulo da Luz e Marcelo Portella na disciplina de Tópicos de Programação Mobile. Reúne contatos, mapa, manutenções e registros de consumo, com autenticação e persistência no Firebase.

[![Expo SDK 37](https://img.shields.io/badge/Expo-SDK_37-000020?logo=expo)](https://docs.expo.dev/)
[![MIT](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

## 📋 Table of contents

- [✨ Features](#features)
- [🧪 Technologies](#technologies)
- [🛠️ Environment setup](#environment-setup)
- [🚀 Getting started](#getting-started)
- [🗂️ Project structure](#structure)
- [✅ Testing and quality](#testing)
- [🔎 Troubleshooting](#troubleshooting)
- [🤝 Contributing](#contributing)
- [📜 License](#license)

<a id="features"></a>

## ✨ Features

- Cadastro e login por e-mail/senha pelo Firebase Authentication.
- Cadastro, edição, exclusão e consulta de contatos, manutenções e consumos.
- Mapa de contatos, geocodificação de endereços e uso de localização do dispositivo.
- Cálculo de consumo e navegação por menu lateral.
- Armazenamento local com AsyncStorage e opção de logoff.
- Telas de FAQ, arquitetura, tecnologia e autoria.

O [tutorial acadêmico em PDF](FixMyCar.pdf) foi preservado. A captura mobile fica pendente de revisão em dispositivo compatível; esta documentação não inclui imagens do aplicativo.

<a id="technologies"></a>

## 🧪 Technologies

Declarações de [package.json](package.json), sem lockfile:

| Tecnologia | Versão declarada | Finalidade |
| --- | --- | --- |
| [Expo](https://docs.expo.dev/) | `~37.0.3` | Ambiente mobile |
| [React](https://react.dev/) | `~16.9.0` | Componentes |
| [React Native](https://reactnative.dev/) | Arquivo Expo `sdk-37.0.1` | Interface nativa |
| [React Navigation](https://reactnavigation.org/) | Família 5 | Navegação stack/drawer |
| [Firebase](https://firebase.google.com/docs) | `^7.15.5` | Authentication e Firestore |
| [expo-location](https://docs.expo.dev/versions/latest/sdk/location/) | `~8.1.0` | Localização |
| [react-native-maps](https://github.com/react-native-maps/react-native-maps) | `^0.27.1` | Mapa |

O manifesto inclui `@react-native-community/async-storage`, mas o serviço atual importa `AsyncStorage` de `react-native`; essa diferença foi preservada.

<a id="environment-setup"></a>

## 🛠️ Environment setup

Tenha Git, Node.js e, para validação nativa, um ambiente/dispositivo compatível com Expo SDK 37. O projeto não fixa Node.js; a tentativa desta tarefa utiliza Node.js 14.21.3, escolhido pela época do Expo 37. É uma configuração histórica, não uma garantia de suporte em clientes Expo atuais.

```bash
nvm install 14.21.3
nvm use 14.21.3
git clone https://github.com/paulodaluz/FixMyCar.git
cd FixMyCar
npm install
```

Não há lockfile, `packageManager`, hooks ou script `prepare`; utiliza-se npm para tornar o procedimento único. Os scripts chamam `expo`, porém o manifesto do SDK 37 não declara `expo-cli` como dependência. Um executável Expo compatível precisa estar disponível para esses scripts; a seleção/adição da CLI ficou como pendência e nenhuma CLI global foi instalada nesta tarefa.

A configuração do Firebase está diretamente em [src/back_end/firebase.js](src/back_end/firebase.js). Configure um projeto próprio nesse arquivo, habilite Authentication com e-mail/senha e Cloud Firestore. Os serviços usam as coleções `contatos`, `manutencoes` e `consumos`. Não existe leitura de `.env` nem regras de Firestore versionadas: revise as permissões no seu projeto Firebase e não use dados reais durante testes.

Acesso ao mapa/localização depende das permissões e dos serviços disponíveis no dispositivo. Não há backend HTTP próprio ou banco local a iniciar.

<a id="getting-started"></a>

## 🚀 Getting started

Após instalar as dependências e disponibilizar uma CLI compatível com SDK 37:

```bash
npm start
```

| Comando existente | Finalidade |
| --- | --- |
| `npm start` | Iniciar o ambiente Expo |
| `npm run android` | Solicitar abertura no Android |
| `npm run ios` | Solicitar abertura no iOS |
| `npm run web` | Solicitar modo web |

A porta e o endereço do servidor são informados pela CLI; não estão fixados no projeto. Um cliente Expo atual pode não aceitar esse SDK antigo. Android/iOS exigem dispositivo ou ferramentas nativas compatíveis; não foram instalados emuladores ou runtimes adicionais.

O script `eject` modifica a estrutura nativa e não é necessário para ler ou documentar este projeto. Não existe script de build de produção no manifesto.

<a id="structure"></a>

## 🗂️ Project structure

| Caminho | Responsabilidade |
| --- | --- |
| `App.js` | Navegação e entrada |
| `app.json` | Nome, plataformas, ícone e splash |
| `src/pages/` | Telas e formulários |
| `src/service/` | Firebase Auth, operações Firestore e armazenamento local |
| `src/back_end/firebase.js` | Inicialização do Firebase |
| `assets/` e `src/img/` | Recursos visuais |
| `FixMyCar.pdf` | Tutorial acadêmico preservado |

<a id="testing"></a>

## ✅ Testing and quality

Não há suíte automatizada, lint ou build configurados no manifesto.

Instalação concluída com Node.js 14.21.3/npm 6.14.18, com avisos de dependências transitivas que pedem runtimes mais novos. `npm start` exibiu “This command requires Expo CLI” e solicitou instalar a CLI globalmente; a instalação global não foi realizada. Embora o comando tenha encerrado com código 0, o aplicativo não iniciou. Não há build ou testes declarados para executar. Funcionalidades, Firebase, localização e captura mobile permanecem pendentes de ambiente compatível.

A revisão funcional deve cobrir login/logout, operações em coleções de teste, persistência local, permissão de localização e navegação. Nenhuma operação foi enviada ao Firebase nesta tarefa.

<a id="troubleshooting"></a>

## 🔎 Troubleshooting

| Situação | Verificação |
| --- | --- |
| Solicitação de instalar Expo CLI globalmente | O SDK não declara a CLI necessária; revise a ferramenta compatível com SDK 37 antes de executar os scripts. |
| Cliente recusa o projeto | Confira a compatibilidade com o SDK 37; atualização de SDK/React Native exige trabalho separado. |
| Falha no login ou Firestore | Confira a configuração própria, provedor de autenticação e regras do Firebase. |
| Mapa sem localização | Confira permissão do dispositivo e disponibilidade do serviço de localização. |

<a id="contributing"></a>

## 🤝 Contributing

Crie uma branch a partir de `master`, preserve os créditos de Paulo da Luz e Marcelo Portella e teste em dispositivo compatível. Abra um pull request com os cenários verificados. Alterações de SDK, dependências e código devem ser avaliadas separadamente.

<a id="license"></a>

## 📜 License

O projeto está sob a [licença MIT](LICENSE), com copyright de 2021 de **Marcelo Portella e Paulo da Luz**. O arquivo e a coautoria foram preservados.

---

<p align="center">Made with 💜 by <a href="https://github.com/paulodaluz">Paulo da Luz</a></p>
