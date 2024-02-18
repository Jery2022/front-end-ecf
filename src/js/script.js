import cheminUrl1 from './../assets/images/cars/Chevrolet_camero2017_1.jpg';
import cheminUrl2 from './../assets/images/cars/Chevrolet_camero2017_1.jpg';
import cheminUrl3 from './../assets/images/cars/Honda_civic_2019-1.jpg';
import cheminUrl4 from './../assets/images/cars/Chevrolet_camero2017_1.jpg';
import cheminUrl5 from './../assets/images/cars/Chevrolet_camero2017_1.jpg';
import cheminUrl6 from './../assets/images/cars/Chevrolet_camero2017_1.jpg';
import cheminUrl7 from './../assets/images/cars/Chevrolet_camero2017_1.jpg';
import cheminUrl8 from './../assets/images/cars/Chevrolet_camero2017_1.jpg';
import cheminUrl9 from './../assets/images/cars/Chevrolet_camero2017_1.jpg';
import cheminUrl10 from './../assets/images/cars/Chevrolet_camero2017_1.jpg';
import iconUrl1 from '../assets/icons/image-icon_7.jpg';
import iconUrl2 from '../assets/icons/image-icon_1.jpg';
import iconUrl3 from '../assets/icons/image-icon_2.jpg';
import iconUrl4 from '../assets/icons/image-icon_4.jpg';

export const listTestimonials = [
  {
    id: '1',
    firstName: 'Paul',
    lastName: 'Laurent',

    testimonials: [
      {
        id: '1',
        testimonial:
          'Très bon service, je suis très satisfait de la qualité de la prestation. Je recommande vivement.',
        testiDate: '20 jan 2021',
        testiTime: '15h:30',
        visbilty: 'true',
      },
      {
        id: '2',
        testimonial:
          'Très bon service, je suis très satisfait de la qualité de la prestation. Je recommande vivement.',
        testiDate: '20 jan 2021',
        testiTime: '15h:30',
        visbilty: 'true',
      },
      {
        id: '3',
        testimonial:
          'Service de qualité et très professionnel. Je recommande vivement.',
        testiDate: '20 jan 2021',
        testiTime: '15h:30',
        visbilty: 'true',
      },
    ],
  },
  {
    id: '2',
    firstName: 'Paul',
    lastName: 'Laurent',

    testimonials: [
      {
        id: '1',
        testimonial:
          "'Très bon service, je suis très satisfait de la qualité de la prestation. Je recommande vivement.'",
        testiDate: '20 jan 2021',
        testiTime: '15h30',
        visbilty: 'true',
      },
      {
        id: '2',
        testimonial:
          "'Très bon service, je suis très satisfait de la qualité de la prestation. Je recommande vivement.'",
        testiDate: '10 jan 2022',
        testiTime: '15h30',
        visbilty: 'false',
      },
      {
        id: '3',
        testimonial:
          "'Service de qualité et très professionnel. Je recommande vivement.'",
        testiDate: '20 jan 2021',
        testiTime: '15h30',
        visbilty: 'true',
      },
    ],
  },
  {
    id: '3',
    firstName: 'Paul',
    lastName: 'Laurent',

    testimonials: [
      {
        id: '1',
        testimonial:
          "'Très bon service, je suis très satisfait de la qualité de la prestation. Je recommande vivement.'",
        testiDate: '20 jan 2021',
        testiTime: '10h00',
        visbilty: 'true',
      },
      {
        id: '2',
        testimonial:
          "'Très bon service, je suis très satisfait de la qualité de la prestation. Je recommande vivement.'",
        testiDate: '30 sept 2021',
        testiTime: '19h00',
        visbilty: 'false',
      },
      {
        id: '3',
        testimonial:
          "'Service de qualité et très professionnel. Je recommande vivement.'",
        testiDate: '18 dec 2022',
        testiTime: '09h35',
        visbilty: 'true',
      },
    ],
  },
  {
    id: '4',
    firstName: 'Jean',
    lastName: 'Paysant',
    testimonials: [
      {
        id: '1',
        testimonial:
          "'Très bon service, je suis très satisfait de la qualité de la prestation. Je recommande vivement.'",
        testiDate: '04 fev 2023',
        testiTime: '23h00',
        visbilty: 'true',
      },
      {
        id: '2',
        testimonial:
          "'Très bon service, je suis très satisfait de la qualité de la prestation. Je recommande vivement.'",
        testiDate: '18 Aout 2022',
        testiTime: '09h00',
        visbilty: 'true',
      },
      {
        id: '3',
        testimonial:
          'Service de qualité et très professionnel. Je recommande vivement.',
        testiDate: '20 jan 2021',
        testiTime: '10h00',
        visbilty: 'true',
      },
    ],
  },
];

export const listCars = [
  {
    id: '1',
    nameCar: 'Chevrolet',
    model: 'Camaro',
    year: 2017,
    price: 25000,
    devise: 'USD',
    kilometrage: 60000,
    morisation: 'Essence',
    score: 4,
    imagesCar: [
      {
        id: '1',
        src: cheminUrl1,
        alt: 'Audi A4 2019',
      },
      {
        id: '2',
        src: cheminUrl1,
        alt: 'Audi A4 2019',
      },
      {
        id: '3',
        src: cheminUrl1,
        alt: 'Audi A4 2019',
      },
    ],
  },
  {
    id: '2',
    nameCar: 'Chevrolet',
    model: 'Camaro',
    year: 2017,
    price: 25000,
    devise: 'USD',
    kilometrage: 60000,
    morisation: 'Essence',
    score: 4,
    imagesCar: [
      {
        id: '1',
        src: cheminUrl2,
        alt: 'Audi A4 2019',
      },
      {
        id: '2',
        src: cheminUrl2,
        alt: 'Audi A4 2019',
      },
      {
        id: '3',
        src: cheminUrl2,
        alt: 'Audi A4 2019',
      },
    ],
  },
  {
    id: '3',
    nameCar: 'Chevrolet',
    model: 'Camaro',
    year: 2017,
    price: 25000,
    devise: 'USD',
    kilometrage: 60000,
    morisation: 'Essence',
    score: 4,
    imagesCar: [
      {
        id: '1',
        src: cheminUrl3,
        alt: 'Audi A4 2019',
      },
      {
        id: '2',
        src: cheminUrl3,
        alt: 'Audi A4 2019',
      },
      {
        id: '3',
        src: cheminUrl3,
        alt: 'Audi A4 2019',
      },
    ],
  },
  {
    id: '4',
    nameCar: 'Chevrolet',
    model: 'Camaro',
    year: 2017,
    price: 25000,
    devise: 'USD',
    kilometrage: 60000,
    morisation: 'Essence',
    score: 4,
    imagesCar: [
      {
        id: '1',
        src: cheminUrl4,
        alt: 'Audi A4 2019',
      },
      {
        id: '2',
        src: cheminUrl4,
        alt: 'Audi A4 2019',
      },
      {
        id: '3',
        src: cheminUrl4,
        alt: 'Audi A4 2019',
      },
    ],
  },
  {
    id: '5',
    nameCar: 'Hyundai',
    model: 'Elantra',
    year: 2014,
    price: 10000,
    devise: 'USD',
    kilometrage: 95000,
    morisation: 'Diesel',
    score: 4,
    imagesCar: [
      {
        id: '1',
        src: cheminUrl5,
        alt: 'Audi A4 2019',
      },
      {
        id: '2',
        src: cheminUrl5,
        alt: 'Audi A4 2019',
      },
      {
        id: '3',
        src: cheminUrl5,
        alt: 'Audi A4 2019',
      },
    ],
  },
  {
    id: '6',
    nameCar: 'Kia',
    model: 'Optima',
    year: 2013,
    price: 12000,
    devise: 'USD',
    kilometrage: 90000,
    morisation: 'Essence',
    score: 4,
    imagesCar: [
      {
        id: '1',
        src: cheminUrl6,
        alt: 'Audi A4 2019',
      },
      {
        id: '2',
        src: cheminUrl6,
        alt: 'Audi A4 2019',
      },
      {
        id: '3',
        src: cheminUrl6,
        alt: 'Audi A4 2019',
      },
    ],
  },
  {
    id: '7',
    nameCar: 'Lexus',
    model: 'RX 350',
    year: 2012,
    price: 35000,
    devise: 'USD',
    kilometrage: 70400,
    morisation: 'Essence',
    score: 5,
    imagesCar: [
      {
        id: '1',
        src: cheminUrl7,
        alt: 'Audi A4 2019',
      },
      {
        id: '2',
        src: cheminUrl7,
        alt: 'Audi A4 2019',
      },
      {
        id: '3',
        src: cheminUrl7,
        alt: 'Audi A4 2019',
      },
    ],
  },
  {
    id: '8',
    nameCar: 'Mazda',
    model: 'CX-5',
    year: 2011,
    price: 25000,
    devise: 'USD',
    kilometrage: 100000,
    morisation: 'Diesel',
    score: 4,
    imagesCar: [
      {
        id: '1',
        src: cheminUrl8,
        alt: 'Audi A4 2019',
      },
      {
        id: '2',
        src: cheminUrl8,
        alt: 'Audi A4 2019',
      },
      {
        id: '3',
        src: cheminUrl8,
        alt: 'Audi A4 2019',
      },
    ],
  },
  {
    id: '9',
    nameCar: 'Mercedes-Benz',
    model: 'C-Class',
    year: 2010,
    price: 30000,
    devise: 'USD',
    kilometrage: 103000,
    morisation: 'Essence',
    score: 5,
    imagesCar: [
      {
        id: '1',
        src: cheminUrl9,
        alt: 'Audi A4 2019',
      },
      {
        id: '2',
        src: cheminUrl9,
        alt: 'Audi A4 2019',
      },
      {
        id: '3',
        src: cheminUrl9,
        alt: 'Audi A4 2019',
      },
    ],
  },
  {
    id: '10',
    nameCar: 'Nissan',
    model: 'Altima',
    year: 2009,
    price: 20000,
    devise: 'USD',
    kilometrage: 200000,
    morisation: 'Essence',
    score: 3,
    imagesCar: [
      {
        id: '1',
        src: cheminUrl10,
        alt: 'Audi A4 2019',
      },
      {
        id: '2',
        src: cheminUrl10,
        alt: 'Audi A4 2019',
      },
      {
        id: '3',
        src: cheminUrl10,
        alt: 'Audi A4 2019',
      },
    ],
  },
]; //array of cars

export const dataServices = [
  {
    id: '1',
    myTypeServices: 'Services Mécaniques',
    myIcon: iconUrl1,

    myServices: [
      {
        id: '1',
        oneService: 'Mécanique générale',
      },
      {
        id: '2',
        oneService: 'Services de révisions',
      },
      {
        id: '3',
        oneService: 'Services de réparations',
      },
      {
        id: '4',
        oneService: "Services d'entretient",
      },
    ],
  },
  {
    id: '2',
    myTypeServices: 'Services Electroniques',
    myIcon: iconUrl2,

    myServices: [
      {
        id: '1',
        oneService: 'Résolution problèmes AdBlue',
      },
      {
        id: '2',
        oneService: 'Résolution problème FAP et EGR',
      },
      {
        id: '3',
        oneService: 'Installation de GPS',
      },
      {
        id: '4',
        oneService: 'Installation Car Play et caméra de recul',
      },
    ],
  },

  {
    id: '3',
    myTypeServices: 'Services Costumisation',
    myIcon: iconUrl3,

    myServices: [
      {
        id: '1',
        oneService: "Reprise d'intérieur de voiture",
      },
      {
        id: '2',
        oneService: "Reprise d'extérieur de voiture",
      },
      {
        id: '3',
        oneService: 'Reprise de jantes et pneus',
      },
      {
        id: '4',
        oneService: 'Reprise de phares et feux arrières',
      },
    ],
  },

  {
    id: '4',
    myTypeServices: 'Services Divers',
    myIcon: iconUrl4,

    myServices: [
      {
        id: '1',
        oneService: 'Service de dépannage / remorquage',
      },
      {
        id: '2',
        oneService: 'Passage au banc de puissance',
      },
      {
        id: '3',
        oneService: 'Traitement de carrosserie et peinture',
      },
      {
        id: '4',
        oneService: 'Réparation hayon',
      },
    ],
  },
]; //array of services
