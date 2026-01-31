import { Text } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import Carousel from "react-native-snap-carousel";
import { sliderImages } from "../constants";

export default function ImageSlider() {
  return (
    <Carousel
      data={sliderImages}
      loop={true}
      autoplay={true}
      renderItem={ItemCard}
      hasParallaxImages={true}
      sliderWidth={wp(100)}
      firstItem={1}
      autoplayInterval={400}
      itemWidth={wp(100) - 70}
      slideStyle={{ display: "flex", alignItems: "center" }}
    />
  );
}

const ItemCard = () => {
  return <Text>Slide</Text>;
};
