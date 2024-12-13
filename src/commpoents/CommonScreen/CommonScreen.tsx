import React from 'react';
import {
  View,
  Text,
  Image,
  StyleProp,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from 'react-native';
import { useTheme } from '../ThemeContext';
import getCommonScreenStyles from './styles';
import Ionicons from 'react-native-vector-icons/Feather';

type CommonScreenType = 'internet' | 'emptyList' | 'somethingWentWrong';

interface CommonScreenProps {
  type?: CommonScreenType;
  title?: string;
  description?: string;
  imageSource?: string | number; // URI (string) or local (number)
  customIcon?: React.ReactNode; // Option to provide a custom icon/component
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  descriptionStyle?: StyleProp<TextStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  iconColor?: string; // Default icon color
  iconSize?: number; // Default icon size
  children?: React.ReactNode; // Optional additional components
}

const CommonScreen: React.FC<CommonScreenProps> = ({
  type,
  title,
  description,
  imageSource,
  customIcon,
  containerStyle,
  titleStyle,
  descriptionStyle,
  imageStyle,
  iconSize = 80,
  children,
}) => {
  const { theme } = useTheme();
  const defaultStyles = getCommonScreenStyles(theme);

  // Default content based on type
  const getDefaults = () => {
    switch (type) {
      case 'internet':
        return {
          title: 'No Internet Connection',
          description: 'Please check your network and try again.',
          iconName: 'wifi-off',
        };
      case 'emptyList':
        return {
          title: 'No Items Found',
          description: 'It seems like there’s nothing here.',
          iconName: 'list',
        };
      case 'somethingWentWrong':
        return {
          title: 'Something Went Wrong',
          description: 'We couldn’t load the data. Please try again later.',
          iconName: 'alert-triangle',
        };
      default:
        return {};
    }
  };

  const defaults = getDefaults();

  return (
    <View style={[defaultStyles.container, containerStyle]}>
      {customIcon ? (
        customIcon
      ) : imageSource ? (
        <Image
          source={
            typeof imageSource === 'string' ? { uri: imageSource } : imageSource
          }
          style={[defaultStyles.image, imageStyle]}
          resizeMode="contain"
        />
      ) : defaults.iconName ? (
        <Ionicons
          name={defaults.iconName}
          size={iconSize}
          color={theme.primary}
        />
      ) : null}

      {(title || defaults.title) ? (
        <Text style={[defaultStyles.title, titleStyle]}>
          {title || defaults.title}
        </Text>
      ) : null}
      {(description || defaults.description) ? (
        <Text style={[defaultStyles.description, descriptionStyle]}>
          {description || defaults.description}
        </Text>
      ) : null}

      {children && (
        <View style={defaultStyles.childrenContainer}>{children}</View>
      )}
    </View>
  );
};

export default CommonScreen;
