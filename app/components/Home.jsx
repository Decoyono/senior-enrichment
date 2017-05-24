import React, {Component} from 'react'

export default class Home extends Component {

    constructor (props) {
    super(props);
    }

    render() {
        return (
            <div>
                <h1>Hogwarts School of Witchcraft and Wizardry</h1>
                    <div id='home'>
                        {
                        this.props.children && React.cloneElement(this.props.children, props)
                        }
                    </div>
            </div>
        )
    }
}

