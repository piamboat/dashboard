import React, {useState} from 'react';
import { Button } from './Button';
import openweathermap from '../pages/api/openweather';

const WeatherContent = ({ id, content, onUpdateWeather }) => {
    const [city, setCity] = useState(content);

    const onCityWeatherSearch = async (term) => {
        // call api
        try {
            const res = await openweathermap.get('/data/2.5/weather', {
                params: { 
                    q: term,
                    units: 'metric'
                }
            })

            // destructuring array
            const { data } = res
            if (id === null) { // add
                onUpdateWeather(data);
            }
            else // edit
            {
                onUpdateWeather(id, data);
            }
        }
        catch
        {
            console.log('City is not found!')
        }
    }

    return (
        <div>
            <h2 className="text-xl mb-2">{ id ? 'Edit Weather' : 'Add Weather' }</h2>
            <div className="flex">
                <div className="flex-1 mr-1">
                    <input
                        type="text"
                        className="w-full px-2.5 py-1 focus:outline-none rounded-md"
                        placeholder="Enter text"
                        value={city}
                        onChange={ e => setCity(e.target.value) }
                    />
                    <p className="text-red-600 text-xs mt-1">{city.length < 3 ? 'Please enter at least 3 characters.' : ''}</p>
                </div>
                <div>
                    <Button
                        color="primary"
                        onClick={ () => onCityWeatherSearch(city.trim()) }
                    >
                        { id ? 'Edit' : 'Add' }
                    </Button>
                </div>
            </div>
        </div>        
    );
}

WeatherContent.defaultProps = {
    id: null,
    content: ''
}

export default WeatherContent;

