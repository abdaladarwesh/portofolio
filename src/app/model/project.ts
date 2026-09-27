export interface Project {
    id:number;
    type: string;
    title:string;
    body: string;
    technologies: string[];
    images: string[];
    mainImage:string;
    isLive:boolean;
    githubLink: string;
    liveLink?: string
}
