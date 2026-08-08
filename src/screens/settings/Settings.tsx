import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  MoonIcon,
  ShieldCheckIcon,
  InformationCircleIcon,
  DocumentTextIcon,
} from 'react-native-heroicons/outline';

import useStyles from './styles';
import CustomSwitch from '../../components/switch/CustomSwitch';
import { useTheme } from '../../theme/useTheme';

const Settings = () => {
  const { theme, isDark, toggleTheme } = useTheme();
  const styles = useStyles(theme);
  const [hindi, setHindi] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Settings</Text>

      {/* Preferences */}
      <Text style={styles.sectionTitle}>Preferences</Text>

      <View style={styles.section}>
        {/* Theme */}
        <View style={styles.option}>
          <MoonIcon size={22} color={theme.text} />

          <Text style={styles.optionText}>Theme</Text>

          <CustomSwitch
            value={isDark}
            onChange={toggleTheme}
            style={styles.switch}
          />
        </View>
      </View>

      {/* About */}
      <Text style={styles.sectionTitle}>About</Text>

      <View style={styles.section}>
        <View style={styles.option}>
          <ShieldCheckIcon size={22} color={theme.text} />

          <Text style={styles.optionText}>Privacy Policy</Text>
        </View>

        <View style={styles.option}>
          <InformationCircleIcon size={22} color={theme.text} />

          <Text style={styles.optionText}>About App</Text>
        </View>

        <View style={styles.option}>
          <DocumentTextIcon size={22} color={theme.text} />

          <Text style={styles.optionText}>Terms & Conditions</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
