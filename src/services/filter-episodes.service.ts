import { IncomingMessage } from "http";
import { repoPodcast } from "../repositories/podcast.repository"

export const serviceFilterEpisodes = async (podcastName: String | undefined) =>{

    const queryString = podcastName?.split("?=p")[1] || '';

    const data = await repoPodcast(queryString);

    return data;
}