import React, { Component } from 'react'

import {BASIC_URL} from '../../url/url'
import {HEADER} from '../../auth/index' 

class Teams extends Component {
    
    

    componentDidMount() {
        fetch(`${BASIC_URL}/v2/competitions/PL/teams`, HEADER)
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.error(err));
    }

    render () {
        return (
            <div>
                COMPETITIONS    
            </div>
        )
    }
}

export default Teams