// Seleção de elementos
const potionDisplay = document.getElementById('potion-display');
const redSlider = document.getElementById('red-slider');
const greenSlider = document.getElementById('green-slider');
const blueSlider = document.getElementById('blue-slider');
const redValue = document.getElementById('red-value');
const greenValue = document.getElementById('green-value');
const blueValue = document.getElementById('blue-value');
const btnReset = document.getElementById('btn-reset');

// Valores iniciais
let redVal = 0;
let greenVal = 0;
let blueVal = 0;

// Função para atualizar a cor da poção
function updatePotionColor() {
    const rgbColor = `rgb(${redVal}, ${greenVal}, ${blueVal})`;
    document.documentElement.style.setProperty('--potion-color', rgbColor);
    
    // Atualiza os valores exibidos
    redValue.textContent = redVal;
    greenValue.textContent = greenVal;
    blueValue.textContent = blueVal;
}

// Função para resetar a poção para a cor inicial
function resetPotion() {
    // Reseta os sliders para 0
    redSlider.value = 0;
    greenSlider.value = 0;
    blueSlider.value = 0;
    
    // Reseta os valores
    redVal = 0;
    greenVal = 0;
    blueVal = 0;
    
    // Atualiza a cor
    updatePotionColor();
}

// Event listeners para os sliders
redSlider.addEventListener('input', function() {
    redVal = parseInt(this.value);
    updatePotionColor();
});

greenSlider.addEventListener('input', function() {
    greenVal = parseInt(this.value);
    updatePotionColor();
});

blueSlider.addEventListener('input', function() {
    blueVal = parseInt(this.value);
    updatePotionColor();
});

// Event listener para o botão de reset
btnReset.addEventListener('click', resetPotion);

// Inicializa a cor da poção
updatePotionColor();