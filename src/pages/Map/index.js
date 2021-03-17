import { message, PageHeader } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { Redirect } from "react-router";
import { useMap, APILoader, usePolyline } from "@uiw/react-baidu-map";

function Map(props) {
  //const [polyline, setPolyline] = useState(<></>);
  const { setContainer, map } = useMap({
    zoom: 17,
    center: "四川",
  });
  /*  const { polyline } = usePolyline({
    map,
    enableEditing,
    strokeOpacity,
    path: [
      { lng: 116.387112, lat: 39.920977 },
      { lng: 116.385243, lat: 39.913063 },
      { lng: 116.394226, lat: 39.917988 },
      { lng: 116.401772, lat: 39.921364 },
      { lng: 116.41248, lat: 39.927893 },
    ],
  }); */
  /*  useEffect(() => {
    if (baiduMap.current) {
      setContainer(baiduMap.current);
    }
  });
  const _polyline = [];
  try {
    const {
      location: {
        state: {
          circuitInfo: { longitude, speed, latitude },
        },
      },
    } = props;
    const combine = (arr, i) => {
      if (typeof i === "object") return arr.concat(i);
      arr.push(i);
      return arr;
    };
    const longitude_ = longitude.reduce(combine, []);
    const latitude_ = latitude.reduce(combine, []);

    for (let i = 0; i < speed.length; i++)
      _polyline.push({
        lng: longitude_[i],
        lat: latitude_[i],
      });

    console.log(_polyline);
  } catch (e) {
    //return <Redirect to="/" />;
  }
 */
  return (
    <>
      <PageHeader
        title="轨迹显示"
        onBack={() => {
          props.history.goBack();
        }}
      />
      <div
        style={{
          height: "100vh",
          paddingTop: "72px",
          marginTop: "-72px",
        }}
      >
        <APILoader akay="DmvaTbVhDI5FzcLmG8zcZQdPllicdMXQ">
          {/*  <div ref={baiduMap} /> */}
        </APILoader>
      </div>
    </>
  );
}

export default Map;
