const questions = [
    {
        text: "イラストの使用用途は？",
        options: ["アイコン・ヘッダー", "サムネイル", "オリジナルMV", "広告", "その他"]
    },
    {
        text: "画像のサイズは？",
        options: ["500×500px (1:1)", "1000×1000px (1:1)", "2000×2000px以上 (1:1)", "カスタムサイズ"]
    },
    { text: "カラー or モノクロ？", options: ["カラー", "モノクロ"] },
    { text: "納期の希望は？", options: ["一週間", "二週間", "三週間", "一ヶ月", "それ以上"] }
];

let answers = [];
let currentQuestion = 0;

function startChat() {
    currentQuestion = 0;
    answers = [];
    showQuestion();
}

function showQuestion() {
    const chatBox = document.getElementById("chat-box");
    chatBox.innerHTML = `<p>${questions[currentQuestion].text}</p>`;

    questions[currentQuestion].options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.onclick = () => nextQuestion(index);
        chatBox.appendChild(button);
    });
}

function nextQuestion(index) {
    answers.push(questions[currentQuestion].options[index]); 
    currentQuestion++;

    const chatBox = document.getElementById("chat-box");
    chatBox.innerHTML = ""; 

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showSummary();
    }
}

function showSummary() {
    const chatBox = document.getElementById("chat-box");
    chatBox.innerHTML = "<h3>入力内容の確認</h3>";

    answers.forEach((answer, index) => {
        let summary = document.createElement("p");
        summary.innerText = `${questions[index].text} → ${answer}`;
        chatBox.appendChild(summary);
    });

    let completeMessage = document.createElement("p");
    completeMessage.innerText = "送信完了！（データは保存されません）";
    chatBox.appendChild(completeMessage);
}
