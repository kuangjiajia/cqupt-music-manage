
const columns = [{
    title: '点歌人',
    dataIndex: 'name',
  }, {
    title: '对方姓名',
    dataIndex: 'age',
  }, {
    title: '歌曲',
    dataIndex: 'address',
  },{
    title: '演唱者',
    dataIndex: 'singer'
  },{
    title: "点歌时间",
    dataIndex: "date"
  },{
    title: "想说的话",
    dataIndex: "content"
  },{
    title: "是否采纳",
    dataIndex: "adopt"
  }];
  
  const data = [];
  for (let i = 0; i < 20; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
      singer: `张学友${i}`,
      date: `2017-12-${i}`,
      content: `content${i}`,
      adopt: 0
    });
  }


  export {columns , data}