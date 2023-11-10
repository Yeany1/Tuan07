import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { AirbnbRating } from "react-native-ratings";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const ImageContext = React.createContext();

function Screen1({ navigation }) {
  const { image } = React.useContext(ImageContext);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      {" "}
      <Image
        style={{
          width: 301,
          height: 361,
          marginTop: "3%",
        }}
        source={image}
        resizeMode="contain"
      />
      <Text
        style={{
          fontSize: 15,
          fontWeight: 400,
          textAlign: "center",
          marginTop: "3%",
        }}
      >
        Điện Thoại Vsmart Joy 3 - Hàng chính hãng
      </Text>
      <View
        style={{
          flexDirection: "row",
          marginTop: "3%",
          alignItems: "center",
        }}
      >
        <AirbnbRating
          count={5}
          defaultRating={3}
          size={20}
          showRating={false}
        />
        <Text> </Text>
        <Text
          styte={{
            fontSize: 15,
            fontWeight: 400,
          }}
        >
          (Xem 828 đánh giá)
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: "3%",
          alignItems: "center",
          marginLeft: "-30%",
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: 700,
          }}
        >
          1.790.000đ
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 700,
            color: "#808080",
            textDecorationLine: "line-through",
            marginLeft: "30%",
          }}
        >
          1.990.000đ
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: "3%",
          alignItems: "center",
          marginLeft: "-27%",
        }}
      >
        <Text
          style={{
            fontSize: 12,
            fontWeight: 700,
            color: "#FF0000",
          }}
        >
          Ở ĐÂU RẺ HƠN HOÀN TIỀN
        </Text>
        <Image
          style={{
            width: 20,
            height: 20,
            marginLeft: 8,
          }}
          source={require("./assets/cham_hoi.png")}
        ></Image>
      </View>
      <TouchableOpacity
        style={{
          marginTop: "3%",
          width: 301,
          height: 40,
          backgroundColor: "#ffffff",
          borderRadius: 10,
          paddingVertical: 10,
          paddingHorizontal: 12,
          borderWidth: 1,
          borderColor: "#000000",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        onPress={() => navigation.navigate("Screen2")}
      >
        <Text
          style={{
            fontSize: 15,
            fontWeight: 700,
            color: "#000000",
            alignContent: "center",
          }}
        >
          4 MÀU-CHỌN MÀU
        </Text>
        <Image
          style={{
            width: 11.5,
            height: 14,
          }}
          source={require("./assets/Vector.png")}
        ></Image>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: "15%",
          width: 301,
          height: 40,
          backgroundColor: "#FF0000",
          borderRadius: 10,
          color: "#fff",
          border: "none",
          fontSize: 15,
          fontWeight: 400,
          textAlign: "center",
          resizeMode: "contain",
          justifyContent: "center",
        }}
      >
        <Text
            style={{
                fontSize: 15,
                fontWeight: 700,
                color: "#ffffff",
                textAlign: "center",
            }}
        >CHỌN MUA</Text>
      </TouchableOpacity>
    </View>
  );
}

function Screen2({ navigation }) {
  const { image, setImage1 } = React.useContext(ImageContext);
  const handleSelectImage = (image) => {
    setImage1(image);
  };
  const dtxanh = require("./assets/vs_blue.png");
  const dtdo = require("./assets/vs_red.png");
  const dtden = require("./assets/vs_black.png");
  const dtbac = require("./assets/vs_silver.png");
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          marginLeft: "3%",
          marginRight: "3%",
          backgroundColor: "#ffffff",
          paddingBottom: 20,
        }}
      >
        <Image
          style={{
            width: 112,
            height: 132,
            marginTop: "3%",
          }}
          source={image}
          resizeMode="contain"
        />
        <Text
          style={{
            fontFamily: "Roboto",
            fontSize: 15,
            fontWeight: 400,
            textAlign: "left",
            marginTop: "8%",
            marginLeft: "3%",
          }}
        >
          Điện Thoại Vsmart Joy 3
          <br /> Hàng chính hãng
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#c4c4c4",
          width: "100%",
          height: "100%",
        }}
      >
        <Text
          style={{
            fontFamily: "Roboto",
            fontSize: 18,
            fontWeight: 400,
            textAlign: "left",
            marginTop: "3%",
            marginLeft: "3%",
          }}
        >
          Chọn một màu bên dưới:
        </Text>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#C5F1FB",
              width: 85,
              height: 85,
              marginTop: "3%",
              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            }}
            onPress={() => handleSelectImage(dtxanh)}
          ></TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#F30D0D",
              width: 85,
              height: 85,
              marginTop: "3%",
              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            }}
            onPress={() => handleSelectImage(dtdo)}
          ></TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#000000",
              width: 85,
              height: 85,
              marginTop: "3%",
              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            }}
            onPress={() => handleSelectImage(dtden)}
          ></TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#234896",
              width: 85,
              height: 85,
              marginTop: "3%",
              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            }}
            onPress={() => handleSelectImage(dtbac)}
          ></TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: "#4D6DC1",
              width: 326,
              height: 44,
              marginTop: "6%",
              borderRadius: 10,
              borderColor: "#EB0D0D",
              borderWidth: 1,
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            }}
            onPress={() => navigation.goBack()}
          >
            <Text
              style={{
                fontFamily: "Roboto",
                fontSize: 20,
                fontWeight: 700,
                color: "#ffffff",
              }}
            >
              Xác nhận
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  const [image, setImage1] = React.useState(require("./assets/vs_blue.png"));

  return (
    <ImageContext.Provider value={{ image, setImage1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Screen1">
          <Stack.Screen name="Screen1" component={Screen1} />
          <Stack.Screen name="Screen2" component={Screen2} />
        </Stack.Navigator>
      </NavigationContainer>
    </ImageContext.Provider>
  );
}
