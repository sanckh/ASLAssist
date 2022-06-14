import React, {useState, useEffect, useRef, Component} from 'react';

class HotStreaks extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
        };
        this.interval = null;
    }
    componentDidMount(){
        this.interval = setInterval(()=>{
            this.setState({
                count: this.state.count+1,
            });
        }, 3000);
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
    render(){
        return <div>{this.state.count}</div>
    }
}
export default HotStreaks