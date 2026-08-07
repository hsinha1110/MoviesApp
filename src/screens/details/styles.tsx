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

        backdrop: {
          width: '100%',
          height: moderateScale(300),
        },

        header: {
          flexDirection: 'row',
          marginTop: moderateScale(20),
          paddingHorizontal: moderateScale(16),
          zIndex: 10,
        },

        poster: {
          width: moderateScale(120),
          height: moderateScale(180),
          borderRadius: moderateScale(12),
        },

        info: {
          flex: 1,
          marginLeft: moderateScale(16),
          justifyContent: 'center',
        },

        title: {
          fontSize: moderateScale(24),
          fontWeight: '700',
          color: '#000',
          marginBottom: moderateScale(10),
        },

        rating: {
          fontSize: moderateScale(16),
          fontWeight: '600',
          color: '#000',
          marginBottom: moderateScale(8),
        },

        text: {
          fontSize: moderateScale(14),
          color: '#555',
          marginBottom: moderateScale(6),
        },

        section: {
          paddingHorizontal: moderateScale(16),
          marginTop: moderateScale(24),
        },

        sectionTitle: {
          fontSize: moderateScale(20),
          fontWeight: '700',
          color: '#000',
          marginBottom: moderateScale(12),
        },

        genreContainer: {
          flexDirection: 'row',
          flexWrap: 'wrap',
        },

        genreChip: {
          paddingHorizontal: moderateScale(12),
          paddingVertical: moderateScale(6),
          backgroundColor: '#F2F2F2',
          borderRadius: moderateScale(20),
          marginRight: moderateScale(8),
          marginBottom: moderateScale(8),
        },

        genreText: {
          fontSize: moderateScale(13),
          fontWeight: '600',
          color: '#000',
        },

        value: {
          fontSize: moderateScale(14),
          lineHeight: moderateScale(22),
          color: '#555',
        },

        tagline: {
          fontSize: moderateScale(16),
          fontStyle: 'italic',
          color: '#E50914',
          textAlign: 'center',
        },

        trailerButton: {
          height: moderateScale(50),
          borderRadius: moderateScale(10),
          backgroundColor: '#E50914',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        },

        trailerText: {
          color: '#fff',
          fontSize: moderateScale(16),
          fontWeight: '700',
          marginLeft: moderateScale(8),
        },

        infoCard: {
          backgroundColor: '#fff',
          borderRadius: moderateScale(12),
          padding: moderateScale(16),
          elevation: 2,
        },

        infoText: {
          fontSize: moderateScale(14),
          color: '#444',
          marginBottom: moderateScale(8),
        },

        company: {
          fontSize: moderateScale(14),
          color: '#444',
          marginBottom: moderateScale(6),
        },

        loader: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
        companyCard: {
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#fff',
          borderRadius: moderateScale(12),
          padding: moderateScale(12),
          marginBottom: moderateScale(12),
          elevation: 2,
        },

        companyLogo: {
          width: moderateScale(60),
          height: moderateScale(60),
        },

        logoPlaceholder: {
          width: moderateScale(60),
          height: moderateScale(60),
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F3F3F3',
          borderRadius: moderateScale(10),
        },

        logoPlaceholderText: {
          fontSize: moderateScale(24),
        },

        companyInfo: {
          flex: 1,
          marginLeft: moderateScale(14),
        },

        companyName: {
          fontSize: moderateScale(16),
          fontWeight: '700',
          color: '#000',
        },

        companyCountry: {
          marginTop: moderateScale(4),
          fontSize: moderateScale(13),
          color: '#666',
        },
      }),
    [],
  );
};

export default useStyles;
