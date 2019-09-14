import React, { Component } from 'react';
import ForecastCardComponent from './ForecastCardComponent';
import { Row, Col } from 'reactstrap';

const rowStyle = {
    position: 'absolute',
    top: '100px',
    left: 0,
    right: 0,
    bottom: 0,
    margin: 'auto',
}

class ForecastComponent extends Component {
    render() {
        return (
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
        )
    }
}

export default ForecastComponent;