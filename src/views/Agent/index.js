import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { getAgent } from '../../requests';

import img1 from '../../assets/image/shouyi.png';
import img2 from '../../assets/image/shouyi-2.png';
import img3 from '../../assets/image/jiameng.png';
import img4 from '../../assets/image/tuijianren.png';
import './index.less';
function Agent() {
  // 代理接口数据
  const [dataAgency, setDataAgency] = useState({
    profit_total: '',
    commission: '',
    join: '',
    invite_agent: '',
    level_list: {
      data: [],
    },
  });
  const [obj] = useState({
    list_rows: '10',
    page: '1',
  });

  //获取代理数据
  const getData = async () => {
    await getAgent(obj).then((res) => {
      if (res.code === 1) {
        console.log('获取代理数据', res);
        setDataAgency(res.data);
      }
    });
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(dataAgency.level_list.data);
  return (
    <div className='agent'>
      <Navbar>代理</Navbar>
      {/* 代理收益 */}
      <div className='agent_benefit'>
        <div className='headline'>
          <span></span>
          <span>
            代理收益 <span>(元)</span>{' '}
          </span>
        </div>
        <div className='agent_benefit_con'>
          <div className='agent_item'>
            <div className='agent_item_title'>
              <img src={img1} alt='' /> 累计收益
            </div>
            <p className='agent_money'>{dataAgency.profit_total}</p>
          </div>
          <div className='agent_item'>
            <div className='agent_item_title'>
              <img src={img2} alt='' /> 分佣
            </div>
            <p className='agent_money'>{dataAgency.commission}</p>
          </div>
          <div className='agent_item'>
            <div className='agent_item_title'>
              <img src={img3} alt='' /> 加盟费
            </div>
            <p className='agent_money'>{dataAgency.join}</p>
          </div>
          <div className='agent_item'>
            <div className='agent_item_title'>
              <img src={img4} alt='' /> 推荐代理（个）
            </div>
            <p className='agent_money'>{dataAgency.invite_agent}</p>
          </div>
        </div>
      </div>

      {/* 推荐代理 */}
      <div className='recommend_agent'>
        <div className='headline'>
          <span></span>
          <span>推荐代理</span>
        </div>
        <div className='agent_table'>
          <table>
            <thead>
              <tr>
                <td>手机号</td>
                <td>代理层级</td>
                <td>状态</td>
              </tr>
            </thead>
            <tbody>
              {dataAgency.level_list.data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.mobile}</td>
                    <td>
                      {item.level === 1
                        ? ''
                        : item.level === 2
                        ? '一级代理'
                        : '二级代理'}
                    </td>
                    <td
                      className={
                        item.role === 1 ? 'take_effect' : 'lose_efficacy'
                      }
                    >
                      {item.role === 1 ? '正常' : '失效'}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Agent;
