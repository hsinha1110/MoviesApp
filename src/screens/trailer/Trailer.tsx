import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import YoutubePlayer from 'react-native-youtube-iframe';

import { MainStackParamList } from '../../navigations/types';
import { getMovieVideos } from '../../api/movieService';

type Props = NativeStackScreenProps<MainStackParamList, 'TRAILER'>;

const Trailer = ({ route }: Props) => {
  const { movieId } = route.params;

  const [videoKey, setVideoKey] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTrailer = async () => {
      try {
        const response = await getMovieVideos(movieId);

        console.log('VIDEOS:', response);

        const trailer = response?.results?.find(
          (video: any) =>
            video.site === 'YouTube' && video.type === 'Trailer' && video.key,
        );

        if (!trailer) {
          Alert.alert('Trailer not found');
          return;
        }

        console.log('YOUTUBE KEY:', trailer.key);

        setVideoKey(trailer.key);
      } catch (error) {
        console.error('Trailer Error:', error);
        Alert.alert('Error', 'Trailer load nahi ho saka.');
      } finally {
        setLoading(false);
      }
    };

    loadTrailer();
  }, [movieId]);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#000',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  if (!videoKey) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#000',
        }}
      />
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
      }}
    >
      <YoutubePlayer height={250} play={true} videoId={videoKey} />
    </View>
  );
};

export default Trailer;
