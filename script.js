document.addEventListener("DOMContentLoaded", function() {
    const redInput = document.getElementById("red");
    const greenInput = document.getElementById("green");
    const blueInput = document.getElementById("blue");
    const colorInput = document.getElementById("color");
    const colorBox = document.getElementById("color-box");
    const hexInput = document.getElementById("hex");
  
    function updateColor() {
      const color = colorInput.value;
  
      // Convertir el color seleccionado a RGB
      const rgb = hexToRgb(color);
      const red = rgb.r;
      const green = rgb.g;
      const blue = rgb.b;
  
      // Actualizar los controles de rojo, verde y azul
      redInput.value = red;
      greenInput.value = green;
      blueInput.value = blue;
  
      // Actualizar el color del cuadro y el código hexadecimal
      colorBox.style.backgroundColor = color;
      hexInput.value = color.toUpperCase();
    }
  
    function hexToRgb(hex) {
      // Eliminar el "#" del inicio si está presente
      hex = hex.replace(/^#/, '');
  
      // Convertir el color hexadecimal a RGB
      const bigint = parseInt(hex, 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
  
      return { r, g, b };
    }
  
    redInput.addEventListener("input", updateColor);
    greenInput.addEventListener("input", updateColor);
    blueInput.addEventListener("input", updateColor);
    colorInput.addEventListener("input", updateColor);
  
    // Actualizar el color al cargar la página
    updateColor();
  });
  