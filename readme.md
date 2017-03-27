# 作用

备份我的所有微博内容

#实现

使用[node爬虫](https://github.com/zhangolve/zhihu-answer-convert-to-md-by-node/tree/weibo)爬去到所有的微博内容，将生成的微博文件夹移植此项目中，微博文件夹内是所有的html文件。

实现ejs模板，给出所有的链接，通过遍历，实现循环的写出a标签。

使用iframe 将index主页与weibo文件夹中的内容进行连接。

# 未来可能的实现

将生成所有微博html文件的过程与生成本地微博html视图过程一体化。


