import React, { Component } from 'react';
import { Card, CardBody, CardTitle, Row } from 'reactstrap';

class FavoritesComponent extends Component {
    render() {
        return (
            <div>
                <Row style={{ marginLeft: '20px', marginTop: '10px' }}>

                    {this.props.favorites.map((city, key) => (
                        <Card style={{ width: "300px", display: "inline-block", backgroundRowor: '#F0F0F0' }}>
                            <CardBody>
                                <CardTitle>{city.name}, {city.Country.LocalizedName}</CardTitle>
                                <button onClick={this.props.removeCity.bind(null, key)}>Remove</button>
                            </CardBody>
                        </Card>
                    ))}
                </Row>





            </div>
        )
    }
}

export default FavoritesComponent
