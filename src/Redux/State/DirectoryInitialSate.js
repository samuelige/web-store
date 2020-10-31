import { v4 as uuidv4 } from 'uuid';

export const DirectoryInitialState = {
    directory : [
        {
          id: uuidv4(),
          title: 'Womens',
          routeName: 'womens',
          items: [
            {
              id: uuidv4(),
              name: 'Blue Tanktop',
              imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
              price: 25
            },
            {
              id: uuidv4(),
              name: 'Floral Blouse',
              imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
              price: 20
            },
            {
              id: uuidv4(),
              name: 'Floral Dress',
              imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
              price: 80
            },
            {
              id: uuidv4(),
              name: 'Red Dots Dress',
              imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
              price: 80
            },
            {
              id: uuidv4(),
              name: 'Striped Sweater',
              imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
              price: 45
            },
            {
              id: uuidv4(),
              name: 'Yellow Track Suit',
              imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
              price: 135
            },
            {
              id: uuidv4(),
              name: 'White Blouse',
              imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
              price: 20
            }
          ]
        },
        {
          id: uuidv4(),
          title: 'Mens',
          routeName: 'mens',
          items: [
            {
              id: uuidv4(),
              name: 'Camo Down Vest',
              imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
              price: 325
            },
            {
              id: uuidv4(),
              name: 'Floral T-shirt',
              imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
              price: 20
            },
            {
              id: uuidv4(),
              name: 'Black & White Longsleeve',
              imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
              price: 25
            },
            {
              id: uuidv4(),
              name: 'Pink T-shirt',
              imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
              price: 25
            },
            {
              id: uuidv4(),
              name: 'Jean Long Sleeve',
              imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
              price: 40
            },
            {
              id: uuidv4(),
              name: 'Burgundy T-shirt',
              imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
              price: 25
            }
          ]
        }
      ]  
}