import { Component } from "react";

const style = {
    Title:{
        marginBotton: '30px'
    }
}

class Title extends Component{
    render(){
        return(
            <h1 style={style.Title}>Tienda</h1>
        )
    }
    
}
export default Title