import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Modal,
  Linking,
} from 'react-native';
// import {showMessage} from 'react-native-flash-message';

export default function NewsDetail(props) {



    //linking and opening Opening whatsapp 
  const openWhatsApp = (message) => {
    let msg = message
    let mobile = 7006736101;
    if (mobile) {
      if (msg) {
        let url = 'whatsapp://send?text=' + msg + '&phone=91' + mobile;
        Linking.openURL(url)
          .then(data => {
            console.log('WhatsApp Opened successfully ' + data);
          })
          .catch(() => {
            alert('Make sure WhatsApp installed on your device');
          });
      } else {
        alert('Please enter message to send');
      }
    } else {
      alert('Please enter mobile no');
    }
  };

   const openInstagram=()=>
   {
    
    Linking.openURL('http://instagram.com/_u/mr_18_november')
  
   }

  const [isModalVisible, setModalVisible] = useState(false);
  console.log(props);
  const {item} = props.route.params.item;
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={{height: 200, width: '100%'}}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSah8kX0sE6h_qDGBMeFwqbPyTQFBIxdPU6Mw&usqp=CAU',
          }}
        />
        <TouchableOpacity
        //   onPress={showMessage({
        //     message: 'Image Saved Successfully',
        //     type: 'success',
        //     icon: 'success',
        //   })}
          style={styles.saveImg}>
          <Text>Save Image</Text>
        </TouchableOpacity>
        <Text style={styles.text1}>{item.description}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
            alignItems: 'center',
          }}>
          <Text style={{color: 'grey', fontSize: 20}}>{item.name}</Text>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Image
              style={{height: 35, width: 35}}
              source={{
                uri: 'https://static.thenounproject.com/png/45408-200.png',
              }}
            />
          </TouchableOpacity>
          <Text style={{color: 'grey', fontSize: 16}}>6 june 2021</Text>
        </View>

        <Text style={{letterSpacing: 2, fontSize: 16, marginTop: 20}}>
          Coronavirus disease (COVID-19) is an infectious disease caused by a
          newly discovered coronavirus. Most people who fall sick with COVID-19
          will experience mild to moderate symptoms and recover without special
          treatment. HOW IT SPREADS The virus that causes COVID-19 is mainly
          transmitted through droplets generated when an infected person coughs,
          sneezes, or exhales. These droplets are too heavy to hang in the air,
          and quickly fall on floors or surfaces. You can be infected by
          breathing in the virus if you are within close proximity of someone
          who has COVID-19, or by touching a contaminated surface and then your
          eyes, nose or mouth. Coronavirus disease (COVID-19) is an infectious
          disease caused by a newly discovered coronavirus. Most people who fall
          sick with COVID-19 will experience mild to moderate symptoms and
          recover without special treatment. HOW IT SPREADS The virus that
          causes COVID-19 is mainly transmitted through droplets generated when
          an infected person coughs, sneezes, or exhales. These droplets are too
          heavy to hang in the air, and quickly fall on floors or surfaces. You
          can be infected by breathing in the virus if you are within close
          proximity of someone who has COVID-19, or by touching a contaminated
          surface and then your eyes, nose or mouth.
        </Text>
        <Modal visible={isModalVisible} transparent>
          <View style={{flex: 1, backgroundColor: (0, 0, 0, 0.5)}}>
            <View style={styles.modal}>
              <Text style={{fontWeight: 'bold'}}>SHARE</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: 20,
                  alignItems: 'center',
                  paddingTop: 50,
                }}>
                <TouchableOpacity onPress={()=>openWhatsApp(item.description)}>
                  <Image
                    style={{height: 50, width: 50}}
                    source={{
                      uri: 'https://img.icons8.com/cute-clipart/2x/whatsapp.png',
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => Linking.openURL('fb://page/AariyanAlee')}>
                  <Image
                    style={{height: 50, width: 50}}
                    source={{
                      uri: 'https://img.icons8.com/cute-clipart/2x/facebook-new.png',
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={openInstagram}>
                  <Image
                    style={{height: 50, width: 50}}
                    source={{
                      uri: 'https://img.icons8.com/cute-clipart/2x/instagram-new.png',
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    Linking.openURL(
                      'mailto:mushtaq11917632@gmail.com?subject=Regarding React Native Developer&body=Congratulations Mr. Mushtaq Ahmad',
                    )
                  }
                  title="support@example.com">
                  <Image
                    style={{height: 50, width: 50}}
                    source={{
                      uri: 'https://img.icons8.com/cute-clipart/2x/google-logo.png',
                    }}
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={{alignSelf: 'center', marginTop: 30}}>
                <Text>CLOSE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1, paddingHorizontal: 20, marginTop: 10},
  saveImg: {
    alignSelf: 'center',
    borderWidth: 1,
    marginTop: 5,
    width: 100,
    alignItems: 'center',
  },
  text1: {
    letterSpacing: 2,
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
  },
  modal: {
    height: 200,
    backgroundColor: 'white',
    top: 500,
    borderWidth: 1,
  },
});
