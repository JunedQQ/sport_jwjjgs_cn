import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  Form,
  Input,
  List,
  message,
  PageHeader,
  Popover,
  Space,
  Typography,
} from "antd";
import { CloseCircleTwoTone, CheckCircleTwoTone } from "@ant-design/icons";
import { useRequest } from "ahooks";
import axios from "axios";
import moment from "moment";
import md5 from "js-md5";
import copy from "copy-to-clipboard";

const VERSION = "V 2.5.6";

const getRandom = (n, m) => Math.floor(Math.random() * (m - n + 1)) + n;

const getList = (pageNum) =>
  new Promise((resolve, reject) => {
    const startTime = moment().subtract(720, "days").valueOf();
    const endTime = moment().valueOf();
    axios
      .post("running/api/v1/running/recordList", {
        pageNum,
        pageSize: 100,
        startTime,
        endTime,
      })
      .then((res) => {
        resolve(res.items);
      })
      .catch((e) => {
        reject("获取列表失败");
      });
  });

const getUser = () =>
  new Promise((resolve, reject) => {
    axios
      .get("/health/api/v1/homePage/user")
      .then((res) => {
        const {
          runningRule: { rule, userCampus },
        } = res;
        //{rule:{},userCampus:{}}
        resolve({
          rule,
          userCampus,
        });
      })
      .catch(() => {
        reject(false);
      });
  });

const getStart = (campusId) =>
  new Promise((resolve, reject) => {
    const data = {
      campusId,
      latitude: `30.786842${getRandom(10000, 99999)}`,
      longitude: `103.886128${getRandom(10000, 99999)}`,
      type: 1,
    };
    axios
      .post("/running/api/v1/running/start", { ...data })
      .then((res) => {
        const { randomCircuit } = res;
        //{...randomCircuit}
        resolve({ ...randomCircuit });
      })
      .catch(() => {
        reject(false);
      });
  });
const getEnd = (circuitString = {}, distance = 0, time = 0) =>
  new Promise((resolve, reject) => {
    //circuitString = { runningRule, randomCircuit }
    //{runningRule:{rule:{},userCampus:{}},randomCircuit:{}}
    const _circuitString = {
      ...circuitString,
      time: moment().format("YYYY-MM-DD HH:mm:ss"),
    };
    const data = {
      circuitInfo: {
        circuitString: JSON.stringify(_circuitString),
      },
      version: VERSION,
      valid: 1,
      id: 1,
      type: 1,
      platform: 1,
      stepRate: getRandom(40, 80),
      invalidReason: "",
      distance: distance,
      validDistance: distance,
      phone: "",
      startTime: moment().valueOf(),
      endTime: moment().add(time, "seconds").valueOf(),
      calories: parseInt(distance / 20),
    };
    const segment = [
      data.startTime + getRandom(10, 100),
      data.endTime - getRandom(1500, 2500),
    ];
    data.totalTime = parseInt((segment[1] - segment[0]) / 1000);
    const latitudeArr = [],
      longitudeArr = [],
      speedArr = [];
    const { requireLatitude, requireLongitude } = _circuitString.randomCircuit;
    for (let i = 0; i < 3; i++) {
      latitudeArr.push(requireLatitude[i]);
      longitudeArr.push(requireLongitude[i]);
      speedArr.push(getRandom(2, 20));
    }
    data.circuitInfo = {
      ...data.circuitInfo,
      latitude: [latitudeArr],
      longitude: [longitudeArr],
      segment: [segment],
      speed: speedArr,
      calories: parseInt(distance / 20),
    };
    data.md5 = md5(
      `EndRunningInfo{a='${data.invalidReason}', b=${data.totalTime}, c=${data.distance}, d=${data.type}, e=${data.startTime}, f=${data.endTime}, g='${data.phone}'}`
    );
    const _data = {};
    Object.keys(data)
      .sort()
      .map((item) => (_data[item] = data[item]));
    axios
      .post(`/running/api/v1/running/end3`, _data)
      .then((res) => {
        resolve(res);
      })
      .catch(() => {
        reject(false);
      });
  });

function Home() {
  const [list, setList] = useState([]);

  const { loading, run } = useRequest(
    (obj) => {
      return new Promise(async (resolve, reject) => {
        const runningRule = await getUser().catch(() =>
          reject("获取用户信息失败")
        );

        const randomCircuit = await getStart(
          runningRule.rule.campusId
        ).catch(() => reject("获取跑步信息失败"));

        const end = await getEnd(
          { runningRule, randomCircuit },
          obj.distance,
          obj.time
        ).catch((e) => {
          reject("结束跑步失败");
        });
        const { invalidReason, valid } = end;
        if (valid === 1) resolve(true);
        else reject(invalidReason);
      });
    },
    {
      manual: true,
      onSuccess: () => {
        message.success("跑步完成");
        listRun();
      },
      onError: (e) => {
        message.error(e);
        listRun();
      },
    }
  );

  const { loading: listLoading, run: listRun } = useRequest(() => getList(1), {
    manual: true,
    onSuccess: (res) => {
      setList(res);
      console.log(res);
    },
    onError: (e) => {
      message.error(e);
    },
  });

  useEffect(() => {
    listRun();
    getUser();
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <PageHeader
        title="乐健"
        subTitle="完全免费"
        extra={
          <Link to="/login">
            <Button type="link">切换账号</Button>
          </Link>
        }
      >
        <Space direction="vertical" style={{ width: "100%" }} size="large">
          <Card title="告知 更新于2021/03/16">
            <Typography.Text>
              1.本功能属于纯前端实现，不存在收集，保留用户信息等
              <br />
            </Typography.Text>
            <Typography.Text>
              2.仅供学习研究使用，切勿用于非法或商业等用途
              <br />
            </Typography.Text>
            <Typography.Text>
              3.完全免费开源，请勿上当受骗，如果你是收费看到页面，请及时举报诈骗者
              <br />
            </Typography.Text>
            <Typography.Text>
              4.github:
              <a href="https://github.com/jwjjgs/sport_jwjjgs_cn">
                点我查看开源代码/更新日志
              </a>
              <br />
            </Typography.Text>
          </Card>
          <Form
            onFinish={(e) => {
              run(e);
            }}
          >
            <Form.Item name="distance">
              <Input addonBefore="距离" addonAfter="米" />
            </Form.Item>
            <Form.Item name="time">
              <Input addonBefore="时间" addonAfter="秒" />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" type="primary" block loading={loading}>
                奔跑
              </Button>
            </Form.Item>
          </Form>

          <List
            loading={listLoading}
            itemLayout="horizontal"
            dataSource={list}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    item.valid === 1 ? (
                      <CheckCircleTwoTone twoToneColor="#52c41a" />
                    ) : (
                      <CloseCircleTwoTone twoToneColor="#eb2f96" />
                    )
                  }
                  title={`距离:${item.validDistance}m 时间:${item.totalTime}s`}
                  description={item.startTime}
                />
                <Popover
                  content={
                    <Space direction="vertical">
                      <Link
                        to={{
                          pathname: "/",
                          state: {
                            circuitInfo: JSON.parse(item.circuitInfo),
                          },
                        }}
                      >
                        <Button ghost type="primary">
                          查看路线轨迹
                        </Button>
                      </Link>

                      <Button
                        type="primary"
                        onClick={() => {
                          try {
                            const { latitude, longitude, speed } = JSON.parse(
                              item.circuitInfo
                            );
                            copy(
                              JSON.stringify({ latitude, longitude, speed })
                            );
                            message.success("已复制");
                          } catch {
                            message.error("复制失败");
                          }
                        }}
                      >
                        导出轨迹数据
                      </Button>
                    </Space>
                  }
                >
                  <Button>更多</Button>
                </Popover>
              </List.Item>
            )}
          />
        </Space>
      </PageHeader>
    </>
  );
}
export default Home;
