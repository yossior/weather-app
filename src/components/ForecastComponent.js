import React, { Component } from 'react';
import ForecastCardComponent from './ForecastCardComponent';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Row, Col } from 'reactstrap';
import Switch from "react-switch";

const rowStyle = {
    position: 'absolute',
    top: '300px',
    left: 0,
    right: 0,
    bottom: 0,
    margin: 'auto',
}

class ForecastComponent extends Component {

    render() {
        return (
            <div>
                <Card body style={{ width: "80%", display: "inline-block", backgroundColor: '#F0F0F0' }}>
                    <CardBody>
                        <div style={{ backgroundColor: '#FFFFFF', width: '300px', margin: 'auto' }}>
                            <label >
                                {this.props.isFavorite ? 'Remove from' : 'Add to'} favorites
                            </label>
                            <br />
                            <Switch onChange={this.props.addOrRemoveFavorites} checked={this.props.isFavorite} />{''}

                        </div>
                        <button style={{ display: 'none' }}>{this.props.isFavorite ? 'Remove from' : 'Add to'} favorites</button>
                        <CardTitle>{this.props.city.LocalizedName}</CardTitle>
                        <CardSubtitle>{this.props.currentConditions.WeatherText}</CardSubtitle>
                        <CardText>{Math.round(this.props.currentConditions.Temperature.Metric.Value)}℃</CardText>
                    </CardBody>
                </Card>
                <br />

                <Row style={rowStyle}>

                    {typeof this.props.forecast !== 'undefined' ?
                        (this.props.forecast.map((forecast, key) => {
                            // Giving the first element "offset:1" to center equally 5 cols in a 12 cols reactstrap row
                            switch (key) {
                                case 0: return <Col sm={{ size: 2, push: 2, pull: 2, offset: 1 }} ><ForecastCardComponent forecast={forecast} /></Col>
                                default: return <Col sm="2" ><ForecastCardComponent forecast={forecast} /></Col>
                            }
                        })
                        ) : <div />
                    }
                </Row>
            </div>
        )
    }
}

export default ForecastComponent;