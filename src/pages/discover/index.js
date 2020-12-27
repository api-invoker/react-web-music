import React, { memo, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import request from "@/services/request";

import { discoverMenu } from "@/common/local-data";
import {
  DiscoverWrapper,
  TopMenu
} from "./style";

const RHDiscover = memo((props) => {
  const {route} = props;
  useEffect(() => {
    request({
      url: "/banner"
    }).then(res => {
      console.log(res)
    })
  },[]);

  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {
            discoverMenu.map((item, index) => {
              return (
                <div className="item" key={item.title}>
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              )
            })
          }
        </TopMenu>

      </div>
      {renderRoutes(route.routes)}
    </DiscoverWrapper>
  );
});

export default RHDiscover;