import { v4 as uuidv4 } from 'uuid';

export const ShopInitialState = {
  sections : {
    shop: [
      {
        id: uuidv4(),
        title: 'Hats',
        routeName: 'hats',
        items: [
          {
            id: uuidv4(),
            name: 'Brown Brim',
            imageUrl: 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/Q/U/91419_1531567227.jpg',
            price: 25
          },
          {
            id: uuidv4(),
            name: 'Blue Beanie',
            imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
            price: 18
          },
          {
            id: uuidv4(),
            name: 'Brown Cowboy',
            imageUrl: 'https://cdn3.volusion.com/jv5hy.sqza4/v/vspfiles/photos/1111-23-2T.jpg?v-cache=1508229899',
            price: 35
          },
          {
            id: uuidv4(),
            name: 'Grey Brim',
            imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
            price: 25
          },
          {
            id: uuidv4(),
            name: 'Green Beanie',
            imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
            price: 18
          },
          {
            id: uuidv4(),
            name: 'Palm Tree Cap',
            imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
            price: 14
          },
          {
            id: uuidv4(),
            name: 'Red Beanie',
            imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
            price: 18
          },
          {
            id: uuidv4(),
            name: 'Wolf Cap',
            imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
            price: 14
          },
          {
            id: uuidv4(),
            name: 'Blue Snapback',
            imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
            price: 16
          }
        ]
      },
      {
        id: uuidv4(),
        title: 'Sneakers',
        routeName: 'sneakers',
        items: [
          {
            id: uuidv4(),
            name: 'Adidas NMD',
            imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
            price: 220
          },
          {
            id: uuidv4(),
            name: 'Adidas Yeezy',
            imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
            price: 280
          },
          {
            id: uuidv4(),
            name: 'Black Converse',
            imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
            price: 110
          },
          {
            id: uuidv4(),
            name: 'Nike White AirForce',
            imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
            price: 160
          },
          {
            id: uuidv4(),
            name: 'Nike Red High Tops',
            imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
            price: 160
          },
          {
            id: uuidv4(),
            name: 'Nike Brown High Tops',
            imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
            price: 160
          },
          {
            id: uuidv4(),
            name: 'Air Jordan Limited',
            imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
            price: 190
          },
          {
            id: uuidv4(),
            name: 'Timberlands',
            imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
            price: 200
          }
        ]
      },
      {
        id: uuidv4(),
        title: 'Jackets',
        routeName: 'jackets',
        items: [
          {
            id: uuidv4(),
            name: 'Black Jean Shearling',
            imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
            price: 125
          },
          {
            id: uuidv4(),
            name: 'Blue Jean Jacket',
            imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
            price: 90
          },
          {
            id: uuidv4(),
            name: 'Grey Jean Jacket',
            imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
            price: 90
          },
          {
            id: uuidv4(),
            name: 'Brown Shearling',
            imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
            price: 165
          },
          {
            id: uuidv4(),
            name: 'Tan Trench',
            imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
            price: 185
          }
        ]
      }
    ],
  }
}