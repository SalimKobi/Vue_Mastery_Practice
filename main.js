var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: './assets/vmSocks-green-onWhite.jpeg',
        inStock: true,
        inventory: 9,
        details: ["80% cotton", "20% polyster", "Gender-neutral", "Ibrahim salim kobi"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green"
            }, {
                variantId: 2235,
                variantColor: "blue"
            }, {
                variantId: 2236,
                variantColor: "purple"
            }
        ]
    }
})