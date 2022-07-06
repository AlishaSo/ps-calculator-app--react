import React from "react";

function Calculator() {
  const [calc, setcalc] = React.useState(
    { 
      value1: 0, 
      value2: 0, 
      selectOpt: '+' 
    }
  );
  const [result, setResult] = React.useState(0);

  function handleChange(event) {
    const key = event.target.name;
    setcalc({
      ...calc,
      [key]: key == 'selectOpt' ? event.target.value : Number(event.target.value)
    });
  }

  React.useEffect(() => {
    switch(calc.selectOpt) {
      case '+':
        setResult(calc.value1 + calc.value2);
        break;
      case '-':
        setResult(calc.value1 - calc.value2);
        break;
      case '*':
        setResult(calc.value1 * calc.value2);
        break;
      case '/':
        setResult(calc.value1 / calc.value2);
        break;
    }
    if(Number.isNaN(result))
      setResult(String(result));
  }, [calc])

  return (
    <div className='container'>
      <h1>Calculating with React!</h1>

      <form className='add'>
        <input 
          type='text' 
          name='value1' 
          placeholder='num1' 
          value={calc.value1}
          onChange={handleChange} 
        />
        <select
          value={calc.selectOpt}
          onChange={handleChange}
          name='selectOpt'
        >
          <option value='+'>+</option>
          <option value='-'>-</option>
          <option value='*'>*</option>
          <option value='/'>/</option>
        </select>
        <input 
          type='text' 
          name='value2' 
          placeholder='num2' 
          value={calc.value2}
          onChange={handleChange} 
        />
        <span> = </span>
        <h3>{result}</h3>
      </form>
    </div>
  )
}

export default Calculator;