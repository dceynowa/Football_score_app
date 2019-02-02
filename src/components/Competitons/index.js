import React, { Component } from 'react'

import { Grid, Row, Col, ListGroup, ListGroupItem, Image } from 'react-bootstrap';

import './style.css';

import {BASIC_URL} from '../../url/url'
import {HEADER} from '../../auth/index' 



class Competitions extends Component {
    

    constructor(props) {
        super(props);

        this.state = {
            avaliableCompetitonsId : [2013, 2016, 2021, 2018, 2001, 2015, 2002, 2019, 2003, 2017, 2014, 2000],
            competitions: []
        };
    }

    componentDidMount() {
        fetch(`${BASIC_URL}/v2/competitions`, HEADER)
        .then(res => res.json())
        .then(res => this.setState({competitions: res.competitions}))
        .catch(err => console.error(err))        
    }
    
    showTeams = (id) => {
        alert(id);
    }

    render () {
        const { competitions, avaliableCompetitonsId } = this.state;
        let filteredCompetitons = competitions.filter((competitonId) =>  avaliableCompetitonsId.includes(competitonId.id));
        
        return (
            <Grid>
                <Row className="show-grid">
                    <Col md={8} mdOffset={2}>
                        <ListGroup id="list_of_competitons">
                            <div className="list_of_competitons__title">Choose competitions!</div>
                            {filteredCompetitons.map(competition =>
                                <ListGroupItem key={competition.id} data-competition_code={competition.code} name="competition">
                                    <div className="competitons_logo__box" onClick={() => {this.showTeams(competition.id)}}>
                                        <div className="competitions_logo__img">
                                            <Image alt="100x100" id={`logo_${competition.code}`} src={`/images/logos/${competition.code}.png`}/>
                                        </div>
                                        <span className="competitions_logo__name">{competition.name}</span>
                                    </div>
                                </ListGroupItem>
                            )}
                        </ListGroup>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default Competitions