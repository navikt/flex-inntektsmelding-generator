import constate from 'constate'
import { useState } from 'react'

export const [ AppStoreProvider, useAppStore ] = constate(() => {

    const [ fodselsnummer, setFodselsnummer ] = useState<string>('')
    const [ virksomhetsnummer, setVirksomhetsnummer ] = useState<string>('')

    return {
        fodselsnummer, setFodselsnummer,
        virksomhetsnummer, setVirksomhetsnummer
    }
})
