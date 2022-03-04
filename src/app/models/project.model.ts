export interface ProjectModel {
    id: number;
    brand: string;
    title: string;
    description: string;
    category: string;
    services: string;
    platforms: string;
    imgPreviewUrl: string;
    headerImg: string;
    researchSectionImg: string;
    researchDescription: string;
    designSectionImg: string;
    designDescription: string;
    brandingSectionImg: string;
    brandingDescription: string;
    bgColorClass?: string;
    bgColorHex?: string;
    textColor?: string;
}
