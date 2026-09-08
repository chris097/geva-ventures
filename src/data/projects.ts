import { StaticImageData } from 'next/image';
import recent1 from '@/public/images/gevac2.jpeg';
import recent2 from '@/public/images/gevac3.jpeg';
import recent3 from '@/public/images/gevac4.jpeg';
import recent4 from '@/public/images/gevac5.jpeg';
import recent5 from '@/public/images/gevac6.jpeg';
import recent6 from '@/public/images/gevac7.jpeg';

export interface ProjectImage {
    img: StaticImageData;
}

export const projectGallery: ProjectImage[] = [
    { img: recent1 },
    { img: recent2 },
    { img: recent3 },
    { img: recent4 },
    { img: recent5 },
    { img: recent6 },
];

export interface Project {
    region: string;
    name: string;
    lifts: string;
    stops: string;
    capacity: string;
    location: string;
    year: string;
}

export const projects: Project[] = [
    { region: 'Abuja', name: 'Bravado Mall', lifts: '1', stops: '5', capacity: '450KG', location: 'Gariki, Abuja', year: '2021' },
    { region: 'Abuja', name: 'Maas Central Hotel', lifts: '1', stops: '4', capacity: '630KG', location: 'Gudu, Abuja', year: '2021' },
    { region: 'Asaba', name: 'Vinmillan Hotel', lifts: '4', stops: '7', capacity: '800KG', location: 'Marble Hill, Asaba, Delta State', year: '2020' },
    { region: 'Asaba', name: 'BON Hotel Transtell Residence', lifts: '2', stops: '3', capacity: '630KG', location: 'Area 27A, Central Spine Core, Off DBS Rd, Asaba, Delta State', year: '2021' },
    { region: 'Anambra', name: 'Easy Life Shopping Complex', lifts: '1', stops: '4', capacity: '630KG', location: 'Amawbia, Awka, Anambra State', year: '2022' },
    { region: 'Anambra', name: 'Zara Shopping Mall', lifts: '1', stops: '4', capacity: '630KG', location: 'Awka, Anambra State', year: '2022' },
    { region: 'Anambra', name: 'Chyco Hotel and Suites', lifts: '1', stops: '4', capacity: '320KG', location: 'Unizik Temp Site, Plot 1 Ngene Street, Awka', year: '2023' },
    { region: 'Akwa Ibom', name: 'Blue Moon Hospital', lifts: '1', stops: '4', capacity: '630KG', location: '36 Udo Inwang Street, Uyo, Akwa Ibom State', year: '2023' },
    { region: 'Akwa Ibom', name: 'Commercial Complex', lifts: '25', stops: '3', capacity: '630KG', location: 'Plot 3 J Line, Ewet Housing Estate, Uyo', year: '2023' },
    { region: 'Enugu', name: 'Tanit Medical Construction Ltd (Government Hospital)', lifts: '5', stops: '4', capacity: '1,600KG', location: 'Enugu State (ongoing hospital project)', year: 'ONGOING' },
    { region: 'Imo', name: 'Vaden Specialist Clinic and Maternity', lifts: '1', stops: '4', capacity: '1,250KG', location: '4B Solid Rock Road, Off Claret Academy Street, Owerri', year: '2022' },
    { region: 'Imo', name: 'AIFY Queenest Hotel', lifts: '1', stops: '4', capacity: '630KG', location: '1 Aify Queenest Close, Owerri', year: '2019' },
    { region: 'Imo', name: 'Rencass Hotel', lifts: '1', stops: '4', capacity: '450KG', location: '46 Spibat Amakohia Layout, Owerri', year: '2022' },
    { region: 'Lagos', name: '1004 Estate', lifts: '6', stops: '14', capacity: '1000KG', location: 'Victoria Island, Lagos', year: '2022' },
    { region: 'Lagos', name: 'Prince Oniru Block of Flats', lifts: '1', stops: '5', capacity: '630KG', location: 'Oniru Palace Way, Lagos', year: '2022' },
    { region: 'Lagos', name: 'Barrister Uche Iwu Amadi', lifts: '1', stops: '4', capacity: '450KG', location: 'Lekki, Lagos (ongoing)', year: 'ONGOING' },
    { region: 'Lagos', name: 'Mr Tony', lifts: '1', stops: '6', capacity: '800KG', location: 'Osapa Lekki, Lagos (ongoing)', year: 'ONGOING' },
    { region: 'Ondo', name: 'B-Luxury Hotel and Suite', lifts: '1', stops: '4', capacity: '630KG', location: 'Iyana Epe, Ondo State', year: '2020' },
    { region: 'Rivers', name: 'NDDC Headquarters', lifts: '6', stops: '12', capacity: '1000KG', location: 'Marine Base, Port Harcourt', year: '2021' },
    { region: 'Rivers', name: 'Riv Bank Building', lifts: '3', stops: '7', capacity: '630KG', location: 'Aba Road, Mile One, Port Harcourt', year: '2020' },
    { region: 'Rivers', name: 'Nigerian Law School', lifts: '2', stops: '4', capacity: '1,250KG', location: 'Agip Junction, Port Harcourt', year: '2021' },
    { region: 'Rivers', name: 'BMH Renal Center', lifts: '1', stops: '3', capacity: '1,250KG', location: 'Old GRA, Port Harcourt', year: '2022' },
    { region: 'Rivers', name: 'Sparklyn Hotel', lifts: '1', stops: '4', capacity: '630KG', location: 'GRA, Port Harcourt', year: '2022' },
    { region: 'Rivers', name: 'Palmars Hospital', lifts: '1', stops: '3', capacity: '1,000KG', location: '5/7 Agip Road, Rumueme, Port Harcourt', year: '2014' },
    { region: 'Rivers', name: 'Morning Star Hospital', lifts: '1', stops: '4', capacity: '1,600KG', location: '19/21 Isiokpo Street, D-Line, Port Harcourt', year: '2015' },
    { region: 'Rivers', name: 'Zana House', lifts: '1', stops: '4', capacity: '450KG', location: '25 King Perekule Street, GRA, Port Harcourt', year: '2022' },
    { region: 'Rivers', name: 'Bougainvillea Hotel', lifts: '1', stops: '5', capacity: '630KG', location: 'Plot F/1A Sani Abacha Road, Port Harcourt', year: '2023' },
    { region: 'Rivers', name: 'PAMO Teaching Hospital', lifts: '4', stops: '5', capacity: '1,600KG', location: 'Oyibo Express Road, Toll Gate, Port Harcourt', year: '2020' },
    { region: 'Rivers', name: 'Magistrate Court Complex', lifts: '12/6', stops: '3/1', capacity: '800KG/1000KG', location: 'Moscow Road, Port Harcourt', year: '2023' },
    { region: 'Rivers', name: 'Allied Victory NIG LTD', lifts: '1', stops: '4', capacity: '630KG', location: '37 Rumuola Link Road, Port Harcourt', year: '2022' },
    { region: 'Rivers', name: 'Ken-next Venture Nigeria', lifts: '1', stops: '4', capacity: '320KG', location: 'Plot 37 Okwuruola Road, Port Harcourt', year: '2018' },
    { region: 'Rivers', name: 'Tanit Medical Construction Limited (Ogoni Hyprep Hospital)', lifts: '1', stops: '4', capacity: 'TBD', location: 'Ogoni, Rivers State', year: 'ONGOING' },
];
