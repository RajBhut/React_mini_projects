import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
export default function Passwordgenrater() {

    const [range, setRange] = useState(0)
    const [isnumberAllowed, SetNumberAllow] = useState(false)
    const [ischaracterAllowd, SetcharAllow] = useState(false)

    const [password, Setpassword] = useState("")
    const inputref = useRef(null)


    useEffect(() => {
        getpass()
    }, [range, ischaracterAllowd, isnumberAllowed]);
    const getpass = useCallback(() => {
        let ans = ""

        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if (ischaracterAllowd) str += "!@#$%^&*(){}~`"
        if (isnumberAllowed) str += "0987654321"
        for (let index = 0; index < range; index++) {
            var ch = Math.floor(Math.random() * str.length + 1)
            ans = ans + str.charAt(ch)

        }
        Setpassword(ans)
    }, [range, ischaracterAllowd, isnumberAllowed])

    const copy = useCallback(() => {

        window.navigator.clipboard.writeText(password).then(window.alert("coppied!!!"))
        inputref.current.select()

    }
        , [password])

    return (
        <div className="h-screen w-full flex justify-center py-10">
            <div className='h-52 w-96 bg-cyan-50 flex-col  p-4 justify-center items-center '>

                <input type="range" defaultValue={0} onChange={(e) => { setRange(e.target.value) }} />
                <h3>number: </h3>
                <input type="checkbox" defaultValue={false} onChange={(e) => SetNumberAllow((pre) => !pre)} />
                <h3>char:</h3>
                <input type="checkbox" defaultValue={false} onChange={(e) => SetcharAllow((pre) => !pre)} />

                <h1>{range}</h1>
                <input type="text" readOnly value={password} ref={inputref} className='flex shadow p-1 rounded-lg overflow-hidden mb-4 outline-none' />
                <button onClick={copy} className='bg-blue bg-slate-400 rounded-md p-2'>copy</button>
            </div>
            <button className='bg-blue-500 rounded-lg shadow-lg p-2 m -2'> <Link to={"/"}> Home</Link> </button>
        </div>
    )
}
