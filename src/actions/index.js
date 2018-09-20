const API_KEY = 'bacafdd3a834375e45bd3975572adf24'
const ROOT_URL = `https://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function featchWeather() {
	const url = `${ROOT_URL}&q=${city},ca`
	return {
		type: FETCH_WEATHER
	}
}
