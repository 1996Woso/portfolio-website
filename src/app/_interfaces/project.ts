import { Image } from "./image";

export interface Project extends Image {
    gitHubLink: string;
    videoLink: string;
    liveLink: string
}
