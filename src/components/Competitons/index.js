import React, { Component } from 'react'

import { Grid, Row, Col, ListGroup, ListGroupItem, Image } from 'react-bootstrap';

import {BASIC_URL} from '../../url/url'
import {HEADER} from '../../auth/index' 

class Competitions extends Component {
    
    loadLogos = () => {
        
    }

    constructor(props) {
        super(props);
        
        this.state = {
            //avaliableCompetitonsId : [2013, 2016, 2021, 2018, 2001, 2015, 2002, 2019, 2003, 2017, 2014, 2000],
            avaliableCompetitonsId : [2021, 2001, 2002, 2019, 2014],
            competitions: []
        };
    }

    componentDidMount() {
        this.state.avaliableCompetitonsId.map(id => {
        fetch(`${BASIC_URL}/v2/competitions/${id}`, HEADER)
        .then(res => res.json())
        .then(res => {this.setState(prevState => ({ competitions: [...prevState.competitions, res]}))})
        .then(this.loadLogos())
        .catch(err => console.error(err))
        });
    }
    
    render () {
        
        const { competitions } = this.state;
        
        return (
            <Grid>
                <Row className="show-grid">
                    <Col md={8} mdOffset={2}>
                        <ListGroup id="list_of_competitons" >Choose competitions!
                            {competitions.map(competition =>
                                <ListGroupItem key={competition.id} data-competitionCode={competition.code} >
                                    <div>
                                        <Image alt="100x100" style={{ height: 100}} />
                                        <span style={{paddingLeft: 30}}>{competition.name}</span>
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