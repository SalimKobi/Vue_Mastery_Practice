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
                variantColor: "green",
                variantImage: './assets/vmSocks-green-onWhite.jpeg'
            }, {
                variantId: 2235,
                variantColor: "blue",
                variantImage: './assets/vmSocks-blue-onWhite.jpeg'
            }, {
                variantId: 2236,
                variantColor: "purple"
            }
        ],
        cart: 0
    },
    methods: {
        addToCart(){
            this.cart +=1
        },
        updateProduct: function(variantImage){
            this.image = variantImage
        }
    }
})