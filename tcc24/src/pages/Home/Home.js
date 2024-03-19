import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Animated,
  Image,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const slides = [
  {
    title: 'Bem vindo ao nosso App!',
    message: 'Aqui Você encontra a maneira mais simples e diverdida de explorar o mundo da programação e hardware.',
    action: 'Comece agora!',
  },
  {
    title: ' O futuro começa agora!',
    message:
      ' Dê o primeiro passo em direção ao futuro da aprendizagem de programação e hardware. Estamos aqui para orientá-lo em cada etapa do caminho.',
    action: 'Continue',
  },
  {
    title: " Grandes aventuras esperam por você!",
    message:
      'Prepare-se para uma jornada incrível de aprendizado. Vamos começar criando sua conta.',
    action: 'Criar sua Conta',
  },
];

export default function Example() {
  const [slide, setSlide] = useState(0);

  const swiper = useRef();
  const scrollX = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation(); // Obtendo a referência de navegação

  const animatedBackgroundLeft = scrollX.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [1, 0, -1],
  });

  const contentOpacityRanges = Array.from({ length: slides.length }).reduce(
    (acc, _, index) => {  
      const screenWidth = index * width;
      const screenWidthMiddle = screenWidth + width / 2;

      acc.inputRange.push(screenWidth, screenWidthMiddle);
      // opacity 1 when screen is presented, 0.2 when screens are switching (mid point).
      acc.outputRange.push(1, 0.2);

      return acc;
    },
    {
      inputRange: [],
      outputRange: [],
    },
  );
  const contentOpacity = scrollX.interpolate(contentOpacityRanges);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={{ left: animatedBackgroundLeft }}>
        <Image
          source={{ uri: 'https://assets.withfra.me/Landing.1.png' }}
          resizeMode="cover"
          style={styles.slideImage}
        />
      </Animated.View>
      <Swiper
        ref={swiper}
        showsPagination={false}
        loop={false}
        onIndexChanged={setSlide}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ],
          { useNativeDriver: false },
        )}
        scrollEventThrottle={1}>
        {slides.map((item, index) => {
          return (
            <Animated.View
              key={index}
              style={[styles.slide, { opacity: contentOpacity }]}>
              <Text style={styles.slideTitle}>{item.title}</Text>
              <Text style={styles.slideText}>{item.message}</Text>

              {index === slides.length - 1 ? (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Perfil'); // Navegar para a página de perfil
                  }}>
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>{item.action}</Text>
                  </View>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    swiper.current.scrollTo(slide + 1, true);
                  }}>
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>{item.action}</Text>
                  </View>
                </TouchableOpacity>
              )}
            </Animated.View>
          );
        })}
      </Swiper>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1f26',
  },
  /** Slide */
  slide: {
    flex: 1,
    backgroundColor: 'transparent',
    position: 'relative',
    justifyContent: 'flex-end',
    paddingHorizontal: 36,
  },
  slideImage: {
    width: width * slides.length,
    height: 0.6 * height,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  slideTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 12,
    textAlign: 'center',
  },
  slideText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#a9b1cf',
    textAlign: 'center',
  },
  /** Button */
  button: {
    backgroundColor: '#387ADF',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 36,
    marginVertical: 48,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
});
