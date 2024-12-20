import React, {useState, useEffect, useRef} from 'react';
import {View, Text, FlatList} from 'react-native';
import {COLORS, IMAGES, LOTTIES, wp} from '../../utils';
import {styles} from './styles';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../../types';
import Lottie from 'lottie-react-native';
import {Button, ScreenContainer} from '../../components';
type IntroSliderScreenProps = StackScreenProps<
  RootStackParamList,
  'IntroSliderScreen'
>;

const IntroSliderScreen = ({navigation}: IntroSliderScreenProps) => {
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);

  const scrollRef = useRef<FlatList>(null);
  // const timeout = useRef<number>(0);

  const slides = [
    {
      id: 1,
      title: 'Welcome to Our App!',
      text: 'Discover how we can help you.',
      image: IMAGES.logo,
      lotties: LOTTIES.baby1,
    },
    {
      id: 2,
      title: "Track Your Baby's Health",
      text: 'Monitor temperature, heart rate,\nand humidity to ensure better health\nfor your baby.',
      image: IMAGES.logo,
      lotties: LOTTIES.baby2,
    },
    {
      id: 3,
      title: 'Get Started!',
      text: 'Let’s make caring for your baby easier\nby using BabyMonitor App.',
      image: IMAGES.logo,
      lotties: LOTTIES.baby3,
    },
  ];

  const _renderSlide = ({
    item,
    index,
  }: {
    item: {id: number; title?: string; text: string; image: any; lotties: any};
    index: number;
  }) => {
    return (
      <View style={styles.slideContainer} key={index}>
        {/* <Image
          source={item.image}
          resizeMode="contain"
          style={styles.slideImage}
        /> */}
        <Lottie
          source={item.lotties}
          autoPlay
          loop
          style={styles.lottieStyle}
        />
        <View style={styles.slideTextWrapper}>
          <Text style={styles.slideTitle}>{item.title}</Text>
          <Text style={styles.slideText}>{item.text}</Text>
        </View>
      </View>
    );
  };

  const _renderDot = (_: any, index: number) => {
    return (
      <View
        key={index}
        style={[
          styles.dotStyle,
          // eslint-disable-next-line react-native/no-inline-styles
          {
            marginRight: index !== slides.length - 1 ? wp(2) : 0,
            backgroundColor:
              currentPageIndex === index ? COLORS.BLACK : COLORS.LIGHT_GRAY,
          },
        ]}
      />
    );
  };

  const onScroll = (event: any) => {
    const {x} = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor(Math.ceil(x) / wp('100%'));
    if (indexOfNextScreen !== currentPageIndex) {
      setCurrentPageIndex(indexOfNextScreen);
    }
  };

  const onNavigate = (screenName: keyof RootStackParamList) => {
    navigation.replace(screenName);
  };

  useEffect(() => {
    // some code here
    // return () => clearTimeout(timeout.current);
  }, []);

  const checkIfLastIndex = (index: number) => {
    return index === slides.length - 1;
  };

  const onNextPressed = () => {
    if (checkIfLastIndex(currentPageIndex)) {
      onNavigate('LoginScreen');
      return;
    }

    scrollRef.current?.scrollToIndex({
      index: currentPageIndex + 1,
      animated: true,
    });
  };

  const onSkipPressed = () => {
    scrollRef.current?.scrollToIndex({
      index: slides.length - 1,
      animated: true,
    });
  };

  return (
    <ScreenContainer>
      <FlatList
        ref={scrollRef}
        data={slides}
        renderItem={_renderSlide}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        scrollEventThrottle={16}
        onScroll={onScroll}
        keyExtractor={(item, _) => item.id.toString()}
      />
      <View style={styles.footer}>
        <View style={styles.paginationwWrapper}>{slides.map(_renderDot)}</View>
        <Button
          text={checkIfLastIndex(currentPageIndex) ? "Let's go" : 'Next'}
          style={styles.buttonStyle}
          textStyle={styles.buttonTextStyle}
          onPress={onNextPressed}
        />
        <Button
          text={'Skip'}
          style={styles.buttonStyle}
          textStyle={styles.buttonTextStyle}
          onPress={onSkipPressed}
          disabled={checkIfLastIndex(currentPageIndex)}
        />
        {/* <View style={styles.footerTextWrapper}>
          <Button
            text={'Login'}
            color={COLORS.PRIMARY}
            type="tertiary"
            textStyle={styles.textStyle}
            // onPress={() => onNavigate('loginScreen')}
          />
          <Text style={styles.footerText}>{'You Already have and account !!'}</Text>
        </View> */}
      </View>
    </ScreenContainer>
  );
};

export default IntroSliderScreen;
