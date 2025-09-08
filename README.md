# 🎶 Anttonias - Spotify

Um player de música minimalista feito em **React (Mobile-First)** e **TailwindCSS**, com um **banco de dados fake em JavaScript** para simular músicas e metadados de faixas.  
Inspirado no player de streaming mais famoso: **Spotify**, mas simplificado para fins de estudo e prática.

---

## 🚀 Tecnologias

- **React**: Biblioteca principal para a UI.  
- **TailwindCSS**: Estilização utilitária e responsiva.  
- **Lucide React**: Ícones modernos em SVG.  
- **Fake DB (`songs.js`)**: Lista de músicas simulando um banco de dados.  

---

## 📂 Estrutura do Projeto
```
src/
├── components/
│ ├── SongCard.jsx # Card individual de música
│ └── Play.jsx # Botão de play customizado
│
├── db/
│ └── songs.js # Banco de dados falso das músicas
│
├── App.jsx # Componente principal
└── App.css # Estilos globais
```

---

## 🎧 Funcionalidades

✅ **Reprodução de músicas**: Play/Pause com controle de áudio.  
✅ **Seleção de música**: Clique em qualquer faixa para iniciar a reprodução.  
✅ **Botão Play global**: Inicia a primeira música caso nenhuma esteja tocando.  
✅ **Próxima faixa automática**: Quando uma música acaba, a próxima começa sozinha.  
✅ **Parada automática**: Quando chega à última música, o player pausa.  
✅ **Shuffle (aleatório)**: Ao terminar uma faixa, escolhe outra música de forma aleatória.  
✅ **Download e status**: Indica se a música está baixada ou não com ícones.  
✅ **UI estilizada**: Layout inspirado em players reais com Tailwind.  

---

## 🛠️ Como rodar o projeto

Clone o repositório, navegue até a pasta do projeto, instale as dependências e inicie o servidor de desenvolvimento.

```bash
# Clonar o repositório
git clone https://github.com/andre-0303/anttonias-spotify.git

# Entrar no diretório
cd anttonias-spotify

# Instalar dependências
npm install

# Rodar o servidor
npm run dev

```
A aplicação estará disponível em http://localhost:5173
 (ou conforme a configuração do seu sistema).

 ## 📸 Prévia
 <img width="359" height="725" alt="image" src="https://github.com/user-attachments/assets/4ed062c7-5812-4955-98e6-798e6fb3a852" />

## 📦 Banco de Dados Fake (songs.js)

O projeto usa um array para simular um banco de dados de músicas:
```javascript
export const songs = [
  {
    id: 1,
    title: "Almendra",
    artist: "Anttonias",
    downloaded: true,
    src: "/music/Almendra.mp3",
  },
  {
    id: 2,
    title: "Dulces corazones",
    artist: "Anttonias",
    downloaded: false,
    src: "/music/dulces_corazones.mp3",
  },
  // ...
];

```

## ✨ Possíveis Melhorias Futuras
- 🔁 Modo Repeat One (repetir a música atual).
- 🎨 Animações suaves nos botões de Play/Pause.

## 📄 Licença

Este projeto é apenas para fins de estudo e prática.
Sinta-se à vontade para clonar, modificar e evoluir.
