import React, {Component} from "react"


import './index.scss'

export class Sell extends Component {
    constructor() {
        super();
        this.state = {

            name: '',
        };

    }
    componentDidMount() {
        fetch(
            `https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699`
        ).then((result) => {
            if (result.ok) {
                return result.json();
            } else {
                throw new Error('Błąd sieci!');
            }
        }).then((responseJSON) => {
            console.log(responseJSON);
        });

    }
    render() {
        return (
            <div>
                <div className='sell-grid-container'>
                    <div className='sell-grid-row sell-row1'>
                        <div className='sell-grid-col-1'>
                            <h1>Nasze samochody</h1>
                        </div>
                    </div>
                    <div className='sell-grid-row sell-row2'>
                        <div className='sell-grid-col-1'>
                        </div>
                        <div className='sell-grid-col-2'>
                            Zapraszamy do naszej oferty aut w seriwsie <a
                            href='https://mmcmotors.otomoto.pl/'>otomoto</a>
                        </div>
                        <div className='sell-grid-col-3'>

                        </div>
                    </div>
                </div>
            </div>
        )

    };
}