import React from 'react';
import { Card } from 'react-bootstrap';

import './HistoryCard.css'

const HistoryCard = (props: {
    title?: string
    children?: any
    img?: string
    imgPosition?: 'top' | 'bottom'
}) => (
    <Card bg="dark" text="light">
        {props.title && <Card.Header>{props.title}</Card.Header>}
        <Card.Body>
            <Card.Text>{props.children}</Card.Text>
        </Card.Body>
        {props.img && <Card.Img src={props.img} variant={props.imgPosition ?? 'top'} />}
    </Card>
)

export default HistoryCard;