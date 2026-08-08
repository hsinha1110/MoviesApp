import React from 'react';
import { View, Text } from 'react-native';
import { ArrowDownTrayIcon } from 'react-native-heroicons/outline';
import { useTheme } from '../../theme/useTheme';
import useStyles from './styles';

const Downloads = () => {
  const { theme } = useTheme();
  const styles = useStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.emptyContainer}>
        <ArrowDownTrayIcon size={60} color={theme.subText} />
        <Text style={styles.title}>No Downloads</Text>
        <Text style={styles.description}>
          Movies you download will appear here.
        </Text>
      </View>
    </View>
  );
};

export default Downloads;
