import { Image, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { sliderImages } from "../constants";

export default function ImageSlider() {
  const width = wp(100) - 70;
  return (
    <View style={{ width: wp(100), alignItems: "center" }}>
      <Carousel
        loop
        width={width}
        height={hp(25)}
        autoPlay={true}
        data={sliderImages}
        autoPlayInterval={4000}
        renderItem={({ item, index, animationValue }) => (
          <ItemCard item={item} index={index} animationValue={animationValue} />
        )}
      />
    </View>
  );
}

const ItemCard = ({ item, index, animationValue }) => {
  const parallaxStyle = {
    transform: [
      {
        scale: animationValue.interpolate({
          inputRange: [-1, 0, 1],
          outputRange: [0.9, 1, 0.9],
        }),
      },
    ],
  };
  return (
    <View style={{ width: wp(100) - 70, height: hp(25) }}>
      <Image
        source={item}
        style={[
          {
            width: "100%",
            height: "100%",
            borderRadius: 30,
            resizeMode: "contain",
          },
          parallaxStyle,
        ]}
      />
    </View>
  );
};
