import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';

import { useState } from 'react';
import './blockConverter.scss';

function BlockConverter(props) {
    // GetCurrencies();

    const currencies = ['RUB', 'USD', 'EUR'];

    const [result, setResult] = useState(0);
    const [tempInput, setTempInput] = useState('');
    const [error, setError] = useState(false);
    const [timer, setTimer] = useState(null);
    const [input, setInput] = useState('');
    const [currency, setCurrency] = useState('USD');
    const [loading, setLoading] = useState(false);

    // useEffect(() => {}, [input])

    const errorStyle = error
        ? { backgroundColor: 'rgba(255, 0, 0, 0.203)' }
        : null;

    const checkingForWrite = (e) => {
        clearTimeout(timer);

        setTimer(
            setTimeout(() => {
                setInput(tempInput);
            }, 1500)
        );
    };

    function resetInputField() {
        setTempInput('');
    }

    const resultBlock = loading ? (
        <Spinner animation="border" role="status" variant="secondary" />
    ) : (
        <Form.Control
            className="converter__result"
            disabled
            style={{
                textAlign: 'center',
                opacity: '0.7',
            }}
            value={result}
        />
    );

    return (
        <Container className="converter__container col-xs-12 col-sm-8 col-md-8 col-lg-8 col-xl-5 col-xxl-5">
            {/* Title block*/}
            <Row xl="0">
                <h1
                    className="converter__title"
                    style={{ textAlign: 'center' }}
                >
                    Конвертер валют:
                </h1>
            </Row>
            {/* Title block end */}

            {/* Input block */}
            <Row className="justify-content-space-between g-3">
                <Col xs={5} sm={6} md={6} lg={6} xl={6}>
                    <Form.Control
                        type="text"
                        placeholder="Currency"
                        value={tempInput}
                        onChange={(e) => setTempInput(e.target.value)}
                        onKeyUp={(e) => checkingForWrite(e)}
                        style={errorStyle}
                    />
                </Col>
                <Col xs="auto" sm={3} md={3} lg={3} xl={3}>
                    <Form.Select
                        aria-label="Выбирите валюту"
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                    >
                        <option value="RUB">RUB</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                    </Form.Select>
                </Col>
                <Col xl={1} style={{ textAlign: 'center', width: '1px' }}>
                    <div className="vr h-100" />
                </Col>
                <Col
                    xs="auto"
                    sm="auto"
                    md="auto"
                    lg="auto"
                    xl="auto"
                    style={{ textAlign: 'center' }}
                    className="flex-fill"
                >
                    <Button
                        variant="outline-danger w-100"
                        onClick={resetInputField}
                    >
                        Reset
                    </Button>
                </Col>
            </Row>
            {/* Input block end */}

            {/* Result field */}
            <Row className="w-25 m-auto">
                <div className="converter__result"> {resultBlock} </div>
            </Row>
            {/* Result field end */}

            <ButtonsField currencies={currencies} />
        </Container>
    );
}

const ButtonsField = (props) => {
    const { currencies } = props;

    const newData = currencies.map((cur, i) => {
        return (
            <Col key={i}>
                <Button className="w-100" xs="w-100" variant="light">
                    {cur}
                </Button>
            </Col>
        );
    });

    return (
        <Row className="converter__btns justify-content-between">{newData}</Row>
    );
};

export default BlockConverter;
