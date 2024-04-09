const moment = require('moment');

module.exports = (dateString) => {
  const date = new Date(dateString);
  const m = moment(date);
  m.locale('zh-cn');
  return `${m.format('LLLL')} | ${m.fromNow()}`;
};