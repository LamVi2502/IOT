const chart = new Chart("chartInformation", {
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: "Nhiệt độ",
          borderColor: "red",
          backgroundColor: "red",
          lineTension: 0,
          data: [],
          fill: false,
        },
        {
          label: "Độ ẩm",
          borderColor: "blue",
          backgroundColor: "blue",
          lineTension: 0,
          data: [],
          fill: false,
        },
        {
          label: "Ánh sáng",
          borderColor: "gold",
          backgroundColor: "gold",
          lineTension: 0,
          data: [],
          fill: false,
        },
      ],
    },
    options: {
      onClick: function (event, elements) {
        if (elements.length > 0) {
          const datasetIndex = elements[0].datasetIndex;
          const meta = chart.getDatasetMeta(datasetIndex);
  
          meta.hidden = !meta.hidden;
  
          chart.update();
        }
      },
  
      scales: {
        x: {
          title: {
            display: true,
            text: "Time",
          },
        },
      },
  
      onHover(event) {
        event.target.style.cursor = "default";
      },
  
      // hover: {
      //     onHover: (event) => {
      //     event.target.style.cursor  = 'pointer';
      // }
      // },
    },
  });


function updateChart() {
    const temp = Math.floor(Math.random() * 101);
    const humid = Math.floor(Math.random() * 101);
    const light = Math.floor(Math.random() * 101);

    if (chart.data.labels.length > 10) {
        chart.data.datasets.forEach(dataset => {
            dataset.data.shift();
        });
        chart.data.labels.shift();
    }

    chart.data.datasets[0].data.push(temp);
    chart.data.datasets[1].data.push(humid);
    chart.data.datasets[2].data.push(light);
    chart.data.labels.push(new Date().toLocaleTimeString());

    document.getElementById("temperatureValue").innerText = temp + "°C";
    document.getElementById("humidityValue").innerText = humid + "%";
    document.getElementById("lightValue").innerText = light + " LUX";

    chart.update();

}
setInterval(updateChart, 1000);

function on_light(){
  var onButton = document.getElementById("lightOn");
  var offButton = document.getElementById("lightOff");

  onButton.style.backgroundColor = "green";
  offButton.style.backgroundColor = "transparent";
  document.getElementById('light-img').src='img/lighton.png';

} 
function off_light(){
  var onButton = document.getElementById("lightOn");
  var offButton = document.getElementById("lightOff");

  offButton.style.backgroundColor = "red";
  onButton.style.backgroundColor = "transparent";
  document.getElementById('light-img').src='img/lightoff.png';
}
function on_fan(){
  var onButton = document.getElementById("fanOn");
  var offButton = document.getElementById("fanOff");

  onButton.style.backgroundColor = "green";
  offButton.style.backgroundColor = "transparent";
  document.getElementById('fan-img').src='img/fanon2.gif';

} 
function off_fan(){
  var onButton = document.getElementById("fanOn");
  var offButton = document.getElementById("fanOff");

  offButton.style.backgroundColor = "red";
  onButton.style.backgroundColor = "transparent";
  document.getElementById('fan-img').src='img/fanoff2.gif';
}  