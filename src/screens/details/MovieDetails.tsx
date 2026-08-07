import React, { FC, useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, ActivityIndicator } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MainStackParamList } from '../../navigations/types';
import { getMovieDetails } from '../../api/movieService';
import { TouchableOpacity, Linking, Alert } from 'react-native';
import { PlayIcon } from 'react-native-heroicons/solid';
import { getMovieVideos } from '../../api/movieService';
import useStyles from './styles';

type Props = NativeStackScreenProps<MainStackParamList, 'MOVIE_DETAILS'>;
const IMAGE_URL = 'https://image.tmdb.org/t/p/original';
const POSTER_URL = 'https://image.tmdb.org/t/p/w500';

const MovieDetails: FC<Props> = ({ route }) => {
  const styles = useStyles();
  const { movieId } = route.params;
  const [movie, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  console.log(movie, '....movie');
  useEffect(() => {
    fetchMovieDetails();
  }, []);

  const fetchMovieDetails = async () => {
    try {
      const data = await getMovieDetails(movieId);
      setMovie(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#E50914" />
      </View>
    );
  }
  const handleWatchTrailer = async () => {
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
        return;
      }

      const url = `https://www.youtube.com/watch?v=${youtubeVideo.key}`;

      await Linking.openURL(url);
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'Unable to open trailer');
    }
  };
  if (!movie) {
    return (
      <View style={styles.loader}>
        <Text>No Movie Found</Text>
      </View>
    );
  }

  return (
    <SafeAreaView edges={['left', 'right', 'bottom']} style={styles.container}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Backdrop */}
        <Image
          source={{
            uri: `${IMAGE_URL}${movie.backdrop_path}`,
          }}
          style={styles.backdrop}
        />

        {/* Poster + Info */}
        <View style={styles.header}>
          <Image
            source={{
              uri: `${POSTER_URL}${movie.poster_path}`,
            }}
            style={styles.poster}
          />

          <View style={styles.info}>
            <Text style={styles.title}>{movie.title}</Text>

            <Text style={styles.rating}>
              ⭐ {movie.vote_average?.toFixed(1)} / 10
            </Text>

            <Text style={styles.text}>📅 {movie.release_date}</Text>

            <Text style={styles.text}>⏱ {movie.runtime} min</Text>
          </View>
        </View>

        {/* Genres */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Genres</Text>

          <Text style={styles.value}>
            {movie.genres?.map((item: any) => item.name).join(' • ')}
          </Text>
        </View>

        {/* Tagline */}
        {!!movie.tagline && (
          <View style={styles.section}>
            <Text style={styles.tagline}>"{movie.tagline}"</Text>
          </View>
        )}

        {/* Overview */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Overview</Text>

          <Text style={styles.value}>{movie.overview}</Text>
        </View>
        <View style={styles.section}>
          <TouchableOpacity
            style={styles.trailerButton}
            onPress={handleWatchTrailer}
          >
            <PlayIcon color="#fff" size={22} />

            <Text style={styles.trailerText}>Watch Trailer</Text>
          </TouchableOpacity>
        </View>
        {/* Movie Info */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Movie Information</Text>

          <Text style={styles.infoText}>Status : {movie.status}</Text>

          <Text style={styles.infoText}>
            Language : {movie.original_language.toUpperCase()}
          </Text>

          <Text style={styles.infoText}>
            Country : {movie.origin_country?.join(', ')}
          </Text>
        </View>

        {/* Production */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Production Companies</Text>

          {movie.production_companies?.map((item: any) => (
            <View key={item.id} style={styles.companyCard}>
              {item.logo_path ? (
                <Image
                  source={{
                    uri: `https://image.tmdb.org/t/p/w200${item.logo_path}`,
                  }}
                  style={styles.companyLogo}
                  resizeMode="contain"
                />
              ) : (
                <View style={styles.logoPlaceholder}>
                  <Text style={styles.logoPlaceholderText}>🏢</Text>
                </View>
              )}

              <View style={styles.companyInfo}>
                <Text style={styles.companyName}>{item.name}</Text>

                <Text style={styles.companyCountry}>
                  {item.origin_country || 'N/A'}
                </Text>
              </View>
            </View>
          ))}
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MovieDetails;
