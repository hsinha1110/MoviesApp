import React, { useEffect } from 'react';
import { ActivityIndicator, Alert, Linking, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackParamList } from '../../navigations/types';
import { getMovieVideos } from '../../api/movieService';

type Props = NativeStackScreenProps<MainStackParamList, 'TRAILER'>;

const Trailer = ({ route, navigation }: Props) => {
  const { movieId } = route.params;

  useEffect(() => {
    openTrailer();
  }, []);

  const openTrailer = async () => {
    try {
      const data = await getMovieVideos(movieId);

      const youtubeVideo =
        data.results.find(
          (item: any) => item.site === 'YouTube' && item.type === 'Trailer',
        ) ||
        data.results.find(
          (item: any) => item.site === 'YouTube' && item.type === 'Teaser',
        ) ||
        data.results.find((item: any) => item.site === 'YouTube');

      if (!youtubeVideo) {
        Alert.alert('Trailer', 'No trailer available');
        navigation.goBack();
        return;
      }

      const url = `https://www.youtube.com/watch?v=${youtubeVideo.key}`;

      await Linking.openURL(url);

      navigation.goBack();
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'Something went wrong');
      navigation.goBack();
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ActivityIndicator size="large" />
    </View>
  );
};

export default Trailer;
