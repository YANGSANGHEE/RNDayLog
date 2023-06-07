import React from 'react';
import {Platform, Pressable, StyleSheet, Text} from 'react-native';

//공백제거 정규식
const truncate = text => {
  const replace = text.replace(/\n/g, '');
  if (replace.length <= 100) {
    return replace;
  }
  return replace.slice(0, 100).concat('...');
};

const FeedListItem = ({data}) => {
  const {regdate, title, con} = data;
  return (
    <Pressable
      style={({pressed}) => [
        styles.block,
        Platform.OS === 'ios' && pressed && {backgroundColor: '#efefef'},
      ]}
      android_ripple={{color: '#ededed'}}>
      <Text style={styles.date}>{new Date(regdate).toLocaleDateString()}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.con}>{truncate(con)}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  block: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  date: {
    fontSize: 12,
    color: '#546e7a',
    marginBottom: 8,
  },
  title: {
    color: '#263238',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  con: {
    color: '#37474f',
    fontSize: 16,
    lineHeight: 21,
  },
});

export default FeedListItem;
