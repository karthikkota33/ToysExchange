import { useEffect, useState } from 'react';
import * as Location from 'expo-location';

export default useLocation = () => {
    const [location, setLocation] = useState();
    const [areaName, setAreaName] = useState();

    const getLocation = async () => {
        try {
            const { granted } = await Location.requestPermissionsAsync();
            if (!granted) return;
            const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
            setLocation({ latitude, longitude });
            const locName = await Location.reverseGeocodeAsync({ latitude, longitude });
            setAreaName(locName[0].name);
            //console.log(locName[0].name);
        }
        catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {
        getLocation();
    }, []);

    return {
        location,areaName
    };

}