import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    width: 170,
    marginRight: 16,
    marginVertical: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 5,
  },

  poster: {
    width: '100%',
    height: 220,
  },

  content: {
    padding: 10,
  },

  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },

  label: {
    fontSize: 13,
    color: '#666',
    fontWeight: '600',
  },

  value: {
    fontSize: 13,
    color: '#000',
    fontWeight: '700',
  },
});

export default styles;
