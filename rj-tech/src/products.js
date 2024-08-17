import peach12 from "./assets/peach12.jpg";
import red13 from "./assets/red13.jpg";
import capriblue12 from "./assets/capriblue12.jpg";
import deepnavy12 from "./assets/deepnavy12.jpg";
import purple12 from "./assets/purple12.jpg";
import black12 from "./assets/black12.jpg";
import pink12 from "./assets/pink12.jpg";
import orange12 from "./assets/orange12.jpg";
import airpodsPro from "./assets/airpods-pro.jpg";
import darkGreen from "./assets/iphone-14-dark-green.webp";
import succulentGreen from "./assets/iphone-14-succulent-green.jpg";
import watchMidnight from "./assets/apple-watch-s7-midnight.png";
import watchGreen from "./assets/apple-watch-s7-green.jpeg";
import watchBlu from "./assets/apple-watch-s7-blu-aluminum.jpg";
import watchStarlight from "./assets/apple-watch-s7-starlight.png";
import watchRed from "./assets/apple-watch-s7-red.jpg";
import airpodsMaxGreen from "./assets/airpods-max-green.jpg";
import airpodsMaxBlue from "./assets/airpods-max-metalic-sky-blue.jpg";
import airpodsMaxSilver from "./assets/airpods-max-silver.jpg";
import airpodsMaxGray from "./assets/airpods-max-space-gray.jpg";
import airpodsMaxRed from "./assets/airpods-max-red.jpg";
import wirelessCharger from "./assets/magSafe.jpg";
import usbCharger from "./assets/20w-usb-c-adapter.jpg";
import iWalkWhite from "./assets/iWalk.jpg";
import iWalkPink from "./assets/iWalkPink.jpg";
import vrHeadset from './assets/apple-vision-pro.jpg'
vrHeadset

const PRODUCTS = [
  {
    id: 1,
    productName: "Iphone 12 Peach Case",
    price: 39.99,
    productImage: peach12,
    category: "Cases",
    isNew: true
  },
  {
    id: 2,
    productName: "Iphone 13 Red Case",
    price: 39.99,
    productImage: red13,
    category: "Cases",
    discount: 5.00
  },
  {
    id: 3,
    productName: "Iphone 12 Capri Blue Case",
    price: 39.99,
    productImage: capriblue12,
    category: "Cases",
    discount: 7.00
  },
  {
    id: 4,
    productName: "Iphone 12 Deep Navy Case",
    price: 39.99,
    productImage: deepnavy12,
    category: "Cases",
    isNew: true
  },
  {
    id: 5,
    productName: "Iphone 12 Purple Case",
    price: 39.99,
    productImage: purple12,
    category: "Cases",
    discount: 3.00
  },
  {
    id: 6,
    productName: "Iphone 12 Black Case",
    price: 39.99,
    productImage: black12,
    category: "Cases",
    isNew: true
  },
  {
    id: 7,
    productName: "Iphone 12 Pink Case",
    price: 39.99,
    productImage: pink12,
    category: "Cases",
    discount: 4.00
  },
  {
    id: 8,
    productName: "Iphone 12 Orange Case",
    price: 39.99,
    productImage: orange12,
    category: "Cases",
    isNew: true
  },
  {
    id: 228,
    productName: "Iphone 12 Succulent Green Case",
    price: 39.99,
    productImage: succulentGreen,
    category: "Cases",
    isNew: true
  },
  {
    id: 335,
    productName: "Iphone 12 Dark Green Case",
    price: 39.99,
    productImage: darkGreen,
    category: "Cases",
    isNew: true
  },
  {
    id: 9,
    productName: "Airpods Pro",
    price: 249.00,
    productImage: airpodsPro,
    category: "Airpods",
    discount: 12.00
  },
  {
    id: 10,
    productName: "Airpods Max Green",
    price: 549.00,
    productImage: airpodsMaxGreen,
    category: "Airpods",
    isNew: true
  },
  {
    id: 11,
    productName: "Airpods Max Silver",
    price: 549.00,
    productImage: airpodsMaxSilver,
    category: "Airpods",
    discount: 20.00
  },
  {
    id: 12,
    productName: "Airpods Max Gray",
    price: 549.00,
    productImage: airpodsMaxGray,
    category: "Airpods",
    isNew: true
  },
  {
    id: 13,
    productName: "Airpods Max Red",
    price: 549.00,
    productImage: airpodsMaxRed,
    category: "Airpods",
    discount: 15.00
  },
  {
    id: 14,
    productName: "Airpods Max Blue",
    price: 549.00,
    productImage: airpodsMaxBlue,
    category: "Airpods",
    isNew: true
  },
  {
    id: 15,
    productName: "Wireless Charger",
    price: 69.00,
    productImage: wirelessCharger,
    category: "Chargers",
    discount: 10.00
  },
  {
    id: 16,
    productName: "USB-C Charger",
    price: 19.00,
    productImage: usbCharger,
    category: "Chargers",
    isNew: true
  },
  {
    id: 17,
    productName: "VR Headset",
    price: 399.00,
    productImage: vrHeadset,
    category: "Accessories",
    isNew: true
  },{
    id: 18,
    productName: "Apple Watch S7 Blu Aluminum",
    price: 399.00,
    productImage: watchBlu,
    category: "Watches",
    isNew: true
  },
  {
    id: 19,
    productName: "Apple Watch S7 Green",
    price: 399.00,
    productImage: watchGreen,
    category: "Watches",
    isNew: true
  },
  {
    id: 20,
    productName: "Apple Watch S7 Midgnight",
    price: 399.00,
    productImage: watchMidnight,
    category: "Watches",
    isNew: true
  },
  {
    id: 21,
    productName: "Apple Watch S7 Red",
    price: 399.00,
    productImage: watchRed,
    category: "Watches",
    isNew: true
  },
  {
    id: 22,
    productName: "Apple Watch S7 Starlight",
    price: 399.00,
    productImage: watchStarlight,
    category: "Watches",
    isNew: true
  },
  {
    id: 23,
    productName: "iWalk White",
    price: 45.00,
    productImage: iWalkWhite,
    category: "Chargers",
  },
  {
    id: 24,
    productName: "iWalk Black",
    price: 399.00,
    productImage: watchStarlight,
    category: "Watches",
    isNew: true
  },
  {
    id: 25,
    productName: "iWalk Pink Glitter",
    price: 399.00,
    productImage: watchStarlight,
    category: "Watches",
    isNew: true
  },
  {
    id: 26,
    productName: "iWalk Blue",
    price: 399.00,
    productImage: watchStarlight,
    category: "Watches",
    isNew: true
  },
  {
    id: 27,
    productName: "iWalk Light Blue",
    price: 399.00,
    productImage: watchStarlight,
    category: "Watches",
    isNew: true
  },
  {
    id: 28,
    productName: "iWalk Pink",
    price: 399.00,
    productImage: iWalkPink,
    category: "Chargers",
    isNew: true
  },
  {
    id: 29,
    productName: "iWalk Magnetic - Black",
    price: 399.00,
    productImage: iWalkPink,
    category: "Chargers",
    isNew: true
  },
  {
    id: 30,
    productName: "iWalk Magnetic - White",
    price: 399.00,
    productImage: iWalkPink,
    category: "Chargers",
    isNew: true
  },
];

export default PRODUCTS;
