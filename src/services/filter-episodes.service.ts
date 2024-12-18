
import { PodecastTransferDTO } from "../dto/podcastTransfer.dto";
import { repoPodcast } from "../repositories/podcast.repository"
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (podcastName: String | undefined):Promise<PodecastTransferDTO> =>{

    //define a interface do retorno
    let responseFormat: PodecastTransferDTO = {
        statusCode: 0,
        body: []
    }

    //buscado os dados 
    const queryString = podcastName?.split("?p=")[1] || '';
    const data = await repoPodcast(queryString);

    //verifica se tem conteúdo
    responseFormat.statusCode = data.length > 0 ? StatusCode.OK : StatusCode.NO_CONTENT;

    responseFormat.body = data;

    return responseFormat;
}