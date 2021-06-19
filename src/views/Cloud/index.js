import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import { PullToRefresh, ListView } from 'antd-mobile';
import { Toast } from 'antd-mobile';
// 复制内容
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { getCloud } from '../../requests'
import img1 from '../../assets/image/fuzhi.png';

import './index.less';

function Cloud() {


    const [fresh, setFresh] = useState({
        dataSource: [],
        list_rows: 2,//条数
        page: 1,//页数
        current_page: 0,//当前页
        last_page: 0,
        total: 0,
        isLoading: false,
        refreshing: false
    })


    // 点击复制
    const copyNumber = () => {
        Toast.info('复制成功', 2);
    };
    const getData = () => {
        console.log(fresh.page);
        getCloud({
            list_rows: fresh.list_rows,
            page: fresh.page,
        }).then((res) => {
            if (res.code === 1) {
                setFresh({
                    ...fresh,
                    dataSource: fresh.dataSource.concat(res.data.data),
                    current_page: res.data.current_page,//当前页
                    last_page: res.data.last_page,
                })

            }
        })
    }

    useEffect(() => {

        getData()

    }, [fresh.page])
    const onRefresh = () => {
        if (fresh.current_page < fresh.last_page) {

            setFresh({
                ...fresh,
                page: fresh.page + 1,
            })


        } else {
            console.log("已经是最好一页了");
        }

    }


    function renderItem(rowData, rowID) {
        return (
            <div key={rowID} className='cloud_box'>
                <div className='headline'>
                    <span></span>
                    <span>chia云算力</span>
                    <span>挖矿中</span>
                </div>
                <div className='cloud_con'>
                    <div>
                        算力<span>{rowData.power}T</span>
                    </div>
                    <div>
                        托管费<span>{rowData.trusteeship}%</span>
                    </div>
                    <div>
                        技术分佣费<span>{rowData.technology}%</span>
                    </div>
                    <div>
                        产权到期时间<span>{rowData.property_time}</span>
                    </div>
                    <div>
                        托管到期时间<span>{rowData.trusteeship_time}</span>
                    </div>
                    <div>
                        购买时间<span>{rowData.createtime}</span>
                    </div>
                    <div>
                        订单编号
                             <CopyToClipboard text={rowData.id} onCopy={copyNumber}>
                            <img src={img1} alt='' />
                        </CopyToClipboard>
                        <span>{rowData.id}</span>
                    </div>
                </div>
            </div>


        )
    }


    console.log(fresh.dataSource);

    return (
        <div className='cloud_computing'>
            <Navbar>chia云算力</Navbar>

            {/* <ListView
                loading={false}
                dataSource={data}
                renderRow={renderItem}
                initialListSize={20}
                pageSize={20}

                onEndReachedThreshold={10}
                style={{
                    height: "100%",
                }}
            /> */}

            <PullToRefresh
                className="refresh"
                onRefresh={onRefresh}
                refreshing={fresh.refreshing}
                direction="up"
            >


                {
                    fresh.dataSource.map((item, index) => {
                        return <div key={index} className='cloud_box'>
                            <div className='headline'>
                                <span></span>
                                <span>chia云算力</span>
                                <span>挖矿中</span>
                            </div>
                            <div className='cloud_con'>
                                <div>
                                    算力<span>{item.power}T</span>
                                </div>
                                <div>
                                    托管费<span>{item.trusteeship}%</span>
                                </div>
                                <div>
                                    技术分佣费<span>{item.technology}%</span>
                                </div>
                                <div>
                                    产权到期时间<span>{item.property_time}</span>
                                </div>
                                <div>
                                    托管到期时间<span>{item.trusteeship_time}</span>
                                </div>
                                <div>
                                    购买时间<span>{item.createtime}</span>
                                </div>
                                <div>
                                    订单编号
                             <CopyToClipboard text={item.id} onCopy={copyNumber}>
                                        <img src={img1} alt='' />
                                    </CopyToClipboard>
                                    <span>{item.id}</span>
                                </div>
                            </div>
                        </div>
                    })
                }

            </PullToRefresh>
        </div>
    );
}
export default Cloud;
