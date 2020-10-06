import { useLocalStorage } from '@rehooks/local-storage'
import React from 'react'

import { useAppStore } from './stores/app-store'


function Virksomhetsnummer() {
    const { setVirksomhetsnummer } = useAppStore()

    const [ virksomhetsnummer, setVirksomhetsnummerStorage ] = useLocalStorage('virksomhetsnummer', '995816598')
    setVirksomhetsnummer(virksomhetsnummer)

    return (
        <div style={{ border: '1px solid', padding: '1em' }}>
            <label>Virksomhetsnummer:
                <input defaultValue={virksomhetsnummer} onChange={(e) => {
                    setVirksomhetsnummerStorage(e.target.value)
                    setVirksomhetsnummer(e.target.value)
                }} /></label>
        </div>
    )
}

export default Virksomhetsnummer
