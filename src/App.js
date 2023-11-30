import './App.css';
import IconPerson from './images/icon-person.svg'

function App() {
  return (
    <div className="App">
      <h1 className='splitter'>SPLI</h1>
      <h1 className='splitter'>TTER</h1>
      
      <div className="calculator">
        <div className="content">
          
          <div className="calc-buttons">
            <p>Bill</p>
            <div className="num-value">
              <h3>$</h3>
              <h3>0</h3>
            </div>

            <p>Select Tip %</p>

            <div className="percent">
              <button className='btn-green'>5%</button>
              <button className='btn-green'>10%</button>
              <button className='btn-green'>15%</button>
              <button className='btn-green'>25%</button>
              <button className='btn-green'>50%</button>
              <button className='btn-custom'>Custom</button>
            </div>

            <p>Number of People</p>
            <div className="num-value">
              <img src={IconPerson} alt='#'></img>
              <h3>0</h3>
            </div>
          </div>

          <div className="result-tip">
            <div className="content-2">
              <div className="tip-amount">
                <div className="p-tip">
                  <h4>Tip Amount</h4>
                  <p>/ person</p>
                </div>
                <h1>$0.00</h1>
              </div>

              <div className="tip-amount">
                <div className="p-tip">
                  <h4>Total</h4>
                  <p>/ person</p>
                </div>
                <h1>$0.00</h1>
              </div>

              <button>RESET</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
