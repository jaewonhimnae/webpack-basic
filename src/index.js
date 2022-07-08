import getRandomAddress from "./randomAddress";
import { nanoid } from 'nanoid'
import "./styles/main.scss"
import mainImage from './assets/image.jpeg';

const img = document.getElementById('mainImage');
img.src = mainImage;

const button = document.getElementById('btn');
button.addEventListener('click', getRandomAddress);

getRandomAddress();