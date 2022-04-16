module.exports = {
    title: '网站标题',
    description: '网站描述',
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/web_accumulate/', // 这是部署到github相关的配置 下面会讲
    markdown: {
      lineNumbers: true // 代码块显示行号
    },
    themeConfig: {

      lastUpdated: 'Last Updated' ,// 文档更新时间：每个文件git最后提交的时间
      nav:[
        { text: '前端算法', link: '/algorithm/' }, // 内部链接 以docs为根目录
        { text: '博客', link: 'http://obkoro1.com/' }, // 外部链接
        // 下拉列表
        {
          text: 'GitHub',
          items: [
            { text: 'GitHub地址', link: 'https://github.com/OBKoro1' },
            {
              text: '算法仓库',
              link: '/algorithm/'
            }
          ]
        }        
      ],
      sidebar:{
        "/accumulate/":[
            {
                title: "1. 框架指南",
    
                path: "/",
                children: [
                  { title: "内置功能", path: "/accumulate/A" },
                  { title: "展望未来", path: "/accumulate/B" },
                  { title: "展望未来", path: "/accumulate/test" },
                ],
            }
        ]
      }
    }
  };