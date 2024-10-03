import React, {
  Children,
  PropsWithChildren,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  View,
  Text,
  Button,
  PermissionsAndroid,
  Platform,
  StyleSheet,
} from 'react-native';
import Geolocation, {GeoPosition} from 'react-native-geolocation-service';
import {WebView} from 'react-native-webview';
import {getStyle} from './style';
import {GEO_API} from '@env';

interface Coordinates {
  latitude: number;
  longitude: number;
}

interface GeocodingResult {
  components: {
    country: string;
  };
}

interface GeocodingResponse {
  results: GeocodingResult[];
}

const GeoLocationWrapper: React.FC<PropsWithChildren> = ({children}) => {
  const [location, setLocation] = useState<Coordinates | null>(null);
  const [isUkraine, setIsUkraine] = useState<boolean | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const styles = useMemo(() => getStyle(), []);

  const requestLocationPermission = async (): Promise<void> => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Access',
          message:
            'The app requires access to your location to determine the country.',
          buttonNeutral: 'Ask me later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        getLocation();
      } else {
        console.log('Location access denied');
        setLoading(false);
      }
    } else {
      getLocation();
    }
  };

  const getLocation = (): void => {
    Geolocation.getCurrentPosition(
      (position: GeoPosition) => {
        const {latitude, longitude} = position.coords;
        setLocation({latitude, longitude});
        checkCountry(latitude, longitude);
      },
      error => {
        console.log(error.code, error.message);
        setLoading(false);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  const checkCountry = async (
    latitude: number,
    longitude: number,
  ): Promise<void> => {
    try {
      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${GEO_API}`,
      );
      const data: GeocodingResponse = await response.json();
      const country = data.results[0]?.components?.country;
      setIsUkraine(country === 'Ukraine');
      setLoading(false);
    } catch (error) {
      console.log('Error during geocoding:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
      {isUkraine ? (
        children
      ) : (
        <WebView source={{uri: 'https://wikipedia.org'}} />
      )}
    </View>
  );
};

export default GeoLocationWrapper;
