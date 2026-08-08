import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { moderateScale } from '../../styles/scaling';

const useStyles = (theme: any) => {
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: theme.background,
        },
        loaderContainer: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme.background,
        },

        errorContainer: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: moderateScale(20),
          backgroundColor: theme.background,
        },

        errorText: {
          fontSize: moderateScale(16),
          color: theme.primary,
          fontWeight: '600',
          textAlign: 'center',
        },

        heading: {
          fontSize: moderateScale(22),
          fontWeight: '700',
          color: theme.text,
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
          backgroundColor: theme.primary,
          borderRadius: moderateScale(8),
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: moderateScale(10),
        },

        downloadButton: {
          flex: 1,
          height: moderateScale(48),
          backgroundColor: theme.card,
          borderRadius: moderateScale(8),
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: moderateScale(10),
          borderWidth: StyleSheet.hairlineWidth,
          borderColor: theme.border,
        },

        contentStyle: {
          paddingHorizontal: moderateScale(12),
        },
      }),
    [theme],
  );
};

export default useStyles;
