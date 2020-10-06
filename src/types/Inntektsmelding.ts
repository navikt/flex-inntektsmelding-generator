import { LocalDate, LocalDateTime } from '@js-joda/core'

export interface Inntektsmelding {
    inntektsmeldingId: string;
    arbeidstakerFnr: string;
    arbeidstakerAktorId: string;
    virksomhetsnummer?: string;
    arbeidsgiverFnr?: string;
    arbeidsgiverAktorId?: string;
    begrunnelseForReduksjonEllerIkkeUtbetalt?: string;
    arbeidsgivertype: 'PRIVAT' | 'VIRKSOMHET';
    arbeidsforholdId?: string;
    beregnetInntekt?: string;
    refusjon: Refusjon;
    endringIRefusjoner: EndringIRefusjon[];
    opphoerAvNaturalytelser: OpphoerAvNaturalytelse[];
    gjenopptakelseNaturalytelser: GjenopptakelseNaturalytelse[];
    arbeidsgiverperioder: Periode[];
    status: 'GYLDIG' | 'MANGELFULL';
    arkivreferanse: string;
    ferieperioder: Periode[];
    foersteFravaersdag?: LocalDate;
    mottattDato: LocalDateTime;

}


export interface Refusjon {
    beloepPrMnd?: string;
    opphoersdato?: LocalDate;
}

export interface EndringIRefusjon {
    beloep?: string;
    endringsdato?: LocalDate;
}

export type naturalytelse =
    'KOSTDOEGN'
    | 'LOSJI'
    | 'ANNET'
    | 'SKATTEPLIKTIGDELFORSIKRINGER'
    | 'BIL'
    | 'KOSTDAGER'
    | 'RENTEFORDELLAAN'
    | 'BOLIG'
    | 'ELEKTRONISKKOMMUNIKASJON'
    | 'AKSJERGRUNNFONDSBEVISTILUNDERKURS'
    | 'OPSJONER'
    | 'KOSTBESPARELSEIHJEMMET'
    | 'FRITRANSPORT'
    | 'BEDRIFTSBARNEHAGEPLASS'
    | 'TILSKUDDBARNEHAGEPLASS'
    | 'BESOEKSREISERHJEMMETANNET'
    | 'INNBETALINGTILUTENLANDSKPENSJONSORDNING'
    | 'YRKEBILTJENESTLIGBEHOVLISTEPRIS'
    | 'YRKEBILTJENESTLIGBEHOVKILOMETER'

export interface OpphoerAvNaturalytelse {
    beloepPrMnd?: string;
    naturalytelse?: naturalytelse;
    fom?: LocalDate;
}

export interface GjenopptakelseNaturalytelse {
    beloepPrMnd?: string;
    naturalytelse?: naturalytelse;
    fom?: LocalDate;
}

export interface Periode {
    fom: LocalDate;
    tom: LocalDate;
}
