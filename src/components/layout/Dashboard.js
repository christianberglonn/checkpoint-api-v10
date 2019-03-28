import React, { Component } from 'react';

import RAMList from '../ram/RAMList';

export default class Dashboard extends Component {
    render() {
        return (
            <div className="row">
                <div className="col">
                    <RAMList />
                </div>

            </div>
        );
    }
}
