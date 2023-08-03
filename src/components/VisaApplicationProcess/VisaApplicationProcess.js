import React from "react";

import chuqian from "./images/chuqian.png";
import shenhe from "./images/shenhe.png";
import songshen from "./images/songshen.png";
import wstjdd from "./images/wstjdd.png";
import zbzl from "./images/zbzl.png";

import styled from "styled-components";

const Container = styled.div`
  width: 154.2rem;
  margin: 6rem auto;
`;

const Item = styled.div`
  width: 22.2rem;

  .process-text_1 {
    height: 2.5rem;
    font-size: 1.8rem;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #333333;
    line-height: 2.5rem;
    white-space: nowrap;
    margin: 1rem 0 0 0;
  }

  .process-text_2 {
    height: 2rem;
    font-size: 1.4rem;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #666666;
    line-height: 2rem;
    white-space: nowrap;
    margin: 1rem 0 0 0;
  }
`;

const Wrapper = styled.div`
  background-color: rgba(255, 255, 255, 1);
  width: 100vw;
  aspect-ratio: 1920 / 460;
  position: relative;

  .process-box {
    width: 118.5rem;
    height: 16.0rem;
    margin: 3.8rem 0 0 71.5rem;
  }
  .process-text-group_65 {
    width: 49.0rem;
    height: 7.2rem;
    margin-top: 6.2rem;
  }
  .process-text_12 {
    width: 18rem;
    height: 4.2rem;
    overflow-wrap: break-word;
    color: rgba(51, 51, 51, 1);
    font-size: 3rem;
    font-weight: 500;
    text-align: right;
    white-space: nowrap;
    line-height: 4.2rem;
    margin-left: 15.5rem;
  }
  .process-text_13 {
    width: 49rem;
    height: 2rem;
    overflow-wrap: break-word;
    color: rgba(102, 102, 102, 1);
    font-size: 1.4rem;
    text-align: right;
    white-space: nowrap;
    line-height: 2rem;
    margin-top: 1rem;
  }
`;

const VisaApplicationProcess = () => {
  return (
    <Wrapper className="flex-col">
      <div className="process-box flex-row justify-between">
        <div className="process-text-group_65 flex-col justify-between">
          <span className="process-text_12">签证办理流程</span>
          <span className="process-text_13">
            不同的国家办理签证时需要的流程有所不同，具体以各个国家签证办理流程为准
          </span>
        </div>
      </div>
      <Container className="flex-row justify-between">
        <Item className="flex-col align-center">
          <img className="image" src={wstjdd} />
          <span className="process-text_1">网上提交订单</span>
          <span className="process-text_2">享受VIP待遇</span>
        </Item>
        <Item className="flex-col align-center">
          <img className="image" src={zbzl} />
          <span className="process-text_1">准备、递交材料</span>
          <span className="process-text_2">全程指导&nbsp;省时省力</span>
        </Item>
        <Item className="flex-col align-center">
          <img className="image" src={shenhe} />
          <span className="process-text_1">审核材料、缴费</span>
          <span className="process-text_2">精英核查&nbsp;火速反馈</span>
        </Item>
        <Item className="flex-col align-center">
          <img className="image" src={songshen} />
          <span className="process-text_1">准备、递交材料</span>
          <span className="process-text_2">送签陪签&nbsp;专人服务</span>
        </Item>
        <Item className="flex-col align-center">
          <img className="image" src={chuqian} />
          <span className="process-text_1">出签、核对</span>
          <span className="process-text_2">可邮寄&nbsp;可自取</span>
        </Item>
      </Container>
    </Wrapper>
  );
};

export default VisaApplicationProcess;
