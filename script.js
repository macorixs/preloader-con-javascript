document.addEventListener("DOMContentLoaded", function() {
    // Simula un tiempo de carga
    
    
setTimeout(function() {
        
        
// Oculta el preloader
        document.querySelector(".preloader").style.display = "none";
        // Muestra el contenido después de cargar
        
       
document.querySelector(".content").style.display = "block";
    }, 
    
44600); // Cambia este valor al tiempo de carga que desees simular en milisegundos
});