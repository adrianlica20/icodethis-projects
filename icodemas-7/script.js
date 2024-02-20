const productsContainer = document.querySelector('.products_container');

const productsArray = [
  {
    title: 'Christmas Tree Decoration',
    img: 'tree',
    price: '$19.99',
  },
  {
    title: 'Gift Box',
    img: 'gift',
    price: '$9.99',
  },
  {
    title: 'Gingerbread Man Cookie',
    img: 'gingerbread_cookie',
    price: '$12.99',
  },
  {
    title: 'Snowflake Decoration',
    img: 'snowflake',
    price: '$4.99',
  },
  {
    title: 'Star-shaped Cookie',
    img: 'star_cookie',
    price: '$12.99',
  },
  {
    title: "Santa's Hat",
    img: 'santa_hat',
    price: '$39.99',
  },
  {
    title: 'Candy Cane',
    img: 'candy_cane',
    price: '$8.99',
  },
  {
    title: 'Snowman Decoration',
    img: 'snowman_deco',
    price: '$39.99',
  },
  {
    title: 'Christmas Ball',
    img: 'christmas_ball',
    price: '$4.99',
  },
  {
    title: 'Red Christmas Socks',
    img: 'christmas_sock',
    price: '$29.99',
  },
  {
    title: 'Red Ribbon',
    img: 'red_ribbon',
    price: '$3.99',
  },
  {
    title: 'Christmas Tree Cookie',
    img: 'tree_cookie',
    price: '$13.99',
  },
];

document.addEventListener('DOMContentLoaded', () => {
  productsArray.forEach((product) => {
    const newProductLi = document.createElement('li');
    newProductLi.className = 'product_item';
    newProductLi.innerHTML = `
            <div class="product_img_wrapper">
                <img src="./images/${product.img}.png" alt="">
                <p class="product_label">
                    Add to cart
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-bag" width="16" height="16"
                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path
                            d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z" />
                        <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
                    </svg>
                </p>
            </div>
            <p class="product_item_title">${product.title}</p>
            <p class="product_item_price">${product.price}</p>
        `;
    productsContainer.appendChild(newProductLi);
  });
});
