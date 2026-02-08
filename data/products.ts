export interface CoffeeProduct {
    id: string;
    name: string;
    description: string;
    price: string;
    rating: number;
    image: string;
    features: string[];
}

export const coffeeProducts: CoffeeProduct[] = [
    {
        id: 'cold-coffee-choco',
        name: 'Cold Coffee with Choco Chips',
        description: 'A rich and creamy blend of espresso and chocolate chips, creating a delightful crunch with every sip.',
        price: '₹120',
        rating: 4.8,
        image: '/coffee/cold-coffee.jpg',
        features: ['Espresso', 'Choco Chips', 'Vanilla Ice Cream']
    },
    {
        id: 'cappuccino',
        name: 'Classic Cappuccino',
        description: 'Perfectly balanced espresso with steamed milk and a thick layer of foam, dusted with cocoa.',
        price: '₹90',
        rating: 4.7,
        image: '/coffee/cappuccino.jpg',
        features: ['Espresso', 'Steamed Milk', 'Foamed Milk']
    },
    {
        id: 'mocha',
        name: 'Cafe Mocha',
        description: 'A chocolate-flavored variant of a latte, blending espresso, hot milk, and sweet cocoa powder.',
        price: '₹110',
        rating: 4.9,
        image: '/coffee/mocha.jpg',
        features: ['Espresso', 'Chocolate Syrup', 'Steamed Milk']
    }
];

export interface FeatureHighlight {
    title: string;
    description: string;
    position: 'left' | 'right';
}

export const features: FeatureHighlight[] = [
    {
        title: 'High-Quality Beans',
        description: 'Sourced from the finest estates, our beans tell a story of dedication and craft in every cup.',
        position: 'left'
    },
    {
        title: 'Individual Approach',
        description: 'Every customer is unique, and so is their coffee. We craft each cup to your personal preference.',
        position: 'right'
    },
    {
        title: 'Atmosphere of Inspiration',
        description: 'A cozy, welcoming space designed for creativity, conversation, and quiet moments of reflection.',
        position: 'left'
    },
    {
        title: 'Professional Baristas',
        description: 'Our skilled baristas are artists, delivering rich experiences with every custom coffee crafted explicitly for you.',
        position: 'right'
    }
];

export const reviews = [
    {
        id: 1,
        author: "Narendra Jakhar",
        rating: 5,
        text: "Cozy, welcoming, and full of aroma. The coffee is rich and expertly brewed, and the service is warm and attentive.",
        role: "Local Guide"
    },
    {
        id: 2,
        author: "Vaishali Randha",
        rating: 5,
        text: "Mene rat me Cold coffee bulwai bohot hi achi aai hai. (Ordered Cold Coffee late at night, it was really good.)",
        role: "Customer"
    },
    {
        id: 3,
        author: "Nikita Jangir",
        rating: 4,
        text: "Their cold coffee is just wow. It's too good. Service is also fast. Reasonable price.",
        role: "Local Guide"
    }
];
