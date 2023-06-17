import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  mainContainer: {
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
    height: '25%',
    marginBottom: '5%',
    backgroundColor: 'lightgrey',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  font: {
    fontSize: 20,
  },
  header: {
    marginVertical: '5%',
    textAlign: 'center',
    fontSize: 30,
    color: 'blue',
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
  bottomView: {
    backgroundColor: 'lightblue',
    borderColor: 'orange',
    borderWidth: 3,
    borderRadius: 5,
    marginHorizontal: '10%',
    marginTop: '10%',
    padding: '5%',
  },
});
