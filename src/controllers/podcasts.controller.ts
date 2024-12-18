import { IncomingMessage, ServerResponse } from 'http';

export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) =>{
    res.writeHead(200, {'content-type': 'application/json'});
    res.end(JSON.stringify(
    [
        {
            podcastName: "flow",
            episode: "SEGREDOS E CURIOSIDADES DA SÉRIE DO SENNA",
            videoId: "13EWvfLeZJw",
            categories: ["entretenimento", "esporte", "corrida"]
        },
        {
            podcastName: "flow",
            episode: "OS BASTIDORES DA DUBLAGEM DE DESENHOS ANIMADOS com WENDELL BEZERRA",
            videoId: "eyeqGn4PnNE",
            categories: ["entretenimento", "dublagem"]  
        }
    ]));
};