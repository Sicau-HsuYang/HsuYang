(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{325:function(t,a,n){"use strict";n.r(a);var s=n(14),e=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"云服务器相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#云服务器相关"}},[t._v("#")]),t._v(" 云服务器相关")]),t._v(" "),a("p",[t._v("使用命令行登录")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("使得服务器可以支持"),a("code",[t._v("root")]),t._v("账号登录，"),a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/590437914",target:"_blank",rel:"noopener noreferrer"}},[t._v("修改root账号登录"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/u012563853/article/details/125295985",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ubuntu安装docker"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" rmi "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("镜像ID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" pull "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("镜像源名称"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -f "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("容器实例"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" build -t "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("TagName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("dir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" run -d -p "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("端口映射关系"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("容器ID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" -it "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("容器实例，如gitlab"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("内部的bin名称"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("docker run -d --name yapi --restart=always --privileged=true -p 3000:3000 -e YAPI_ADMIN_ACCOUNT=admin@yangxu.com -e YAPI_ADMIN_PASSWORD=123456 -e YAPI_CLOSE_REGISTER=true -e YAPI_DB_SERVERNAME=1.12.243.15 -e YAPI_DB_PORT=27017 -e YAPI_DB_DATABASE=yapi -e YAPI_DB_USER=admin -e YAPI_DB_PASS=123456 -e YAPI_DB_AUTH_SOURCE=admin -e YAPI_MAIL_ENABLE=false -e YAPI_PLUGINS=[] jayfong/yapi")]),t._v(" "),a("p",[t._v("docker run -itd --name redis -p 6379:6379 redis")]),t._v(" "),a("p",[t._v("docker run -d -p 8443:443 -p 8090:80 -p 8022:22 --restart always --name gitlab -v /usr/local/gitlab/etc:/etc/gitlab -v /usr/local/gitlab/log:/var/log/gitlab -v /usr/local/gitlab/data:/var/opt/gitlab --privileged=true --platform linux/amd64 twang2218/gitlab-ce-zh")]),t._v(" "),a("p",[t._v("docker run --name nginx -p 8080:80 -d nginx")])])}),[],!1,null,null,null);a.default=e.exports}}]);