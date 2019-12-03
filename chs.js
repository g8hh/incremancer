var cnItems = {
    _OTHER_: [],
	
	'Incremancer': '僵尸增量',
	'Blood': '血液',
	'blood': '血液',
	'Energy': '能量',
	'energy': '能量',
	'Brains': '大脑',
	'brains': '大脑',
	'Humans': '人类',
	'Zombies': '僵尸',
	'zombies': '僵尸',
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
	'Completed': '已完成',
	'Your zombies thirst for blood and do +1 damage for each rank of Bloodthirst.': '你的僵尸渴求鲜血，每等级的嗜血+1伤害。',
	'Bloodthirst': '嗜血',
	'Your zombies gain tougher skin and +10 health with each rank.': '每等级僵尸都会获得更坚硬的皮肤，+10生命值。',
	'Like Leather': '皮革般的',
	'Cold Storage': '冷冻保存',
	'Turns out you can use all of your spare blood to store brains and keep them fresh. Each rank increases your maximum brain capacity by 50.': '事实证明，您可以使用所有剩余的血液来储存大脑并保持新鲜。 每个等级都会使您的大脑上限增加50。',
	'Recycling is Cool': '回收棒棒哒',
	'Why are we wasting so many good brains on this project? Each rank increases your chance to get a brain back from a dead zombie by': '为什么我们在这个项目上浪费了这么多大脑呢？ 每个等级都会使您从死去的僵尸中回收大脑的机会增加',
	'Your Soul is Mine!': '你的灵魂属于我！',
	'Using your most powerful blood magic you command the bodies of the dead to rise as your servants! Each rank grants 10% chance that dead humans will turn into zombies.': '使用最强大的鲜血魔法，您可以命令死者的身体作为仆人重生！ 每个等级都会给死人变成僵尸的机会提高10％。',
	'Blood capacity too low\n        ': '血液上限不够',
	'Unholy Construction': '邪恶建筑',
	'Learn the art of Unholy Construction in order to build structures that will solidify your foothold on the town.': '学习邪恶建筑的技巧，以便建造可以巩固您在城镇上立足的建筑。',
	'Energy Rush': '能量补充',
	'Master Summoner': '召唤大师',
	'Primal Reflexes': '原始反射',
	'Blood Harvest': '血液采集',
	'Available': '可用',
	'Pause': '暂停',
	'Cancel': '取消',
	'Bones': '骨头',
	'Construction': '建筑',
	'Cursed Graveyard': '诅咒墓地',
	'Graveyard': '墓地',
	'': '',
	'': '',
	'': '',
	'': '',
	'': '',
	'': '',
	'': '',
	'': '',
	'': '',
	'': '',
	'': '',
	'': '',
	'': '',
	'': '',
}


//需处理的前缀
var cnPrefix = {
	"Current Rank:":"当前等级:",
	"Purchase":"购买",
	":":":",
}

//需处理的后缀
var cnPostfix = {
	":":":",
	": ":": ",
	
	"max blood":"血液上限",
	"max brains":"大脑上限",
	"max bones":"骨头上限",
	"blood":"血液",
	"brains":"大脑",
	"bones":"骨头",
	"zombie damage":"僵尸伤害",
	"zombie health":"僵尸生命",
	"energy per second":"每秒能量恢复",
	"max energy":"能量上限",
	"zombie speed":"僵尸速度",
	"chance to recover brain":"回收大脑几率",
	"chance for corpse to become zombie":"尸体复生为僵尸几率",
	"blood required\n        ":"血液需求",
	"brains required\n        ":"大脑需求",
	"bones required\n        ":"骨头需求",
	" blood)\n        ":" 血液)",
	" brains)\n        ":" 大脑)",
	" bones)\n        ":" 骨头)",
	
	
	//排除收录
	"血液上限":"血液上限",
	"大脑上限":"大脑上限",
	"血液":"血液",
	"大脑":"大脑",
	"僵尸伤害":"僵尸伤害",
	"僵尸生命":"僵尸生命",
	"每秒能量恢复":"每秒能量恢复",
	"能量上限":"能量上限",
	"僵尸速度":"僵尸速度",
	"回收大脑几率":"回收大脑几率",
	"尸体复生为僵尸几率":"尸体复生为僵尸几率",
	"血液需求":"血液需求",
	"大脑需求":"大脑需求",
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
