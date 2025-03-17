/**
 * Product inventory data for the minibar POS system
 * Contains lists of products available in each villa
 */

const inventoryItems = [
    // Blank first item pro případ potřeby
    { name: '', price: 0, currency: 'CZK', image: '', category: '' },
    
    // 1. Nealkoholické nápoje
    { name: 'Coca-Cola', price: 32, currency: 'CZK', image: 'images/cola.png', category: 'non-alcoholic' },
    { name: 'Sprite', price: 32, currency: 'CZK', image: 'images/sprite.png', category: 'non-alcoholic' },
    { name: 'Fanta', price: 32, currency: 'CZK', image: 'images/fanta.png', category: 'non-alcoholic' },
    { name: 'Red Bull', price: 59, currency: 'CZK', image: 'images/redbull.png', category: 'non-alcoholic' },
    
    // 2. Alkoholické nápoje
    { name: 'Malibu', price: 99, currency: 'CZK', image: 'images/malibu.png', category: 'alcoholic' },
    { name: 'Jack's Cola', price: 99, currency: 'CZK', image: 'images/jack.png', category: 'alcoholic' },
    { name: 'Moscow Mule', price: 99, currency: 'CZK', image: 'images/moscow.png', category: 'alcoholic' },
    { name: 'Gin Tonic', price: 99, currency: 'CZK', image: 'images/gin.png', category: 'alcoholic' },
    { name: 'Mojito', price: 99, currency: 'CZK', image: 'images/mojito.png', category: 'alcoholic' },
    { name: 'Prosecco', price: 390, currency: 'CZK', image: 'images/