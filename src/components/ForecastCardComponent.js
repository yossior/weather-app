import React from 'react';
import Moment from "moment";

import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, CardImg, Button
} from 'reactstrap';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];


const ForecastCardComponent = (props) => {
    return (
        <div>
            <div>
                <Card style={{ width: "100%", display: "inline-block" }}>
                    <CardBody>
                        <CardSubtitle>{days[Moment(props.forecast.Date).weekday()]}</CardSubtitle>
                        <CardText>{props.forecast.Temperature.Maximum.Value}</CardText>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};

export default ForecastCardComponent;