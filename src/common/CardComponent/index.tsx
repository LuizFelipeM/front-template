import React, { CSSProperties } from 'react';
import { Card } from 'react-bootstrap';

import './CardComponent.css'

const CardComponent = (props: {
    title?: string
    children?: any
    img?: string
    imgPosition?: 'top' | 'bottom'
    cardStyle?: CSSProperties;
    cardTitleStyle?: CSSProperties;
    cardBodyStyle?: CSSProperties;
}) => (
    <Card
        bg="dark"
        text="light"
        style={props.cardStyle}
    >
        {props.title &&
            <Card.Header style={props.cardTitleStyle}>
                <Card.Text>{props.title}</Card.Text>
            </Card.Header>}

        <Card.Body style={props.cardBodyStyle}>
            {props.children}
        </Card.Body>
        
        {props.img && <Card.Img src={props.img} variant={props.imgPosition ?? 'top'} />}
    </Card>
)

export default CardComponent;