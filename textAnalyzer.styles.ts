import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'lightgrey',
    width: '100%',
    height: '100%',
  },
  inputBox: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'magenta',
    marginHorizontal: '10%',
    textAlign: 'center',
    color: 'purple',
    fontSize: 20,
    height: '45%',
    marginBottom: '5%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '10%',
  },
  font: {
    fontSize: 20,
  },
  header: {
    marginVertical: '5%',
    textAlign: 'center',
  },
  character: {
    color: 'violet',
  },
  words: {
    color: 'indigo',
  },
  sentence: {
    color: 'blue',
  },
  vowels: {
    color: 'green',
  },
  articles: {
    color: 'yellow',
  },
  longestWordLength: {
    color: 'orange',
  },
  longestWord: {
    color: 'red',
  },
  readingTime: {
    color: 'magenta',
  },
});
