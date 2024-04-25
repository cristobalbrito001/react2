import { Component } from "react";

const style={
    Logo:{
        fontWeight:'700',
        fontSize:'2rem'
    }
}


class Logo extends Component{
    render(){
        return(
            <div style={style.Logo}>
                Shop
            </div>
        )
    }
}

export default Logo