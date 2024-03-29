# VSCode Svn Blame

## 说明

This plugin a fork from `https://github.com/BeauAgst/svn-blamer`.

 The following features have been added:

- Added a new configuration option svn-blame.historyDaysLimit, which allows you to set the amount of days in which svn blame is historical, in order to improve blame performance.
- Added a new "Svn Blame" button in the upper right corner of the text editing window area, which can be clicked to display svn blame information; in addition, holding down the alt key and clicking this button will clear the svn blame information.


这个插件从 `https://github.com/BeauAgst/svn-blamer` fork。新增了以下功能：

- 新增配置项 svn-blame.historyDaysLimit， 允许设置 svn blame 多少天之内的历史记录，以便提高 blame 性能。
- 在文本编辑窗口区右上角，新增 "Svn Blame" 按钮，点按即可显示 svn blame 信息； 另外，按住 alt 键，再点击这个按钮，就会清除  svn blame 信息。

## Notes

This plug-in requires the presence of the 'svn' command on the system command line.

本插件要求系统命令行中存在 `svn` 命令。