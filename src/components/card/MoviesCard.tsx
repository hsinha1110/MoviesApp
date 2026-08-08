import React, { useEffect, useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParamList } from '../../navigations/types';
import { ItemMovieProps } from '../../types';
import { HeartIcon as HeartOutlineIcon } from 'react-native-heroicons/outline';
import { HeartIcon as HeartSolidIcon } from 'react-native-heroicons/solid';
import Routes from '../../navigations/Routes';
import useStyles from './styles';

type NavigationProp = NativeStackNavigationProp<MainStackParamList>;
const FAVORITES_KEY = '@favorite_movies';

const MovieCard = ({ item }: ItemMovieProps) => {
  const navigation = useNavigation<NavigationProp>();
  const styles = useStyles();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const checkFavorite = async () => {
      const data = await AsyncStorage.getItem(FAVORITES_KEY);
      const favourite = data ? JSON.parse(data) : [];
      setIsFavorite(favourite.some((movie: any) => movie.id === item.id));
    };
    checkFavorite();
  }, [item.id]);

  const toggleFavorite = async () => {
    const data = await AsyncStorage.getItem(FAVORITES_KEY);
    const favorites = data ? JSON.parse(data) : [];

    const isFav = favorites.some((movie: any) => movie.id === item.id);
    const updated = isFav
      ? favorites.filter((movie: any) => movie.id !== item.id)
      : [...favorites, item];
    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
    setIsFavorite(!isFav);
  };

  return (
    <View style={styles.shadowContainer}>
      <Pressable
        style={styles.card}
        onPress={() =>
          navigation.navigate(Routes.MOVIE_DETAILS, {
            movieId: item.id,
          })
        }
      >
        {/* Poster */}
        <View style={styles.posterContainer}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
            }}
            style={styles.poster}
          />

          {/* Favourite Heart */}
          <Pressable style={styles.heartButton} onPress={toggleFavorite}>
            {isFavorite ? (
              <HeartSolidIcon size={22} color="#EF4444" />
            ) : (
              <HeartOutlineIcon size={22} color="#FFFFFF" strokeWidth={2} />
            )}
          </Pressable>
        </View>

        {/* Movie Content */}
        <View style={styles.content}>
          <Text numberOfLines={2} style={styles.title}>
            {item.title}
          </Text>

          <View style={styles.row}>
            <Text style={styles.label}>⭐ {item.vote_average.toFixed(1)}</Text>

            <Text style={styles.value}>{item.release_date}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default React.memo(MovieCard);
