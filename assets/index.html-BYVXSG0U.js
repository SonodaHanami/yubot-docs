import{_ as t,c as r,a as n,b as l,d as a,e as p,w as o,r as i,o as d}from"./app-B_nz7rp2.js";const c={};function h(b,e){const s=i("RouteLink");return d(),r("div",null,[e[2]||(e[2]=n(`<h1 id="文档" tabindex="-1"><a class="header-anchor" href="#文档"><span>文档</span></a></h1><p>羽bot，不是羽波，夸夸，集器人，羽波的私货集合体。</p><p>感谢骨头画的头像和图标！</p><p>请注意本文档与羽bot本身并非完全同步，羽bot可能会有一些变更未能及时在本文档反映，请以实际体验为准</p><p>在群里发送 <code>@羽bot 文档</code> ，羽bot会发送如下的指向本页面的链接</p><p><a href="https://yubo.run/bot/docs/" target="_blank" rel="noopener noreferrer">https://yubo.run/bot/docs/</a></p><p>本文中的指令使用尖括号表示必选参数，使用方括号表示可选参数，使用竖线分隔括号内的选项</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 这是一个例子</span></span>
<span class="line">指令 <span class="token operator">&lt;</span>必选参数<span class="token operator">&gt;</span> <span class="token punctuation">[</span>可选参数1 <span class="token operator">|</span> 可选参数2<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以在本页面最后看到本文最近一次更新的时间</p><h2 id="获取羽bot并使用" tabindex="-1"><a class="header-anchor" href="#获取羽bot并使用"><span>获取羽bot并使用</span></a></h2>`,10)),l("p",null,[e[1]||(e[1]=a("请看 ")),p(s,{to:"/get_yubot.html"},{default:o(()=>e[0]||(e[0]=[a("使用羽bot")])),_:1})]),e[3]||(e[3]=n(`<h2 id="个人中心" tabindex="-1"><a class="header-anchor" href="#个人中心"><span>个人中心</span></a></h2><p>羽bot将更新token等操作整合到了 <a href="https://yubo.run/user/" target="_blank" rel="noopener noreferrer">个人中心</a> 页面</p><p>群友登录后可以执行关联账号等相关操作</p><p>如果你在群里有群主或管理员权限，你可以在群列表中开启或关闭各项功能</p><h3 id="登录" tabindex="-1"><a class="header-anchor" href="#登录"><span>登录</span></a></h3><p>在群里发送 <code>@羽bot 个人中心</code> ，羽bot会发送如下的链接，把它复制到浏览器打开</p><p><a href="https://yubo.run/user/" target="_blank" rel="noopener noreferrer">https://yubo.run/user/</a></p><p>（每次发送的链接都是一样的，能打开就行，不用每次都发送指令）</p><p>（在这个页面也可以直接点击跳转不用再回去群里发.jpg）</p><p>填入QQ之后点击 <code>登录</code> ，在群里发送验证码即可登录</p><h2 id="明日方舟相关" tabindex="-1"><a class="header-anchor" href="#明日方舟相关"><span>明日方舟相关</span></a></h2><p>包括集成战略统计和抽卡统计，使用本组件需要提供明日方舟个人中心登录凭证(token)以查询数据</p><p>羽bot会使用token每小时整点自动从明日方舟官方接口更新游戏账号的集成战略和抽卡等数据，群友可以用指令查询相关统计；除了自动更新，也可以发送指令 <code>@羽bot 更新数据</code> 手动更新</p><h3 id="token" tabindex="-1"><a class="header-anchor" href="#token"><span>token</span></a></h3><p>羽bot使用 <a href="https://ak.hypergryph.com/user/home" target="_blank" rel="noopener noreferrer">明日方舟个人中心</a> 登录凭证(token)从官方接口查询数据</p><h4 id="更新token" tabindex="-1"><a class="header-anchor" href="#更新token"><span>更新token</span></a></h4><p>在 <a href="https://yubo.run/user/" target="_blank" rel="noopener noreferrer">羽bot个人中心</a> 登录后点击 <code>更新token</code> ，按照网页中的说明操作，在第二步记得<strong>全选</strong></p><p>在输入框中填入刚才<strong>全选</strong>复制的token信息，提交后如果成功会在网页和群里收到结果</p><h4 id="移除token" tabindex="-1"><a class="header-anchor" href="#移除token"><span>移除token</span></a></h4><p>别走好吗.jpg</p><p>在群里发送 <code>移除token</code> ，集器人会回复如下的消息</p><blockquote><p>你确定吗？请在5分钟内发送“我确定要移除token”，若如此做，博士的token将被移除，与QQ的关联将被解除，其数据将不再被自动更新，但是已有的数据将被继续保留</p></blockquote><p>在5分钟内发送 <code>我确定要移除token</code> 即可移除token</p><h3 id="集器人" tabindex="-1"><a class="header-anchor" href="#集器人"><span>集器人</span></a></h3><p><strong>集</strong>成战略机<strong>器人</strong>，简称集器人</p><p>羽bot会定时播报集集雷达速报、集集日报、集集周报</p><p>群友可以用指令查询相关统计</p><p><code>查询萨米肉鸽统计</code> 的统计结果中，每个字有(触发坍缩范式次数-去除坍缩范式次数) * 0.05%的概率坍缩，😎戴上墨镜🕶可以防坍缩</p><h3 id="抽卡统计" tabindex="-1"><a class="header-anchor" href="#抽卡统计"><span>抽卡统计</span></a></h3><p>官网的抽卡记录只提供30天内最近100条（每次单抽算1条，每次十连算1条），如果（打算）在一小时内连续抽100条记录请及时手动更新数据以保证数据完整 <s>还没见过这么抽的群友</s></p><p>数据更新后，如果检测到抽卡记录更新，会自动请求 <a href="https://arkgacha.kwer.top/" target="_blank" rel="noopener noreferrer">明日方舟寻访记录分析</a> 同步更新，即只要羽bot这边的token不失效，寻访记录分析那边的记录就不会因过期而失效</p><h3 id="一些指令" tabindex="-1"><a class="header-anchor" href="#一些指令"><span>一些指令</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">查询傀影肉鸽统计</span>
<span class="line">查询古堡肉鸽统计</span>
<span class="line">查询水月肉鸽统计</span>
<span class="line">查询萨米肉鸽统计 [😎 | 🕶]</span>
<span class="line">查询最近古堡探索</span>
<span class="line"></span>
<span class="line">查询群友节点 [傀影 | 古堡 | 水月 | 萨米 | 全部 | 累计]</span>
<span class="line">查询群友存款 [傀影 | 古堡 | 水月 | 萨米 | 全部 | 累计]</span>
<span class="line"></span>
<span class="line">查询抽卡统计 [卡池名]</span>
<span class="line">查询群友抽卡统计 &lt;卡池名&gt;</span>
<span class="line"></span>
<span class="line">@羽bot 更新数据</span>
<span class="line">更新token</span>
<span class="line">移除token</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="steam相关" tabindex="-1"><a class="header-anchor" href="#steam相关"><span>Steam相关</span></a></h2><p>暂未取回这部分力量</p><h2 id="雀魂相关" tabindex="-1"><a class="header-anchor" href="#雀魂相关"><span>雀魂相关</span></a></h2><p>羽bot会定时播报雀魂战报、雀魂周报</p><h2 id="其他功能-组件" tabindex="-1"><a class="header-anchor" href="#其他功能-组件"><span>其他功能/组件</span></a></h2><h3 id="arkdle" tabindex="-1"><a class="header-anchor" href="#arkdle"><span>arkdle</span></a></h3><p>基于 <a href="https://github.com/noneplugin/nonebot-plugin-handle" target="_blank" rel="noopener noreferrer">nonebot-plugin-handle</a> 修改而成的 <a href="https://github.com/SonodaHanami/nonebot-plugin-handle" target="_blank" rel="noopener noreferrer">改版handle</a> ，用到了<a href="https://github.com/SonodaHanami/arknights_words/blob/master/answers_arknights.json" target="_blank" rel="noopener noreferrer">舟语词典</a></p><h4 id="开始游戏" tabindex="-1"><a class="header-anchor" href="#开始游戏"><span>开始游戏</span></a></h4><p>发送 <code>arkdle</code> 开始游戏</p><p>你有10次的机会猜一个四字舟语</p><p>每次猜测后，汉字与拼音的颜色将会标识其与正确答案的区别</p><p><span style="color:#1d9c9c;">青色</span> 表示其出现在答案中且在正确的位置</p><p><span style="color:#de7525;">橙色</span> 表示其出现在答案中但不在正确的位置，最大着色次数为这个声母/韵母在这个词语中出现的次数</p><p>下划线 表示这个声母韵母组合来自同一个字</p><p>每个格子的 汉字、声母、韵母、声调 都会独立进行颜色的指示</p><p>当四个格子都为青色时，你便赢得了游戏！</p><p>可发送 <code>结束</code> 结束游戏，发送 <code>提示</code> 查看提示</p><p>严格模式默认开启且无法关闭，即猜测的四字词语必须是舟语</p><p>使用 <code>--nohint</code> 选项禁用提示</p><p>使用 <code>--confirm</code> 选项开启确认模式，在猜测的四字词语不是舟语时会发送提示</p><p>使用 <code>--hard</code> 选项开启困难模式，可猜次数变为5，自动禁用提示，自动启用严格模式</p><p>例如：发送 <code>arkdle --nohint --confirm</code> 将开始一局禁用提示、开启确认模式的arkdle</p><h4 id="查询舟语" tabindex="-1"><a class="header-anchor" href="#查询舟语"><span>查询舟语</span></a></h4><p>发送 <code>查询舟语 &lt;四字舟语&gt;</code> 可以查询四字舟语的拼音、所属范围、释义</p><h3 id="其他群聊功能" tabindex="-1"><a class="header-anchor" href="#其他群聊功能"><span>其他群聊功能</span></a></h3><h4 id="加群-退群提醒" tabindex="-1"><a class="header-anchor" href="#加群-退群提醒"><span>加群/退群提醒</span></a></h4><p>有新群友进群时羽bot会自动发送欢迎消息</p><p>有群友退群时羽bot会自动发送白白喵消息</p><h4 id="禁言我" tabindex="-1"><a class="header-anchor" href="#禁言我"><span>禁言我</span></a></h4><p>在群里发送 <code>@羽bot 禁言我[&lt;天数&gt;天][&lt;小时数&gt;小时][&lt;分钟数&gt;分钟][&lt;秒数&gt;秒]</code> ，如果羽bot有合适的权限则会将你禁言</p><p>例如：发送 <code>@羽bot 禁言我3天33小时333分钟3333秒</code> 将获得时长4天15小时28分钟33秒的禁言</p><p>没有指定时长时，羽bot将随机决定一个10秒到10分钟的禁言时长</p><p>你可以什么都不做，直到禁言自然结束</p><p>如果你已经登录个人中心，你可以在个人中心点击群号下方的 <code>请求解除禁言</code> 请求解除禁言</p><p>或者你可以使用紧急自救页面实现自救</p><p><a href="https://yubo.run/user/iambanned.html" target="_blank" rel="noopener noreferrer">https://yubo.run/user/iambanned.html</a></p>`,69))])}const k=t(c,[["render",h],["__file","index.html.vue"]]),m=JSON.parse('{"path":"/","title":"文档","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"获取羽bot并使用","slug":"获取羽bot并使用","link":"#获取羽bot并使用","children":[]},{"level":2,"title":"个人中心","slug":"个人中心","link":"#个人中心","children":[{"level":3,"title":"登录","slug":"登录","link":"#登录","children":[]}]},{"level":2,"title":"明日方舟相关","slug":"明日方舟相关","link":"#明日方舟相关","children":[{"level":3,"title":"token","slug":"token","link":"#token","children":[]},{"level":3,"title":"集器人","slug":"集器人","link":"#集器人","children":[]},{"level":3,"title":"抽卡统计","slug":"抽卡统计","link":"#抽卡统计","children":[]},{"level":3,"title":"一些指令","slug":"一些指令","link":"#一些指令","children":[]}]},{"level":2,"title":"Steam相关","slug":"steam相关","link":"#steam相关","children":[]},{"level":2,"title":"雀魂相关","slug":"雀魂相关","link":"#雀魂相关","children":[]},{"level":2,"title":"其他功能/组件","slug":"其他功能-组件","link":"#其他功能-组件","children":[{"level":3,"title":"arkdle","slug":"arkdle","link":"#arkdle","children":[]},{"level":3,"title":"其他群聊功能","slug":"其他群聊功能","link":"#其他群聊功能","children":[]}]}],"git":{"updatedTime":1736301174000,"contributors":[{"name":"羽波","email":"31097812+SonodaHanami@users.noreply.github.com","commits":8}]},"filePathRelative":"README.md"}');export{k as comp,m as data};
