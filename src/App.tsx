import { useState } from 'react';
import './App.css';
import { InputTypeComponent } from './components/InputTypeComponent';
import { RadioBox } from './components/RadioBoxComponent';
import { SelectBox } from './components/SelectBoxComponent';
import { DATE_LABEL, RANGE_LABEL, TEXT_LABEL } from './constants';

function App() {

  const [inputTextValue, setInputTextValue] = useState('');
  const [inputFileValue, setInputFileValue] = useState('');
  const [inputDateValue, setInputDateValue] = useState('');
  const [inputSelectValue, setInputSelectValue] = useState('');
  const [inputRadioValue, setInputRadioValue] = useState('');
  const [inputRangeValue, setInputRangeValue] = useState('');

  return (
    <div className="App">
      
      <h2> Test task - 2</h2>

      <InputTypeComponent 
        labelText={TEXT_LABEL} 
        type="text" 
        value={inputTextValue} 
        handleChange={(e) => 
        setInputTextValue(e.target.value)} 
      />

      <InputTypeComponent 
        type="file" 
        value={inputFileValue} 
        handleChange={(e) => setInputFileValue(e.target.value)} 
      />

      <InputTypeComponent 
        labelText={DATE_LABEL} 
        type="date" 
        value={inputDateValue} 
        handleChange={(e) => setInputDateValue(e.target.value)} 
      />

      <SelectBox 
        value={inputSelectValue} 
        handleChange={(e) => setInputSelectValue(e.target.value)}
      />

      <RadioBox 
        handleChange={(e) => setInputRadioValue(e.target.value)} 
      />

      <InputTypeComponent 
        labelText={RANGE_LABEL} 
        type="range" 
        value={inputRangeValue} 
        handleChange={(e) => setInputRangeValue(e.target.value)} 
      />

      <div>
        <h2> Selected Values :</h2>
        <h3>  
          {inputTextValue} <br /> 
          {inputFileValue} <br />
          {inputDateValue} <br />
          {inputSelectValue} <br />
          {inputRadioValue} <br />
          {inputRangeValue}
        </h3>
      </div>

    </div>

  );
}

export default App;
