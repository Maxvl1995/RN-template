import { View, TextInput } from "react-native";
import React, { FC, useState } from "react";
import { styles } from "./styles";
import { Text } from "@components/atoms";
import Button from "@components/atoms/Button/Button";
import { useTheme } from "@theme/index";
import Space from "@components/Space";
import { ratioW } from "@utils/UDimension";
import { dispatch } from "@common/redux";
import { signInRequest } from "@redux/actions/AuthAction";

const Login: FC = () => {
  const { colors } = useTheme();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    dispatch(signInRequest({ username, password }));
    console.log(username);
    console.log(password);
  };
  return (
    <View style={styles.container}>
      <View style={[styles.wrapper, { backgroundColor: colors.bgHeader }]}>
        <Space height={ratioW(20)} />
        <Text style={styles.title}>LOGIN</Text>
        <Space />
        <TextInput
          onChangeText={setUsername}
          placeholder="Username"
          style={{
            ...styles.textInput,
            backgroundColor: colors.backgroundColor,
          }}
        />
        <Space />
        <TextInput
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry={true}
          style={{
            ...styles.textInput,
            backgroundColor: colors.backgroundColor,
          }}
        />
        <Space height={ratioW(30)} />
        <Button title="Login" style={styles.btLogin} onPress={handleLogin} />
        <Space height={ratioW(30)} />
      </View>
    </View>
  );
};

export default Login;
