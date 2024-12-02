import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  CustomText,
  CustomDropdown,
  CustomHeader,
  CustomButton,
  CustomCheckBox,
  CustomRadio,
  CustomImage,
  CustomTextInput,
  CustomRating,
  CustomAccordian,
  CustomSwitch,
  CustomCard,
} from '@shreyacn11/react-native-component';


function ComponentsScreen(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [textValue, setTextValue] = useState('');
  const [rating, setRating] = useState(2);
  const [check, setCheck] = useState(false);
  const [seletedValue, setSelectedValue] = useState<any>();
  const backgroundStyle = {
    flex: 1,
    // padding:15,
    backgroundColor: isDarkMode ? '#000' : '#fff',
  };
  const [selectedValues, setSelectedValues] = useState<any[]>([]);
  const fruites: any[] = [
    {label: 'Mango', value: 'mango'},
    {label: 'Orange', value: 'orange'},
    {label: 'Guava', value: 'guava'},
    {label: 'Apple', value: 'apple'},
  ];
  const sections = [
    {title: 'Section 1', content: 'Content for Section 1'},
    {title: 'Section 2', content: 'Content for Section 2'},
    {title: 'Section 3', content: 'Content for Section 3'},
  ];
  const renderHeader = (
    section: {title: string},
    index: number,
    isExpanded: boolean,
  ) => (
    <View>
      <CustomText style={{fontWeight: isExpanded ? 'bold' : 'normal'}}>
        {section.title}
      </CustomText>
    </View>
  );

  const renderContent = (section: {content: string}) => (
    <View>
      <CustomText>{section.content}</CustomText>
    </View>
  );

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <CustomHeader title="WelCome" />
        <CustomHeader
          title="Home"
          headerIcon={true}
          notificationCount={3}
          bellColor="green"
          containerStyle={{backgroundColor: 'grey'}}
          titleStyle={{color: '#333', fontSize: 18}}
        />
        <CustomHeader
          title="Home"
          headerIcon={true}
          notificationCount={3}
          bellColor="green"
          //  rightIcon2={<Icon name="bell"/>}
          containerStyle={{backgroundColor: 'grey'}}
          titleStyle={{color: '#333', fontSize: 18}}
        />
        <View style={{paddingHorizontal: 15}}>
          <CustomText style={{marginVertical: 10}}>{'Sample Text'}</CustomText>
          <CustomButton title="Hello" onPress={() => console.log('ghj')} />
          <CustomButton
            border
            borderColor="red"
            btnStyle={{marginTop: 10}}
            btnTextStyle={{color: 'red'}}
            title="Hello"
            onPress={() => console.log('ghj')}
          />
          <CustomButton
            btnStyle={{marginTop: 10, width: '50%', alignSelf: 'center'}}
            isLoading={true}
            title="Hello"
            onPress={() => console.log('ghj')}
          />

          <CustomDropdown
            label="Select Dropdown"
            placeholderText="Choose items"
            containerStyle={{marginTop: 10}}
            options={fruites}
            selectedValue={seletedValue}
            onSelect={setSelectedValue}
          />

          <View style={{marginVertical: 10, marginLeft: 15}}>
            <CustomRating
              rating={rating}
              onRatingChange={(newRating: any) => setRating(newRating)}
            />
          </View>
          <CustomDropdown
            label="Multi Select Dropdown"
         //   placeholderText="Choose items"
            type={'multiple'}
            options={fruites}

            selectedValues={selectedValues}
            onMultiSelect={setSelectedValues}
          />

          <CustomSwitch value={true} onValueChange={() => console.log('gh')} />

         <CustomTextInput
            styles={{alignSelf: 'center', marginTop: 10}}
            value={textValue}
            onChangeText={setTextValue}
            placeholder={'Enter Something'}
          /> 
       <CustomAccordian
            sections={sections}
            renderHeader={renderHeader}
            renderContent={renderContent}
          /> 
       <CustomCheckBox
            checked={check}
            label="Sample Check box"
            onChange={(value:boolean) => setCheck(value)}
          /> 
         <CustomRadio
            onPress={() => console.log('ghj')}
            selected={true}
            label="Hello"
          /> 
      <CustomImage
            sourceImage={{
              uri: 'https://i0.wp.com/picjumbo.com/wp-content/uploads/magical-spring-forest-scenery-during-morning-breeze-free-photo.jpg?w=600&quality=80',
            }}
          /> 
      <CustomCard
            //containerStyle={{ marginHorizontal: 20 }}
            innerStyle={{backgroundColor: '#fff'}}
            onPress={() => console.log('Card pressed')}
            disabled={false} // Custom TouchableOpacity prop
          >
            <Text>Your content here</Text>
          </CustomCard> 
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default ComponentsScreen;
