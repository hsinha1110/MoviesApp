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
          width: moderateScale(160),
          backgroundColor: '#fff',
          borderRadius: moderateScale(12),
          overflow: 'hidden',
          marginRight: moderateScale(14),
          marginBottom: moderateScale(14),
        },
        posterContainer: {
          position: 'relative',
          width: '100%',
        },

        poster: {
          width: '100%',
          height: moderateScale(200),
        },

        heartButton: {
          position: 'absolute',
          top: moderateScale(8),
          right: moderateScale(8),
          width: moderateScale(36),
          height: moderateScale(36),
          borderRadius: moderateScale(18),
          backgroundColor: 'rgba(0,0,0,0.65)',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 10,
        },

        content: {
          paddingHorizontal: moderateScale(10),
          paddingVertical: moderateScale(8),
        },

        title: {
          fontSize: moderateScale(15),
          fontWeight: '700',
          color: '#222',
          height: moderateScale(38),
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
