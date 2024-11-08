import React, { useState } from 'react';
import convert from 'convert-units';
import './Calculator.css';

const MeasurementConverter = () => {
  const [inputValue, setInputValue] = useState('');
  const [fromUnit, setFromUnit] = useState('cup');
  const [toUnit, setToUnit] = useState('ml');
  const [convertedValue, setConvertedValue] = useState('');

  const handleConvert = (e) => {
    e.preventDefault();
    if (inputValue) {
      const result = convert(Number(inputValue)).from(fromUnit).to(toUnit);
      setConvertedValue(result);
    }
  };

  return (
    <div className="container">
      <h2>Measurement</h2>
      <form onSubmit={handleConvert}>
        <div className="form-group">
          <label>
            Enter value:
            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="input-field"
              required
            />
          </label>
        </div>

        <div className="form-group">
          <label>
            From:
            <select
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value)}
              className="input-field"
            >
              <option value="cup">Cup</option>
              <option value="tsp">Teaspoon</option>
              <option value="tbsp">Tablespoon</option>
              <option value="ml">Milliliter</option>
              <option value="l">Liter</option>
              <option value="g">Gram</option>
              <option value="kg">Kilogram</option>
              <option value="oz">Ounce</option>
              <option value="lb">Pound</option>
            </select>
          </label>
        </div>

        <div className="form-group">
          <label>
            To:
            <select
              value={toUnit}
              onChange={(e) => setToUnit(e.target.value)}
              className="input-field"
            >
              <option value="cup">Cup</option>
              <option value="tsp">Teaspoon</option>
              <option value="tbsp">Tablespoon</option>
              <option value="ml">Milliliter</option>
              <option value="l">Liter</option>
              <option value="g">Gram</option>
              <option value="kg">Kilogram</option>
              <option value="fl-oz">Fluid Ounce</option>
              <option value="lb">Pound</option>
            </select>
          </label>
        </div>

        <button type="submit" className="convert-btn">
          Convert
        </button>
      </form>

      {convertedValue && (
        <div className="result">
          <h3>Converted Value: {convertedValue.toFixed(2)} {toUnit}</h3>
        </div>
      )}
    </div>
  );
};

export default MeasurementConverter;
