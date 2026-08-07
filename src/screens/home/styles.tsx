import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { moderateScale } from '../../styles/scaling';

const useStyles = () => {
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
        },

        loaderContainer: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
        },

        errorContainer: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: moderateScale(20),
          backgroundColor: '#fff',
        },

        errorText: {
          fontSize: moderateScale(16),
          color: 'red',
          fontWeight: '600',
          textAlign: 'center',
        },

        heading: {
          fontSize: moderateScale(22), 
          fontWeight: '700',
          color: '#000',
          marginHorizontal: moderateScale(16),
          marginTop: moderateScale(20),
          marginBottom: moderateScale(12),
        },

        list: {
          paddingHorizontal: moderateScale(16),
        },

        footerLoader: {
          paddingVertical: moderateScale(20),
          justifyContent: 'center',
          alignItems: 'center',
        },

        bannerContainer: {
          height: moderateScale(350),
          width: '100%',
          overflow: 'hidden',
        },

        banner: {
          width: '100%',
          height: '100%',
        },

        overlay: {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.4)',
        },

        buttonContainer: {
          position: 'absolute',
          bottom: moderateScale(30),
          left: moderateScale(16),
          right: moderateScale(16),
          flexDirection: 'row',
          justifyContent: 'space-between',
        },

        playButton: {
          flex: 1,
          height: moderateScale(48),
          backgroundColor: '#E50914',
          borderRadius: moderateScale(8),
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: moderateScale(10),
        },

        downloadButton: {
          flex: 1,
          height: moderateScale(48),
          backgroundColor: '#3A3A3A',
          borderRadius: moderateScale(8),
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: moderateScale(10),
        },
        contentStyle: {
          paddingHorizontal: moderateScale(12),
        },
      }),
    [],
  );
};

export default useStyles;
