import { StaticImageData } from 'next/image';
import service1 from '@/public/images/frame7.jpeg';
import service2 from '@/public/images/frame6.jpeg';
import service3 from '@/public/images/service3.png';
import service4 from '@/public/images/frame8.jpeg';
import service5 from '@/public/images/frame10.jpg';
import service6 from '@/public/images/frame4.jpeg';

export interface Service {
    slug: string;
    title: string;
    image: StaticImageData;
    summary: string;
    details: string[];
}

export const services: Service[] = [
    {
        slug: 'elevator-installation',
        title: 'Elevator Installation',
        image: service1,
        summary: 'Within 3-4 weeks, our industry-leading technical team delivers an efficient and flawless installation of your new elevators.',
        details: [
            'Site survey and shaft/pit specification review before delivery.',
            'Certified engineers handle mechanical, electrical and cabin fit-out.',
            'Full commissioning, load testing and safety certification on handover.',
        ],
    },
    {
        slug: 'escalator-installation',
        title: 'Escalator Installation',
        image: service2,
        summary: 'Within 3 weeks, our industry-leading technical team delivers an efficient and flawless installation of your new escalators.',
        details: [
            'Structural and truss alignment planning ahead of arrival on site.',
            'Precision installation of steps, handrails and drive systems.',
            'Safety testing to manufacturer and regulatory standards before use.',
        ],
    },
    {
        slug: 'automatic-doors',
        title: 'Automatic Doors',
        image: service4,
        summary: 'Modern automatic door systems for lobbies, retail spaces and healthcare facilities, installed and calibrated by our technicians.',
        details: [
            'Sliding, swing and revolving automatic door systems.',
            'Sensor calibration for safe, reliable everyday operation.',
            'Integration with access control and fire-safety systems.',
        ],
    },
    {
        slug: 'procurement-services',
        title: 'Procurement Services',
        image: service4,
        summary: 'Within 12-16 weeks from date of payment, we deliver your orders: be it elevators, escalators or automatic doors.',
        details: [
            'Direct sourcing from trusted Turkish, Japanese, German and American manufacturers.',
            'Import logistics and clearance handled end to end.',
            'Transparent quotation after a site inspection.',
        ],
    },
    {
        slug: 'elevator-maintenance',
        title: 'Elevator Maintenance',
        image: service5,
        summary: 'At the touch of a button, contact us and we deploy a ready-to-go technical team for free or highly subsidized elevator maintenance.',
        details: [
            'Scheduled preventive maintenance visits.',
            'Rapid-response emergency callout support.',
            'Genuine replacement parts and component servicing.',
        ],
    },
    {
        slug: 'escalator-maintenance',
        title: 'Escalator Maintenance',
        image: service6,
        summary: 'At the touch of a button, contact us and we deploy a ready-to-go technical team for free or highly subsidized escalator maintenance.',
        details: [
            'Routine inspection and lubrication programs.',
            'Step, handrail and drive-chain servicing.',
            'Same-week fault diagnosis and repair.',
        ],
    },
    {
        slug: 'labour-contractors',
        title: 'Labour Contractors',
        image: service3,
        summary: 'Our technical team are the best in the industry and we offer them for free to you. They are highly sought after.',
        details: [
            'Vetted, experienced installation and maintenance crews.',
            'Supplied at no extra cost alongside our project contracts.',
            'Available for both short-term and ongoing site work.',
        ],
    },
];
