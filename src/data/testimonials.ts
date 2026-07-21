export interface Testimonial {
    id: number;
    name: string;
    location: string;
    description: string;
}

export const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'DR. IBEABUCHI CMD,',
        location: 'PALMARS HOSPITAL, PORT HARCOURT, RIVERS STATE, NIGERIA',
        description: '"From the initial consultation to the final inspection, the entire process was seamless and efficient. Your team displayed an impressive level of professionalism and expertise throughout the project."',
    },
    {
        id: 2,
        name: 'MD. ALFYQUEENET HOTEL OWERRI,',
        location: 'OWERRI, IMO STATE, NIGERIA',
        description: '"I want to take a moment to express my immense satisfaction with the recently installed elevator in our building. This new addition has truly transformed our daily experience, and I couldn\'t be happier with the results. The efficiency and speed have made moving about quick and hassle-free."',
    },
    {
        id: 3,
        name: 'DR. OHIAH CMD,',
        location: 'PALMARS HOSPITAL, PORT HARCOURT, RIVERS STATE, NIGERIA',
        description: '"We couldn\'t be happier with the maintenance service provided by GEVA VENTURES. They are true professionals who take pride in their work, and it shows in the results. Our escalator is running better than ever, and we look forward to a continued partnership with them in the future. Thank you for your outstanding service!"',
    },
];
