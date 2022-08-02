//Valor de las opciones disponibles
const OPCION_INICIO = 1;
const OPCION_SOPORTE = 2;
const OPCION_COMPRAS = 3;
const OPCION_AVISOS = 4;
const OPCION_USUARIO = 5;
//Funcion tipo flecha
var seleccionarOpcion = (opcion) => {
    switch (opcion) {
        case OPCION_INICIO:
            console.log('Visualizar ususarios, opcion: ' + OPCION_INICIO);
            // document.getElementById('opcion-usuarios').classList.add('active');
            // document.getElementById('opcion-perfiles').classList.remove('flama-activa');
            // document.getElementById('opcion-matches').classList.remove('estrella-activa');
            // document.getElementById('opcion-activa').style.transform = 'translateX(0)';
            document.getElementById('Inicio').style.display = "block";
            document.getElementById('Soporte').style.display = "none";
            document.getElementById('Compras').style.display = "none";
            document.getElementById('Avisos').style.display = "none";
            document.getElementById('Usuario').style.display = "none";
            break;
        case OPCION_SOPORTE:
            console.log('Visualizar ususarios, opcion: ' + OPCION_SOPORTE);
            // document.getElementById('opcion-usuarios').classList.add('active');
            // document.getElementById('opcion-perfiles').classList.remove('flama-activa');
            // document.getElementById('opcion-matches').classList.remove('estrella-activa');
            // document.getElementById('opcion-activa').style.transform = 'translateX(0)';
            document.getElementById('Inicio').style.display = "none";
            document.getElementById('Soporte').style.display = "block";
            document.getElementById('Compras').style.display = "none";
            document.getElementById('Avisos').style.display = "none";
            document.getElementById('Usuario').style.display = "none";
            break;
        case OPCION_COMPRAS:
            console.log('Visualizar ususarios, opcion: ' + OPCION_COMPRAS);
            // document.getElementById('opcion-usuarios').classList.add('active');
            // document.getElementById('opcion-perfiles').classList.remove('flama-activa');
            // document.getElementById('opcion-matches').classList.remove('estrella-activa');
            // document.getElementById('opcion-activa').style.transform = 'translateX(0)';
            document.getElementById('Inicio').style.display = "block";
            document.getElementById('Soporte').style.display = "none";
            document.getElementById('Compras').style.display = "none";
            document.getElementById('Avisos').style.display = "none";
            document.getElementById('Usuario').style.display = "none";
            break;
        case OPCION_AVISOS:
            console.log('Visualizar ususarios, opcion: ' + OPCION_AVISOS);
            // document.getElementById('opcion-usuarios').classList.add('active');
            // document.getElementById('opcion-perfiles').classList.remove('flama-activa');
            // document.getElementById('opcion-matches').classList.remove('estrella-activa');
            // document.getElementById('opcion-activa').style.transform = 'translateX(0)';
            document.getElementById('Inicio').style.display = "block";
            document.getElementById('Soporte').style.display = "none";
            document.getElementById('Compras').style.display = "none";
            document.getElementById('Avisos').style.display = "none";
            document.getElementById('Usuario').style.display = "none";
            break;
        case OPCION_USUARIO:
            console.log('Visualizar ususarios, opcion: ' + OPCION_USUARIO);
            // document.getElementById('opcion-usuarios').classList.add('active');
            // document.getElementById('opcion-perfiles').classList.remove('flama-activa');
            // document.getElementById('opcion-matches').classList.remove('estrella-activa');
            // document.getElementById('opcion-activa').style.transform = 'translateX(0)';
            document.getElementById('Inicio').style.display = "block";
            document.getElementById('Soporte').style.display = "none";
            document.getElementById('Compras').style.display = "none";
            document.getElementById('Avisos').style.display = "none";
            document.getElementById('Usuario').style.display = "none";
            break;
        default:
            break;
    }
}

function mostrar(ver, ocultar) {
    console.log(ver);
    document.getElementById(ver).style.display = "block";
    document.getElementById(ocultar).style.display = "none";
    
        // document.getElementById('btn-' + ver).style.borderColor = "#C22727";
        // document.getElementById('btn-' + ver).style.color = "#C22727";
        // document.getElementById('btn-' + ver).style.background = "#ecb100";
        // document.getElementById('btn-' + ocultar).style.borderColor = "#494949";
        // document.getElementById('btn-' + ocultar).style.color = "#494949";
        // document.getElementById('btn-' + ocultar).style.background = "#f2b705";
    document.getElementById('btn-' + ocultar).classList = "visualizar no-visualizar-ahora";
    document.getElementById('btn-' + ver).classList = "visualizar visualizar-ahora";
    
}