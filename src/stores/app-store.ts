import constate from 'constate'
import { useState } from 'react'

export const [ AppStoreProvider, useAppStore ] = constate(() => {

    const [ fodselsnummer, setFodselsnummer ] = useState<string>('')
    const [ virksomhetsnummer, setVirksomhetsnummer ] = useState<string>('')
    const [ månedslønn, setMånedslønn ] = useState<number>(55000)

    return {
        fodselsnummer, setFodselsnummer,
        virksomhetsnummer, setVirksomhetsnummer,
        månedslønn, setMånedslønn
    }
})
