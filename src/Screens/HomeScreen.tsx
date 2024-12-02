import {useNavigation} from '@react-navigation/native';
import {Text, View} from 'react-native';
import Header from '../commpoents/CustomHeader';

const HomeScreen = () => {
  const navigation = useNavigation<any>();
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
      <Text
        onPress={() => navigation.navigate('ProfileScreen')}
        style={{margin: 30, color: 'blue', fontSize: 17, textAlign: 'center'}}>
        Profile Screen
      </Text>
      <Text
        onPress={() => navigation.navigate('ChangePassWord')}
        style={{margin: 30, color: 'blue', fontSize: 17, textAlign: 'center'}}>
        Change Password
      </Text>
    </View>
  );
};
export default HomeScreen;
