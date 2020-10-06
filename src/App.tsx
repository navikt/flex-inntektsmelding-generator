import React from 'react'

import Fodselsnummer from './Fodselsnummer'
import Månedslønn from './Månedslønn'
import SendInntektsmelding from './SendInntektsmelding'
import SlettInntektsmeldinger from './SlettInntektsmeldinger'
import StoreProvider from './stores/store-provider'
import Virksomhetsnummer from './Virksomhetsnummer'

function App() {


    return (
        <StoreProvider>
            <div style={{
                margin: 'auto',
                width: '70%',
                paddingTop: '3em',
                fontFamily: '"Courier New", Courier, monospace'
            }}>
                <h1 style={{ textAlign: 'center' }}>Inntekstmelding testdatagenerator</h1>
                <Fodselsnummer />
                <Virksomhetsnummer />
                <Månedslønn />
                <SendInntektsmelding />
                <SlettInntektsmeldinger />
            </div>
        </StoreProvider>
    )
}

export default App
