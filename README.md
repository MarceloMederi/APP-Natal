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
├── package.json
├── README.md
└── app.json
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

## Personalização Futuras
- Implementar autenticação com backend (Firebase, etc.).
- Adicionar conteúdo dinâmico (textos e imagens) para as datas.
- Melhorar a UI com bibliotecas como React Native Paper ou Styled Components.
