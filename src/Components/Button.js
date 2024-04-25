import { Component } from "react";
const style={
    button:{
        backgroundColor:'green',
        color:'white',
        padding: '15px 20px',
        border: 'none',
        cursor:'pointer',
        borderRadius:'5px'
    }
}
class Button extends Component {
    render(){

        return(
            <button style={style.button} {...this.props}/>
        )
    }
}
export default Button