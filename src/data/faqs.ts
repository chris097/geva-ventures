export interface Faq {
    tag: number;
    title: string;
    description: string;
}

export const faqs: Faq[] = [
    { tag: 1, title: 'How long does it take for you to deliver after payment?', description: '12-16 weeks.' },
    { tag: 2, title: 'What products do you import?', description: 'Turkish, Japanese, German, American and generally European products of high quality.' },
    { tag: 3, title: 'Do you import from China?', description: 'No.' },
    { tag: 4, title: 'How much do you sell a lift, elevator or escalator?', description: 'It depends on the size and height of the elevator. We give a quotation on demand, usually after inspecting the site.' },
    { tag: 5, title: 'Do you have elevators already available in Nigeria?', description: 'We don’t usually manufacture and keep stock. When we receive your order, we pass it across to our manufacturers in Europe and America.' },
    { tag: 6, title: 'How long does it take to install an elevator?', description: 'About three weeks to one month.' },
    { tag: 7, title: 'Do I need to provide anything for your installation?', description: 'Yes – you are to provide power and scaffolding.' },
    { tag: 8, title: 'Can I visit the previous work that you have done?', description: 'Yes. Contact our office for an appointment and we will take you to our recent sites.' },
    { tag: 9, title: 'Can I see and interact with your past customers?', description: 'Yes. For your verification, we can provide a list of customers we recently worked for, along with the contact person at each organization.' },
];
