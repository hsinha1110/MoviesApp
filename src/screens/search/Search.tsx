import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';

import { searchMovies } from '../../api/movieService';
import MovieCard from '../../components/card/MoviesCard';

import useStyles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../theme/useTheme';

const Search = () => {
  const { theme } = useTheme();
  const styles = useStyles(theme);

  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!query.trim()) {
      return;
    }
    try {
      setError('');
      setLoading(true);

      const response = await searchMovies(query.trim(), 1);

      setMovies(response.results || []);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }

      console.log('Search error:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={theme.primary} />
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBox}>
        <MagnifyingGlassIcon size={22} color={theme.subText} />
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Search movies..."
          placeholderTextColor={theme.subText}
          style={styles.input}
          returnKeyType="search"
          onSubmitEditing={handleSearch}
        />
        {query.length > 0 && (
          <Pressable
            onPress={() => {
              setQuery('');
              setMovies([]);
            }}
          >
            <Text style={styles.clear}>×</Text>
          </Pressable>
        )}
      </View>
      {/* Empty */}
      {!loading && movies.length === 0 && (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>
            {query ? 'No movies found' : 'Search for your favourite movies'}
          </Text>
        </View>
      )}
      {/* Results */}
      {!loading && movies.length > 0 && (
        <FlatList
          data={movies}
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

export default Search;
