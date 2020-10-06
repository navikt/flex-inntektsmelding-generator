import { LocalDate, LocalDateTime } from '@js-joda/core'
import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

import { useAppStore } from './stores/app-store'
import { Inntektsmelding } from './types/Inntektsmelding'
import env from './utils/environment'


function SendInntektsmelding() {

    const [ fetching, setFetching ] = useState(false)
    const { virksomhetsnummer, fodselsnummer } = useAppStore()

    const genererInntektsmelding = (): Inntektsmelding => {
        return {
            'inntektsmeldingId': uuid(),
            'arbeidstakerFnr': fodselsnummer,
            'arbeidstakerAktorId': fodselsnummer,
            'virksomhetsnummer': virksomhetsnummer,
            'begrunnelseForReduksjonEllerIkkeUtbetalt': 'En optional begrunnelse',
            'arbeidsgivertype': 'VIRKSOMHET',
            'arbeidsforholdId': uuid(),
            'beregnetInntekt': '38000.00',
            'refusjon': { 'beloepPrMnd': '3000.00', 'opphoersdato': LocalDate.now() },
            'endringIRefusjoner': [ { 'endringsdato': LocalDate.now(), 'beloep': '20000.00' } ],
            'opphoerAvNaturalytelser': [ {
                'naturalytelse': 'RENTEFORDELLAAN',
                'fom': LocalDate.now(),
                'beloepPrMnd': '200.00'
            } ],
            'gjenopptakelseNaturalytelser': [ {
                'fom': LocalDate.now().minusDays(3),
                'beloepPrMnd': '200.00',
                'naturalytelse': 'RENTEFORDELLAAN'
            } ],
            'arbeidsgiverperioder': [ { 'fom': LocalDate.now().minusDays(3), 'tom': LocalDate.now() } ],
            'status': 'GYLDIG',
            'arkivreferanse': uuid(),
            'ferieperioder': [ { 'fom': LocalDate.now().minusDays(3), 'tom': LocalDate.now() } ],
            'foersteFravaersdag': LocalDate.now().minusDays(3),
            'mottattDato': LocalDateTime.now()
        }
    }

    return (
        <div style={{ paddingTop: '1em' }}>
            <button disabled={fetching} style={{ fontSize: 40 }} onClick={async() => {
                if (!fodselsnummer) {
                    window.alert('Fødselsnummer er ikke satt')
                    return
                }
                try {
                    setFetching(true)
                    const res = await fetch(`${env.opprettInntektsmeldingRoot()}/${fodselsnummer}`, {
                        method: 'POST',
                        credentials: 'include',
                        body: JSON.stringify(genererInntektsmelding()),
                        headers: { 'Content-Type': 'application/json' }
                    })
                    if (res.ok) {
                        const tekst = await res.text()
                        window.alert(tekst)
                    } else {
                        window.alert('Noe gikk galt ved publisering av inntektsmelding')
                    }
                } finally {
                    setFetching(false)
                }

            }}>Send inntekstmelding <span role={'img'} aria-label={'Money with Wings'}>💸</span>
            </button>
        </div>
    )
}

export default SendInntektsmelding
