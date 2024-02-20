const christmasTreeProduct = document.getElementById('christmas-tree-product');
const giftBoxProduct = document.getElementById('giftbox-product');
const gingerbreadCookieProduct = document.getElementById(
  'gingerbread-cookie-product'
);

const featuredProductLarge = document.querySelector('.featured-prod-large');
const featuredProductImg = document.querySelector(
  '.prod-large-img-wrapper>img'
);
const featuredProductLabel = document.querySelector(
  '.prod-large-img-wrapper .product-label'
);
const featuredProductTitle = document.querySelector('.prod-large-title');
const featuredProductPrice = document.querySelector('.prod-large-price');
const featuredProductDescription = document.querySelector(
  '.feat-prod-text-description'
);

const featuredProductsArray = [
  {
    title: 'Christmas Tree Decoration',
    img: './images/tree.png',
    label: 'NEW',
    price: '$19.99',
    description:
      'Perfect for adding a festive touch to any space, this miniature tree brings the magic of Christmas right into your home. Crafted with care, it’s a delightful ...',
    rating: 4,
  },
  {
    title: 'Gift box',
    img: './images/gift.png',
    label: '-23%',
    price: '$9.99',
    description:
      "Unwrap the joy of the season with our elegant Gift Box decoration. Adorned with festive details, it's not just a decoration; it's a promise of surprises and ...",
    rating: 4,
  },
  {
    title: 'Gingerbread Man Cookie',
    img: './images/gingerbread_cookie.png',
    label: undefined,
    price: '$12.99',
    description:
      'With its sugary charm and festive details, this decoration adds a touch of whimsy to your home. Hang it on your tree or display it in the kitchen for a delightful seasonal ...',
    rating: 5,
  },
];

christmasTreeProduct.addEventListener('click', () => {
  gingerbreadCookieProduct.style.borderColor = 'transparent';
  giftBoxProduct.style.borderColor = 'transparent';
  christmasTreeProduct.style.borderColor = '#227293';
  featuredProductImg.setAttribute('src', featuredProductsArray[0].img);
  featuredProductTitle.textContent = featuredProductsArray[0].title;
  featuredProductPrice.textContent = featuredProductsArray[0].price;
  featuredProductDescription.textContent = featuredProductsArray[0].description;
  featuredProductLabel.className = '';
  featuredProductLabel.classList.add('product-label', 'new');
  featuredProductLabel.textContent = featuredProductsArray[0].label;
});

giftBoxProduct.addEventListener('click', () => {
  christmasTreeProduct.style.borderColor = 'transparent';
  gingerbreadCookieProduct.style.borderColor = 'transparent';
  giftBoxProduct.style.borderColor = '#E55952';
  featuredProductImg.setAttribute('src', featuredProductsArray[1].img);
  featuredProductTitle.textContent = featuredProductsArray[1].title;
  featuredProductPrice.textContent = featuredProductsArray[1].price;
  featuredProductDescription.textContent = featuredProductsArray[1].description;
  featuredProductLabel.className = '';
  featuredProductLabel.classList.add('product-label', 'discount');
  featuredProductLabel.textContent = featuredProductsArray[1].label;
});

gingerbreadCookieProduct.addEventListener('click', () => {
  christmasTreeProduct.style.borderColor = 'transparent';
  giftBoxProduct.style.borderColor = 'transparent';
  gingerbreadCookieProduct.style.borderColor = '#9DA6B1';
  featuredProductImg.setAttribute('src', featuredProductsArray[2].img);
  featuredProductTitle.textContent = featuredProductsArray[2].title;
  featuredProductPrice.textContent = featuredProductsArray[2].price;
  featuredProductDescription.textContent = featuredProductsArray[2].description;
  featuredProductLabel.className = '';
  featuredProductLabel.textContent = '';
});
