import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { StatusBar } from "react-native-web";
import "../global.css";

export default function index() {
  const router = useRouter();
  return (
    <View className="flex-1 flex justify-end">
      <StatusBar style="light" />
      <Image
        className="h-full w-full absolute"
        source={require("../assets/images/welcome.png")}
      />

      <LinearGradient
        colors={["transparent", "#18181b"]}
        style={{ width: wp(100), height: hp(30) }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
        className="flex justify-end pb-12 space-y-8"
      >
        <View className="flex items-center">
          <Text
            style={{ fontSize: hp(4) }}
            className="text-white font-bold tracking-wide"
          >
            The best <Text className="text-rose-500">WORKOUTS</Text>
          </Text>
          <Text
            style={{ fontSize: hp(4) }}
            className="text-white font-bold tracking-wide"
          >
            For you
          </Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => router.push("/home")}
            style={{ height: hp(7), width: wp(80) }}
            className="bg-rose-500 flex items-center justify-center mx-auto rounded-full border-[2px] border-neutral-200"
          >
            <Text
              style={{ fontSize: hp(3) }}
              className="text-white font-bold tracking-widest"
            >
              Get started
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}
