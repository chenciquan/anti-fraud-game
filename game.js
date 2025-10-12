// ==================== LeanCloud 配置 ====================
// 请在 LeanCloud 控制台获取以下信息并替换
const LEANCLOUD_APP_ID = 'xNq8tlso75gazKUyWOKjxklG-gzGzoHsz';      // 替换为你的 App ID
const LEANCLOUD_APP_KEY = '9RhjZnWLbjWuZU5uXxEghUV2';    // 替换为你的 App Key（注意：要用 App Key，不是 Master Key）
const LEANCLOUD_SERVER_URL = 'https://xnq8tlso.lc-cn-n1-shared.com'; // 替换为你的 Server URL

// 初始化 LeanCloud
console.log('正在初始化 LeanCloud...');
console.log('App ID:', LEANCLOUD_APP_ID);
console.log('Server URL:', LEANCLOUD_SERVER_URL);

if (typeof AV !== 'undefined') {
    try {
        AV.init({
            appId: LEANCLOUD_APP_ID,
            appKey: LEANCLOUD_APP_KEY,
            serverURL: LEANCLOUD_SERVER_URL
        });
        console.log('✅ LeanCloud 初始化成功！');
    } catch (error) {
        console.error('❌ LeanCloud 初始化失败：', error);
    }
} else {
    console.error('❌ LeanCloud SDK 未加载');
}

// ==================== 游戏数据 ====================
// 游戏数据 - 诈骗场景
const gameScenarios = [
    {
        id: 1,
        title: "场景一：游戏充值陷阱",
        dialogue: `你正在玩一款热门手机游戏。

突然，你收到一条私信：
"亲爱的玩家，恭喜你被选中参加我们的充值优惠活动！现在充值100元可获得价值500元的游戏道具和钻石！"

"活动仅限今天，名额有限！请立即添加客服QQ：123456789 进行充值，我们提供最优惠的价格！"

"充值后，道具将在24小时内发放到你的账号。不要错过这个千载难逢的机会！"

现在你会怎么做？`,
        choices: [
            {
                text: "太好了！这么优惠的活动不能错过，立即添加QQ联系客服充值",
                correct: false,
                feedback: "这是典型的游戏充值诈骗！骗子冒充游戏官方，以超低价格诱惑玩家充值，收到钱后就会消失。正规游戏充值只能通过官方渠道进行。"
            },
            {
                text: "先去游戏官网或官方公众号查证是否有这个活动",
                correct: true,
                feedback: "正确！任何充值活动都应该通过官方渠道确认。正规游戏公司不会通过私信推送充值活动，更不会要求添加个人QQ进行交易。"
            },
            {
                text: "这个价格确实很诱人，但要求先付50元定金试试水",
                correct: false,
                feedback: "小额试探也是错误的！骗子正是利用这种心理，先骗小钱再骗大钱。任何要求私下转账的都是诈骗。"
            }
        ]
    },
    {
        id: 2,
        title: "场景二：代考诈骗",
        dialogue: `期末考试临近，你有一门课程复习得不太好，心里有些担心。

这时，你在校园论坛看到一条帖子：
"专业团队提供各科考试代考服务，保证通过！已帮助数百名同学顺利拿到学分。"

"我们有内部资源，可以提前获取考题。只需支付800元，就能轻松过关，绝对安全可靠！"

你的室友说："我有个朋友就找过他们，好像还挺靠谱的。"

你会怎么选择？`,
        choices: [
            {
                text: "考试挂科影响很大，花钱找人代考，确保能通过",
                correct: false,
                feedback: "代考是严重的学术不诚信行为！不仅会被骗钱，一旦被发现，还会受到学校严厉处分，甚至开除学籍。而且这些所谓的'代考团队'往往收钱后就消失。"
            },
            {
                text: "先付定金200元，看看他们是不是真的有考题",
                correct: false,
                feedback: "这样做既违反校规，又会被骗。骗子会以各种理由要求继续付款，最后你既损失金钱，又面临被处分的风险。"
            },
            {
                text: "拒绝代考，利用剩余时间好好复习，或向老师和同学请教",
                correct: true,
                feedback: "正确的选择！诚信是最重要的。合理安排时间复习，向老师请教不懂的地方，或者找同学一起学习，才是解决问题的正确方法。即使这次没考好，也可以重修，但学术不诚信的污点会跟随一生。"
            }
        ]
    },
    {
        id: 3,
        title: "场景三：网络兼职刷单",
        dialogue: `暑假到了，你想找份兼职赚点零花钱。

在网上看到一条招聘信息：
"招聘网络兼职，工作轻松，时间自由！只需在家动动手指，给网店刷单提高信誉度即可。"

"每单佣金5-50元，多劳多得！日赚300元不是梦！"

"工作流程简单：用你的账号购买指定商品，付款后立即返还本金+佣金。无需囤货，零风险！"

联系方式：微信 xxxxx

你会怎么做？`,
        choices: [
            {
                text: "在家就能赚钱，太棒了！立即联系试试，反正他们说会退钱",
                correct: false,
                feedback: "这是典型的刷单诈骗！前几单骗子会返款取得信任，当你刷大额订单时，他们就会以各种理由（系统故障、需要继续刷单才能返款等）拒绝返款，最后你会损失所有垫付的钱。"
            },
            {
                text: "先试着刷一单小额的，看看是不是真的能返钱",
                correct: false,
                feedback: "这正是骗子的套路！他们会先返还小额订单的钱，让你放松警惕，然后诱导你刷大额订单，最终卷款跑路。而且刷单本身就是违法行为。"
            },
            {
                text: "认识到这是刷单诈骗，寻找正规的兼职机会",
                correct: true,
                feedback: "正确！'刷单'本身就是违法行为，而'网络刷单兼职'99%都是诈骗。正规兼职应该通过学校就业中心、正规招聘网站或熟人介绍寻找，绝不要相信'高收入、零风险、在家就能做'的诱惑。"
            }
        ]
    },
    {
        id: 4,
        title: "场景四：冒充客服退款",
        dialogue: `你刚在网上买了一件衣服。

第二天，你接到一个自称是购物平台客服的电话：
"您好，我是XX购物平台客服。您昨天购买的商品由于质量问题需要召回，我们将为您办理退款并额外赔偿50元。"

"为了确保退款顺利到账，请您打开支付宝/微信，我来指导您操作。"

"首先，请在搜索栏输入'备用金'，然后按照我说的步骤操作..."

对方能准确说出你的姓名、购买的商品和订单号。

你会怎么做？`,
        choices: [
            {
                text: "对方信息准确，应该是真的客服，按照指示操作",
                correct: false,
                feedback: "这是典型的冒充客服诈骗！骗子通过非法渠道获取你的购物信息，冒充客服骗取信任。他们会诱导你开通借贷功能（如备用金、借呗等），把钱转到他们的账户。正规客服退款无需你进行任何操作，钱会自动原路退回。"
            },
            {
                text: "挂断电话，登录购物平台查看订单状态，或拨打官方客服电话核实",
                correct: true,
                feedback: "正确！任何声称需要你配合操作退款的都是诈骗。正规平台退款会原路返回，无需任何操作。遇到此类电话，应该挂断后通过官方渠道核实，绝不要按照陌生人的指示操作你的支付账户。"
            },
            {
                text: "要求对方先把退款转过来，收到钱后再配合操作",
                correct: false,
                feedback: "这样做仍然有风险！骗子会继续编造理由（如需要验证账户、需要先扣除手续费等）诱导你操作。正确做法是直接挂断，通过官方渠道核实。"
            }
        ]
    },
    {
        id: 5,
        title: "场景五：冒充公检法",
        dialogue: `你正在上课，手机突然响了。

接通后，对方严肃地说：
"你好，我是XX市公安局的警官，你的身份证涉嫌一起洗钱案件，现在需要配合调查。"

"为了证明你的清白，需要你将银行卡里的钱转到国家安全账户接受审查。"

"这是机密案件，不得告诉任何人，否则会妨碍公务，承担法律责任！"

"请立即配合，否则将对你发出逮捕令！"

对方语气严厉，让你感到害怕。

你会怎么做？`,
        choices: [
            {
                text: "太可怕了，赶紧按照要求转账，配合调查",
                correct: false,
                feedback: "这是典型的冒充公检法诈骗！公安机关不会通过电话办案，更不会要求转账到'安全账户'。所谓的'安全账户'根本不存在！公检法机关也绝不会要求保密，不让告诉家人。"
            },
            {
                text: "先转一部分钱试试，看看是不是真的",
                correct: false,
                feedback: "转账任何金额都是错误的！这百分百是诈骗。真正的警察办案会出示证件、工作证，会当面询问，绝不会电话要求转账。"
            },
            {
                text: "保持冷静，挂断电话，拨打110或到就近公安机关核实",
                correct: true,
                feedback: "完全正确！冒充公检法是常见的诈骗手段。记住：公检法机关不会通过电话办案，不会要求转账，不存在'安全账户'，更不会要求保密。接到此类电话，直接挂断并报警。"
            }
        ]
    }
];

// 游戏状态
let currentScenarioIndex = 0;
let dialogueTyping = false;

// DOM 元素
const screens = {
    start: document.getElementById('startScreen'),
    game: document.getElementById('gameScreen'),
    victory: document.getElementById('victoryScreen'),
    submit: document.getElementById('submitScreen'),
    success: document.getElementById('successScreen'),
    fail: document.getElementById('failScreen')
};

const elements = {
    startBtn: document.getElementById('startBtn'),
    scenarioTitle: document.getElementById('scenarioTitle'),
    progressFill: document.getElementById('progressFill'),
    dialogueText: document.getElementById('dialogueText'),
    choiceContainer: document.getElementById('choiceContainer'),
    choiceButtons: document.getElementById('choiceButtons'),
    continueBtn: document.getElementById('continueBtn'),
    submitInfoBtn: document.getElementById('submitInfoBtn'),
    submitForm: document.getElementById('submitForm'),
    playerName: document.getElementById('playerName'),
    studentId: document.getElementById('studentId'),
    submitBtn: document.getElementById('submitBtn'),
    submitBtnText: document.getElementById('submitBtnText'),
    submitBtnLoading: document.getElementById('submitBtnLoading'),
    failMessage: document.getElementById('failMessage'),
    retryBtn: document.getElementById('retryBtn'),
    restartBtn: document.getElementById('restartBtn')
};

// 工具函数：切换屏幕
function switchScreen(hideScreen, showScreen) {
    hideScreen.classList.remove('active');
    setTimeout(() => {
        showScreen.classList.add('active');
    }, 100);
}

// 工具函数：打字机效果
function typeWriter(text, element, speed = 30) {
    return new Promise((resolve) => {
        element.textContent = '';
        let i = 0;
        dialogueTyping = true;

        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                dialogueTyping = false;
                resolve();
            }
        }
        type();
    });
}

// 更新进度条
function updateProgress() {
    const progress = ((currentScenarioIndex + 1) / gameScenarios.length) * 100;
    elements.progressFill.style.width = progress + '%';
}

// 开始游戏
elements.startBtn.addEventListener('click', () => {
    switchScreen(screens.start, screens.game);
    loadScenario(0);
});

// 加载场景
async function loadScenario(index) {
    if (index >= gameScenarios.length) {
        // 所有场景完成，显示通关页面
        switchScreen(screens.game, screens.victory);
        return;
    }

    currentScenarioIndex = index;
    const scenario = gameScenarios[index];

    // 更新标题和进度
    elements.scenarioTitle.textContent = scenario.title;
    updateProgress();

    // 隐藏选择和继续按钮
    elements.choiceContainer.classList.add('hidden');
    elements.continueBtn.classList.add('hidden');

    // 显示对话（打字机效果）
    await typeWriter(scenario.dialogue, elements.dialogueText, 20);

    // 延迟后显示选择
    setTimeout(() => {
        showChoices(scenario.choices);
    }, 500);
}

// 显示选择按钮
function showChoices(choices) {
    elements.choiceButtons.innerHTML = '';
    elements.choiceContainer.classList.remove('hidden');

    choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.className = 'choice-btn';
        button.textContent = choice.text;
        button.addEventListener('click', () => handleChoice(choice, button, choices));
        elements.choiceButtons.appendChild(button);
    });
}

// 处理选择
function handleChoice(choice, button, allChoices) {
    // 禁用所有选择按钮
    const allButtons = elements.choiceButtons.querySelectorAll('.choice-btn');
    allButtons.forEach(btn => btn.classList.add('disabled'));

    if (choice.correct) {
        // 正确选择
        button.classList.add('correct');
        
        // 显示反馈
        setTimeout(() => {
            elements.dialogueText.textContent = '✓ 选择正确！\n\n' + choice.feedback;
            
            // 显示继续按钮
            setTimeout(() => {
                elements.continueBtn.classList.remove('hidden');
            }, 500);
        }, 800);
    } else {
        // 错误选择
        button.classList.add('wrong');
        
        // 显示反馈并跳转到失败页面
        setTimeout(() => {
            elements.failMessage.textContent = choice.feedback;
            switchScreen(screens.game, screens.fail);
        }, 1000);
    }
}

// 继续按钮 - 进入下一场景
elements.continueBtn.addEventListener('click', () => {
    elements.continueBtn.classList.add('hidden');
    loadScenario(currentScenarioIndex + 1);
});

// 失败后重试 - 从当前错误的题目重新开始
elements.retryBtn.addEventListener('click', () => {
    switchScreen(screens.fail, screens.game);
    loadScenario(currentScenarioIndex);
});

// 通关后填写个人信息
elements.submitInfoBtn.addEventListener('click', () => {
    switchScreen(screens.victory, screens.submit);
});

// 表单提交到 LeanCloud
elements.submitForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = elements.playerName.value.trim();
    const studentId = elements.studentId.value.trim();
    const className = document.getElementById('className').value.trim();

    if (!name || !studentId || !className) {
        alert('请填写完整信息！');
        return;
    }

    // 显示加载状态
    elements.submitBtn.disabled = true;
    elements.submitBtnText.classList.add('hidden');
    elements.submitBtnLoading.classList.remove('hidden');

    try {
        // 创建数据对象
        const GameRecord = AV.Object.extend('GameRecords');
        const record = new GameRecord();

        // 设置数据
        record.set('name', name);
        record.set('studentId', studentId);
        record.set('className', className);
        record.set('completedAt', new Date());
        record.set('gameVersion', '1.0');

        // 保存到 LeanCloud
        await record.save();

        console.log('数据提交成功！');
        
        // 清空表单
        elements.submitForm.reset();
        
        // 显示成功页面
        switchScreen(screens.submit, screens.success);

    } catch (error) {
        console.error('提交失败：', error);
        alert('提交失败，请重试！错误信息：' + error.message);
    } finally {
        // 恢复按钮状态
        elements.submitBtn.disabled = false;
        elements.submitBtnText.classList.remove('hidden');
        elements.submitBtnLoading.classList.add('hidden');
    }
});

// 成功后重新开始
elements.restartBtn.addEventListener('click', () => {
    switchScreen(screens.success, screens.start);
    currentScenarioIndex = 0;
});

// 防止意外退出提示
window.addEventListener('beforeunload', (e) => {
    if (currentScenarioIndex > 0 && currentScenarioIndex < gameScenarios.length) {
        e.preventDefault();
        e.returnValue = '';
    }
});

// 防止页面缩放（提升移动端体验）
document.addEventListener('touchstart', function(event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, { passive: false });

let lastTouchEnd = 0;
document.addEventListener('touchend', function(event) {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);

// 监听屏幕方向变化
window.addEventListener('orientationchange', () => {
    // 延迟刷新以确保正确渲染
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);
});

// 初始化：确保只显示开始屏幕
document.addEventListener('DOMContentLoaded', () => {
    screens.start.classList.add('active');
});

