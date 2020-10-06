import React from 'react'

import { useAppStore } from './stores/app-store'


export default () => {
    const { setMånedslønn, månedslønn } = useAppStore()


    return (
        <div style={{ border: '1px solid', padding: '1em' }}>
            <label>Brutto månedslønn:
                <input type={'number'} min={0} step={1} max={200000} value={månedslønn} onChange={(e) => {
                    setMånedslønn(Number(e.target.value))
                }} /></label>
        </div>
    )
}

