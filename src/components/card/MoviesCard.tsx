import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import Routes from '../../navigations/Routes';
import { MainStackParamList } from '../../navigations/types';
import { ItemMovieProps } from '../../types';
import useStyles from './styles';

type NavigationProp = NativeStackNavigationProp<MainStackParamList>;
const MovieCard = ({ item }: ItemMovieProps) => {
  const navigation = useNavigation<NavigationProp>();
  const styles = useStyles();

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
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
          }}
          style={styles.poster}
        />

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
