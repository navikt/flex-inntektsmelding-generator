class Environment {

    private env = (window as any)._env_;

    get isDev() {
        return this.env.ENVIRONMENT === 'dev'
    }

    get isQ1() {
        return this.env.ENVIRONMENT === 'q1'
    }

    get opprettInntektsmeldingRoot() {
        return this.env.OPPRETT_INNTEKTSMELDING_ROOT
    }
}

const env = new Environment()

export default env
