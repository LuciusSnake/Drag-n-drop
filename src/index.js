import './scss/app.scss'
import bootstrap from "bootstrap/scss/bootstrap.scss"
import { DnD } from './js/dnd'


const cardElement = document.querySelector('.card')
new DnD(cardElement)
