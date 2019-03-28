import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Sprite = styled.img`
    width: 15em;
    height: 15em;
`;

const Card = styled.div`
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    &:hover {
        box-shadow: 0 16px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }
    -moz-user-select: none;
    -website-user-select: none;
    user-select: none;
    -o-user-select: none;
`;

const StyledLink = styled(Link)`
text-decoration: none;
color: black;
&:focus,
&:hover,
&:visited,
&:link,
&:active {
    text-decoration: none;
}
`;

export default class RAMCard extends Component {

    state = {
        id: '',
        name: '',
        status: '',
        species: '',
        type: '',
        gender: '',
        imageUrl: '',
        ramIndex: ''
    };

    componentDidMount() {
        const { id, name, status, species, type, gender, url } = this.props;
        const ramIndex = url.split("/")[url.split('/').length - 1];
        const imageUrl = `https://rickandmortyapi.com/api/character/avatar/${ramIndex}.jpeg?raw=true`

        this.setState({
            id,
            name,
            status,
            species,
            type,
            gender,
            imageUrl,
            ramIndex
        });
    }

    render() {

        return (
            <div className='col-md-3 col-sm-6 mb-5'>
                <StyledLink to={`ram/${this.state.ramIndex}`}>
                    <Card className="card">
                        <h5 className="card-header">{this.state.ramIndex}</h5>
                        <Sprite className="card-img-top mx-auto mt-2 rounded"
                            src={this.state.imageUrl}
                        />
                        <div className="card-body">
                            <h4 className="card-title">{this.state.name}</h4>
                            <h6 className="card-title">ID: {this.state.id}</h6>
                            <h6 className="card-title">Status: {this.state.status}</h6>
                            <h6 className="card-title">Species: {this.state.species}</h6>
                            <h6 className="card-title">Gender: {this.state.gender}</h6>


                        </div>
                    </Card>
                </StyledLink>
            </div>
        )
    }
}
