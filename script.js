// navbar
const stickyTop = document.querySelector(".sticky-top");
const offcanvas = document.querySelector(".offcanvas");

offcanvas.addEventListener("show.bs.offcanvas", function () {
  stickyTop.style.overflow = "visible";
});

offcanvas.addEventListener("hidden.bs.offcanvas", function () {
  stickyTop.style.overflow = "hidden";
});

// quiz
const quizData = [
  {
    question: "Berapa akar-akar dari f(x)=x²-16?",
    options: ["2 dan -2", "4 dan -4", "8 dan -8", "16 dan -16"],
    answer: "4 dan -4",
  },
  {
    question: "Berapa akar-akar dari f(x)=x²-8x+4?",
    options: ["4 dan -12", "4 dan 12", "-4 dan -12", "-4 dan 12"],
    answer: "4 dan -12",
  },
  {
    question:
      "Persamaan kuadrat 2x²+10x-3=0 memiliki akar p dan q. Maka nilai p+q adalah?",
    options: ["-10", "10", "-5", "5"],
    answer: "-5",
  },
  {
    question: "Penelesaian dari pertidaksamaan (x-1)(x-2)<0 adalah?",
    options: ["-2<x<2", "1<x<2", "x<1 atau x>2", "x<-2 atau x>-1"],
    answer: "1<x<2",
  },
  {
    question: "Persamaan kuadrat x²+5x-12=0",
    options: ["-5", "5", "-12", "12"],
    answer: "-5",
  },
  {
    question: "Fungsi kuadrat y=x²-6x+5 memotong sumbu y di titik...",
    options: ["(0,1)", "(1,0)", "(5,0)", "(0,5)"],
    answer: "(0,5)",
  },
  {
    question: "Jika a < 0 maka grafik fungsi f(x) = ax²... ",
    options: [
      "Terbuka ke kiri",
      "Terbuka ke kanan",
      "Terbuka ke atas",
      "Terbuka ke bawah",
    ],
    answer: "Terbuka ke bawah",
  },
  {
    question:
      "Fungsi kuadrat yang memiliki titik puncak (2,-1) dan melalui titik (0,3) adalah ...",
    options: [
      "y = x² - 5x + 4",
      "y = x² - 5x - 4 ",
      "y = x² - 4x + 3",
      "y = x² - 4x - 3",
    ],
    answer: "y = x² - 4x + 3",
  },
  {
    question:
      "Jika nilai koefisien x² lebih besar dari 0, maka bentuk grafik fungsi kuadrat yang sesuai adalah ...",
    options: [
      "Terbuka ke bawah",
      "Terbuka ke atas",
      "Melengkung ke samping kanan",
      "Melengkung ke samping kiri",
    ],
    answer: "Terbuka ke atas",
  },
  {
    question:
      "Fungsi kuadrat f(x)= ax² - 4x + c mempunyai titik puncak di (1,4). Tentukan nilai f(x)!",
    options: [
      "f(x) = 2x² + 6x - 3",
      "f(x) = x² + 8x - 2",
      "f(x)= 2x² - 6x + 3",
      "f(x) = x² - 8x - 2",
    ],
    answer: "f(x)= 2x² - 6x + 3",
  },
];

const quizContainer = document.getElementById("quiz");
const resultContainer = document.getElementById("result");

function buildQuiz() {
  quizData.forEach((data, index) => {
    const questionElement = document.createElement("p");
    questionElement.textContent = `${index + 1}. ${data.question}`;
    quizContainer.appendChild(questionElement);

    data.options.forEach((option) => {
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = `q${index}`;
      radio.value = option;
      quizContainer.appendChild(radio);

      const label = document.createElement("label");
      label.textContent = option;
      quizContainer.appendChild(label);

      const br = document.createElement("br");
      quizContainer.appendChild(br);
    });
  });
}

function submitQuiz() {
  let score = 0;

  quizData.forEach((data, index) => {
    const selectedOption = document.querySelector(
      `input[name="q${index}"]:checked`
    );
    if (selectedOption) {
      if (selectedOption.value === data.answer) {
        score++;
      }
    }
  });

  resultContainer.textContent = `Skor Anda: ${score} dari ${quizData.length}`;
}

buildQuiz();

// grafik
// Function to update the plot
function updatePlot() {
  // Get values of a, b, and c from the input fields
  var a = parseFloat(document.getElementById("a").value);
  var b = parseFloat(document.getElementById("b").value);
  var c = parseFloat(document.getElementById("c").value);

  // Generate x values
  var xValues = [];
  for (var i = -10; i <= 10; i += 0.1) {
      xValues.push(i);
  }

  // Calculate y values
  var yValues = xValues.map(function(x) {
      return a * x * x + b * x + c;
  });

  // Create the plot
  var trace = {
      x: xValues,
      y: yValues,
      type: 'scatter',
      mode: 'lines',
      name: 'Quadratic Function'
  };

  var layout = {
      title: `Quadratic Function: ${a}x^2 + ${b}x + ${c}`,
      xaxis: {
          title: 'x'
      },
      yaxis: {
          title: 'y'
      }
  };

  Plotly.newPlot('plot', [trace], layout);
}
