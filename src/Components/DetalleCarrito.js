import { Component } from "react";

const style = {
    detalleCarrito:{
        backgroundColor:'while',
        position:'absolute',
        marginTop:30,
        boxShadow:'1px 5px 5px rgb(0,0,0,0.3)',
        boderRadius: '5px',
        width:'300px',
        right:50,
    },
    img:{
        width:50,
        height:32
    },
    ul:{
        margin:0,
        padding:0
    },
    li:{
        listStyleType:'none',
        display:'flex',
        justifyContent:'space-between',
        alingItems:'center',
        padding:'25px 20px',
        borderBottom :'solid 1px #aaa'
    }
}



class DetalleCarrito extends Component{
    render(){
        const {detalle} = this.props
        console.log(detalle)
        return(
           <div style={style.detalleCarrito}>
                <ul style={style.ul}>
                    {detalle.map(x => 
                    <li style={style.li} key={x.name}>
                        <img src={x.image} alt={x.name} style={style.img}></img>
                        {x.name}
                        <span> {x.cantidad} </span>
                    </li>)}
                </ul>
           </div> 
        )
    }
}
 export default DetalleCarrito