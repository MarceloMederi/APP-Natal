# Expo Travel Itinerary App

## 📌 Descrição
Este é um aplicativo desenvolvido com **Expo** que permite:
- **Autenticação via login** com usuário e senha.
- **Tela principal** com dois botões principais:
  - **"Ver Itinerário"**: exibe as datas do itinerário de **23/08 a 30/08** com imagens e descrições.
  - **"Ver Cardápio"**: exibe restaurantes e feiras de artesanato da cidade.
  - **Botão de Logout** para sair do app.

---

## 📌 Estrutura do Projeto

```plaintext
expo-travel-itinerary/
├── assets/
│   └── images/  # Pasta para armazenar imagens relacionadas às datas e localização
│
├── components/
│   └── DateButton.tsx  # Componente de botão para cada data
│
├── navigation/
│   └── AppNavigator.tsx  # Configuração de navegação entre telas
│
├── screens/
│   ├── AnimatedSplashScreen.tsx # Splash animada do app
│   ├── DetailScreen.tsx  # Tela que exibe o conteúdo da data selecionada
│   ├── HomeScreen.tsx  # Tela principal com os botões de itinerário
│   ├── LocationScreen.tsx # Tela que exibe as localizações no mapa
│   ├── LoginScreen.tsx  # Tela de login
│   ├── MenuScreen.tsx # Tela que exibe restaurantes e passeios da cidade
│   ├── SelectionScreen.tsx # Tela intermediária que leva ao HomeScreen e MenuScreen
│
├── app.json
├── app.tsx
├── eas.json
├── index.ts
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
```


## 📌 Pré-requisitos
Certifique-se de ter o Expo CLI instalado no seu sistema:

```bash
npm install -g expo-cli
```

---

## 📌 Passo a Passo para Configuração

### 1️⃣ Inicializar o Projeto Expo

```bash
expo init expo-travel-itinerary
```
Escolha o template **"blank (TypeScript)"**.

### 2️⃣ Navegar para o Diretório do Projeto

```bash
cd expo-travel-itinerary
```

### 3️⃣ Instalar Dependências

Instale as bibliotecas de navegação e outros pacotes úteis:

```bash
npm install @react-navigation/native react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated react-navigation-stack react-navigation-tabs
```

Certifique-se de instalar os pacotes vinculados ao sistema:

```bash
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context react-native-vector-icons
```

## 📌 Criando Componentes

### 1️⃣ **Tela de Login**
Crie `LoginScreen.tsx` em `screens/` para autenticação do usuário.

### 2️⃣ **Tela Intermediária (Seleção de Opções)**
Crie `SelectionScreen.tsx` para permitir que o usuário escolha entre **Ver Itinerário** ou **Ver Cardápio**.

### 3️⃣ **Tela Principal**
Crie `HomeScreen.tsx` para exibir os **botões das datas** e **botão de localização**.

### 4️⃣ **Tela de Detalhes**
Crie `DetailScreen.tsx` para exibir imagens e descrições dos dias do itinerário.

### 5️⃣ **Tela de Localização**
Crie `LocationScreen.tsx` para abrir mapas do Google com os pontos turísticos.

### 6️⃣ **Tela de Cardápio**
Crie `MenuScreen.tsx` para listar restaurantes e feiras da cidade.

### 7️⃣ **Splash Animada**
Crie `AnimatedSplashScreen.tsx` para exibir uma animação de entrada ao abrir o app.

### 8️⃣ **Configurar Navegação**
Crie o arquivo `AppNavigator.tsx` em `navigation/` para configurar as rotas de navegação usando `react-navigation`.

### 9️⃣ **Configurar o Arquivo Principal**
No arquivo `App.tsx`, importe e configure o `AppNavigator` e as configuraçoes da biblioteca Animated para carregamento da Splash.

---

## 📌 Executar o Projeto

### 1️⃣ Iniciar o Servidor Expo

```bash
npm start -- --reset-cache
```

### 2️⃣ Rodar no Dispositivo ou Emulador
- Escaneie o QR Code exibido no terminal ou no navegador usando o aplicativo **Expo Go**.

---

## 📌 Criar Build Android
### 📍 **Gerar APK para Testes Locais**
Gera um arquivo `.apk` que pode ser instalado diretamente no celular.

## 1️⃣ Faça o login na Expo caso não tenha feito.

```bash
expo login
```

## 2️⃣ Instalar o EAS CLI

```bash
npm install -g eas-cli
```

## 3️⃣ Inicialize o EAS Build no projeto

```bash
eas build:configure
```
## 4️⃣ Criar a Build Android

Para gerar um APK (para testes locais) ou AAB (para publicação na Google Play Store)

```bash
eas build -p android
```

## 5️⃣ Baixar e Testar o APK

Após a conclusão do build, você receberá um link para baixar o APK ou AAB.

Para APK:

- Baixe o arquivo para seu computador.
- Transfira para o dispositivo Android (via USB ou link).
- Ative a instalação de fontes desconhecidas no dispositivo e instale o APK.

Para AAB:

- Acesse o Google Play Console.
- Envie o AAB para o canal de teste interno ou produção.

## 6️⃣ Caso queira um APK de development usar o comando abaixo
Inclui ferramentas para testes e desenvolvimento (como conexão com o Expo Go e debug remoto).
Não é destinado a ser um app independente ou para distribuição.

```bash
eas build -p android --profile development
```

## 7️⃣ Caso queira um APK de produção o comando abaixo
Cria uma build standalone (APK ou AAB) que funciona como um aplicativo completo e não depende do Expo Go.
Destinado a ser um app independente ou para distribuição.

```bash
eas build -p android --profile preview
```

## 8️⃣Gerar AAB para Publicação
Se você pretende publicar o app na Google Play Store, use o comando:

```bash
eas build -p android --profile production
```