import { IncomingMessage, ServerResponse } from 'http';
import { serviceListEpisodes } from '../services/list-episodes.service';
import { serviceFilterEpisodes } from '../services/filter-episodes.service';
import { ContentType } from '../utils/content-type';
import { PodecastTransferDTO } from '../dto/podcastTransfer.dto';

const DEFAULT_CONTENT = {'content-type': ContentType.JSON};

export const getListEpisodes = async (
    req: IncomingMessage, 
    res: ServerResponse
) =>{    
    const content: PodecastTransferDTO = await serviceListEpisodes();

    res.writeHead(content.statusCode, DEFAULT_CONTENT);
    res.write(JSON.stringify(content.body));
    res.end();
};

export const getFilterEpisodes = async(
    req: IncomingMessage,
    res: ServerResponse
) => {
    const content: PodecastTransferDTO = await serviceFilterEpisodes(req.url);

    res.writeHead(content.statusCode, DEFAULT_CONTENT);
    res.write(JSON.stringify(content.body));
    res.end();
}