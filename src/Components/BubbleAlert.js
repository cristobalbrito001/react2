import { Component } from "react";
const style = {
    bubleAlert:{
        backgroundColor: 'red',
        borderRadius:'15px',
        color:'white',
        padding: '2px 10px',
        fontSize:'0.9rem',
        width:'20px'

    }
}

class BubbleAlert extends Component{
    getNumberProduct(n){
        if(!n){
            return ''
        }
        return n > 9 ? '9+': n
    }
   
    render(){
        const {value} = this.props
        return(
            <span style={style.bubleAlert}> 
                {this.getNumberProduct(value)}
            </span>
        )
    }
}


export default BubbleAlert