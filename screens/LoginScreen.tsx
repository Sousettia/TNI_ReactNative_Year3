import { View } from "react-native";
import React, { useState } from "react";
import { Text, Card, Input, Button, Icon } from "@rneui/base";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { login } from "../services/auth-service";
import { AxiosError } from "../services/http-service";
import Toast from "react-native-toast-message";
import { useAppDispatch } from "../redux-toolkit/hooks";
import { setIsLogin } from "../auth/auth-slice";

const LoginScreen = (): React.JSX.Element => {
  const dispatch = useAppDispatch();

  const [showPassword, setShowPassword] = useState(false);

  //1. Define Validation
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Please Input Email")
      .email("Email format is invalid"),
    password: yup
      .string()
      .required("Please Input Password")
      .min(3, "Password must be at least 3 characters."),
  });
  //2. Apply with React Hook form
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const onLogin = async (data: any) => {
    try {
      const response = await login(data.email, data.password);
      //status 200 >> Success
      if (response.status === 200) {
        dispatch(setIsLogin(true));
        //ถ้ากรอกอีเมลและรหัสผ่านถูกต้องจะแสดงข้อความ login success ที่ terminal
        //Toast.show({ type: "success", text1: "Login Success" });
      }
    } catch (error: any) {
      // handle Error from Axios TypeScript
      let err: AxiosError<any> = error; //แปลงข้อผิดพลาดเป็น Error อย่างชัดเจน
      //Status 401
      if (err.response?.status === 401) {
        Toast.show({ type: "error", text1: err.response.data.message });
      } else {
        Toast.show({
          type: "error",
          text1: "เกิดข้อผิดพลาดไม่สามารถติดต่อ Server ได้",
        });
      }
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text h2>Thai-Nichi</Text>
      <Card containerStyle={{ padding: 10, width: "90%" }}>
        <Controller
          name="email"
          control={control}
          render={({ field: { onBlur, onChange, value } }) => (
            <Input
              placeholder="Email"
              leftIcon={{ name: "email" }}
              keyboardType="email-address"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              errorMessage={errors.email?.message}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field: { onBlur, onChange, value } }) => (
            <Input
              placeholder="Password"
              leftIcon={{ name: "key" }}
              rightIcon={
                //เพิม Icon สำหรับการแสดงรหัสผ่าน
                <Icon
                  name={showPassword ? "eye" : "eye-off"}
                  type="feather"
                  onPress={() => setShowPassword(!showPassword)}
                />
              }
              keyboardType="default"
              secureTextEntry={!showPassword}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              errorMessage={errors.email?.message}
            />
          )}
        />
        <Button
          title="Log In"
          size="lg"
          onPress={handleSubmit(onLogin)}
          loading={isSubmitting}
          disabled={!isValid}
        />
      </Card>
    </View>
  );
};

export default LoginScreen;
