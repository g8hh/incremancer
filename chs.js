var cnItems = {
    _OTHER_: [],
	
	'': '',
}


//需处理的前缀
var cnPrefix = {

}

//需处理的后缀
var cnPostfix = {
	
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^x?\d+(\.\d+)?[A-Za-z%]{0,2}(\s.C)?\s*$/, //12.34K,23.4 °C
    /^x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /^\s+$/, //纯空格
    /^\d+(\.\d+)?[A-Za-z]{0,2}.?\(?([+\-]?(\d+(\.\d+)?[A-Za-z]{0,2})?)?$/, //12.34M (+34.34K
    /^\d+(\.\d+)?(e[+\-]?\d+)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?$/, //2.177e+6 (+4.01+4
];
var cnExcludePostfix = [
	/:?\s*\-?\d+(\.\d+)?\s*~\s*\d+(\.\d+)?$/,  // : 1.5 ~ 2.5
	/:?\s*\d+\s*\/\s*\d+\s*$/,	// : 13 / 14
	/:?\s*\d+(\.\d+)?,\s\+?\d+(\.\d+)?$/, // : 0.1, +1
    /(🎃)?(🌳)?(📖)?:?\s*\(?[+\-]?x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /:?\s*x?\d+(\.\d+)?[A-Za-z]{0,2}$/, //: 12.34K, x1.5
	/:?\s*\d+%\s*$/, //12%
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new gityxGlobal.Map([

]);
