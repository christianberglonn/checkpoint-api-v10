import React, { Component } from 'react';
import styled from 'styled-components';

const Sprite = styled.img`
    width: 5em;
    height: 5em;
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
                <div className="card">
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
                </div>
            </div>
        )
    }
}
