import React, {useState, useEffect, memo} from 'react';
import {StyleSheet, View} from 'react-native';
import FloatingWriteButton from '../components/FloatingWriteButton';
import FeedList from '../components/FeedList';
import axios from 'axios';

const FeedsScreen = () => {
  const [data, setData] = useState([]);
  const [dataset, setDataSet] = useState(false);
  let act = 'list';

  //daylog 조회
  const onList = async () => {
    await axios
      .get(`http://10.0.2.2:8084/dayloglist/${act}`)
      .then(res => {
        if (!dataset) {
          setData(res.data);
          setDataSet(true);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  //게시글조회
  useEffect(() => {
    onList();
    setDataSet(false);
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
