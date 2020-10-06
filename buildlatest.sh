echo "Bygger flex-inntektsmelding-generator latest for docker compose utvikling"

npm i
npm run build

docker build . -t flex-inntektsmelding-generator:latest
