# VSCode Svn Blame

## 说明

这个插件从 `https://github.com/BeauAgst/svn-blamer` fork。新增了以下功能：

- 新增配置项 svn-blame.historyDaysLimit， 允许设置 svn blame 多少天之内的历史记录，以便提高 blame 性能。
- 在文本编辑窗口区右上角，新增 "Svn Blame" 按钮，点按即可显示 svn blame 信息； 另外，按住 alt 键，再点击这个按钮，就会清除  svn blame 信息。

## 注意

本插件要求系统命令行中存在 `svn` 命令。