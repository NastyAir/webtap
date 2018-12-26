const Mock = require('mockjs');
const popular =
    [
        {name: "百度", url: "http://www.baidu.com", remark: "搜索引擎"},
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
const learn =
    [
        {name: "百度", url: "http://www.baidu.com", remark: "搜索引擎"},
        {name: "煎蛋", url: "www.jandan.com", remark: "译介方式传播网络新鲜资讯"},
        {name: "煎蛋", url: "www.jandan.com", remark: "译介方式传播网络新鲜资讯"}
    ];
const pastime =
    [
        {name: "百度", url: "http://www.baidu.com", remark: "搜索引擎"},
        {name: "煎蛋", url: "www.jandan.com", remark: "译介方式传播网络新鲜资讯"},
        {name: "煎蛋", url: "www.jandan.com", remark: "译介方式传播网络新鲜资讯"},
        {name: "煎蛋", url: "www.jandan.com", remark: "译介方式传播网络新鲜资讯"}
    ];
const getData = function (type) {
    let tempdata;
    switch (type) {
        case "popular": {
            tempdata = popular;
            break;
        }
        case "learn": {
            tempdata = learn;
            break;
        }
        case "pastime": {
            tempdata = pastime;
            break;
        }
        default: {
            return null;
        }
    }
    let list = [];
    for (let item of tempdata) {
        let tempData = item;
        tempData.pic = Mock.Random.dataImage('300x200', tempData.name);
        list.push(tempData);
    }
    return list;
}


export default getData;