import React from 'react';
import { Row, Col } from 'react-bootstrap';

import './Dashboard.css';

import QuotationCard from './QuotationCard';
import Currency from '../../common/Currency/Currency';

const dolar: Currency = {
    id: 1,
    name: 'Dólar americano',
    symbol: 'US$',
    dolarValue: 1
}

const real: Currency = {
    id: 2,
    name: 'Real',
    symbol: 'R$',
    dolarValue: 0.19
}

const euro: Currency = {
    id: 3,
    name: 'Euro',
    symbol: '€',
    dolarValue: 1.13
}

const currencyArr: Currency[] = [ dolar, real, euro ]

const Dashboard = () => (
    <Row>
        <Col lg={4} sm={12} className="mb-4">
            <QuotationCard
                fromCurrency={dolar}
                currenciesData={currencyArr}
            />
        </Col>
        <Col lg={4} sm={12} className="mb-4">
            <QuotationCard
                fromCurrency={real}
                currenciesData={currencyArr}
            />
        </Col>
        <Col lg={4} sm={12} className="mb-4">
            <QuotationCard
                fromCurrency={euro}
                currenciesData={currencyArr}
            />
        </Col>
    </Row>
)

export default Dashboard;