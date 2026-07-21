import { StaticImageData } from 'next/image';
import technical1 from '@/public/images/man.jpeg';
import technical2 from '@/public/images/woman.jpeg';
import technical3 from '@/public/images/technical1.png';

export interface TeamMember {
    url: StaticImageData;
    name: string;
    role: string;
}

export const teams: TeamMember[] = [
    { url: technical1, name: 'Okolichukwu Ebube', role: 'Legal Director' },
    { url: technical2, name: 'Olajumoke Owoborode-Ilugo', role: 'Head of Public Relations' },
    { url: technical3, name: 'Helen Chai', role: 'Head of Construction' },
];
