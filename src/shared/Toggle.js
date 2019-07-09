import { Component } from 'react';

class Toggle extends Component{
    constructor(){
        super()
        this.state = {
            on: false,
            theme: false
        }
    }

    toggler = () => {
        this.setState(ps => ({
            on: !ps.on
        }))
    }

    themeToggler = () => {
        this.setState(ps => ({
            theme: !ps.theme
        }))
    }

    render(){
        return this.props.render({ ...this.state, toggler: this.toggler, themeToggler: this.themeToggler })
    }
}

export default Toggle;