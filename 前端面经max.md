## 常见 HTTP 状态码

常见 HTTP 状态码

| 状态码               | desc          | 状态                             | 备注 |
| -------------------- | ------------- | -------------------------------- | ---- |
| 1xx 信息性状态码     | Informational | 服务器正在处理数据               |      |
| 2xx 成功状态码       | Success       | 请求已正常处理完毕               |      |
| 3xx 重定向状态码     | Redirection   | 需要进行额外操作以完成请求       |      |
| 4xx 客户端错误状态码 | Client Error  | 客户端原因导致服务器无法处理请求 |      |
| 5xx 服务器错误状态码 | Server Error  | 服务器原因导致处理请求出错       |      |

2xx 成功

| 状态码 | desc            | 状态                             | 备注                 |
| ------ | --------------- | -------------------------------- | -------------------- |
| 200    | ok              | 请求被服务器正常处理             |                      |
| 202    | Accepted        | 已收到请求消息，但是尚未进行处理 |                      |
| 204    | Not Content     | 请求已正常处理，但是没有内容返回 |                      |
| 206    | Partial Content | 服务器已经完成了部分 GET 请求    | 这个和断点续传有关系 |

3xx 重定向

| 状态码 | desc              | 状态                                               | 备注 |
| ------ | ----------------- | -------------------------------------------------- | ---- |
| 301    | moved permanently | 永久重定向                                         |      |
| 302    | found             | 临时重定向                                         |      |
| 303    | see other         | 请求资源存在另一个 URI,应使用 GET 定向获取请求资源 |      |
| 304    | Not Modified      | 表示客户端发送附带条件的请求时，条件不满足         |      |

4xx 客户端错误

| 状态码 | desc         | 状态                                           | 备注 |
| ------ | ------------ | ---------------------------------------------- | ---- |
| 400    | bad request  | 请求报文存在语法错误或参数错误，服务器不理解   |      |
| 401    | Unauthorized | 发送的请求需要有 HTTP 认证信息或者是认证失败了 |      |
| 403    | Forbidden    | 对请求资源的访问被服务器拒绝了                 |      |
| 404    | Not Found    | 表示服务器找不到你请求的资源                   |      |

5xx 服务器错误

| 状态码 | desc                  | 状态                           | 备注 |
| ------ | --------------------- | ------------------------------ | ---- |
| 500    | Internal Server Error | 表示服务器执行请求的时候出错了 |      |
| 502    | Bad Gateway           |                                |      |
| 503    | Service Unavailable   | 表示服务器超负载或正停机维护   |      |

## JavaScript值类型

1. 基本类型：string,number,boolean,null,undefined,Symbol,BigInt
2. 引用数据类型：常见的有Object,Array,Function



## 有几种方法可以判断是否是数组

1. 首先 typeof 肯定不行，判读一些引用类型时，不能具体到具体哪一种类型。

2. 使用`instanceof`或`constructor`

```javascript
const a = [1, 2, 3];
a instanceof Array; // true
a.constructor === Array; //true
```

> f instanceof Foo 的逻辑是
>
> f 的** proto**一层一层往上，能否对应到 Foo.prototype

3. 使用 Array.isArray
4. 使用 Object.prototype.toString.call()

## JavaScript 的闭包

## JavaScript 中的 this

js 中的 this 是运行期间绑定的，它可以是全局对象，当前对象，或者是任意对象，这完全取决于函数的调用方式。

### 作为对象方法调用 // xxx.func();

此时的 this 被自然绑定到该对象

```javascript
const person = {
  name: "chen",
  sayName() {
    console.log(this.name);
  },
};
person.sayName();
```

### 作为函数调用 // func();

此时的 this 绑定到全局对象。全局对象可能是 window，self（web worker），global。

```javascript
const person = {
  name: "chen",
  sayName() {
    console.log(this.name);
  },
};
const personSay = person.sayName;
personSay();
```

### 作为构造函数调用 // new Func();

JavaScript 支持面向对象式编程，但是 JavaScript 没有类的概念，而是使用基于原型的继承方式。JavaScript 中的构造函数也很特殊，如果不使用 new 调用，则和普通函数一样。如果调用正确，this 绑定到新创建的对象上。

### 使用 apply 或 call 调用 // func.apply()

apply 和 call 允许切换函数执行的上下文环境，即 this 绑定的对象

## 箭头函数中的 this

箭头函数没有自己的 this，它的 this**是继承来的**，它会捕获自己在定义时所处的上下文的 this，并继承这个 this 值。箭头函数中的 this 的指向。

箭头函数和 function(){}.bind(this)有点类似，但是是有区别的

## 箭头函数和普通函数的区别

1. 箭头函数没有函数提升
2. 箭头函数没有自己的 this，arguments
3. 不能做为构造函数
4. this 不可被修改

## js 有哪些数据类型？基本类型有哪些引用类型有哪些

1. js 的数据类型有 number,string,boolean,undefined,null,object,symbol,BigInt
2. 引用类型有 Array,Function,RegExp,Date 等

## 输入一个 url 到浏览器展示都经历了哪些过程

1. DNS 解析，将域名解析成 IP 地址
   1. 浏览器缓存，浏览器会按照一定的频率缓存 DNS 记录
   2. 操作系统缓存
   3. 路由器缓存
   4. ISP 的 DNS 服务器
   5. 根服务器
2. TCP 连接，TCP 三次握手
   1. 在客户端发送数据前会发起 TCP 三次握手用以同步客户端和服务端的序列号和确认号，并交换 TCP 窗口的大小信息。
   2. 三次握手的目的是 为了防止已失效的连接请求报文段突然又传送到了服务端，因而产生错误。
3. 发送 HTTP 请求
4. 服务器处理请求并返回 HTTP 报文
5. 浏览器解析渲染页面
   1. 这是个一边解析一边渲染的过程
   2. 先构建DOM Tree，CSSOM Tree，再生成Render Tree，Layout，Paint
6. 断开连接，TCP 四次挥手
   1. 主动方发送 FIN 通知被动方，被动方收到后发送一个 ACK，完成前两次挥手
   2. 此时停止了主动方向被动方的数据传输，但是被动方仍可以向主动方传输数据
   3. 被动方向主动方发送 FIN，主动方收到了后发送一个 ACK，关闭被动方向主动方的数据传输，TCP 连接关闭

## new 生成一个对象的过程

1. 创建一个新对象，并继承函数的原型，将他的引用做为 this。
2. 如果构造函数没有 return，最后会返回这个新对象
3. 如果 return 一个基本类型的数据，结果和第一种是一样的，否则是 return 的值。

## 什么是事件冒泡和事件捕获以及事件委托

一个完整是 js 事件流是从 window 开始，最后回到 window 的一个过程。

事件捕获->目标过程->事件冒泡

事件委托是利用了事件冒泡，指定了一个事件处理程序，就可以管理某一类型的所有事件。

addEventListener的第三个参数是useCapture，默认是false

## typeof null

结果是 'object'

## GET 和 POST 的区别

1. get 请求只能进行 url 编码，而 post 支持多种编码方式
   1. post 编码方式 application/x-www-form-urlencode multipart/form-data application/json text/xml
2. get 参数通过 url 传递，post 放在 request body 中

HTTP报文的三个主要部分，请求行，首部行，实体主体

## 什么情况算跨域？如何解决跨域的问题

1. 当页面请求 url 和当前页面的 url，域名，端口以及协议三者有一者不同时，就属于跨域范畴

2. 解决跨域的方法

   1. CORS 跨域资源共享

   使用额外的 HTTP 头告诉浏览器让运行在一个 origin 上的 web 应用被准许访问来自不同源服务器上的资源
   主要是在双方（Access-Control-Allow-Credentials的 header 和 XHR 或 Fetch 请求中）设置证书

   2. JSONP

   同源限制是跨域限制的本质。存在一些标签没有同源限制，像 script，link，img 标签等。

   3. 使用 nginx 解决跨域
   4. 使用 iframe 的 postMessage
   5. 使用 websocket

3. 请求预检问题

   1. 对于一些简单请求不会有请求预检，如果发生了跨域，该请求实际是发出去的了，只是结果被浏览器拦截下来了而已
   2. 对于需要预检请求，浏览器回发送一个OPTIONS请求。避免跨域的请求对服务器产生影响

## viewport 各个属性值的意义

1. width=device-width 网页宽度默认等于屏幕宽度
2. minimun-scale=1.0 最小缩放比 1.0，禁止缩小
3. Maximun-scale=1.0 最大缩放比 1.0，禁止放大
4. user-scalable=no 用户是否可以手动缩放

## CSS 水平居中

1. 行内元素的居中

使用 text-align:center; 对行内块元素也有效

2. 块级元素居中
   1. 定宽
      1. 子元素是正常流布局 可以使用 margin:0 auto;
      2. 子元素绝对定位 需要指出子元素的定位(left:0;right:0;)再使用 1
   2. 不定宽
      1. 使用 left: 50% transform:translateX(-50%);

3 . 使用 flex 布局

4. 使用grid布局 place-items:center;

## 点击穿透问题

## http 缓存机制

HTTP 的缓存都是属于客户端缓存，可以认为浏览器有个缓存数据库

1. 缓存规则
   1. 强制缓存 直接从缓存数据库获取数据
   2. 协商缓存 先从缓存数据库中获取到一个缓存数据的标识，然后向服务端验证是否过期，没有失效就会返回 304，浏览器从缓存中获取所请求的数据。
2. 缓存的方案
   1. 强制缓存
      1. Expires（http1.0） 值为服务器返回的数据到期时间，服务器端时间和客户端时间可能有误差，导致缓存命中的误差。
      2. Cache-Control （http1.1）
   2. 协商缓存
      1. Last-Modified 服务器响应请求时，告诉浏览器资源的最后修改时间
      2. Etag 服务器响应请求时，通过此字段告诉浏览器当前资源在服务器生成的唯一标识
3. 优点
   1. 减少了冗余的数据传递，节省带宽
   2. 减轻服务器的负担
   3. 加快客户端加载网页的速度

## Vue 的数据双向绑定的过程

1. vue 采用的是数据劫持结合发布和订阅者模式的方式，通过 Object.defineProperty 来劫持各个属性的 getter 和 setter，在数据变动时发布消息给订阅者，触发相应的监听回调。
2. 具体的步骤是
   1. 需要 observe 的数据对象进行递归遍历，包括子属性对象的属性，都加上 getter 和 setter，这样的话，给这个对象的某个值进行赋值就会触发 setter，这样就可以监听到数据变化。
   2. compile 解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指定对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图。
   3. watcher 订阅者
   4. MVVM 作为数据绑定的入口，整合三者
3. Vue2.x 用了 Object.defineProperty。Vue3.x 主要是用的 proxy 对象。
   1. 使用 proxy 的优势，defineProperty 只能监听某个属性，不能对全对象监听。可以省去 for in，闭包等内容来提升效率，直接绑定整个对象即可。
   2. 可以监听数组
   3. 但是 proxy 兼容性不好，ie 浏览器都不支持

## JavaScript 遍历对象属性

1. | 方法                       | 描述                                                                   |
   | -------------------------- | ---------------------------------------------------------------------- |
   | Object.keys()              | 遍历自身所有可枚举属性，不包含 Symbol 属性                             |
   | for...in...                | 遍历对象自身的和继承的可枚举的属性，不含 Symbol 属性                   |
   | Object.getOwnPropertyNames | 包含对象自身的所有属性，不含 Symbol 属性，但是包括不可枚举属性         |
   | Reflect.ownKeys            | 包含对象自身的所有属性，不管属性名是 Symbol 或字符串，也不管是否可枚举 |

## v-if 和 v-show 区别

v-if 如果为 false，那么页面不会有这个 html 标签生成。

v-show 不管是 true 还是 false，html 元素都会存在，只是 css 中的 display 显示或隐藏

v-if 切换时开销比较大，v-show 初始渲染时开销比较大

## Vue 组件 data 为什么必须是函数

如果 data 是一个对象，对象本身是属于引用类型

，当修改一个的属性后，会影响所有 Vue 实例的数据。

## 对比 jq，vue 有什么不同

jq 通过操作 DOM 去实现的一些渲染逻辑，vue 通过数据的双向绑定，以数据驱动视图，减少了 DOM 操作。Vue 使用了组件化的思想，使得项目的子集职责清晰，提高了开发效率，方便重复利用，便于协同开发。

## Vue 等单页面应用的优缺点

1. 优点
   1. 良好的交互体验
   2. 减轻服务器端压力
2. 缺点
   1. SEO 难度较高
   2. 初次加载耗时多

## JavaScript 对象的深拷贝

1. 使用 JSON.stringify 和 JSON.parse
2. 写一个递归函数去拷贝

## Promise 的三个状态

1. pendding
2. fulfilled
3. rejected

## Cookie 的属性

像 max-age,domain,path,secure,HttpOnly,samesite

## localStorage 和 sessionStorage 区别

1. localStorage 生命周期是永久，sessionStorage 生命周期是当前窗口或标签页，一旦窗口或标签页被永久关闭了，那么所有通过 sessionStorage 存储的数据就被清空了。
2. 相同浏览器相同域名和端口不同页面可以共享相同的 localStorage，不能共享 sessionStorage

## css 的几种隐藏

1. display:none;

   1. 浏览器不会生成该元素，不占据空间，不响应事件
   2. 动态改变此属性事会引起浏览器回流(reflow)

2. visibility: hidden;
   1. 依然占据空间，不会触发该元素绑定的事件
   2. 会被子元素继承
   3. 动态修改会引起重绘(repaint)
3. opacity:0
   1. 依然占据空间，会触发已经绑定的事件
   2. 会被子元素继承

## 如何降低重排的开销

主要是利用大部分浏览器都会有 Flush 队列进行渲染队列优化

1. 读写分离
2. 缓存布局信息
3. DOM 离线化，可以使用 DocumentFragment 创建一个 dom 碎片，操作完成后，再添加到文档中，这样只触发一次重排
4. 将元素 position 属性设置为 absolute 或 fixed，对其他元素影响较小，重排开销较小。可以用来优化动画。

## js 脚本加载问题

![img](http://segmentfault.com/img/bVcQV0)

1. `<script>` 解析文档，遇到 script 标签时，停止文档解析，加载 script 标签的内容，执行 script 标签内的脚本，然后继续解析文档
2. `<script defer>` 解析文档，遇到 script 标签时，不停止解析，会异步地加载脚本，等文档解析完了再执行脚本
3. `<script async>` 解析文档，遇到 script 标签时，不停止解析，会异步地加载脚本，脚本加载完成时，停止文档解析，执行脚本，执行完后，继续文档解析

## 什么是 BFC，如何形成 BFC

1. 它是页面中的一块渲染区域，具有 BFC 特性的元素可以看作是隔离了的独立容器，容器里面的元素不会在布局上影响到外面的元素。
2. 形成 BFC 的情况
   1. body 根元素
   2. 浮动元素
   3. 绝对定位元素
   4. display 为 inline-block,table-cells,flex
   5. overflow 不为 visible
3. BFC 应用

   1. 同一个 BFC 下的外边距会发生折叠。可以把不想让 margin 折叠的两个元素放在不同的 BFC 里。

   2. BFC 可以包含浮动的元素（清除浮动）。

      可以让 BFC 内浮动的元素参与 BFC 的高度的计算

   3. 可以阻止元素被浮动元素覆盖

## git rebase 和 git merge

1. feature 分支是从 master 分支 checkout 的，在 feature 分支执行 git rebase master，会将 feature 分支的基准 base 移动到 master 的 HEAD，并将在 feature 分支上做的改动应用到 master 分支的 HEAD 节点上
2. git rebase 会试图修改已经 commit 的东西
3. rebase 和 merge 都是用于合并分支。rebase 会将 feature 分支的基准移动到 master 分支最新的 commit id 上，并将 feature 分支的 commit 应用到 master 分支的 HEAD 节点上。merge 不改变原来的 commit id，会产生新的 commit id

## HTTP 与 HTTPS 的区别

1. HTTPS 是在 HTTP 的基础上加入了 SSL 协议，依靠证书来验证服务器的身份，并为浏览器和服务器之间的通信加密。
2. HTTP 一般是在 80 端口，HTTPS 一般是在 443 端口

### HTTPS过程

1. 用户向服务端发送支持的加密算法
2. 服务端选取一种加密算法，返回给客户端并带上证书
3. 客户端收到证书后，使用对应的CA的公钥进行验证证书的完整性，以及是否过期
4. 客户端从证书中获得服务端的公钥，将对称加密的密钥使用公钥加密后，发送给服务端
5. 服务端使用私钥进行解密，双方进行对称加密通信。



### HTTPS证书的吊销

1. CRL(Certificate Revocation Lists) CA会定期发布撤销证书列表。CRL文件较大，且更新可能不及时
2. OCSP(Online Certificate Status Protocal) 从在线OCSP服务器请求证书的撤销状态，OCSP server给予响应。同时OCSP也暴露了用户的隐私
3. OCSP Stapling

## HTTP2 与 HTTP1.x 相比的新特性

1. HTTP2 使用的是新的二进制格式传送，HTTP1.x 是文本传送，二进制协议解析更高效。
2. HTTP2 支持多路复用。可以让所有数据流共用一个连接。
3. 通过 gzip 和 compress 压缩头部然后再发送
4. 支持服务器推送

## HTTP 的长连接和短连接分别是什么

1. 短连接，浏览器和服务器每进行一次 HTTP 操作，就建立一个连接，任务结束就会中断这个链接
2. 长连接，HTTP1.1 规定了默认保持长连接，数据传输完成后，保持 TCP 连接不断开，等待在同域名下继续用这个通道传输数据。可以利用这个连接主动推送消息到客户端

## web 安全相关以及防护措施

1. XSS 攻击（被动攻击）
   1. 攻击者通过注入非法的 html 标签或 JavaScript 代码，控制用户浏览器
   2. 防范措施
      1. setCookie 时使用 httpOnly
      2. 前端进行输入检查，后端做过滤检查
   3. 本质上是前端对数据的解析的异常，和后端没什么关系
   4. 利用了用户对网站的信任
2. CSRF 攻击（被动攻击）
   1. 简单的身份验证只能保证请求发自某个用户的浏览器，却不能保证请求本身是用户自愿发出的。
   2. 防御措施
      1. POST方法也可被CSRF攻击，iframe里嵌套form表单
      2. 判断请求的 referer（referer 可以用来防 CSRF，盗链），只能放一部分
      3. 使用 token 验证
      4. cookie的samesite属性，避免大部分第三方cookie
3. SQL 注入（主动攻击）
4. HTTP 首部注入攻击（被动攻击）

## react 单向数据流的概念

1. 指的是数据的流向只能从父组件通过 props 将数据传递给子组件，不能由子组件传递给父组件。只能由子组件接受父组件 props 传过来的方法去改变父组件的数据

## 使用 CSS

1. 绘制三角形和梯形，主要是使用 border，width，height 改为 0 或比较小
2. 扇形的话，就加一个 border-radius

## margin 负值

1. margin 为负值，可以让元素向上或向左移动
2. 应用
   1. 元素间如果有层叠的效果，（像 tab 这类的），可以使用负 marign 进行位移

## OSI 七层模型

1. 第七层 应用层
   1. 各种应用程序协议，像 HTTP、FTP、SMTP、POP3、DHCP
2. 第六层 表示层
3. 第五层 会话层
4. 第四层 传输层
   1. TCP UDP
5. 第三层 网络层
   1. IP ICMP RIP OSPF RARP
6. 第二层 数据链路层
   1. ARP
7. 第一层 物理层

## flex 属性

1. flex 属性是 flex-grow，flex-shrink，flex-basis 的缩写
2. flex-grow 所有item不足父元素，按比例放大
3. flex-shrink 所有item超出限制后，按比例缩小
4. flex-basis item在主轴方向上的初始大小

## TCP 和 UDP 区别

1. tcp 传输比较可靠，udp 传输比较不可靠
2. tcp 是面向连接的，传输数据需要三次握手，四次挥手，udp 不需要
3. udp 比较适合用来传输不太重要但是实时性要求比较高的数据

## React 的优点和缺点

1. 有 virtual dom，速度快
2. 模块化，每个组件都可以单独地开发，测试，提高了代码的可维护性
3. 单向数据流

## 为什么使用框架而不是原生

1. 组件化，每个组件都可以单独地进行开发和测试，提高代码的可维护性
2. 天然分层，jq 时代代码耦合，不利于代码读写
3. 生态，框架的数据流管理还有 UI 库都有比较成熟的方案
4. 开发效率上会有提高，开发者不用手动更新 DOM，可以将更多的注意力放在业务上

## Virtual Dom 想解决什么问题

1. 频繁操作 DOM 性能差
   1. DOM 引擎和 JS 引擎是相互独立，但是又同时工作在一个线程里，如果调用了 DOM 的 api，就需要把 JS 引擎挂起，转换传入参数，激活 DOM 引擎，DOM 重绘再转换可能有的返回值，最后激活 JS 引擎并继续挂起。
2. 兼容层的问题
   1. 把渲染过程抽象化，组件的抽象能力得到提升。
   2. 这也是为什么 Vue2.x 加入 vdom 的原因，让 weex 和 ssr 能够实现，使得框架可以适配除 DOM 以外的目标。

## Virtual DOM 的实现原理

1. virtual dom 本质是 JavaScript 对象
2. 状态改变时，记录新树还有旧树的差异
3. 最后把差异更新到真正的 dom 里

## React 生命周期

![生命周期](https://s1.ax1x.com/2020/04/26/JcXodK.png)

## Vue 生命周期

![Vue 实例生命周期](https://cn.vuejs.org/images/lifecycle.png)

## 组件的请求应该放在哪个生命周期

1. 官方是推荐放在 componentDidMount

## setState 是同步的还是异步的

1. setState 在合成事件和生命周期中都是异步的，在原生事件和 setTimeout 中都是同步的。
2. setState(partialState,callback) 可以在 callback 中拿到更新后的结果
3. 原理层面
   1. React 更新 state 时会有通过事务的批量更新，内部有 isBatchingUpdates 这个状态，如果是在合成事件或者是生命周期触发 setState，isBatchingUpdates 为 true，会将该组件推进 dirtyComopnents 里稍后一起更新。如果是在原生事件或者是在异步函数中
   2. 更新组件前，将更新的 state 合并到原来的 state 是在 comopnentWillUpdate 之后，render 之前

## React 的合成事件和原生事件

1. React 并不是直接将事件绑定到 dom 上，而是采用事件冒泡的形式冒泡到 document 上，然后 react 将事件封装给正式的函数处理运行
2. 使用合成事件可以避免 DOM 上绑定过多的事件处理函数，整个页面的相应以及内存占用可能都会收到影响。
3. 浏览器之间的兼容问题，跨浏览器问题

## 正则表达式·环视

## node 环境和浏览器环境的区别

1. 在 node 中全局对象是 global，而在浏览器中全局对象是 window 或 self。在浏览器中 window 下封装了不少的 api，比如 alert，document，location
2. dom 操作
3. io 读写
4. 模块加载
   1. node 使用的是 commonJS 规范
   2. es6 提出了 es module
   3. commonJS 和 ESModule， commonJS 输出的是值的浅拷贝，ESModule 输出的是值的引用

## Vue2.x 和 Vue3.x 区别

1. 数据绑定的方式变化，Vue2.x 使用的 Object.defineProperty，Vue3.x 使用的是 proxy。使用 proxy 的好处是可以监听到数组内部的变化，内存占用也更少。
2. vue3.x 中一些 api 可以按需引入，可以 tree-shaking，利于减小打包后的体积

## 移动端适配

1. 在 header 中设置 viewport，width=device-width
2. 在 css 中使用 px
3. 在适当的场景使用 flex 布局，或者配合 vw，vh 进行适配
4. 在跨设备类型时使用媒体查询
5. 如果差异太大，考虑分开项目开发

## 两栏布局的思路

1. 使用 float，左栏 float:right
2. 使用定位布局，左栏 position:absolute，右栏 margin-left:200px
3. 使用 flex 布局，容器 display:flex，左栏定宽，右栏 flex:1
4. 使用 grid 布局，容器 display:grid，grid-template-columns: 200px auto

## 三栏布局

1. 圣杯布局
   1. 三个子元素全部浮动，容器的宽度有中间元素的宽度撑起，通过 margin-left 让元素到正确的位置。
   2. 为了让中间的元素显示，需要设置容器的 padding-left,padding-right，并使用 position:relative，让左右元素分别向左右移动。
2. 双飞翼布局
   1. 第一步和圣杯布局第一步相同
   2. middle 内还有子元素，为了让中间的内容显示，需要设置子元素的 padding-left，pading-right

## 实现垂直居中

1. 视口的垂直居中可以使用 margin:50vh auto
2. 使用绝对定位 top:50% 加载负 margin
3. 绝对定位 top 加上 calc
4. 绝对定位 加上 transform
5. 使用 flex 布局

## 实现水平居中

1. 父元素使用 text-align:center，子元素为 inline/inline-block
2. 使用 margin:0 auto
3. 使用绝对定位

## 对 React 和 Vue 的认识

1. 两者都是数据驱动视图，都支持组件化
2. React 使用 jsx，Vue 使用模板语法

## diff 算法

1. 同层比较。当发现某节点不一致了直接替换该节点的子树，而不管它的子树是不是真的改动了。不同类型元素会产生不同的树
2. 使用 key。当前状态改变时的每一个列表项能够对应起来，方便对比。便于追踪列表中哪些元素被修改，添加，或移除。不推荐使用 index 做为 key。
3. 如果列表有筛选或重排，就不推荐使用 index 做为 key

## TCP 三次握手

1. 客户端发送 SYN=1,seq=x 。Server 确认自己可以接受 Client 发送的报文
2. 服务端返回 SYN=1,ACK=x+1,seq=y。Client 确认 Server 收到了自己发的报文，并确认自己可以接受 Server 的报文
3. 客户端发送 ACK=y+1,seq=z。Server 确认 Client 收到了自己的报文

## CDN 加速原理

1. Content Delivery Network 内容分发网络。
2. 基本原理，在网络的各处部署节点服务器，实现将源站内容分发至所有 CDN 节点，使用户可以就近获得所需的内容，缩短了用户查看内容的访问延迟。

## Vue 中的 computed 和 watch 的区别

1. computed 是计算属性，会根据所依赖的数据动态显示新的计算结果，计算结果会被缓存，只有在它依赖的属性值改变后，下一次获取 computed 的值才会重新调用对应的 getter 来计算
2. watcher 更像是一个 data 的数据监听回调，当依赖的 data 的数据变化时执行回调

## 使用 inline-block，会有间隙

1. 这是换行符导致的
2. 可以使用 font-size:0 去除，或者使用负 margin

## CSS 优先级

1. 内联样式>ID 选择器>类选择器=属性选择器=伪类选择器>元素选择器=伪元素选择器
2. 当使用!important 时，此声明可以覆盖其他声明

## 链表反转

```javascript
function ReverseNode(pHead) {
  let prev = null,
    current = pHead;
  while (current) {
    let temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }
  return prev;
}
```

## 观察者模式实现

## Promise 的实现

## JS 取整

1. parseInt // 直接去除小数部分，他是用于字符串转整数，但是number类型也可以
2. Math Math.round() Math.ceil() Math.floor()
3. 使用位运算符取整，当数值超过 2^32 时有可能会出错 // 他是浮点数转 int32

## HTML 语义化

1. 利于 SEO
2. 方便了一些无障碍设备阅读网页
3. 增强代码的可读性

## HTML5 新特性

1. 更好的语义化标签
2. 增加了 canvas，拖放 api，Geolocation
3. web storage 的 api

## Promise A+

1. Promise 状态，有且只有一个状态，(pendding，fulfilled，rejected)
   1. pendding，可以转变成 fulfilled 或 rejected
   2. fulfilled，不可再转变为其他状态，必须有一个 value，并且不可再改变
   3. rejected，不可再转变为其他状态，必须有一个 reason，并且不可再改变
2. then 方法
   1. 一个 promise 必须提供一个 then 方法用来提供 value 或 reason
   2. 一个 then 方法必须接受两个参数，onFulfilled 或 onRejected，并都是可选参数
   3. promise 的 then 可以被链式调用
   4. then 方法返回的一定是个 promise

## 什么是闭包

1. 能够读取其他函数内部变量的函数

2. 应用场景
   1. 模拟私有变量
   2. 防抖、节流
   3. 柯里化
3. 缺点
   1. 内存占用问题

## Symbol

1. 对象的属性名可以是字符串或 Symbol
2. Symbol 表示独一无二的值

## Vue.$set  this.$set

## 常见宏任务和微任务

1. 宏任务

   I/O、setTimeout、setInterval、setImmediate、requestAnimationFrame

2. 微任务

   process.nextTick

   MutationOvserver

   Promise.then

## git 三大分区

1. 工作区
2. 索引区（又叫暂存区）
3. 版本区

## JavaScript 中的比较

1. == 若数值不相等就会进行类型转换
2. === 不进行类型转换
3. Object.is 和===类似，但是对于 NaN,+0,-0 会有特殊处理
   1. NaN == NaN 结果为 false，Object.is 相反，这样设计的话是对的，否则像 parseInt("a")会和 parseInt("b")相等
   2. +0 == -0 结果为 true，Object.is 相反。如果不借助 Object.is，可以使用 1/+0 1/-0

## React 中 shouldComponentUpdate

1. 默认是返回 true。即即使 state 和 prop 没有发生改变也还是会进行 render，但是不会更新 DOM。
2. 使用 this.forceUpdate 可以无视 shouldComponentUpdate

## 阻止事件冒泡的几种方法

1. preventDefault
   1. 阻止浏览器的默认行为，例如 a 标签打开链接
2. stopPropagation
   1. 阻止事件冒泡
3. stopImmediatePropagation
   1. 除了阻止冒泡，还能阻止当前对象未执行的绑定的其他方法
4. return false
   1. 相当于做了 preventDefault，stopPropagation，停止当前函数

## 常见性能优化手段

1. 使用webpack合并资源 CSS/JS 合并打包 较少请求数，浏览器会限制同一域名下的并发请求数
2. 小的图片可以用 base64 格式的图片
3. 压缩静态资源
4. 服务器端开启 gzip
5. 使用 http 缓存
6. 使用CDN

## JavaScript 中的 generator

1. for of 可以迭代 可迭代对象（像 Map,Array,Set 等有 Symbol.iterator 属性的对象），迭代器（generator 函数的返回值）

## JavaScript 中的 WeakMap

1. 必须使用对象作为键值，不能使用基础类型
2. 他对作为键名的对象的引用是弱引用

```javascript
global.gc();
console.log(process.memoryUsage().heapUsed);

const wm = new Map(); // 使用Map或WeekMap最后的结果差异很大
let key = new Array(5 * 1024 * 1024);
wm.set(key, 1);
global.gc();
console.log(process.memoryUsage().heapUsed);

key = null;
global.gc();
console.log(process.memoryUsage().heapUsed);
console.log(wm);
```

## 进程与线程

1. 进程是资源分配的最小单位
2. 线程是 CPU 调度的最小单位
3. 一个进程可以包含多个线程
4. 不同进程间共享数据比较困难

## vue 的 $set



## ES6新特性

1. let和const
2. 模板字符串
3. 箭头函数
4. 函数参数默认值
5. 拓展运算符
6. 类class



## HTTP和HTTPS区别

1. HTTPS会更安全
2. HTTPS请求响应时间会变长，SSL过程耗时



## HTTP头，Host,Referer,Origin

1. Host指明了服务器的域名，主要运用场景时单台服务器设置多个虚拟主机时
2. Referer包含了当前请求的来源页面地址。Referer无论哪种情况只要浏览器能获取到都会带上
3. Origin指示了请求来自于哪个网站。跨域请求或者Post请求才会带上



## CSS盒模型

1. 从里到外是content,padding,border,margin

2. 分为标准盒子模型和IE盒子模型

   标准盒子模型，width,  height只包括content

   IE盒子模型，width, height包括content, padding, border

   使用box-sizing来设置这两种模型

3. 解释边距重叠问题

   父子元素和兄弟元素会发生边距重叠。解决方案是形成BFC





## CSS单位

1. 分为绝对长度单位和相对长度单位

   绝对长度单位 px以及cm、mm、in、pt、pc

   相对长度单位 em、rem、vw、vh、%以及ex、ch、vim、vmax

2. em和rem

   em的大小相对的父元素的font-size大小，浏览器默认的字体大小的16px

   rem相对的是根元素的font-size大小，避免造成混乱



### Cookie的Samesite属性

1. Samesite用来限制第三方cookie，从而避免CSRF攻击

2. 常见的值有Strict Lax None
   Strict 完全禁止第三方cookie

   Lax 大多数情况不发送cookie，导航到目标网站的情况除外 Chrome80的默认值

   None 不限制









### CORS的过程

1. 浏览器限制不一定是浏览器限制了发起跨站请求，也可能是跨站请求正常发起，结果被拦截了
2. 规范要求在发起可能产生副作用的请求方法时，浏览器必须首先使用OPTIONS方法发起一个预检请求，从而服务器端是否允许跨域。
3. 简单请求不会触发CORS预检
4. ![dd16afcc-c37b-4269-a427-4e42c6e5773f](https://user-images.githubusercontent.com/25027560/50205881-c409b080-03a4-11e9-8a57-a2a6d0e1d879.png)



### 常见的加密

1. 对称加密和非对称加密

   对称加密 DES, AES

   非对称加密 RSA

### Cache-Control的值

no-cache 要求客户端缓存/中间服务器向资源服务器进行验证

no-store 不缓存请求或任何响应内容





## React Fiber

大量的同步计算任务阻塞了浏览器的UI渲染，JS引擎和页面布局、页面绘制是互斥的。

当我们调用setState更新页面时，React会遍历所有节点，计算出差异后，再更新UI，整个过程是一气呵成的，不能被打断。如果节点过多，整个过程就可能超过16ms引起页面卡顿。

React一次更新，分为Reconcilation阶段和Commit阶段

Stack Reconciler 和 Fiber Reconciler

Fiber Reconciler 有一个调度器来进行任务调度，优先级高的任务（如键盘输入）可以打断优先级低的任务（如Diff）

阶段一 Recocilation Phase，生成Fiber树，得出需要更新的节点信息，这是一个渐进的过程，可以被打断。阶段二 Commit Phase，将需要更新的节点一次性批量更新，这个过程不能被打断。

一个解决方法是，将reconcilation的任务放到requestIdleCallback里，在每一帧，当浏览器执行完任务，更新完UI后，如果时间有盈余就会执行回调函数里的代码。但是requestIdleCallback的兼容性不好，并且requestIdleCallback只能一秒调用回调20次

React是使用messageChannel模拟将回调延迟到绘制操作之后执行

## 进程间通信的方法

信号、信号量、socket（套接字）、共享内存、匿名管道、命名管道

1. 匿名管道是半双工的通信方式，通常是在父子进程间使用。
2. 命名管道，允许在无亲缘关系的进程间通信
3. 信号，Linux系统中用于进程间通信或操作的一种机制，信号可以在任何时候发送给某一个进程，而无须知道该进程的状态



### 数据库的事务(transaction)是什么

访问并可能操作各种数据项的一个数据库操作序列，这些操作要么全部执行，要么全部不执行，是一个不可分割的工作单位。

### 伪类和伪元素

伪类是元素处于特定的状态

伪元素是像是在html插入了全新的元素一样

### 事件循环

1. 微任务的优先级比宏任务高
2. 异步操作完成后，才会将回调函数注册到事件队列中
3. 常见的宏任务：IO、setTimeout、setInterval、setImmetiate、requestAnimationFrame
4. 常见的微任务：Promise.then、process.nextTick

### Websocket和socket



### useLayoutEffect

1. useEffect是异步执行的，useLayoutEffect是同步执行的
2. useLayoutEffect和componentDidMount等价。useLayoutEffect可以阻塞渲染
3. useEffect是渲染完成后，异步执行
4. 在ssr中，useLayoutEffect并不会被执行，这可能导致最后的ssr渲染出的结果和客户端渲染结果不一致



### Context重复渲染的问题

父组件进行setState后，会造成Context.Provider的所有子组件重新渲染，如果Context.Provider中的内容是一些JSX就会导致一些重复渲染，如果是props.children就可以避免



### Table布局

table布局标签结构多、复杂，对性能优点影响，对搜索引擎索引权重也有影响。

使用div+css的方案会更加简洁一点



### TCP保证可靠传输的机制

1. 应用数据被分割成TCP认为最适合发送的数据块，给每个数据包进行编号，接收方收到数据包后，再对数据包进行排序，交给应用层
2. TCP会保持它首部和数据的校验和。如果校验和发生了变化，TCP将丢弃这个报文并且不确定接受这个报文
3. TCP接收端会丢弃重复的数据
4. 流量控制，TCP连接的每一方都有固定大小的缓冲空间，TCP的接收端只允许发送端发送接收端缓冲区容量大小的数据
5. 拥塞控制



### 为什么要有同源策略

1. web应用程序依赖cookie来维持会话，将不同的站点进行隔离，防止数据泄露



### V8的垃圾回收

v8引擎在64位系统最多使用1.4GB内存，在32位系统最多使用0.7GB内存。可以通过修改启动参数来接触限制，这样做的目的主要是为了提升垃圾回收的效率。

Buffer不受堆内存大小限制

分代式的垃圾回收机制。根据对象的存活时间对对象进行分代，然后不同的分代使用不同的垃圾回收算法。

由于GC的存在，会有个全停顿的问题。后来提出了一个增量标记的概念，和React的Fiber类似，主要是提高性能，降低GC带来的影响



### 避免内存泄露

1. 少用闭包，少创建全局变量
2. 记得手动清除定时器
3. 使用弱引用，weakMap，weakSet
4. 及时清除DOM引用，释放内存



### Content-Length

HTTP报文的消息主体的大小，单位为字节



### Element和Node的区别

1. Element继承于Node。HTML中的Element、Text、Comment都继承于Node。



### CSS中@开头的属性

@media、@keyframes、@import



### Redux相关

主要概念 action dispatch reducer store middleware



### React Hooks相关

1. 需要在函数组件顶层调用hooks，目的是保证hooks每次的执行顺序不变。no magic, just array

2. 使用hooks命名有规范

3. 类组件中有error boundary。





### Map和WeakMap

1. WeakMap只接受对象作为键名，作为键值不会增加引用计数。
2. 当对象被回收后，WeakMap自动移除对应的键值对
3. WeakMap没有遍历操作，无法清空



### Error Boundary

1. error boundary组件可以捕获并打印发生在其子组件任何位置的JavaScript错误，并且它会渲染出备用UI。服务端渲染、异步代码错误无法捕获。
2. 未被错误边界补货的错误将会导致整个React组件树被卸载。



### 一些常见的设计模式

1. 工厂模式。将new操作符封装起来
2. 单例模式。一个类只有一个实例
3. 适配器模式。接口不兼容时，对旧接口做一层包装，来适配新需求
4. 装饰器模式。
5. 观察者模式。把watcher收集到一个队列，等到发布时再依次通知watcher。

### requestAnimationFrame使用

浏览器可以优化并行的动画动作，更合理的重新排列动作序列，把能够合并的动作放在一个渲染周期内完成，使效果更流畅。

使用场景：一次性向页面插入大量元素，可能出现UI冻结的现象。可以使用requestAnimationFrame进行分布渲染

### Nodejs的Stream

所有流本质都是EventEmitter的实例

可写流和可读流都会在内部的缓冲器中存储数据

大文件的file server



### CSP HSTS



### CommmonJS和ES Module

1. commonjs只能导出一个值，es module可以导出多个
2. 使用上，commonjs使用的是module.exports require，es module使用的是 import export
