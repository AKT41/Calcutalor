import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  SafeAreaView,
  StatusBar,
  TextInput,
} from "react-native";

const App = () => {
  const [input, setInput] = useState("0");

  const [inputLimit, setInputLimit] = useState(10);

  const [isDarkModeEnabled, setDarkModeEnabled] = useState(false);

  const statusBarHeight = StatusBar.currentHeight;

  const limitedInput = input.length > 16 ? "max. number" : input;

  const handleTextChange = (text) => {
    if (text.length <= inputLimit) {
      setInput(text);
    }
  };

  // useEffect(() => {
  //   if (isDarkModeEnabled) {
  //     StatusBar.setBarStyle("dark-content");

  //   } else {
  //     StatusBar.setBarStyle("light-content");
  //   }
  // }, [isDarkModeEnabled]);

  const handlePress = (value) => {
    if (value === "C") {
      setInput("0");
      return;
    }
    if (value === "=") {
      setInput(String(eval(input)));
      return;
    }
    if (input === "0") {
      setInput(value);
      return;
    }
    if (value === " 0") {
      // delete " 0" // <space 0>
      if (input.length > 0) {
        setInput(input.slice(0, -1));
      } else if (input == "" && input == 0) {
        setInput("0");
      }
      return;
    }
    if (value === "%") {
      setInput(String(input / 100));
      return;
    }

    setInput(input + value);
  };
  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: isDarkModeEnabled ? "#000" : "#d7e2e7" },
      ]}
    >
      <StatusBar
        barStyle={isDarkModeEnabled ? "light-content" : "dark-content"}
        backgroundColor={isDarkModeEnabled ? "#000" : "#d7e2e7"}
      />
      <Text
        style={[
          styles.inputValue,
          { color: isDarkModeEnabled ? "#fff" : "#000" },
          input.length >= 13 ? { fontSize: 40 } : {},
        ]}
        onChangeText={handleTextChange}
      >
        {limitedInput}
        {/* {input}  */}
      </Text>

      <View
        style={[
          styles.buttonsContainer,
          { backgroundColor: isDarkModeEnabled ? "#393636" : "#93bacd" },
        ]}
      >
        <TouchableOpacity
          style={styles.buttonOptions}
          onPress={() => handlePress("C")}
        >
          <Text
            style={[
              styles.buttonTextOptions,
              { color: isDarkModeEnabled ? "#6cb2d8" : "#165476" },
            ]}
          >
            C
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonOptions}
          onPress={() => handlePress("%")}
        >
          <Text
            style={[
              styles.buttonTextOptions,
              { color: isDarkModeEnabled ? "#6cb2d8" : "#165476" },
            ]}
          >
            %
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonOptions}
          onPress={() => handlePress(" 0")}
        >
          <Text
            style={[
              styles.buttonTextOptions,
              { color: isDarkModeEnabled ? "#6cb2d8" : "#165476" },
            ]}
          >
            Del
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonOptions}
          onPress={() => handlePress("*")}
        >
          <Text
            style={[
              styles.buttonTextOptions,
              { color: isDarkModeEnabled ? "#6cb2d8" : "#165476" },
            ]}
          >
            ×
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("1")}
        >
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("2")}
        >
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("3")}
        >
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonOptions}
          onPress={() => handlePress("/")}
        >
          <Text
            style={[
              styles.buttonTextOptions,
              { color: isDarkModeEnabled ? "#6cb2d8" : "#165476" },
            ]}
          >
            ÷
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("4")}
        >
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("5")}
        >
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("6")}
        >
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonOptions}
          onPress={() => handlePress("+")}
        >
          <Text
            style={[
              styles.buttonTextOptions,
              { color: isDarkModeEnabled ? "#6cb2d8" : "#165476" },
            ]}
          >
            +
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("7")}
        >
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("8")}
        >
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("9")}
        >
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonOptions}
          onPress={() => handlePress("-")}
        >
          <Text
            style={[
              styles.buttonTextOptions,
              { color: isDarkModeEnabled ? "#6cb2d8" : "#165476" },
            ]}
          >
            -
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("00")}
        >
          <Text style={styles.buttonText}>00</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("0")}
        >
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress(".")}
        >
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonOptions}
          onPress={() => handlePress("=")}
        >
          <Text
            style={[
              styles.buttonTextOptions,
              { color: isDarkModeEnabled ? "#6cb2d8" : "#165476" },
            ]}
          >
            =
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableWithoutFeedback
        onPress={() => setDarkModeEnabled(!isDarkModeEnabled)}
        style={styles.switch}
      >
        <Image
          source={
            isDarkModeEnabled
              ? require("./assets/light-mode.png")
              : require("./assets/dark-mode.png")
          }
          style={{
            width: 42,
            height: 42,
            position: "absolute",
            top: 0,
            left: 0,
            marginLeft: 15,
            marginTop: 15,
          }}
        />
      </TouchableWithoutFeedback>

      {/* 
                 Dark mode - Light mode text
     <Text
        style={[
          styles.darkModeText,
          { color: isDarkModeEnabled ? "#6cb2d8" : "#165476" },
        ]}
      >
        {isDarkModeEnabled ? "Light Mode" : "Dark Mode"}
      </Text>
                Dark mode - Light mode Swtich
       <Switch
        value={isDarkModeEnabled}
        onValueChange={(value) => setDarkModeEnabled(value)}
        trackColor={{ false: "#165476", true: "#6cb2d8" }}
        thumbColor={isDarkModeEnabled ? "#fff" : "#5d7474"}
        ios_backgroundColor="#f9f9f9"
        style={styles.switch}
      /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  darkModeText: {
    position: "absolute",
    top: "8%",
    left: 0,
    marginLeft: 20,
    fontSize: 16,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1b1919",
    // marginTop: StatusBar.currentHeight,
  },
  inputValue: {
    fontSize: 50,
    marginBottom: 20,
    position: "absolute",
    top: "25%",
    right: 0,
    marginRight: 20,
    color: "#fff",
    zIndex: 99,
  },
  buttonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundColor: "#000",
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  button: {
    width: "25%",
    // backgroundColor: "#f0f0f0",
    padding: 20,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonOptions: {
    width: "25%",
    // backgroundColor: "#ffbb33",
    padding: 20,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonOptionsE: {
    width: "25%",
    backgroundColor: "#ffbb33",
    padding: 20,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 32,
  },
  buttonTextOptions: {
    color: "#007fff",
    fontSize: 32,
  },
  result: {
    fontSize: 50,
    marginBottom: 20,
    position: "absolute",
    top: "30%",
    right: 0,
    marginRight: 20,
    color: "#908c8c",
  },
  switch: {
    position: "absolute",
    top: "10%",
    left: 0,
    marginLeft: 20,
  },
});

export default App;
