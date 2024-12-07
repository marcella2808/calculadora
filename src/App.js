import { Container, Content, Row, Column } from './styles';
import Button from './components/Button';
import Input from './components/Input';
import { useState } from 'react';

const App = () => {
    const [currentNumber, setCurrentNumber] = useState('0');
    const [firstNumber, setFirstNumber] = useState('0');
    const [operation, setOperation] = useState('');

    const toNumber = (value) => Number(value.replace(',', '.'));

    const handleOnClear = () => {
        setCurrentNumber('0');
        setFirstNumber('0');
        setOperation('');
    };

    const handleAddNumber = (num) => {
        setCurrentNumber((prev) => {
            if (num === ',' && prev.includes(',')) {
                return prev;
            }
            return `${prev === '0' && num !== ',' ? '' : prev}${num}`;
        });
    };

    const handleSumNumbers = () => {
        if (firstNumber === '0') {
            setFirstNumber(String(currentNumber));
            setCurrentNumber('0');
            setOperation('+');
        } else {
            const sum = toNumber(firstNumber) + toNumber(currentNumber);
            setCurrentNumber(String(sum).replace('.', ','));
            setOperation('');
        }
    };

    const handleSubtractNumbers = () => {
        if (firstNumber === '0') {
            setFirstNumber(String(currentNumber));
            setCurrentNumber('0');
            setOperation('-');
        } else {
            const sub = toNumber(firstNumber) - toNumber(currentNumber);
            setCurrentNumber(String(sub).replace('.', ','));
            setOperation('');
        }
    };

    const handleMultiplyNumbers = () => {
        if (firstNumber === '0') {
            setFirstNumber(String(currentNumber));
            setCurrentNumber('0');
            setOperation('×');
        } else {
            const mult = toNumber(firstNumber) * toNumber(currentNumber);
            setCurrentNumber(String(mult).replace('.', ','));
            setOperation('');
        }
    };

    const handleDivideNumbers = () => {
        if (firstNumber === '0') {
            setFirstNumber(String(currentNumber));
            setCurrentNumber('0');
            setOperation('÷');
        } else {
            const div = toNumber(firstNumber) / toNumber(currentNumber);
            setCurrentNumber(String(div).replace('.', ','));
            setOperation('');
        }
    };

    const handleToggleSign = () => {
        setCurrentNumber((prev) => {
            if (prev === '0') return '0';
            return prev.startsWith('-') ? prev.slice(1) : `-${prev}`;
        });
    };

    const handleEquals = () => {
        if (firstNumber !== '0' && operation !== '' && currentNumber !== 0) {
            switch (operation) {
                case '+':
                    handleSumNumbers();
                    break;
                case '-':
                    handleSubtractNumbers();
                    break;
                case '×':
                    handleMultiplyNumbers();
                    break;
                case '÷':
                    handleDivideNumbers();
                    break;
                default:
                    break;
            }
        }
    };

    return (
        <Container>
            <Content>
                <Input value={currentNumber} />
                <Row>
                    <Button label="C" onClick={handleOnClear} />
                    <Button label="=" onClick={handleEquals} />
                </Row>
                <Row>
                    <Button label="7" onClick={() => handleAddNumber('7')} />
                    <Button label="8" onClick={() => handleAddNumber('8')} />
                    <Button label="9" onClick={() => handleAddNumber('9')} />
                    <Button label="×" onClick={handleMultiplyNumbers} />
                </Row>
                <Row>
                    <Button label="4" onClick={() => handleAddNumber('4')} />
                    <Button label="5" onClick={() => handleAddNumber('5')} />
                    <Button label="6" onClick={() => handleAddNumber('6')} />
                    <Button label="-" onClick={handleSubtractNumbers} />
                </Row>
                <Row>
                    <Button label="1" onClick={() => handleAddNumber('1')} />
                    <Button label="2" onClick={() => handleAddNumber('2')} />
                    <Button label="3" onClick={() => handleAddNumber('3')} />
                    <Button label="+" onClick={handleSumNumbers} />
                </Row>
                <Row>
                    <Button label="±" onClick={handleToggleSign} />
                    <Button label="0" onClick={() => handleAddNumber('0')} />
                    <Button label="," onClick={() => handleAddNumber(',')} />
                    <Button label="÷" onClick={handleDivideNumbers} />
                </Row>
            </Content>
        </Container>
    );
};

export default App;
