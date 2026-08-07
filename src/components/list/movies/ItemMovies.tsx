import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import Routes from '../../../navigations/Routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParamList } from '../../../navigations/types';
import { ItemMovieProps } from '../../../types';

const ItemMovie = ({ item }: ItemMovieProps) => {
  type NavigationProp = NativeStackNavigationProp<MainStackParamList, 'HOME'>;
  const navigation = useNavigation<NavigationProp>();
  return (
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
          <Text style={styles.label}>⭐ Rating</Text>

          <Text style={styles.value}>{item.vote_average.toFixed(1)}/10</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Release</Text>

          <Text style={styles.value}>{item.release_date}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ItemMovie;
