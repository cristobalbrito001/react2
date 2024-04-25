import { Component } from "react";
import Button from './Button'
const style = {
    producto:
    {
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        transition: '0.3s',
        borderRadius: '5px',
        border: 'solid 1px #eee',
        width:'30%'
    },
    img:{
        width:'100%'
    }
}

class Producto extends Component{     
    render(){
        const {producto, agregarAlCarro} = this.props
        return(
           <div style={style.producto}>
                <img alt={producto.name} src={producto.image} style={style.img} title={producto.name}/>
                <h3>{producto.name}</h3>
                <p>{producto.price}</p>
                <Button onClick={() => agregarAlCarro(producto)}>
                    Agregar al Carro
                </Button>
           </div>
        )
    }
}
export default Producto