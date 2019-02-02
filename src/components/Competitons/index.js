import React, { Component } from 'react'

import { Grid, Row, Col, ListGroup, ListGroupItem, Image } from 'react-bootstrap';

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
    // componentDidUpdate (prevProps, prevState) {
    //     this.loadLogos();
    // }
    

    loadLogos = () => {
        let myNodeList = document.querySelectorAll(`li[name=competition]`);

        myNodeList.forEach(item => {
            let competiton_code = item.getAttribute('data-competition_code');
            let img_tag = document.querySelector(`#logo_${competiton_code}`);

            if (competiton_code === 'PL') {
                img_tag.setAttribute('src', `/../../images/logos/premier_league.png`)
            }
            
        })

      };

    render () {
        const { competitions, avaliableCompetitonsId } = this.state;
        let filteredCompetitons = competitions.filter((competitonId) =>  avaliableCompetitonsId.includes(competitonId.id));
        
        return (
            <Grid>
                <Row className="show-grid">
                    <Col md={8} mdOffset={2}>
                        <ListGroup id="list_of_competitons" >Choose competitions!
                            {filteredCompetitons.map(competition =>
                                <ListGroupItem key={competition.id} data-competition_code={competition.code} name="competition">
                                    <div>
                                        <Image alt="100x100" style={{ height: 100}} id={`logo_${competition.code}`} src={`/images/logos/${competition.code}.png`}/>
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