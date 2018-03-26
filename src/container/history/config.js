import React, { Component } from 'react'
import { Popconfirm,Button } from 'antd'

function deleteArticle(Id) {
  console.log(Id);
};

const columns = [
  { title: '标题', dataIndex: '标题', key: 'name' },
  { title: '发布人', dataIndex: '发布人', key: 'age' },
  { title: '发布时间', dataIndex: '发布时间', key: 'address' },
  { title: 'Action', dataIndex: '', key: 'x', 
    render: (text,record,index) => {
      const id = record.id
      return (
        <Popconfirm title="确定删除？" onConfirm={() => deleteArticle(id)} placement="删除">  
            <Button>删除</Button>
        </Popconfirm>
      )
    }
  },
];



const data = []
for(let i = 0;i < 46; i++ ) {
  data.push({
    "key": i,
    "标题": `title${i}`,
    "发布人": `New York No. 1 Lake Park'${i}`,
    "发布时间": `2017-12-${i}`,
    "description": `this is content ${i}`
  })
}

export  {data,columns }