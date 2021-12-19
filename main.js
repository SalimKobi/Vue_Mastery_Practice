Vue.component('product',{
    props: {
        premium:{
            type: Boolean,
            required: true
        } 
    },
    template: `
    <div class="product">
    <div class="product-image">
      <img v-bind:src="image" />
    </div>

    <div class="product-info">
      <h1>{{ title }}</h1>
      <!-- <p v-show="inStock">In Stock</p> -->
      <p v-if="inStock">In Stock</p>
      <p v-else :class="{ outOfStock: !inStock }">Out of Stock</p>
      <p> Shipping: {{shipping}} <p>

      <ul>
        <li v-for="detail in details">{{ detail }}</li>
      </ul>

      <div
        v-for="(variant, index) in variants"
        :key="variant.variantId"
        class="color-box"
        :style="{backgroundColor: variant.variantColor}"
        @mouseover="updateProduct(index)"
      ></div>

      <button
        v-on:click="addToCart"
        :disabled="!inStock"
        :class="{ disabledButton: !inStock }"
      >
        Add to cart
      </button>
      <div class="cart">
        <p>Cart({{cart}})</p>
      </div>
    </div>
  </div>
    `,
    data(){
        return {
            brand: "Vue Mastery",
            product: "Socks",
            selectedVariant: 0,
            inventory: 9,
            details: ["80% cotton", "20% polyster", "Gender-neutral", "Ibrahim salim kobi"],
            variants: [
                {
                    variantId: 2234,
                    variantColor: "green",
                    variantImage: './assets/vmSocks-green-onWhite.jpeg',
                    variantQuantity: 10
                }, {
                    variantId: 2235,
                    variantColor: "blue",
                    variantImage: './assets/vmSocks-blue-onWhite.jpeg',
                    variantQuantity: 0
    
                }, {
                    variantId: 2236,
                    variantColor: "purple",
                    variantQuantity: 5
                }
            ],
            cart: 0
        }
    }, 
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateProduct: function (index) {
            this.selectedVariant = index
            console.log(index)
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image(){
            return this.variants[this.selectedVariant].variantImage
        },
        inStock(){
            return this.variants[this.selectedVariant].variantQuantity
        },
        shipping(){
            if (this.premium){
                return "Free"
            }
            return 2.99
        }
    }

})


var app = new Vue({
    el: '#app',
    data: {
        premium: true
    }
    
})