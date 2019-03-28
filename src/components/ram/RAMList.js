import React, { Component } from 'react';
import axios from 'axios';

import RAMCard from './RAMCard';

export default class RAMList extends Component {
    state = {
        url: "https://rickandmortyapi.com/api/character/",
        ram: null
    };

    async componentDidMount() {
        const res = await axios.get(this.state.url);
        this.setState({ ram: res.data['results'] });
    }

    render() {
        return (
            <React.Fragment>
                {this.state.ram ? (
                    <div className="row">
                        {this.state.ram.map(ram => (
                            <RAMCard
                                key={ram.name}
                                id={ram.id}
                                name={ram.name}
                                status={ram.status}
                                species={ram.species}
                                type={ram.type}
                                gender={ram.gender}
                                url={ram.url}
                            />
                        ))}
                    </div>
                ) : (
                        <h1>Loading...</h1>
                    )}
            </React.Fragment>
        );
    }
}
