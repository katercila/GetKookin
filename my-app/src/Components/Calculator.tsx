import React, { useState } from 'react';
import convert from 'convert-units';

const MeasurementConverter = () => {
  // State to store the input value, unit to convert from, unit to convert to, and the result
  const [inputValue, setInputValue] = useState('');
  const [fromUnit, setFromUnit] = useState('cup');
  const [toUnit, setToUnit] = useState('ml');
  const [convertedValue, setConvertedValue] = useState('');

  // Handle the conversion when the form is submitted
  const handleConvert = (e) => {
    e.preventDefault();
    if (inputValue) {
      const result = convert(Number(inputValue)).from(fromUnit).to(toUnit);
      setConvertedValue(result);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Measurement Converter</h2>
      <form onSubmit={handleConvert}>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Enter value:
            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              style={{ marginLeft: '10px', padding: '5px', width: '100%' }}
              required
            />
          </label>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>
            From:
            <select
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value)}
              style={{ marginLeft: '10px', padding: '5px', width: '100%' }}
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
              {/* Add other units as needed */}
            </select>
          </label>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>
            To:
            <select
              value={toUnit}
              onChange={(e) => setToUnit(e.target.value)}
              style={{ marginLeft: '10px', padding: '5px', width: '100%' }}
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
              {/* Add other units as needed */}
            </select>
          </label>
        </div>

        <button type="submit" style={{ padding: '10px 20px' }}>
          Convert
        </button>
      </form>

      {convertedValue && (
        <div style={{ marginTop: '20px' }}>
          <h3>Converted Value: {convertedValue.toFixed(2)} {toUnit}</h3>
        </div>
      )}
    </div>
  );
};

export default MeasurementConverter;
