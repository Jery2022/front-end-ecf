import iconUrl1 from '../icons/image-icon_7.jpg';
import iconUrl2 from '../icons/image-icon_1.jpg';
import iconUrl3 from '../icons/image-icon_2.jpg';
import iconUrl4 from '../icons/image-icon_4.jpg';

// tableau des listes de services

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
