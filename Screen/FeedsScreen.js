import React, {useState, useEffect, memo, useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import FloatingWriteButton from '../components/FloatingWriteButton';
import FeedList from '../components/FeedList';
import LogContext from '../contexts/LogContext';
import axios from 'axios';

const FeedsScreen = () => {
  const [data, setData] = useState([]);
  let act = 'list';
  let {dataset} = useContext(LogContext);

  //daylog 조회
  const onList = async () => {
    await axios
      .get(`http://10.0.2.2:8084/dayloglist/${act}`)
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  //게시글조회
  useEffect(() => {
    onList();
  }, [dataset]);

  return (
    <View style={styles.block}>
      <FeedList data={data} />
      <FloatingWriteButton />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default memo(FeedsScreen);
