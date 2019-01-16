import React, { Component } from 'react'
import { Grid, Row, Col, ListGroup, ListGroupItem, Image } from 'react-bootstrap';

import {BASIC_URL} from '../../url/url'
import {HEADER} from '../../auth/index' 

class Teams extends Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
            teams: [],
        };
    }


    componentDidMount() {
        fetch(`${BASIC_URL}/v2/competitions/PL/teams`, HEADER)
        .then(res => res.json())
        .then(res => this.setState({teams: res.teams}))
        .catch(err => console.error(err));
    }
    

    render () {

        const { teams } = this.state;

        return (
            <Grid>
                <Row className="show-grid">
                    <Col md={8} mdOffset={2}>
                        <ListGroup id="list_of_teams" >Teams in Premier League:
                            {teams.map(team =>
                                <ListGroupItem key={team.id}>
                                    <div>
                                    <Image src={team.crestUrl} style={{ height: 90}} />
                                    <span style={{paddingLeft: 30}}>{team.name}</span>
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

export default Teams