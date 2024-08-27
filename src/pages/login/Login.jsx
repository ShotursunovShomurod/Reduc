import React, { useState } from "react";
import { Button, Form, Input, message } from "antd";
import axios from "@/api/index";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "@/context";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [, dispatch] = useStateValue();
  const [messageApi, contextHolder] = message.useMessage();

  const handleLogin = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post("/auth/login", values);
      dispatch({ type: "LOGIN", payload: response.data.token });
      messageApi.success("Log in successful!");
      navigate("/");
    } catch (error) {
      messageApi.error("Username or password is incorrect!");
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      {contextHolder}
      <div className="w-[400px] bg-white p-6 rounded shadow-md">
        <h3 className="text-center text-3xl mb-6">Login</h3>
        <Form
          name="login"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={handleLogin}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              { required: true, message: "Please enter your username!" },
            ]}
          >
            <Input placeholder="Username" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Please enter your password!" },
            ]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              className="w-full"
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;