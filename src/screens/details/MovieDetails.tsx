import React, { FC, useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {
  NativeStackScreenProps,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import { SafeAreaView } from 'react-native-safe-area-context';
import { PlayIcon } from 'react-native-heroicons/solid';
import { BlurView } from '@react-native-community/blur';
import { useNavigation } from '@react-navigation/native';

import { MainStackParamList } from '../../navigations/types';
import { getMovieDetails, getMovieVideos } from '../../api/movieService';
import useStyles from './styles';
import Routes from '../../navigations/Routes';

type Props = NativeStackScreenProps<MainStackParamList, 'MOVIE_DETAILS'>;

const IMAGE_URL = 'https://image.tmdb.org/t/p/original';
const POSTER_URL = 'https://image.tmdb.org/t/p/w500';

const MovieDetails: FC<Props> = ({ route }) => {
  const styles = useStyles();

  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  const { movieId } = route.params;

  const [movie, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMovieDetails();
  }, [movieId]);

  const fetchMovieDetails = async () => {
    try {
      const data = await getMovieDetails(movieId);

      console.log('MOVIE DETAILS:', data);

      setMovie(data);
    } catch (error) {
      console.log('Movie details error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleWatchTrailer = () => {
    navigation.navigate(Routes.TRAILER, {
      movieId,
    });
  };

  if (loading) {
    return (
      <SafeAreaView
        edges={['left', 'right', 'bottom']}
        style={styles.container}
      >
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      </SafeAreaView>
    );
  }

  if (!movie) {
    return (
      <SafeAreaView
        edges={['left', 'right', 'bottom']}
        style={styles.container}
      >
        <View style={styles.loaderContainer}>
          <Text style={styles.value}>No Movie Found</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView edges={['left', 'right', 'bottom']} style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Backdrop */}
        <View style={styles.backdropContainer}>
          <Image
            source={{
              uri: `${IMAGE_URL}${movie.backdrop_path}`,
            }}
            style={styles.backdrop}
            resizeMode="cover"
          />

          <View style={styles.darkOverlay} />

          <BlurView
            style={styles.blurView}
            blurType="dark"
            blurAmount={10}
            reducedTransparencyFallbackColor="black"
          />
        </View>

        {/* Poster + Info */}
        <View style={styles.header}>
          <Image
            source={{
              uri: `${POSTER_URL}${movie.poster_path}`,
            }}
            style={styles.poster}
            resizeMode="cover"
          />

          <View style={styles.info}>
            <Text style={styles.title}>{movie.title || 'N/A'}</Text>

            <Text style={styles.rating}>
              ⭐ {movie.vote_average?.toFixed(1) || 'N/A'} / 10
            </Text>

            <Text style={styles.text}>📅 {movie.release_date || 'N/A'}</Text>

            <Text style={styles.text}>
              ⏱ {movie.runtime ? `${movie.runtime} min` : 'N/A'}
            </Text>
          </View>
        </View>

        {/* Genres */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Genres</Text>

          <Text style={styles.value}>
            {movie.genres?.length
              ? movie.genres.map((item: any) => item.name).join(' • ')
              : 'N/A'}
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

          <Text style={styles.value}>
            {movie.overview || 'No overview available.'}
          </Text>
        </View>

        {/* Trailer */}
        <View style={styles.section}>
          <TouchableOpacity
            style={styles.trailerButton}
            onPress={handleWatchTrailer}
            activeOpacity={0.8}
          >
            <PlayIcon color="#fff" size={22} />

            <Text style={styles.trailerText}>Watch Trailer</Text>
          </TouchableOpacity>
        </View>

        {/* Movie Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Movie Information</Text>

          <Text style={styles.infoText}>Status : {movie.status || 'N/A'}</Text>

          <Text style={styles.infoText}>
            Language :{' '}
            {movie.original_language
              ? movie.original_language.toUpperCase()
              : 'N/A'}
          </Text>

          <Text style={styles.infoText}>
            Country :{' '}
            {movie.origin_country?.length
              ? movie.origin_country.join(', ')
              : 'N/A'}
          </Text>
        </View>

        {/* Production Companies */}
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
