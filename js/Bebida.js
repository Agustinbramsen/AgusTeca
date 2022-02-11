class Bebida{
    constructor(categoria, tipo, marca, contNeto, precio, id, stock, img){
        this.categoria = categoria;
        this.tipo = tipo;
        this.marca = marca;
        this.contNeto = contNeto;
        this.precio = precio;
        this.nombre = tipo + " " + marca;
        this.id = id;
        this.stock = stock;
        this.img = `url("${img}")`;
    }
    
    outOfStock(){
        if (this.stock < 1){
            return true;
        } else{
            return false;
        }
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


/* module.exports = Bebida; */
