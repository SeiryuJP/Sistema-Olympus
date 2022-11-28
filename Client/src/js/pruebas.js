import {validacion} from './validacionprueba';

const puntual = document.querySelector('.puntual');
const eleccion = document.querySelector('.eleccion');
const libre = document.querySelector('.libre');
const valoracion = document.querySelector('.valoracion');
const seleccion = document.querySelector('.seleccion');
const divPrueba = document.querySelector('.contenedor');


export const inicioPrueba = () => {
    elegirPrueba();
}

const elegirPrueba = () => {;
    const crear = document.querySelector('.crear');
    eleccion.addEventListener('click', () =>{
        crear.className += " activa";
        divPrueba.innerHTML = '';
        crearPruebaEleccion();
    });
    valoracion.addEventListener('click', () =>{
        crear.className += " activa";
        divPrueba.innerHTML = '';
        crearPruebaValoracion();
    });
    puntual.addEventListener('click', () =>{
        crear.className += " activa";
        divPrueba.innerHTML = '';
        crearPruebaPuntual();
    });
    seleccion.addEventListener('click', () =>{
        crear.classList.remove("activa");
        divPrueba.innerHTML = '';
        crearSeleccionPrueba();
    });
}

const crearPruebaEleccion = () => {
    const htmlEleccion = `
    <div>
        <div class="titulos mb-4">
          <h1 class="mb-3">Elección</h1>
          <h6 class="mb-4">Escribe una pregunta con dos respuesta, una correcta y otra falsa</h6>
        </div>
        <form class="list-group eleccion" id="formulario" novalidate>
            <p class="mb-3">Pregunta</p>
            <div class="form-check mb-3">
                <input class="form-control mb-3 pregunta" name="pregunta" type="text" placeholder="¿Eres libre en tus elecciones?" required>
                <span class="errorpregunta"></span>
            </div>
            <p class="mb-3">Respuestas</p>
            <div class="form-check mb-3">
                <label class="mb-2">Correcta : </label>
                <input class="form-control respuesta" name="correcta" type="text" placeholder="Si" required>
            </div>
            <div class="form-check mb-3">
                <label class="mb-2">Incorrecta : </label>
                <input class="form-control respuesta mb-3" name="incorrecta" type="text" placeholder="No" required>
                <span class="errorespuesta"></span>
                <span class="erroradio"></span>
            </div>
            <p class="mb-3">Atributo</p>
            <div class="form-check mb-3">
                <label>Habilidad : 
                    <select name="habilidad" class="form-select habilidad mt-2 mb-2" required>
                    <option></option>
                    <option value="sabiduria">Sabiduría</option>
                    <option value="nobleza">Nobleza</option>
                    <option value="virtud">Virtud</option>
                    <option value="maldad">Maldad</option>
                    <option value="audacia">Audacia</option>
                    </select>
                </label>
                <span class="errorhabilidad mb-2"></span>
            </div>
            <p class="mb-3">Cantidad de Destino</p>
            <div class="form-check mb-3">
                <input name = "destino" class="form-control destino mb-3" type="number" placeholder="0" required max="100" min="0" minlength="1" maxlength="3">
                <span class="errordestino"></span>
            </div>
            <div class="confirmar mb-5">
                <button type="submit" class="btn btn-primary btn-lg mt-4">Crear</button>
            </div>
        </form>
    </div>
    `;

    const div = document.createElement('div'); 
    div.innerHTML = htmlEleccion;
    divPrueba.append(div.lastElementChild);
    validacion();
}

const crearPruebaPuntual = () =>{

    const htmlValoracion = `
    <div>
        <div class="titulos mb-4">
          <h1 class="mb-3">Puntual</h1>
          <h6 class="mb-4">Rellena los campos para crear esta prueba</h6>
        </div>
        <form class="list-group puntual" id="formulario" novalidate>
            <p class="mb-3">Descripción</p>
            <div class="preguntas mb-2">
                <div class="form-check">
                    <textarea class="form-control mb-3 descripcion" name="descripcion" id="exampleFormControlTextarea1" rows="3" required></textarea>
                    <span class="errordescripcion"></span>
                </div>
            </div>
            <p class="mb-3">Atributo</p>
            <div class="form-check mb-3">
                <label>Habilidad : 
                    <select name="habilidad" class="form-select habilidad mt-2 mb-2" required>
                        <option></option>
                        <option value="sabiduria">Sabiduría</option>
                        <option value="nobleza">Nobleza</option>
                        <option value="virtud">Virtud</option>
                        <option value="maldad">Maldad</option>
                        <option value="audacia">Audacia</option>
                    </select>
                </label>
                <span class="errorhabilidad mb-2"></span>
            </div>
            <p class="mb-3">Porcentaje de dificultad</p>
            <div class="form-check mb-3">
                <input name = "porcentaje" class="form-control porcentaje mb-3" type="number" placeholder="0" required max="100" min="0" minlength="1" maxlength="3">
                <span class="errorporcentaje"></span>
            </div>
            <p class="mb-3">Cantidad de Destino</p>
            <div class="form-check mb-3">
                <input name = "destino" class="form-control destino mb-3" type="number" placeholder="0" required max="100" min="0" minlength="1" maxlength="3">
                <span class="errordestino"></span>
            </div>
            <div class="confirmar mb-5">
                <button type="submit" class="btn btn-primary btn-lg mt-4">Crear</button>
            </div>
        </form>
    </div>
    `;

    const div = document.createElement('div'); 
    div.innerHTML = htmlValoracion;
    divPrueba.append(div.lastElementChild);
    validacion();    
}

const crearPruebaValoracion = () =>{

    const htmlValoracion = `
    <div>
        <div class="titulos mb-4">
          <h1 class="mb-3">Valoración</h1>
          <h6 class="mb-4">Escribe múltiples preguntas y vinculalas a una habilidad</h6>
        </div>
        <form class="list-group valoracion" id="formulario" novalidate>
            <p class="mb-3">Preguntas</p>
            <div class="preguntas mb-2">
                <div class="form-check">
                    <input class="form-control mb-3 pregunta" name="pregunta" type="text" placeholder="¿Eres libre en tus elecciones?" required>
                    <span class="errorpregunta"></span>
                </div>
            </div>
            <p class="mb-3">Atributo</p>
            <div class="form-check mb-3">
                <label>Habilidad : 
                    <select name="habilidad" class="form-select habilidad mt-2 mb-2" required>
                    <option></option>
                    <option value="sabiduria">Sabiduría</option>
                    <option value="nobleza">Nobleza</option>
                    <option value="virtud">Virtud</option>
                    <option value="maldad">Maldad</option>
                    <option value="audacia">Audacia</option>
                    </select>
                </label>
                <span class="errorhabilidad mb-2"></span>
            </div>
            <p class="mb-3">Cantidad de Destino</p>
            <div class="form-check mb-3">
                <input name = "destino" class="form-control destino mb-3" type="number" placeholder="0" required max="100" min="0" minlength="1" maxlength="3">
                <span class="errordestino"></span>
            </div>
            <div class="confirmar mb-5">
                <button type="submit" class="btn btn-primary btn-lg mt-4">Crear</button>
            </div>
        </form>
    </div>
    `;

    const div = document.createElement('div'); 
    div.innerHTML = htmlValoracion;
    divPrueba.append(div.lastElementChild);
    validacion();    
}



const crearSeleccionPrueba = () => {
    const htmlPuntual = `
    <div>
        <div class="titulos mb-4">
          <h1 class="mb-4">Crear prueba</h1>
          <h6 class="mb-5">Elige el tipo de prueba que llevarán acabo los humanos</h6>
        </div>
        <div class="list-group">
          <button type="button" class="btn btn-primary btn-lg mb-3 puntual">Puntuales</button>
          <button type="button" class="btn btn-primary btn-lg mb-3 libre">Respuesta libre</button>
          <button type="button" class="btn btn-primary btn-lg mb-3 eleccion">Elección</button>
          <button type="button" class="btn btn-primary btn-lg mb-3 valoracion">Valoración</button>
        </div>
      </div>
    `;

    const div = document.createElement('div'); 
    div.innerHTML = htmlPuntual;
    divPrueba.append(div.lastElementChild);
}