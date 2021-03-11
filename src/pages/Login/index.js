import React from "react";
import { Button, Form, Input, message, PageHeader } from "antd";
import { useRequest } from "ahooks";
import { useHistory } from "react-router";
function Login() {
  const history = useHistory();
  const { loading, run } = useRequest(
    (obj) => ({
      url: "/health/api/v1/login",
      method: "post",
      data: { ...obj, orgId: 368 },
    }),
    {
      manual: true,
      onSuccess: (result) => {
        const { token } = result;
        localStorage.setItem("token", `Bearer ${token}`);
        message.success("登陆成功");
        history.push("/");
      },
    }
  );

  return (
    <>
      <PageHeader title="登录">
        <Form
          onFinish={(e) => run(e)}
          initialValues={{ username: "", password: "" }}
        >
          <Form.Item name="username">
            <Input addonBefore="账号" />
          </Form.Item>
          <Form.Item name="password">
            <Input.Password addonBefore="密码" />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" type="primary" block loading={loading}>
              登录乐健
            </Button>
          </Form.Item>
        </Form>
      </PageHeader>
    </>
  );
}
export default Login;
