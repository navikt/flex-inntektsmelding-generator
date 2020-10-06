import { useLocalStorage } from '@rehooks/local-storage'
import React from 'react'

import { useAppStore } from './stores/app-store'


function Fodselsnummer() {
    const { setFodselsnummer } = useAppStore()

    const [ fnr, setFnrStorage ] = useLocalStorage('fnr', '01010112345')
    setFodselsnummer(fnr)

    return (
        <div style={{ border: '1px solid', padding: '1em' }}>
            <label>Fødselsnummer:
                <input defaultValue={fnr} onChange={(e) => {
                    setFnrStorage(e.target.value)
                    setFodselsnummer(e.target.value)
                }} /></label>
        </div>
    )
}

export default Fodselsnummer
