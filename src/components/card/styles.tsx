import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { moderateScale } from '../../styles/scaling';
const useStyles = () => {
  return useMemo(
    () =>
      StyleSheet.create({
        shadowContainer: {
          width: moderateScale(160),
          marginRight: moderateScale(14),
          marginVertical: moderateScale(10),

          borderRadius: moderateScale(12),
          backgroundColor: '#fff',
          height: moderateScale(280),
          elevation: moderateScale(6),

          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: moderateScale(3),
          },
          shadowOpacity: 0.18,
          shadowRadius: moderateScale(6),
        },

        card: {
          backgroundColor: '#fff',
          borderRadius: moderateScale(12),
          overflow: 'hidden',
        },

        poster: {
          width: '100%',
          height: moderateScale(200), // 220 -> 200
        },

        content: {
          paddingHorizontal: moderateScale(10),
          paddingVertical: moderateScale(8), // 10 -> 8
        },

        title: {
          fontSize: moderateScale(15),
          fontWeight: '700',
          color: '#222',
          height: moderateScale(38), // 42 -> 38
        },

        row: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: moderateScale(6),
        },

        label: {
          fontSize: moderateScale(12),
          color: '#666',
          fontWeight: '600',
        },

        value: {
          fontSize: moderateScale(12),
          color: '#111',
          fontWeight: '700',
        },
      }),
    [],
  );
};

export default useStyles;
