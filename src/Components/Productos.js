import { Component } from "react";
import Producto from './Producto'

const style = {
    producto:{
        display:'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        padding: '2px 16px',
        
    }
}


class Productos extends Component{
    render(){
        const {productos, agregarAlCarro} = this.props
        return(
            <div style={style.producto}>
                {productos.map(producto => 
                    <Producto
                        agregarAlCarro ={agregarAlCarro}
                        key = {producto.name}
                        producto = {producto}
                    />    
                )}
            </div>
        )
    }
}

export default Productos