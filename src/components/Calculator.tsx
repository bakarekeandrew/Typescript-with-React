import React, { useState } from 'react';

const Calculator: React.FC = () => {
  const [input, setInput] = useState('');  
  const [display, setDisplay] = useState('0');  
  const [justPressedOperator, setJustPressedOperator] = useState(false); 

  const buttons = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  const isOperator = (val: string) => ['÷', 'x', '-', '+'].includes(val);

  const handleButtonClick = (val: string) => {
    if (val === 'AC') {
      setInput('');
      setDisplay('0');
      setJustPressedOperator(false);
      return;
    }

    if (val === '=') {
      try {
        const evalString = input.replace(/÷/g, '/').replace(/x/g, '*');
        const evalResult = eval(evalString);
        setDisplay(String(evalResult));
        setInput(String(evalResult));
        setJustPressedOperator(false);
      } catch {
        setDisplay('Error');
        setInput('');
      }
      return;
    }

    if (isOperator(val)) {
      if (input !== '') {
        setInput(prev => prev + val);
        setJustPressedOperator(true);
      }
      return;
    }

    if (/^\d+$/.test(val) || val === '.') {
      if (display === '0' || justPressedOperator) {
        setDisplay(val);
        setJustPressedOperator(false);
      } else {
        setDisplay(prev => prev + val);
      }

      setInput(prev => prev + val);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="bg-black w-80 rounded-lg shadow-xl overflow-hidden">
        <div className="text-white text-right text-5xl h-20 p-4 bg-gray-400">
          {display}
        </div>

        <div className="grid grid-cols-4 gap-px bg-gray-500">
          {buttons.slice(0, 4).flat().map((btn, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(btn)}
              className={`h-16 text-2xl font-semibold ${
                isOperator(btn)
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-300 text-black'
              }`}
            >
              {btn}
            </button>
          ))}

          <button
            onClick={() => handleButtonClick('0')}
            className="col-span-2 h-16 bg-gray-300 text-black text-2xl font-semibold"
          >
            0
          </button>
          <button
            onClick={() => handleButtonClick('.')}
            className="h-16 bg-gray-300 text-black text-2xl font-semibold"
          >
            .
          </button>
          <button
            onClick={() => handleButtonClick('=')}
            className="h-16 bg-orange-500 text-white text-2xl font-semibold"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
