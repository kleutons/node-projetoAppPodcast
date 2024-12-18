
import { PodecastTransferDTO } from "../dto/podcastTransfer.dto";
import { repoPodcast } from "../repositories/podcast.repository";
import { StatusCode } from "../utils/status-code";

export const serviceListEpisodes = async ():Promise<PodecastTransferDTO> => {

    //define a interface do retorno
    let responseFormat: PodecastTransferDTO = {
        statusCode: 0,
        body: []
    }
    

    const data = await repoPodcast();
    
    responseFormat.statusCode = data.length > 0 ? StatusCode.OK : StatusCode.NO_CONTENT;
    responseFormat.body = data;

    return responseFormat;
};