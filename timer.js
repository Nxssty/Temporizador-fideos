let tiempoRestante = 60; // Tiempo total en segundos
let temporizador; // Guarda el temporizador





        function seleccionarFideo(nombre, minutos) {
            fideoSeleccionado = nombre; 
            tiempoBase = minutos

            // Muestra el cuadro de confirmación
            document.getElementById("mensajeConfirmacion").textContent = `¿Quieres los ${nombre} más cocidos? (+5 min)`;
            document.getElementById("confirmacionMasCocido").style.display = "block";
        }

        function confirmarMasCocido(masCocido) {
            document.getElementById("confirmacionMasCocido").style.display = "none"; // Oculta la ventana
        
            let tiempoFinal = tiempoBase + (masCocido ? 5 : 0); // Suma 5 minutos si confirmó
        
            document.getElementById("tipoSeleccionado").textContent = 
                `Fideo seleccionado: ${fideoSeleccionado} = ${tiempoFinal} min`;
            
            tiempoRestante = tiempoFinal * 60; // Convertimos a segundos
        
            if (tiempoRestante > 0) {
                clearInterval(temporizador); // Detiene cualquier temporizador anterior
                temporizador = setInterval(actualizarTemporizador, 1000); // Inicia el temporizador
            }
        
            cambiarventana(); // Cambia a la vista del temporizador
        }
        




        function actualizarTemporizador() {
            

            let minutos = Math.floor(tiempoRestante / 60);
            let segundos = tiempoRestante % 60;

            document.getElementById("mostrarTiempo").textContent = 
                String(minutos).padStart(2, "0") + ":" + String(segundos).padStart(2, "0");

            if (tiempoRestante <= 0) {
                clearInterval(temporizador);
                alert("¡Tiempo terminado!");
            } else {
                tiempoRestante--;
            }
        }

        function pausarTemporizador() {
            clearInterval(temporizador); // Detiene el temporizador sin reiniciar el tiempo
            document.getElementById("pausar").style.display = "none"; // Oculta la ventana
            document.getElementById("continuar").style.display = "block"; // Oculta la ventana

        }

        function continuarTemporizador(){
            temporizador = setInterval(actualizarTemporizador, 1000); // Inicia el temporizador
            document.getElementById("continuar").style.display = "none"; // Oculta la ventana
            document.getElementById("pausar").style.display = "block"; // Oculta la ventana
        }



        function reiniciarTemporizador() {
            clearInterval(temporizador);
            document.getElementById("tipoSeleccionado").textContent = ``;
            document.getElementById("mostrarTiempo").textContent = "00:00";
            tiempoRestante = 0;

            document.getElementById("contenedor-tiempo").style.display = "none";
            document.getElementById("Contenedor-TipoFideos").style.display = "flex";
        }






        function cambiarventana() {
            document.getElementById("Contenedor-TipoFideos").style.display = "none"; 
            document.getElementById("contenedor-tiempo").style.display = "flex";
        }