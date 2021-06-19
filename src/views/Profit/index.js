import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import { getProfit } from '../../requests'
import './profit.less'
import { Button, List } from 'antd-mobile';
import img1 from '../../assets/image/shouyi.png';
import img2 from '../../assets/image/shouyi-2.png';
import img3 from '../../assets/image/tiqu.png';
import zichan from '../../assets/image/zichan.png';






const Profit = (props) => {
    const [dataSource, setDataSource] = useState({
        agent: null,
        amount: null,
        list: [],
        power_sum: null,
        profit_total: null,
        yesterday: null
    })

    const getData = async () => {
        await getProfit().then((res) => {
            if (res.code === 1) {
                setDataSource(res.data)
            }
        })
    }

    useEffect(() => {
        getData()

    }, [])


    return (
        <div className='home_content'>
            <Navbar>收益</Navbar>
            <div className='content_info'>
                {/* 总算力 */}
                <div className='managed_force'>
                    <div className='managed_force_title headline'>
                        <span></span>
                        <span>总算力</span>
                    </div>
                    <div className='managed_force_con'>{dataSource.power_sum} T</div>
                </div>
                {/* XCH收益 */}
                <div className='xch_earnings'>
                    <div className='xch_earnings_title headline'>
                        <span></span>
                        <span>XCH收益</span>
                    </div>
                    <div className='xch_earnings_con'>
                        <div className='xch_item'>
                            <div className='xch_item_title'>
                                <img src={img1} alt='' /> 累计收益
              </div>
                            <p className='xch_money'>{dataSource.profit_total}</p>
                        </div>
                        <div className='xch_item'>
                            <div className='xch_item_title'>
                                <img src={img2} alt='' /> 昨日收益
              </div>
                            <p className='xch_money'>{dataSource.yesterday}</p>
                        </div>
                        <div className='xch_item'>
                            <div className='xch_item_title'>
                                <img src={img1} alt='' /> 代理收益
              </div>
                            <p className='xch_money'>{dataSource.agent}</p>
                        </div>
                        <div className='xch_item'>
                            <div className='xch_item_title'>
                                <img src={img3} alt='' /> 可提取
              </div>
                            <p className='xch_money'>{dataSource.amount}</p>
                        </div>
                    </div>
                </div>

                {/* 提币 */}
                <div className='mention_money'>
                    <Button
                        type='primary'
                        style={{
                            backgroundColor: '#35AE57',
                            height: '40px',
                            lineHeight: '40px',
                            fontSize: '14px',
                        }}
                    >
                        提币
          </Button>
                </div>

                {/* 资产 */}
                <div className='asset'>
                    <div className='asset_title headline'>
                        <span></span>
                        <span>资产</span>
                    </div>

                    {
                        dataSource.list.map((item, index) => <div key={index} className='asset_con'><img src={zichan} alt='' /><p>{item.currency}<span>{item.amount}</span></p></div>)
                    }

                </div>
            </div>
        </div>
    )

}

export default Profit