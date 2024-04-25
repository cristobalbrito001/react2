import { Component, useState } from 'react';
import Productos from './Components/Productos'
import Layout from './Components/Layout'; 
import Title from './Components/Title';
import NavBar from './Components/navBar';

// const [carro,setCarro] = useState([])
// const [productos,setproductos] = useState([])


// productos.map(x => x.name == "Tomate")


// setproductos([// depende de redirazado 
//   ...productos, 
//   newproductos = {
//     name:'papa',
//     price:540,
//     image:'/img/papa.jpg'
//   }
// ])

// const newProduc =  {name:'papa',
//                     price:540,
//                     image:'/img/papa.jpg'}

// setproductos((prevprops) => [...prevprops, newProduc])// no depende de renderizado


class App extends Component{
  state = {
    productos : [
      {
        name:'Tomate',
        price:100,
        image:'/img/tomate.jpg'
      },
      {
        name:'lechuga',
        price:140,
        image:'/img/lechuga.jpg'
      },
      {
        name:'Arberja',
        price:700,
        image:'/img/arbejas.jpg'
      }
    ],
    carro:[],
    esCarroVisible: false,
  }
  agregarAlCarro = (producto) =>{
    const {carro} = this.state
    if(carro.find(x => x.name == producto.name)){
      const newCarro = carro.map(x => x.name === producto.name ? ({
        ...x,
        cantidad: x.cantidad +1
      }):x)
      return this.setState({carro : newCarro})// referencia
    }
      return this.setState({
        carro:this.state.carro.concat({
          ...producto,
          cantidad:1,
        })
      })
  }
mostrarCarro = () =>{
  if(!this.state.carro.length){
    return
  }
  this.setState({esCarroVisible : !this.state.esCarroVisible})
}


  render(){
    const {esCarroVisible} = this.state
    return(
      <div>
        <NavBar carro = {this.state.carro} mostrarCarro={this.mostrarCarro} visible={esCarroVisible}/>
        <Layout>
          <Title/>
          <Productos
            agregarAlCarro = { this.agregarAlCarro} 
            productos = {this.state.productos}/>
        </Layout>
      </div>
    )
  }
}

export default App;
