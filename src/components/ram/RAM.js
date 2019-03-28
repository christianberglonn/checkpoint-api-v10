import React, { Component } from 'react'
import axios from 'axios';


export default class RAM extends Component {
    state = {
        name: '',
        ramIndex: '',
        imageUrl: '',
        status: '',
        species: '',
        type: '',
        gender: '',
        origin: {
            name: ''
        },
        location: {
            name: ''
        },
        episode: []
    };

    async componentDidMount() {
        const { ramIndex } = this.props.match.params;

        const ramUrl = `https://rickandmortyapi.com/api/character/${ramIndex}/`;

        const ramRes = await axios.get(ramUrl);
        const name = ramRes.data.name;
        const status = ramRes.data.status;
        const species = ramRes.data.species;
        const type = ramRes.data.type;
        const gender = ramRes.data.gender;
        const origin = ramRes.data.origin.name;
        const location = ramRes.data.location.name;
        const episode = ramRes.data.episode;
        const imageUrl = ramRes.data.image;



        this.setState({
            ramIndex,
            name,
            status,
            species,
            type,
            gender,
            origin,
            location,
            episode,
            imageUrl
        });
    }


    render() {
        return (
            <div className="col">
                <div className="card">
                    <div className="card-header">
                        <div className="row">
                            <div className="col-5">
                                <h5>{this.state.ramIndex}</h5>
                            </div>
                            <div className="col-7">
                                <div className="float-right">
                                    {/* {this.state.name} */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="row align-items-center">
                            <div className="col-md-3">
                                <img src={this.state.imageUrl} alt="avatar"
                                    className="card-img-top rounded mx-auto mt-2"
                                />
                            </div>
                            <div className="col-md-9">
                                <h4 className="mx-auto">{this.state.name}</h4>
                                <div className="row align-items-center">
                                    <div className="col-12 col-md-3">Status: </div>
                                    <div className="col-12 col-md-9">{this.state.status}</div>
                                    <div className="col-12 col-md-9">To be continued...</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
