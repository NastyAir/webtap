
const Mock = require('mockjs');
const data =
    [
        {name: "百度", url: "www.baidu.com", remark: "搜索引擎"},
        {name: "煎蛋", url: "www.jandan.com", remark: "译介方式传播网络新鲜资讯"},
        {name: "煎蛋", url: "www.jandan.com", remark: "译介方式传播网络新鲜资讯"},
        {name: "煎蛋", url: "www.jandan.com", remark: "译介方式传播网络新鲜资讯"},
        {name: "煎蛋", url: "www.jandan.com", remark: "译介方式传播网络新鲜资讯"},
        {name: "煎蛋", url: "www.jandan.com", remark: "译介方式传播网络新鲜资讯"},
        {name: "煎蛋", url: "www.jandan.com", remark: "译介方式传播网络新鲜资讯"},
        {name: "煎蛋", url: "www.jandan.com", remark: "译介方式传播网络新鲜资讯"},
        {name: "煎蛋", url: "www.jandan.com", remark: "译介方式传播网络新鲜资讯"},
        {name: "煎蛋", url: "www.jandan.com", remark: "译介方式传播网络新鲜资讯"},
        {name: "煎蛋", url: "www.jandan.com", remark: "译介方式传播网络新鲜资讯"},
        {name: "煎蛋", url: "www.jandan.com", remark: "译介方式传播网络新鲜资讯"},
        {name: "煎蛋", url: "www.jandan.com", remark: "译介方式传播网络新鲜资讯"},
        {name: "煎蛋", url: "www.jandan.com", remark: "译介方式传播网络新鲜资讯"},
        {name: "煎蛋", url: "www.jandan.com", remark: "译介方式传播网络新鲜资讯"},
        {name: "煎蛋", url: "www.jandan.com", remark: "译介方式传播网络新鲜资讯"},
        {name: "煎蛋", url: "www.jandan.com", remark: "译介方式传播网络新鲜资讯"},
        {name: "煎蛋", url: "www.jandan.com", remark: "译介方式传播网络新鲜资讯"},
        {name: "煎蛋", url: "www.jandan.com", remark: "译介方式传播网络新鲜资讯"}

    ];

const webSiteData = function () {
    let list=[];
    for (let item of data) {
        let tempData =item;
        tempData.pic=Mock.Random.dataImage('300x200',tempData.name );
        list.push(tempData);
    }
    return list;
}


export default webSiteData;