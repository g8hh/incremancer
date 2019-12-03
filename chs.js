var cnItems = {
    _OTHER_: [],
	
	'Incremancer': '僵尸增量',
	'Blood': '血',
	'blood': '血',
	'Energy': '能量',
	'energy': '能量',
	'Brains': '脑',
	'brains': '脑',
	'Humans': '人类',
	'Zombies': '僵尸',
	'Level': '等级',
	'Take control of a horde of zombies to ravage small towns': '控制一群僵尸破坏小镇',
	'Energy refills over time. You need 10 energy to spawn a zombie by clicking on the ground.': '随着时间的流逝，能量会补充。 需要10能量才能单击地面来生成僵尸。',
	'Hold shift or control to spawn multiple zombies with a single click.': '按住Shift或Ctrl单击即可生成多个僵尸。',
	'Whenever one of your zombies attacks a human you will collect some blood.': '每当您的僵尸攻击一个人时，您都会收集一些血液。',
	'Killing a human or turning them into a zombie will earn you 1 brain.': '杀死人类或将他们变成僵尸将为您赢得1个大脑。',
	'You can spend these currencies in the shop to purchase upgrades for your zombie horde.': '您可以在商店中花费这些货币购买僵尸部落的升级。',
	'Hold shift to buy the maximum affordable number of upgrades.': '按住Shift键可购买最大数量的升级。',
	'The world can be dragged with the mouse to explore it. Or by using the WASD or arrow keys.': '可以用鼠标拖动世界进行探索。 或者使用WASD或箭头键。',
	'You can zoom in and out using your mouse wheel. Pinch to zoom on mobile.': '您可以使用鼠标滚轮放大和缩小。手机上可以使用双指缩放。',
	'Start Level': '开始等级',
	'Shop': '商店',
	'Options': '选项',
	'Stats': '统计',
	'Health': '生命',
	'Damage': '伤害',
	'Civilians': '平民',
	'Police': '警察',
	'Army': '军队',
	'How to play': '游戏指引',
	'Close': '关闭',
	'Complete': '已完成',
	'': '',
	'': '',
	'': '',
	'': '',
	'': '',
	'': '',
}


//需处理的前缀
var cnPrefix = {

}

//需处理的后缀
var cnPostfix = {
	":":":",
	": ":": ",
	
	"max blood":"血上限",
	"max brains":"脑上限",
	"blood":"血",
	"brains":"脑",
	"zombie damage":"僵尸伤害",
	"zombie health":"僵尸生命",
	"energy per second":"每秒能量恢复",
	"max energy":"能量上限",
	"zombie speed":"僵尸速度",
	"blood required\n        ":"血需求",
	"brains required\n        ":"脑需求",
	
	
	//排除收录
	"血":"血",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^x?\d+(\.\d+)?[A-Za-z%]{0,2}(\s.C)?\s*$/, //12.34K,23.4 °C
    /^x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /^\s+$/, //纯空格
    /^\d+(\.\d+)?[A-Za-z]{0,2}.?\(?([+\-]?(\d+(\.\d+)?[A-Za-z]{0,2})?)?$/, //12.34M (+34.34K
    /^\d+(\.\d+)?(e[+\-]?\d+)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?$/, //2.177e+6 (+4.01+4
	/\{\{.*\}\}/, //{{xxx}}
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
