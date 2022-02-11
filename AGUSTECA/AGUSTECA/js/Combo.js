class Combo{
    constructor(nombre, productos, descuento, id){
        this.nombre = nombre;
        this.productos = productos;
        this.precioTotal = 0;
        this.descuento = descuento;
        this.id = id; 
    }

    calcPrecioTotal(){
        for (let i=0; i<this.productos.length;i++){
            this.precioTotal += this.productos[i].precio;
        }
        this.precioTotal -= Math.round((this.descuento / 100) * this.precioTotal);
    }

    inShopList(){
        let i = 0;
        for (const items of shopCart1.shopList){
            if (items == this.id){
                i++;
            }
        }
        
        return i;
    }
}

/* module.exports = Combo; */
