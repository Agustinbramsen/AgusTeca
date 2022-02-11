class ShoppingCart{
    constructor(date, id){
        this.date = date;
        this.id = id;
        this.shopList = [];
        this.subTotal = 0;
    }

    subTotalCalc(){
        this.subTotal = 0;  

        for (const item of this.shopList){
            for (const bebida of stock1.arrayBebidasTotal){
                if (item == bebida.id){
                    this.subTotal += bebida.precio;
                    break;
                }
            }
        }

        for (const item of this.shopList){
            for (const combo of stock1.arrayCombosTotal){
                if (item == combo.id){
                    this.subTotal += combo.precioTotal;
                    break;
                }
            }
        }
    }


    addItem(id){
        this.shopList.push(id);

        let shopList__cantidad = document.querySelector(`.shopList__cantidad__${id}`);
        let shopList__precio = document.querySelector(`.shopList__precio__${id}`);
        let shopList__total = document.querySelector(".carrito__lista__total__number");

        $(".carrito__total").finish().fadeIn(0).delay(2000).fadeOut("slow");

        for (const bebida of stock1.arrayBebidasTotal){
            if (id == bebida.id){
                if(bebida.outOfStock()){
                    alert("Producto fuera de stock.");
                    this.shopList.pop();
                    break;
                }
                
                else{   
                    this.subTotalCalc();                     
                    carrito__numero.innerHTML = this.shopList.length;
                    carrito__total.innerHTML = `$${this.subTotal}`;

                    if (shopList__cantidad){
                        shopList__cantidad.textContent = `(x${bebida.inShopList()})`;
                        shopList__precio.textContent = `$${bebida.precio * bebida.inShopList()}`;
                        shopList__total.textContent = `$${this.subTotal}`;
                    }
                    
                    bebida.stock--;

                    localStorage.setItem("shopList", JSON.stringify(this.shopList));
                    break;
                }
            }
        }

        for (const combo of stock1.arrayCombosTotal){
            if (id == combo.id){
                    this.subTotalCalc();
                    carrito__numero.innerHTML = this.shopList.length; 
                    carrito__total.innerHTML = `$${this.subTotal}`;

                    if (shopList__cantidad){
                    shopList__cantidad.textContent = `(x${combo.inShopList()})`;
                    shopList__precio.textContent = `$${combo.precioTotal * combo.inShopList()}`;
                    shopList__total.textContent = `$${this.subTotal}`;
                    }
                    
                    localStorage.setItem("shopList", JSON.stringify(this.shopList));
                    break;
            }
        }
    }

    removeItem(id){   
        let shopList__cantidad = document.querySelector(`.shopList__cantidad__${id}`);
        let shopList__precio = document.querySelector(`.shopList__precio__${id}`);
        let shopList__total = document.querySelector(".carrito__lista__total__number");
        
        $(".carrito__total").finish().fadeIn().delay(2000).fadeOut();

        for (const items in this.shopList){
            if (this.shopList[items] == id){
                this.shopList.splice(items, 1);  
                this.subTotalCalc();

                for (const bebida of stock1.arrayBebidasTotal){
                    if (id == bebida.id){
                        bebida.stock++;    
                        carrito__numero.innerHTML = this.shopList.length;
                        carrito__total.innerHTML = `$${this.subTotal}`;
                        
                        if (shopList__cantidad){
                            shopList__cantidad.textContent = `(x${bebida.inShopList()})`;
                            shopList__precio.textContent = `$${bebida.precio * bebida.inShopList()}`;
                            shopList__total.textContent = `$${this.subTotal}`;  
                        } 
                    }
                }  
                
                for (const combo of stock1.arrayCombosTotal){
                    if (id == combo.id){   
                        
                        carrito__numero.innerHTML = this.shopList.length;
                        carrito__total.innerHTML = `$${this.subTotal}`;

                        if (shopList__cantidad){
                            shopList__cantidad.textContent = `(x${combo.inShopList()})`;
                            shopList__precio.textContent = `$${combo.precioTotal * combo.inShopList()}`;
                            shopList__total.textContent = `$${this.subTotal}`;     
                        }
                    }
                }  

                localStorage.setItem("shopList", JSON.stringify(this.shopList));               
                break;
            }
        }  
    }
}

/* module.exports = ShoppingCart; */