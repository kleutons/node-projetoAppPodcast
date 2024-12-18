import { PodcastDTO } from "./podcast.dto";

export interface PodecastTransferDTO {
    statusCode: number,
    body: PodcastDTO[];
}