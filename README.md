# Expo Travel Itinerary App

## Descrição
Este é um aplicativo desenvolvido com Expo que apresenta as seguintes funcionalidades:
- Tela de login com autenticação de usuário e senha.
- Após o login, uma tela com 8 botões é exibida:
  - Um botão para deslogar do aplicativo.
  - Sete botões representando as datas de 23/08 a 30/08.
- Ao clicar em um botão de data, é exibido um texto ou imagem relacionado à data selecionada (conteúdo a ser definido).

---

## Estrutura do Projeto

```plaintext
expo-travel-itinerary/
├── App.js
├── assets/
│   └── images/  # Pasta para armazenar imagens relacionadas às datas
├── components/
│   ├── DateButton.js  # Componente de botão para cada data
│   ├── LoginScreen.js  # Tela de login
│   ├── HomeScreen.js  # Tela principal com os botões
│   └── DetailScreen.js  # Tela que exibe o conteúdo da data selecionada
├── navigation/
│   └── AppNavigator.js  # Configuração de navegação entre telas
├── app.json
├── app.tsx
├── eas.json
├── index.ts
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
```

---

## Pré-requisitos
Certifique-se de ter o Expo CLI instalado no seu sistema:

```bash
npm install -g expo-cli
```

---

## Passo a Passo para Configuração

### 1. Inicializar o Projeto Expo

```bash
expo init expo-travel-itinerary
```
Escolha o template **"blank (TypeScript)"**.

### 2. Navegar para o Diretório do Projeto

```bash
cd expo-travel-itinerary
```

### 3. Instalar Dependências Necessárias

Instale as bibliotecas de navegação e outros pacotes úteis:

```bash
npm install @react-navigation/native react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated react-navigation-stack react-navigation-tabs
```

Certifique-se de instalar os pacotes vinculados ao sistema:

```bash
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context react-native-vector-icons
```

### 4. Criar Componentes

#### 4.1 Tela de Login
Crie o arquivo `LoginScreen.js` em `components/` e implemente o formulário de login.

#### 4.2 Tela Principal
Crie o arquivo `HomeScreen.js` em `components/` para exibir os botões das datas e o botão de logout.

#### 4.3 Tela de Detalhes
Crie o arquivo `DetailScreen.js` em `components/` para exibir o texto ou imagem correspondente à data.

#### 4.4 Componente de Botão de Data
Crie o arquivo `DateButton.js` em `components/` para facilitar a reutilização de botões.

### 5. Configurar Navegação
Crie o arquivo `AppNavigator.js` em `navigation/` para configurar as rotas de navegação usando `react-navigation`.

### 6. Configurar o Arquivo Principal
No arquivo `App.js`, importe e configure o `AppNavigator`.

---

## Executar o Projeto

### 1. Iniciar o Servidor Expo

```bash
expo start
```

### 2. Rodar no Dispositivo ou Emulador
- Escaneie o QR Code exibido no terminal ou no navegador usando o aplicativo Expo Go.

---

## Funcionalidades Finais
1. Tela de Login:
   - Insira o usuário e senha.
   - Faça a validação (básica ou simulada, sem backend).

2. Tela Principal:
   - Exibe os botões das datas.
   - Inclui um botão de logout para retornar à tela de login.

3. Tela de Detalhes:
   - Exibe texto ou imagem baseado na data selecionada.

---

## Build do Aplicativo Android

Faça o login na Expo caso não tenha feito.

```bash
expo login
```

## Instalar o EAS CLI

```bash
npm install -g eas-cli
```

## Inicialize o EAS Build no projeto

```bash
eas build:configure
```
## Criar a Build Android

Para gerar um APK (para testes locais) ou AAB (para publicação na Google Play Store)

```bash
eas build -p android
```

## Baixar e Testar o APK

Após a conclusão do build, você receberá um link para baixar o APK ou AAB.

Para APK:

- Baixe o arquivo para seu computador.
- Transfira para o dispositivo Android (via USB ou link).
- Ative a instalação de fontes desconhecidas no dispositivo e instale o APK.

Para AAB:

- Acesse o Google Play Console.
- Envie o AAB para o canal de teste interno ou produção.

## Caso queira um APK de development usar o comando abaixo
Inclui ferramentas para testes e desenvolvimento (como conexão com o Expo Go e debug remoto).
Não é destinado a ser um app independente ou para distribuição.

```bash
eas build -p android --profile development
```

## Caso queira um APK de produção o comando abaixo
Cria uma build standalone (APK ou AAB) que funciona como um aplicativo completo e não depende do Expo Go.
Destinado a ser um app independente ou para distribuição.

```bash
eas build -p android --profile preview
```

## Gerar AAB para Publicação
Se você pretende publicar o app na Google Play Store, use o comando:

```bash
eas build -p android --profile production
```