import fs from "fs"
import path from "path";
import { PodcastDTO } from "../dto/podcast.dto";


const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repoPodcast = async (podcastName?:string): Promise<PodcastDTO[]> => {

    const language = "utf-8";

    const rawData = fs.readFileSync(pathData, language);
    let jsonFile = JSON.parse(rawData);

    if(podcastName){
        jsonFile = jsonFile.filter((item:PodcastDTO)=> item.podcastName === podcastName)
    }

    return jsonFile;
}