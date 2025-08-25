// Función para abrir el modal
function openModal(title, imageSrc, category, dimensions, description) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalCategory = document.getElementById('modal-category');
    const modalDimensions = document.getElementById('modal-dimensions');
    const modalDescription = document.getElementById('modal-description');

    modalImage.src = imageSrc;
    modalTitle.textContent = title;
    modalCategory.textContent = `Categoría: ${category}`;
    modalDimensions.textContent = dimensions;
    modalDescription.textContent = description;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Previene el scroll del body
}

// Cerrar el modal cuando se hace clic en la X
document.querySelector('.close').addEventListener('click', function() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restaura el scroll del body
});

// Cerrar el modal cuando se hace clic fuera de él
window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restaura el scroll del body
    }
});

// Función para filtrar productos
function filterProducts(category) {
    // Obtener todos los productos
    const products = document.querySelectorAll('.muebleria');
    
    // Actualizar botones activos
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Mostrar u ocultar productos según la categoría
    products.forEach(product => {
        const productCategory = product.querySelector('.info p').textContent.toLowerCase();
        if (category === 'todos' || productCategory.includes(category.toLowerCase())) {
            product.classList.remove('hidden');
        } else {
            product.classList.add('hidden');
        }
    });
}