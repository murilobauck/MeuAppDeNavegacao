# Meu App de Navegação - React Native

Um aplicativo móvel desenvolvido em React Native com Expo que oferece um sistema de navegação completo e autenticação de usuários. O app apresenta uma interface moderna e intuitiva para navegação entre telas com persistência de dados de login, sistema de estilos centralizado e validação de credenciais.

---

## ✨ Funcionalidades Principais

- 🔐 Sistema de autenticação com validação de credenciais
- 📱 Navegação fluida entre telas com React Navigation
- 👤 Tela de perfil do usuário
- 📋 Tela de detalhes com navegação cruzada
- 🔄 Tela de carregamento com verificação automática de login
- 🚪 Sistema de logout seguro com confirmação
- 💾 Armazenamento local com AsyncStorage
- 🎨 Sistema de estilos centralizado e tema consistente
- ✅ Validação de formulários
- 🔒 Múltiplas credenciais de acesso

---

## 🛠️ Estrutura do Código

O projeto está organizado da seguinte forma:

```
src/
├── App.js                 # Componente principal com navegação
├── index.js              # Ponto de entrada da aplicação
├── screens/              # Telas da aplicação
│   ├── HomeScreen.js     # Tela principal com menu de navegação
│   ├── DetailsScreen.js  # Tela de detalhes com navegação cruzada
│   ├── ProfileScreen.js  # Tela de perfil com navegação cruzada
│   ├── LoginScreen.js    # Tela de login com validação
│   └── LoadingScreen.js  # Tela de carregamento inicial
├── styles/               # Sistema de estilos centralizado
│   ├── global.js         # Estilos globais reutilizáveis
│   └── theme.js          # Tema e configurações de design
└── utils/
    └── AuthService.js    # Serviços de autenticação e persistência
```

### Componentes Principais

- **App.js**: Configuração principal da navegação com Stack Navigator
- **HomeScreen**: Tela principal com menu de navegação e logout
- **DetailsScreen**: Exibição de detalhes com navegação para perfil
- **ProfileScreen**: Perfil do usuário com navegação para detalhes
- **LoginScreen**: Autenticação com validação de múltiplas credenciais
- **LoadingScreen**: Tela de carregamento com verificação automática de login
- **AuthService**: Gerenciamento completo de autenticação e persistência
- **Global Styles**: Sistema de estilos centralizado e reutilizável
- **Theme**: Configurações de cores, fontes e espaçamentos

---

## 🚀 Tecnologias Utilizadas

- **Framework**: React Native
- **Plataforma**: Expo
- **Navegação**: React Navigation (Stack Navigator)
- **Armazenamento**: AsyncStorage
- **Interface**: React Native Components
- **Estilização**: StyleSheet com sistema centralizado
- **Validação**: Sistema próprio de validação de credenciais

---

## ✨ Recursos de Interface

- **Design System Centralizado**: Cores, fontes e espaçamentos padronizados
- **Navegação Cruzada**: Navegação fluida entre todas as telas
- **Persistência Inteligente**: Verificação automática de login ao iniciar
- **Validação Robusta**: Múltiplas credenciais de acesso
- **Confirmação de Logout**: Diálogo de confirmação antes de sair
- **Interface Responsiva**: Adaptação automática a diferentes tamanhos de tela
- **Feedback Visual**: Alertas e mensagens informativas
- **Tema Consistente**: Cores e estilos uniformes em toda a aplicação

---

## 📱 Telas do Aplicativo

### Loading Screen
- **Verificação Automática**: Checa status de login ao iniciar
- **Redirecionamento Inteligente**: Direciona para Home ou Login automaticamente
- **Indicador Visual**: ActivityIndicator com texto informativo

### Login Screen
- **Validação de Credenciais**: Suporte a múltiplos usuários
- **Credenciais Disponíveis**:
  - Usuário: `user1` | Senha: `senha1`
  - Usuário: `user2` | Senha: `senha2`
  - Usuário: `user3` | Senha: `senha3`
- **Validação de Campos**: Verificação de campos obrigatórios
- **Persistência de Dados**: Salva credenciais localmente
- **Feedback de Erro**: Mensagens claras para problemas de login

### Home Screen
- **Menu Principal**: Acesso às funcionalidades principais
- **Navegação Intuitiva**: Botões para Detalhes e Perfil
- **Logout Seguro**: Confirmação antes de desconectar
- **Informações do Usuário**: Exibe dados do usuário logado

### Details Screen
- **Navegação Cruzada**: Acesso direto ao perfil
- **Retorno Fácil**: Botão para voltar ao início
- **Design Consistente**: Segue o padrão visual da aplicação

### Profile Screen
- **Navegação Cruzada**: Acesso direto aos detalhes
- **Retorno Fácil**: Botão para voltar ao início
- **Interface Limpa**: Design minimalista e funcional

---

## 🎨 Sistema de Estilos

### Estrutura Centralizada
- **global.js**: Estilos reutilizáveis para componentes comuns
- **theme.js**: Configurações de cores, fontes e espaçamentos

### Tema Padronizado
- **Cores Primárias**: Azul (#1e3a8a) e secundário (#3b82f6)
- **Cores de Estado**: Perigo (#ee4444) para ações críticas
- **Tipografia**: Tamanhos e pesos padronizados
- **Espaçamentos**: Sistema consistente de margens e padding
- **Layout**: Border radius e elevação padronizados

---

## 🔐 Sistema de Autenticação

### Credenciais de Acesso
O sistema suporta múltiplas credenciais para demonstração:

| Usuário | Senha |
|---------|-------|
| user1   | senha1 |
| user2   | senha2 |
| user3   | senha3 |

### Funcionalidades de Segurança
- **Validação de Campos**: Campos obrigatórios verificados
- **Persistência Local**: Credenciais salvas no dispositivo
- **Verificação Automática**: Status de login verificado ao iniciar
- **Logout Seguro**: Limpeza completa dos dados locais

---

## 📝 Licença

Este projeto está sob a licença [MIT](LICENSE)

---

## 👨‍💻 Autor

Murilo Bauck

[Entre em contato!](https://www.linkedin.com/in/murilobauck/)

---

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

---

## 📞 Suporte

Se você encontrar algum problema ou tiver dúvidas, por favor:

- Abra uma [issue](https://github.com/murilobauck/MeuAppDeNavegacao/issues)
- Entre em contato através do [LinkedIn](https://www.linkedin.com/in/murilobauck/)

---