import React, { useEffect, useState } from "react";
import { Button, Form, Input, message, PageHeader, Select } from "antd";
import { useRequest } from "ahooks";
import { useHistory } from "react-router";
import axios from "axios";
function Login() {
  const history = useHistory();
  const [orgs, setOrgs] = useState([]);
  useEffect(() => {
    axios
      .get("/health/api/v2/organization/list", {
        params: {
          orgType: 1,
        },
      })
      .then((res) => {
        setOrgs(res.map((i) => ({ label: i.name, value: i.id })));
      });
  }, []);

  const { loading, run } = useRequest(
    (obj) => ({
      url: "/health/api/v1/login",
      method: "post",
      data: { ...obj },
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
          <Form.Item
            name="username"
            rules={[{ required: true, message: "请输入账号" }]}
          >
            <Input addonBefore="账号" type="tel" maxLength={11} />
          </Form.Item>
          <Form.Item
            name="password"
            maxLength={16}
            rules={[{ required: true, message: "请输入密码" }]}
          >
            <Input.Password addonBefore="密码" />
          </Form.Item>
          <Form.Item
            name="orgId"
            rules={[{ required: true, message: "请选择地区" }]}
          >
            <Select options={orgs} />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" type="primary" block loading={loading}>
              登录
            </Button>
          </Form.Item>
        </Form>
      </PageHeader>
    </>
  );
}
export default Login;
