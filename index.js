const overlay = document.querySelector(".image-overlay");
const dataField = document.querySelector(".data");

const points = [
  {
    //0
    x: "46vw",
    y: "17vw",
    datatInfo: "#169050", //new
    data: '<img class ="image-1" src="https://i.ibb.co/RHQvLS7/renewable-forests.png" /> ',
  },
  {
    //1
    x: "41vw",
    y: "20vw",
    datatInfo: "#169050", //new
    data: '<img class ="image-1" src="https://i.ibb.co/RHQvLS7/renewable-forests.png" /> ',
  },
  {
    //2
    x: "47.5vw",
    y: "20.5vw",
    datatInfo: "#846051", //new
    data: '<img class ="image-2" src="https://i.ibb.co/L6qNLdC/local-green-industries.png" /> ',
  },
  {
    //3
    x: "37vw",
    y: "18vw",
    datatInfo: "#846051", //new
    data: '<img class ="image-2" src="https://i.ibb.co/L6qNLdC/local-green-industries.png" /> ',
  },
  {
    //4
    x: "53vw",
    y: "21.7vw",
    datatInfo: "#846051", //new
    data: '<img class ="image-2" src="https://i.ibb.co/L6qNLdC/local-green-industries.png" />',
  },
  {
    //5
    x: "22vw",
    y: "27.4vw",
    datatInfo: "#ff0", //new
    data: '<img class ="image-2" src="https://i.ibb.co/L6qNLdC/local-green-industries.png" /> <img class ="image-6" src= "https://i.ibb.co/2ZrvFyh/biorefineries.png" /> <img class ="image-5" src= "https://i.ibb.co/mc8q8sC/farms.png" /> <img class ="image-1" src="https://i.ibb.co/RHQvLS7/renewable-forests.png" />',
  },
  {
    //6
    x: "23.5vw",
    y: "9.5vw",
    datatInfo: "#91BD58", //new
    data: '<img class ="image-3" src= "https://i.ibb.co/tYvYbnc/landless-production-p.png" />',
  },
  {
    //7
    x: "26vw",
    y: "12.5vw",
    datatInfo: "#91BD58", //new
    data: '<img class ="image-3" src= "https://i.ibb.co/tYvYbnc/landless-production-p.png" />',
  },
  {
    //8
    x: "6vw",
    y: "18vw",
    datatInfo: "#1C6185", //new
    data: '<img class ="image-4" src= "https://i.ibb.co/ph3pyyK/renewable-energy.png" />',
  },
  {
    //9
    x: "7.3vw",
    y: "21vw",
    datatInfo: "#1C6185", //new
    data: '<img class ="image-4" src= "https://i.ibb.co/ph3pyyK/renewable-energy.png" />',
  },
  {
    //10
    x: "43vw",
    y: "30vw",
    datatInfo: "#95191F", //new
    data: '<img class ="image-5" src= "https://i.ibb.co/mc8q8sC/farms.png" />  ',
  },
  {
    //11
    x: "12.5vw",
    y: "14vw",
    datatInfo: "#30AD73", //new
    data: '<img class ="image-6" src= "https://i.ibb.co/2ZrvFyh/biorefineries.png" />',
  },
  {
    //12
    x: "19vw",
    y: "21vw",
    datatInfo: "#30AD73", //new
    data: '<img class ="image-6" src= "https://i.ibb.co/2ZrvFyh/biorefineries.png" />',
  },
  {
    //13
    x: "41vw",
    y: "31vw",
    datatInfo: "#30AD73", //new
    data: '<img class ="image-6" src= "https://i.ibb.co/2ZrvFyh/biorefineries.png" />',
  },
  {
    //14
    x: "51.5vw",
    y: "24vw",
    datatInfo: "#30AD73", //new
    data: '<img class ="image-6" src= "https://i.ibb.co/2ZrvFyh/biorefineries.png" />',
  },
  {
    //15
    x: "45.8vw",
    y: "22.5vw",
    datatInfo: "#30AD73", //new
    data: '<img class ="image-6" src= "https://i.ibb.co/2ZrvFyh/biorefineries.png" />',
  },
  {
    //16
    x: "35.6vw",
    y: "20vw",
    datatInfo: "#30AD73", //new
    data: '<img class ="image-6" src= "https://i.ibb.co/2ZrvFyh/biorefineries.png" />',
  },
  {
    //17
    x: "9vw",
    y: "26vw",
    datatInfo: "#6BC4C1", //new
    data: '<img class ="image-7" src= "https://i.ibb.co/wgrN6c0/wastewater-treament.png" />',
  },
];

points.forEach((point, index) => {
  let spinner = document.createElement("spinner");
  let spinnerOut = document.createElement("div");
  let spinnerIn = document.createElement("div");
  spinnerOut.className = "double-bounce1";
  spinnerIn.className = "double-bounce2";
  spinnerIn.id = `spinner-${index}`;

  spinnerIn.setAttribute("data-info", point.datatInfo); //new

  spinnerOut.id = index;

  spinnerOut.setAttribute("data-info", point.datatInfo); //new

  spinner.appendChild(spinnerOut);
  spinnerOut.appendChild(spinnerIn);
  spinner.style.left = point.x;
  spinner.style.top = point.y;
  spinner.title = "";
  spinner.className = "overlay-image";
  overlay.appendChild(spinner);
  spinner.data = point.data;
  spinner.addEventListener("mouseenter", handleMouseEnter);
  spinner.addEventListener("mouseleave", handleMouseLeave);
});

function handleMouseEnter(event) {
  dataField.innerHTML = event.currentTarget.data;
}

function handleMouseLeave(event) {
  dataField.innerHTML = "&nbsp;";
}

const spinnerInside = document.querySelectorAll(".double-bounce1");
const spinnerOutSide = document.getElementsByClassName("double-bounce2");

//new
// اختيار العنصر عن طريق نوع الداتا
// وضعه ب ستايل
const arr = (info) => {
  const x = document.querySelectorAll(`[data-info='${info}']`);
  x.forEach((ele) => {
    ele.style.backgroundColor = info;
  });
  if (info === "#95191F" || info === "#846051" || info === "#30AD73") {
    spinnerInside[5].style.backgroundColor = info;
    spinnerOutSide[5].style.backgroundColor = info;
  }
};

//new
// تفريغ الستايل من نوع الداتا تايب
const noColor = (info) => {
  const x = document.querySelectorAll(`[data-info='${info}']`);
  x.forEach((ele) => {
    ele.style.backgroundColor = "";
  });

  spinnerInside[5].style.backgroundColor = "";
  spinnerOutSide[5].style.backgroundColor = "";
};

//new
spinnerInside.forEach((ele) => {
  ele.addEventListener("mouseenter", (e) => {
    const color = e.target.dataset.info;

    arr(color);
  });
});

//new
spinnerInside.forEach((ele) => {
  ele.addEventListener("mouseleave", (e) => {
    const color = e.target.dataset.info;
    noColor(color);
  });
});

spinnerInside[5].addEventListener("mouseenter", () => {
  spinnerInside[11].style.backgroundColor = "#30AD73";
  spinnerOutSide[11].style.backgroundColor = "#30AD73";
  spinnerInside[12].style.backgroundColor = "#30AD73";
  spinnerOutSide[12].style.backgroundColor = "#30AD73";
  spinnerInside[13].style.backgroundColor = "#30AD73";
  spinnerOutSide[13].style.backgroundColor = "#30AD73";
  spinnerInside[16].style.backgroundColor = "#30AD73";
  spinnerOutSide[16].style.backgroundColor = "#30AD73";
  spinnerInside[15].style.backgroundColor = "#30AD73";
  spinnerOutSide[15].style.backgroundColor = "#30AD73";
  spinnerInside[14].style.backgroundColor = "#30AD73";
  spinnerOutSide[14].style.backgroundColor = "#30AD73";
  spinnerInside[0].style.backgroundColor = "#169050";
  spinnerOutSide[0].style.backgroundColor = "#169050";
  spinnerInside[1].style.backgroundColor = "#169050";
  spinnerOutSide[1].style.backgroundColor = "#169050";
  spinnerInside[10].style.backgroundColor = "#95191F";
  spinnerOutSide[10].style.backgroundColor = "#95191F";
  spinnerInside[3].style.backgroundColor = "#846051";
  spinnerOutSide[3].style.backgroundColor = "#846051";
  spinnerInside[2].style.backgroundColor = "#846051";
  spinnerOutSide[2].style.backgroundColor = "#846051";
  spinnerInside[4].style.backgroundColor = "#846051";
  spinnerOutSide[4].style.backgroundColor = "#846051";
});

spinnerInside[5].addEventListener("mouseleave", () => {
  spinnerInside[11].style.backgroundColor = "";
  spinnerOutSide[11].style.backgroundColor = "";
  spinnerInside[12].style.backgroundColor = "";
  spinnerOutSide[12].style.backgroundColor = "";
  spinnerInside[13].style.backgroundColor = "";
  spinnerOutSide[13].style.backgroundColor = "";
  spinnerInside[16].style.backgroundColor = "";
  spinnerOutSide[16].style.backgroundColor = "";
  spinnerInside[15].style.backgroundColor = "";
  spinnerOutSide[15].style.backgroundColor = "";
  spinnerInside[14].style.backgroundColor = "";
  spinnerOutSide[14].style.backgroundColor = "";
  spinnerInside[0].style.backgroundColor = "";
  spinnerOutSide[0].style.backgroundColor = "";
  spinnerInside[1].style.backgroundColor = "";
  spinnerOutSide[1].style.backgroundColor = "";
  spinnerInside[10].style.backgroundColor = "";
  spinnerOutSide[10].style.backgroundColor = "";
  spinnerInside[3].style.backgroundColor = "";
  spinnerOutSide[3].style.backgroundColor = "";
  spinnerInside[2].style.backgroundColor = "";
  spinnerOutSide[2].style.backgroundColor = "";
  spinnerInside[4].style.backgroundColor = "";
  spinnerOutSide[4].style.backgroundColor = "";
});
