const quizData = [
    {
    question: "كم عدد جراحات السيد المسيح ؟",
    options: ["3", "4", "5", "6"],
    correct: "5"
    },
    {
    question: "من الذي طلب من بلاطس البنطي جسد السيد المسيح لدفنه ؟",
    options: ["يوحنا", "يوسف الرامي", "نقوديموس", "سمعان القيرواني"],
    correct: "يوسف الرامي"
    },
    {
    question: "من هو التلميذ الذي شك في قيامة السيد المسيح ؟",
    options: ["توما", "بطرس", "بولس", "يوحنا"],
    correct: "توما"
    },
    {
    question: "أسلم السيد المسيح الروح علي الصليب في الساعة ؟",
    options: ["السادسة", "الغروب", "الثالثة", "التاسعة"],
    correct: "التاسعة"
    },
    {
    question: "من الذي انكر معرفته بالسيد المسيح ؟",
    options: ["توما", "بولس", "بطرس", "يعقوب"],
    correct: "بطرس"
    }
];

let currentIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");

function loadQuestion() {
    const current = quizData[currentIndex];
    questionEl.innerText = current.question;
    optionsEl.innerHTML = "";

    current.options.forEach(option => {
    const label = document.createElement("label");
    label.innerHTML = `
        <input type="radio" name="answer" value="${option}"> ${option}
    `;
    optionsEl.appendChild(label);
    });
}

nextBtn.addEventListener("click", () => {
    const selectedOption = document.querySelector('input[name="answer"]:checked');

    if (!selectedOption) {
    alert("Please select an answer  !  رجاءاً اختر اجابة");
    return;
    }

    const userAnswer = selectedOption.value;
    if (userAnswer === quizData[currentIndex].correct) {
    score++;
    }

    currentIndex++;

    if (currentIndex < quizData.length) {
    loadQuestion();
    } else {
    showResult();
    }
});

function showResult() {
    questionEl.style.display = "none";
    optionsEl.style.display = "none";
    nextBtn.style.display = "none";

    if (score === quizData.length) {
    resultEl.innerText = `
    رائع اجاباتك كلها صحيحة
    مبروك ادخل الكود بسرعة

    #102*1*5350001949176923#
    `;
    } else {
    resultEl.innerText = `
    للأسف نتيجتك  ${score} من ${quizData.length} 
    حاول مجدداً
    `;
    }
}

loadQuestion();