# Podcast Maneger

### Descrição 
Um app ao estilo netflix, onde possa centralizar diferentes epsódio podcasts separados por categoria

### Domínio
Podcasts feitos em vídeo

### Features
- Listar os episódio podcasts em sessões de categorias 
  - [saúde, fitness, mentalidade, humor, entretenimento, esporte, corrida]
- Filtrar episódio por nome do podcast

## Como?
#### Features
Listar os episódio podcasts em sessões de categorias 

#### Como vou implementar:
Vou retornar em uma api rest (json) o nome do podcast, nome do episódio, imagem da capa, link, categoria.
  ```javascript
    {
        podcastName: "flow",
        episode: "SEGREDOS E CURIOSIDADES DA SÉRIE DO SENNA",
        videoId: "13EWvfLeZJw",
        cover: "https://i.ytimg.com/vi/13EWvfLeZJw/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=13EWvfLeZJw",
        categories: ["entretenimento", "esporte", "corrida"]
    },
    {
        podcastName: "flow",
        episode: "OS BASTIDORES DA DUBLAGEM DE DESENHOS ANIMADOS com WENDELL BEZERRA",
        videoId: "eyeqGn4PnNE",
        cover: "https://i.ytimg.com/vi/eyeqGn4PnNE/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=eyeqGn4PnNE",
        categories: ["entretenimento", "dublagem"]  
    }
  ```