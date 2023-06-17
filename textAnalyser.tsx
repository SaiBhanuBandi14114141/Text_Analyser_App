import {Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Styles} from '../styles/wordsCount.styles';

const WordsCount = () => {
  const [input, setInput] = useState<string>('');
  const [words, setWords] = useState<number>(0);
  const [vowel, setVowel] = useState<number>(0);
  const [article, setArticle] = useState<number>(0);
  const [sentence, setSentence] = useState<number>(0);
  const [longestWord, setLongestWord] = useState<string>('');
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const articles = ['a', 'an', 'the'];

  useEffect(() => {
    setWords(countWord());
    setVowel(vowelsCount());
  }, [input]);

  const countWord = () => {
    let res: any[] = [];
    let str = input.replace(/[\t\n\r\.\?\!]/gm, ' ').split(' ');
    str.map((s: any) => {
      let trimStr = s.trim();
      if (trimStr.length > 0) {
        res.push(trimStr);
      }
    });

    let count = 0;
    for (let i of res) {
      if (articles.includes(i)) {
        count = count + 1;
      }
    }
    setArticle(count);

    setSentence(input.split(/[.!?]/).length - 1);

    const findLongestWord = () => {
      let lengthyWord = input
        .split(' ')
        .reduce(function (longest, currentWord) {
          return currentWord.length > longest.length ? currentWord : longest;
        }, '');
      setLongestWord(lengthyWord);
    };

    findLongestWord();

    return res.length;
  };

  const vowelsCount = () => {
    let count = 0;
    for (let i of input) {
      if (vowels.includes(i)) {
        count = count + 1;
      }
    }
    return count;
  };

  return (
    <View style={Styles.mainContainer}>
      <Text style={[Styles.font, Styles.header]}>English Count App</Text>
      <TextInput
        placeholder="Please enter your paragraph here..."
        style={Styles.inputBox}
        multiline
        onChangeText={value => setInput(value)}
        value={input}
        selectionColor={'red'}
      />
      <View style={Styles.row}>
        <Text style={[Styles.font, Styles.character]}>Characters</Text>
        <Text style={[Styles.font, Styles.words]}>Words</Text>
      </View>
      <View style={Styles.row}>
        <Text style={[Styles.font, Styles.character]}>{input.length}</Text>
        <Text style={[Styles.font, Styles.words]}>{words}</Text>
      </View>
      <View style={Styles.row}>
        <Text style={[Styles.font, Styles.sentence]}>Sentence</Text>
        <Text style={[Styles.font, Styles.vowels]}>Vowels</Text>
      </View>
      <View style={Styles.row}>
        <Text style={[Styles.font, Styles.sentence]}>{sentence}</Text>
        <Text style={[Styles.font, Styles.vowels]}>{vowel}</Text>
      </View>
      <View style={Styles.row}>
        <Text style={[Styles.font, Styles.articles]}>Articles</Text>
        <Text style={[Styles.font, Styles.longestWordLength]}>
          Longest Word Length
        </Text>
      </View>
      <View style={Styles.row}>
        <Text style={[Styles.font, Styles.articles]}>{article}</Text>
        <Text style={[Styles.font, Styles.longestWordLength]}>
          {longestWord.length}
        </Text>
      </View>
      <View style={Styles.row}>
        <Text style={[Styles.font, Styles.longestWord]}>Longest Word</Text>
        <Text style={[Styles.font, Styles.readingTime]}>Reading Time</Text>
      </View>
      <View style={Styles.row}>
        <Text style={[Styles.font, Styles.longestWord]}>
          {longestWord.length < 13 ? longestWord : '........'}
        </Text>
        <Text style={[Styles.font, Styles.readingTime]}>
          ~ {(words / 10).toFixed(1)} mins
        </Text>
      </View>
    </View>
  );
};

export default WordsCount;
