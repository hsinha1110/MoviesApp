import React, { useCallback, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../theme/useTheme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MovieCard from '../../components/card/MoviesCard';
import useStyles from './styles';

const FAVORITES_KEY = '@favorite_movies';

const FavoritesScreen = () => {
  const { theme } = useTheme();
  const styles = useStyles(theme);

  const [favorites, setFavorites] = useState<any[]>([]);

  const loadFavorites = async () => {
    try {
      const data = await AsyncStorage.getItem(FAVORITES_KEY);

      setFavorites(data ? JSON.parse(data) : []);
    } catch (error) {
      console.log('Load favorites error:', error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadFavorites();
    }, []),
  );

  return (
    <SafeAreaView edges={['left', 'right', 'bottom']} style={styles.container}>
      <Text style={styles.heading}>Favourites</Text>
      {favorites.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No favourite movies</Text>
        </View>
      ) : (
        <FlatList
          data={favorites}
          numColumns={2}
          keyExtractor={item => String(item.id)}
          columnWrapperStyle={styles.row}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <MovieCard item={item} />}
        />
      )}
    </SafeAreaView>
  );
};

export default FavoritesScreen;
