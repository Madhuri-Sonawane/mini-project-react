import { useCallback, useEffect, useRef, useState } from "react";

function RandPassGen(){
    const [length,setLength] = useState(8);
    const [numberAllowed,setNumberAllowed]=useState(false);
    const [charAllowed,setCharAllowed]=useState(false);
    const [password,setPassword] = useState();

    const passwordGen = useCallback(()=>{
        let pass = '';
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

        if(numberAllowed) str+= '1234567890'
        if(charAllowed) str+= "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

        for(let i=0;i<=length;i++){
            let char = Math.floor(Math.random()*str.length+1)
            pass=pass+str.charAt(char)
        }
        setPassword(pass);

    },[length,setPassword,numberAllowed,charAllowed])

    useEffect(()=>{
        passwordGen()
    },[length,numberAllowed,charAllowed,passwordGen])

    const passwordRef = useRef(null);

    const CopyToClipB=useCallback(()=>{
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0,length+1);
        window.navigator.clipboard.writeText(password)
    },[password])

    return (
        <>
        <div className="w-full max-w-md mx-auto rounded-lg px-4 my-8 text-orange-500 bg-gray">
            <div className="flex shadow rounded-lg overflow-hidden mb-4">
                <input type="text" value={password} className="outline-none w-full py-1 px-3" readOnly placeholder="password" ref={passwordRef} />
                <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" onClick={CopyToClipB}>Copy</button>
            </div>
            <div className="flex text-sm gap-x-2">
                <div className="flex item-center gap-x-1">
                    <input onChange={(e)=>setLength(e.target.value)} type="range" min={6} max={100} value={length} className="cursor-pointer" />
                    <label>Length : {length}</label>
                </div>
                <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={()=>{
                    setNumberAllowed((prev)=>!prev);
                }} /> <label htmlFor="numberInput">Numbers</label>
            <div className="flex items-center gap-x-1">
                <input type="checkbox" defaultChecked={charAllowed} id="characterInput" onChange={()=>{
                    setCharAllowed((prev)=>!prev);
                }} />
                <label htmlFor="characterInput">Characters</label>
            </div>
        </div>
        </div>

        
        </>
    )
}

export default RandPassGen;