import React, { useState } from 'react'

import { useAppStore } from './stores/app-store'
import env from './utils/environment'


function SlettInntektsmeldinger() {

    const [ fetching, setFetching ] = useState(false)
    const {  fodselsnummer } = useAppStore()

    return (
        <div style={{ paddingTop: '1em' }}>
            <button disabled={fetching} style={{ fontSize: 20 }} onClick={async() => {
                if (!fodselsnummer) {
                    window.alert('Fødselsnummer er ikke satt')
                    return
                }
                try {
                    setFetching(true)
                    const res = await fetch(`${env.slettInntektsmeldingRoot}/${fodselsnummer}`, {
                        method: 'DELETE',
                        credentials: 'include'
                    })
                    if (res.ok) {
                        const tekst = await res.text()
                        window.alert(tekst)
                    } else {
                        window.alert('Noe gikk galt ved sletting av inntektsmeldinger')
                    }
                } finally {
                    setFetching(false)
                }

            }}>Slett alle inntektsmeldinger på {fodselsnummer} <span role={'img'} aria-label={'Wastebasket'}>🗑️️</span>
            </button>
        </div>
    )
}

export default SlettInntektsmeldinger
