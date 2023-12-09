import IconPerson from '../images/icon-person.svg'
import '../App.css'
import React, { useState } from "react";

function CalcButtons() {
    
    const [ billVal, setBillVal ] = useState()
    const [ peopleVal, setPeopleVal ] = useState()
    const [ customVal, setCustomVal ] = useState()

    const [ tip, setTip ] = useState(0)
    const [ descount, setDescount ] = useState(0)

    const [ total, setTotal ] = useState(0)

    const [ erro, setError ] = useState(false)
    const [ erroBill, setErroBill ] = useState(false)


    function TipDescount (value) {

        setPeopleVal(document.querySelector('#value-people').value)

        setBillVal(document.querySelector('#value-bill').value)

        console.log(peopleVal)
        console.log(billVal)

        
        if ( peopleVal <= 0 ) {

            ErrorSet(true)

        } 
        
        if ( billVal <= 0 ) {

            BillErrorSet(true)

        } 
        
        if ( ( billVal <= 0 ) && ( peopleVal <= 0 ) ){

            ErrorSet(true)
            BillErrorSet(true)

        }

        if ( ( billVal > 0 ) && ( peopleVal <= 0 ) ){

            ErrorSet(true)
            BillErrorSet(false)

        }

        if ( ( billVal <= 0 ) && ( peopleVal > 0 ) ){

            ErrorSet(false)
            BillErrorSet(true)

        }

        if ( ( billVal > 0 ) && ( peopleVal > 0 ) ) {

            ErrorSet(false)
            BillErrorSet(false)

        }

        setDescount(value)


        CalculateTip()

    }

    function ErrorSet(value) {
        setError(value)
        console.log(erro)
    }

    function BillErrorSet(value) {
        setErroBill(value)
        console.log(erroBill)
    }

    function CalculateTip(){
        
        if( tip > 0 && total > 0 ) {
            setTip(0)
            setTotal(0)
        }

        if (Number(peopleVal) > 0 ) {

            const sumBillPeople = Number(billVal) / Number(peopleVal)

            const descountSum = sumBillPeople * ( descount / 100 )
            descountSum.toPrecision(3)

            const totalValue = sumBillPeople + descountSum
            totalValue.toPrecision(4)

            setTip(descountSum)
            setTotal(totalValue)
        }
    }

    const Reset = () => {
        setTip(0)
        setTotal(0)
        setBillVal(document.getElementById('value-bill').value = "")
        setPeopleVal(document.getElementById('value-people').value = "")
        setCustomVal(document.getElementById("btn-custom").value = "")
        setErroBill(false)
        setError(false)
    }

    return(
        <div className="content">
            <div className="calc-buttons">
                
                <div className="people-value">
                    <p>Bill</p>
                    <p className={erroBill ? 'people-error-value error-appear' : 'people-error-value'}>Can't be zero</p>
                </div>

                <div className={erroBill ? 'num-value error-orange-appear' : 'num-value'}>
                    <h3>$</h3>
                    <input 
                    type="text" 
                    id="value-bill" 
                    className="value-top" 
                    placeholder='0'/>
                </div>

                <p>Select Tip %</p>

                <div className="percent">
                    <button className='btn-green' id="tips" onClick={() => TipDescount(5)}>5%</button>
                    <button className='btn-green' id="tips" onClick={() => TipDescount(10)}>10%</button>
                    <button className='btn-green' id="tips" onClick={() => TipDescount(15)}>15%</button>
                    <button className='btn-green' id="tips" onClick={() => TipDescount(25)}>25%</button>
                    <button className='btn-green' id="tips" onClick={() => TipDescount(50)}>50%</button>
                    <input 
                        type='text' 
                        id='btn-custom' 
                        placeholder='Custom'
                        className='btn-custom'
                        onInput={e => setCustomVal(e.target.value)}
                        onClick={() => TipDescount(customVal)}
                    />
                </div>

                <div className="people-value">
                    <p>Number of People</p>
                    <p className={erro ? 'people-error-value error-appear' : 'people-error-value'}>Can't be zero</p>
                </div>

                <div className={erro ? 'num-value error-orange-appear' : 'num-value'}>
                    <img src={IconPerson} alt='#'></img>
                    <input 
                        type="text" 
                        id="value-people" 
                        className="value-top" 
                        placeholder='0'
                    />
                </div>
            </div>

            <div className="result-tip">
                <div className="content-2">
                    <div className="tip-amount">
                    <div className="p-tip">
                        <h4>Tip Amount</h4>
                        <p>/ person</p>
                    </div>
                    <h1 id="value-tip">{`$${tip}`}</h1>
                    </div>

                    <div className="tip-amount">
                    <div className="p-tip">
                        <h4>Total</h4>
                        <p>/ person</p>
                    </div>
                    <h1 id="value-total">{`$${total}`}</h1>
                    </div>

                    <button onClick={Reset}>RESET</button>
                </div>
            </div>
        </div>
    )
}

export default CalcButtons