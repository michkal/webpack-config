import React from 'react';
import axios from 'axios';

export default class Dogs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dogs: []
        }
    }

    componentDidMount() {
        axios
            .get('https://dog.ceo/api/breeds/list/all')
            .then((res) => this.setState({
                dogs: Object.keys(res.data.message)
            }));
    }

    render() {
        return (
            <ul>
                {Array.isArray(this.state.dogs) && this.state.dogs.map((dog, index) => <li key={index}>{dog}</li>)}
            </ul>
        )
    } 
};