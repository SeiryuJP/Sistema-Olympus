// Import our custom CSS
import '../styles/styles.scss'

// Import all of Bootstrap JS
import * as bootstrap from 'bootstrap'
import { init } from '../js/listaUsuarios-html';
import {ListUsuario} from './classes/ListaUsuario'

init();
export let listUsuarios = new ListUsuario();