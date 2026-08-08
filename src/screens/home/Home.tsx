import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import {
  getNowPlayingMovies,
  getPopularMovies,
  getTrendingMovies,
  getUpcomingMovies,
} from '../../api/movieService';
import { Movie } from '../../types';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PlayIcon } from 'react-native-heroicons/solid';
import { ArrowDownTrayIcon } from 'react-native-heroicons/outline';
import useStyles from './styles';
import AppButton from '../../components/button/AppButton';
import MoviesCard from '../../components/card/MoviesCard';
import { useTheme } from '../../theme/useTheme';
import { useNavigation } from '@react-navigation/native';
import Routes from '../../navigations/Routes';

const HomeScreen = () => {
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState<Movie[]>([]);
  const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState('');
  const [pages, setPages] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [bannerMovie, setBannerMovie] = useState<Movie | null>(null);

  const navigation = useNavigation<any>();
  useEffect(() => {
    fetchPopularMovies();
  }, [pages]);
  useEffect(() => {
    fetchNowPlaying();
  }, [pages]);
  useEffect(() => {
    fetchTrendingMovies();
  }, [pages]);
  useEffect(() => {
    fetchUpcomingMovies();
  }, [pages]);
  const { theme } = useTheme();
  const styles = useStyles(theme);

  // Popular Movies
  const fetchPopularMovies = async () => {
    try {
      if (pages === 1) {
        setLoading(true);
      } else {
        setLoadingMore(true);
      }

      const data = await getPopularMovies(pages);

      setTotalPages(data.total_pages);

      if (pages === 1) {
        const randomIndex = Math.floor(Math.random() * data.results.length);
        setBannerMovie(data.results[randomIndex]);
        setPopularMovies(data.results);
      } else {
        setPopularMovies(prev => {
          const result = [...prev];

          for (const item of data.results) {
            if (!result.some(movie => movie.id === item.id)) {
              result.push(item);
            }
          }
          return result;
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
        setError(error.message);
      }
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };
  const fetchNowPlaying = async () => {
    try {
      if (pages === 1) {
        setLoading(true);
      } else {
        setLoadingMore(true);
      }

      const data = await getNowPlayingMovies(pages);

      setTotalPages(data.total_pages);

      if (pages === 1) {
        const randomIndex = Math.floor(Math.random() * data.results.length);
        setBannerMovie(data.results[randomIndex]);
        setNowPlayingMovies(data.results);
      } else {
        setNowPlayingMovies(prev => {
          const result = [...prev];

          for (const item of data.results) {
            if (!result.some(movie => movie.id === item.id)) {
              result.push(item);
            }
          }
          return result;
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
        setError(error.message);
      }
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };
  const fetchTrendingMovies = async () => {
    try {
      if (pages === 1) {
        setLoading(true);
      } else {
        setLoadingMore(true);
      }

      const data = await getTrendingMovies(pages);

      setTotalPages(data.total_pages);

      if (pages === 1) {
        const randomIndex = Math.floor(Math.random() * data.results.length);
        setBannerMovie(data.results[randomIndex]);
        setTrendingMovies(data.results);
      } else {
        setTrendingMovies(prev => {
          const result = [...prev];

          for (const item of data.results) {
            if (!result.some(movie => movie.id === item.id)) {
              result.push(item);
            }
          }
          return result;
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
        setError(error.message);
      }
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };
  const fetchUpcomingMovies = async () => {
    try {
      if (pages === 1) {
        setLoading(true);
      } else {
        setLoadingMore(true);
      }

      const data = await getUpcomingMovies(pages);
      setTotalPages(data.total_pages);

      if (pages === 1) {
        setUpcomingMovies(data.results);
      } else {
        setUpcomingMovies(prev => {
          const result = [...prev];

          for (const item of data.results) {
            if (!result.some(movie => movie.id === item.id)) {
              result.push(item);
            }
          }

          return result;
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
        setError(error.message);
      }
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };
  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  const loadMore = () => {
    if (loadingMore || pages >= totalPages) return;

    setPages(prev => prev + 1);
  };
  return (
    <SafeAreaView edges={['left', 'right', 'bottom']} style={styles.container}>
      {/* Fixed Banner */}
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/original${bannerMovie?.backdrop_path}`,
          }}
          style={styles.banner}
          resizeMode="cover"
        />

        <View style={styles.overlay} />

        <View style={styles.buttonContainer}>
          <AppButton
            title="Play"
            style={styles.playButton}
            leftIcon={<PlayIcon size={22} color="#fff" />}
            onPress={() => {
              if (!bannerMovie) return;

              navigation.navigate(Routes.TRAILER, {
                movieId: bannerMovie.id,
              });
            }}
          />

          <AppButton
            title="Download"
            style={styles.downloadButton}
            leftIcon={<ArrowDownTrayIcon size={22} color="#fff" />}
            onPress={() => {}}
          />
        </View>
      </View>

      {/* Sirf niche ka content scroll hoga */}
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <Text style={styles.heading}>Popular Movies</Text>

        <FlatList
          horizontal
          data={popularMovies}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <MoviesCard item={item} />}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentStyle}
          onEndReached={loadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            loadingMore ? (
              <ActivityIndicator
                size="small"
                color="#E50914"
                style={{ marginHorizontal: 16 }}
              />
            ) : null
          }
        />
        <Text style={styles.heading}>Now Playing</Text>

        <FlatList
          horizontal
          data={nowPlayingMovies}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <MoviesCard item={item} />}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentStyle}
          onEndReached={loadMore}
          onEndReachedThreshold={0.5}
        />
        <Text style={styles.heading}>Upcoming Movies</Text>

        <FlatList
          horizontal
          data={upcomingMovies}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <MoviesCard item={item} />}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentStyle}
          onEndReached={loadMore}
          onEndReachedThreshold={0.5}
        />
        <Text style={styles.heading}>Trending Movies</Text>

        <FlatList
          horizontal
          data={trendingMovies}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <MoviesCard item={item} />}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentStyle}
          onEndReached={loadMore}
          onEndReachedThreshold={0.5}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
