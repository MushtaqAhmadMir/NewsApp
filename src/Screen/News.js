//import Libraries
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Header from '../Component/Header';

import {apiGet} from '../utils/utils';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {useNavigation} from '@react-navigation/native';
import Loader from '../Component/Loader';

//export function to make it available for the app
export default function News(props) {
  

  const navigation = useNavigation();

  //getting  all the news data 
  useEffect(() => {
    apiHandler();
  }, []);

  const [newsData, setNewsData] = useState([]);
const [isLoading,setIsLoading]=useState(false)
//hit api and set data 
  const apiHandler = () => {
setIsLoading(true)
    const URL =
      'https://newsapi.org/v2/sources?apiKey=d29d58aab88d4ea0b04ddb245a230068';
    apiGet(URL)
      .then(res => {
        setNewsData(res.sources);
        setIsLoading(false)
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false)
      });
  };

//rendering flatlist data
  const renderItem = ({index, item}) => {
    console.log(item);
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('NewsDetail', {item: {item}})}
        style={{paddingHorizontal: 20, paddingVertical: 10}}>
        <Image
          style={{width: '100%', height: windowHeight / 3.5}}
          source={{
            uri: 'https://image.shutterstock.com/image-vector/breaking-news-background-world-global-260nw-719766118.jpg',
          }}
        />
        <Text style={{fontSize: 18}}>{item.description}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'green'} />
      <Header />
      {newsData.length > 0 ? (
        <FlatList renderItem={renderItem} data={newsData} />
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>NO NEWS FOUND</Text>
        </View>
      )}
      <Loader isLoading={isLoading}/>
    </View>
  );
}
