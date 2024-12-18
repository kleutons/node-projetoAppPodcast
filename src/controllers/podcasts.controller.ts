import { IncomingMessage, ServerResponse } from 'http';
import { serviceListEpisodes } from '../services/list-episodes.service';
import { serviceFilterEpisodes } from '../services/filter-episodes.service';


export const getListEpisodes = async (
    req: IncomingMessage, 
    res: ServerResponse
) =>{    
    const content = await serviceListEpisodes();

    res.writeHead(200, {'content-type': 'application/json'});
    res.end(JSON.stringify(content));
};

export const getFilterEpisodes = async(
    req: IncomingMessage,
    res: ServerResponse
) => {

    // localhost:333/api/episode?p=flow
    const queryString = req.url?.split("?p=")[1] ?? '';

    console.log(queryString);
    
    const content = await serviceFilterEpisodes(queryString);

    res.writeHead(200, {'content-type': 'application/json'});
    res.end(JSON.stringify(content));
}