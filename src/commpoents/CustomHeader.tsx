import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';

interface HeaderProps {
  title: string;
  onLeftPress?: () => void;
  onRightPress?: () => void;
  leftIconName?: string;
  rightIconName?: string;
  gradientColors?: string[]; // Optional for gradient
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
}

const Header: React.FC<HeaderProps> = ({
  title,
  onLeftPress,
  onRightPress,
  leftIconName,
  rightIconName,
  gradientColors,
  containerStyle,
  titleStyle,
}) => {
  const renderContent = () => (
    <>
      {leftIconName && (
        <TouchableOpacity onPress={onLeftPress} style={styles.iconButton}>
          <Icon name={leftIconName} size={24} color="#FFF" />
        </TouchableOpacity>
      )}
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      {rightIconName && (
        <TouchableOpacity onPress={onRightPress} style={styles.iconButton}>
          <Icon name={rightIconName} size={24} color="#FFF" />
        </TouchableOpacity>
      )}
    </>
  );

  if (gradientColors) {
    return (
      <LinearGradient
        colors={gradientColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[styles.container, containerStyle]}
      >
        {renderContent()}
      </LinearGradient>
    );
  }

  return (
    <View style={[styles.container, containerStyle]}>
      {renderContent()}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    height: 60,
    backgroundColor: '#007BFF', // Default color if gradient is not used
  },
  iconButton: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
});
