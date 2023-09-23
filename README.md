# Backend finanças App

1) Primeiro clone o repositório
2) Baixe as dependencias, abra o cmd até a pasta onde está o projeto e rode: ```yarn``` ou ```npm install```
3) Sincronize o banco abrindo seu cmd dentro da pasta do projeto e rodando:
```cmd
npx prisma migrate dev
```
- Após rodar o passo prisma migrate dev você pode olhar dentro da pasta prisma ele deve ter gerado um arquovo com nome `dev.db`

4) Agora pode rodar o projeto com ```yarn dev``` ou ```npm run dev```

* Sempre a api vai tentar rodar na porta ```3333```, exemplo: ```http://localhost:3333/login```


# Frontend finanças App

Este é um novo projeto [**React Native**](https://reactnative.dev), inicializado usando [`@react-native-community/cli`](https://github.com/react-native- comunidade/cli).

# Começando

>**Observação**: Certifique-se de ter concluído as instruções [React Native - Configuração do ambiente](https://reactnative.dev/docs/environment-setup) até a etapa "Criando um novo aplicativo", antes de continuar.

## Etapa 1: iniciar o servidor Metro

Primeiro, você precisará iniciar o **Metro**, o _bundler_ JavaScript que vem _com_ o React Native.

Para iniciar o Metro, execute o seguinte comando na _root_ do seu projeto React Native:

```bash
#usando npm
npm start

# OU usando Yarn
yarn start
```

## Etapa 2: inicie seu aplicativo

Deixe o Metro Bundler rodar em seu próprio terminal. Abra um _novo_ terminal da _root_ do seu projeto React Native. Execute o seguinte comando para iniciar seu aplicativo _Android_ ou _iOS_:

### Para Android

```bash
#usando npm
npm run android

# OU usando Yarn
yarn android
```

### Para iOS

```bash
#usando npm
npm run ios

# OU usando Yarn
yarn ios
```

Se tudo estiver configurado _corretamente_, você deverá ver seu novo aplicativo em execução em seu _Android Emulator_ ou _iOS Simulator_ em breve, desde que tenha configurado seu emulador/simulador corretamente.

Essa é uma maneira de executar seu aplicativo – você também pode executá-lo diretamente no Android Studio e no Xcode, respectivamente.

## Etapa 3: Modificando seu aplicativo

Agora que você executou o aplicativo com sucesso, vamos modificá-lo.

1. Abra `App.tsx` no editor de texto de sua preferência e edite algumas linhas.
2. Para **Android**: pressione a tecla <kbd>R</kbd> duas vezes ou selecione **"Recarregar"** no **Menu do desenvolvedor** (<kbd>Ctrl</kbd> + <kbd >M</kbd> (no Windows e Linux) ou <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (no macOS)) para ver suas alterações!

    Para **iOS**: pressione <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> no seu simulador iOS para recarregar o aplicativo e ver suas alterações!


Você executou e modificou com sucesso seu aplicativo React Native. :partying_face:

### O que agora?

- Se você deseja adicionar este novo código React Native a um aplicativo existente, consulte o [Guia de integração](https://reactnative.dev/docs/integration-with-existente-apps).
- Se você estiver curioso para saber mais sobre o React Native, confira a [Introdução ao React Native](https://reactnative.dev/docs/getting-started).

# Solução de problemas

Se você não conseguir fazer isso funcionar, consulte a página [Solução de problemas](https://reactnative.dev/docs/troubleshooting).

# Saber mais

Para saber mais sobre React Native, dê uma olhada nos seguintes recursos:

- [Site React Native](https://reactnative.dev) - saiba mais sobre React Native.
- [Primeiros passos](https://reactnative.dev/docs/environment-setup) - uma **visão geral** do React Native e como configurar seu ambiente.
- [Aprenda o básico](https://reactnative.dev/docs/getting-started) - um **tour guiado** pelos **básicos** do React Native.
- [Blog](https://reactnative.dev/blog) - leia as últimas postagens oficiais do **Blog** do React Native.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - o Código Aberto; **repositório** GitHub para React Native.
