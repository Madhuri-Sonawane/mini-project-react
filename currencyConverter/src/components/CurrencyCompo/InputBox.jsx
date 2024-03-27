import { useId } from 'react';

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectCurrecy="INR",
    amountDisable=false,
    currencyDisable=false,
    className=""
}) {
    const amountInputId = useId();




    return(
        <div className={`${className} bg-white p-3 rounded-lg text-sm flex`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    label
                </label>
                <input id={amountInputId} type="number" className="outline-none w-full bg-transparent py-1.5" placeholder="Amount"
                disabled={amountDisable}
                value={amount}
                onChange={(e)=>{onAmountChange && onAmountChange(Number(e.target.value))}}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right" >
                <p className="text-back/40 mb-2 w-full">Currency Type</p>
                <select name="" id="" className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none" value={selectCurrecy}
                onCurrencyChange={(e)=>
                    onCurrencyChange(e.target.value)
                }
                disabled={currencyDisable}
                >
                    {currencyOptions.map((currency)=>(
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default InputBox;