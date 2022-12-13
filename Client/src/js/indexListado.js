// Import our custom CSS
import '../styles/styles.scss'

// Import all of Bootstrap JS
import * as bootstrap from 'bootstrap'

import {init} from './pruebas';
import {ListPrueba} from './classes/ListaPrueba'
import {ListUsuario} from './classes/ListaUsuario'
//import { conseguirUsuarios } from './asignar-prueba';


init();
//conseguirUsuarios();
export let listPruebas = new ListPrueba();
export let listUsuarios = new ListUsuario();
