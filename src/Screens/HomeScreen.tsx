import {useNavigation} from '@react-navigation/native';
import { ScrollView, Text, View} from 'react-native';
import Header from '../commpoents/CustomHeader';
import {useState} from 'react';
import LogoutModal from '../commpoents/Logout/Logout';
import CommonScreen from '../commpoents/CommonScreen/CommonScreen';

const HomeScreen = () => {
  const navigation = useNavigation<any>();
  const [isModalVisible, setModalVisible] = useState(false);

  const handleLogout = () => {
    setModalVisible(false);
    console.log('Logged out');
  };
  return (
    <View style={{flex: 1}}>
      <Header
        title="Gradient Header"
        leftIconName="menu"
        onLeftPress={() => console.log('Left Icon Pressed')}
        rightIconName="bell"
        onRightPress={() => console.log('Right Icon Pressed')}
        gradientColors={['#4c669f', '#3b5998', '#192f6a']}
      />
      <Header
        title="Header"
        leftIconName="menu"
        onLeftPress={() => console.log('Left Icon Pressed')}
        rightIconName="bell"
        onRightPress={() => console.log('Right Icon Pressed')}
      />
      <ScrollView>
        <Text
          onPress={() => navigation.navigate('ProfileScreen')}
          style={{
            margin: 30,
            color: 'blue',
            fontSize: 17,
            textAlign: 'center',
          }}>
          Profile Screen
        </Text>
        <Text
          onPress={() => navigation.navigate('ChangePassWord')}
          style={{
            margin: 30,
            color: 'blue',
            fontSize: 17,
            textAlign: 'center',
          }}>
          Change Password
        </Text>
        <Text
          onPress={() => setModalVisible(true)}
          style={{
            margin: 30,
            color: 'blue',
            fontSize: 17,
            textAlign: 'center',
          }}>
          Logout
        </Text>
        <LogoutModal
          visible={isModalVisible}
          onClose={() => setModalVisible(false)}
          onLogout={handleLogout}
          title="Logout Confirmation"
          message="Do you really want to log out of your account?"
          cancelText="No"
          logoutText="Yes, Log Out"
          customdefaultStyles={{
            modalContainer: {backgroundColor: '#f9f9f9'},
            cancelButton: {backgroundColor: '#007bff'},
            cancelText: {color: '#fff'},
            logoutButton: {backgroundColor: '#dc3545'},
          }}
        />
        <CommonScreen type="somethingWentWrong" />
        <CommonScreen type="emptyList" />
        <CommonScreen imageSource={require("../assest/Login.jpg")} type="internet"  />
      </ScrollView>
    </View>
  );
};
export default HomeScreen;
