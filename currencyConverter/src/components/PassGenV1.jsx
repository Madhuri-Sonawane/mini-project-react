function PassGenV1(){
    return (
        <>
        <div className="w-full max-w-md mx-auto rounded-lg px-4 my-8 text-orange-500 bg-gray">
            <div className="flex shadow rounded-lg overflow-hidden mb-4">
                <input type="text"  className="outline-none w-full py-1 px-3" readOnly placeholder="password"  />
                <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" >Copy</button>
            </div>
            <div className="flex text-sm gap-x-2">
                <div className="flex item-center gap-x-1">
                    <input  type="range" min={6} max={100}  className="cursor-pointer" />
                    <label>Length : {}</label>
                </div>
                <input type="checkbox"  id="numberInput"/> 
                <label htmlFor="numberInput">Numbers</label>
            <div className="flex items-center gap-x-1">
                <input type="checkbox" id="characterInput"  />
                <label htmlFor="characterInput">Characters</label>
            </div>
        </div>
        </div>
        </>
    )
}

export default PassGenV1;