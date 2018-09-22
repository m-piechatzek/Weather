import React from 'react'
import { connect } from 'react-redux'
import Chart from '../components/chart'

class WeatherList extends React.Component {
	renderWeather(cityData) {
		const name = cityData.city.name
		const temp = _.map(
			cityData.list.map(weather => weather.main.temp),
			temps => temps - 273
		)
		const pressures = cityData.list.map(weather => weather.main.pressure)
		const humidities = cityData.list.map(weather => weather.main.humidity)
		console.log(temp)

		return (
			<tr key={name}>
				<td>{name}</td>
				<td>
					<Chart color="blue" data={temp} units="C" />
				</td>
				<td>
					<Chart color="red" data={pressures} units="hPa" />
				</td>
				<td>
					<Chart color="orange" data={humidities} units="%" />
				</td>
			</tr>
		)
	}
	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (C)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>

				<tbody>{this.props.weather.map(this.renderWeather)}</tbody>
			</table>
		)
	}
}

function mapStateToProps({ weather }) {
	return { weather }
}

export default connect(mapStateToProps)(WeatherList)
