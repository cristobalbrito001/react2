import { Component } from "react";
import BubbleAlert from "./BubbleAlert";
import DetalleCarrito from "./DetalleCarrito";
const style={
    Carro:{
        backgroundColor:'green',
        border:'none',
        borderRadius:'15px',
        color:'white',
        cursor:'pointer',
        padding:'15px'
    },
    bubble:{
        position:'relative',
        left:12,
        top:20
    }
}
class Carro extends Component{
    render(){
        const {carro,mostrarCarro,visible} = this.props
        const cantidad = carro.reduce((acc, pro) => acc + pro.cantidad,0)
        return(
            <div>
                <span style={style.bubble}> 
                {cantidad !==0 ? <BubbleAlert value= {cantidad}/> : null}
                    
                </span>
                <button onClick={mostrarCarro} style={style.Carro}>
                    Carro
                </button>
                {visible ? <DetalleCarrito detalle={carro}/>:null}
               
            </div>
        )
    }
}


export default Carro