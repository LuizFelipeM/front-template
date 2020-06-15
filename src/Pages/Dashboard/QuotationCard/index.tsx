import React, { useState } from 'react';
import CardComponent from '../../../common/CardComponent';
import { InputGroup, FormControl, Button, Card } from 'react-bootstrap';

import './QuotationCard.css';
import Currency from '../../../common/Currency/Currency';

const QuotationCard = (props: { fromCurrency: Currency, currenciesData: Currency[] }) => {
    const [selectedCurrency, setSelectedCurrency] = useState(0);
    const [amount, setAmount] = useState(0);
    const [value, setValue] = useState(0);

    function handleSimulation() {
        const result = amount * props.currenciesData[selectedCurrency].dolarValue;
        setValue(result);
    }

    return (
        <CardComponent title={props.fromCurrency.name} >
            <Card.Text>A cotação hoje é de</Card.Text>
            <Card.Text>{props.fromCurrency.symbol} 1 = {props.currenciesData[selectedCurrency].symbol} {props.currenciesData[selectedCurrency].dolarValue}</Card.Text>
            <InputGroup className="mb-3 mt-3 mb input-value">
                <InputGroup.Prepend>
                    <FormControl
                        as="select"
                        onChange={(e) => setSelectedCurrency(Number(e.target.value))}
                    >
                        {props.currenciesData.map((currency, index) => (
                            <option value={index} key={index}>{currency.symbol}</option>
                        ))}
                    </FormControl>
                </InputGroup.Prepend>
                <FormControl placeholder="Quantia" onChange={(e) => setAmount(Number(e.target.value))} />
            </InputGroup>
            <Button variant="outline-light" onClick={handleSimulation}>
                Simular
            </Button>
            <Card.Text className={`simulation-result ${value === 0 ? 'hide' : ''}`}>
                Valor de
                <br/>
                {props.currenciesData[selectedCurrency].symbol} {value.toFixed(2)}
            </Card.Text>
        </CardComponent>
    );
}

export default QuotationCard;