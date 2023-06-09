import Papa from 'papaparse';


let chart;
let candleseries;

const getData = async () => {
  return new Promise((resolve, reject) => {
    const cdata = [];

    Papa.parse('ES_full_1min_continuous_UNadjusted.csv', {
      download: true,
      step: function (row, parser) {
        if (row.errors.length === 0) {
          const [dateTime, open, high, low, close, volume] = row.data;

          if (!dateTime) {
            return;
          }

          let parsedTime;
          if (dateTime.includes(' ')) { // First dataset format
            const [date, time] = dateTime.split(' ');
            const isoDateTime = `${date}T${time}`;
            parsedTime = new Date(isoDateTime).getTime() / 1000;
          } else { // Second dataset format
            const [date, time] = dateTime.split(', ');
            const adjustedTime = time.includes('AM') || time.includes('PM') ? time : `${time} UTC`;
            parsedTime = new Date(`${date} ${adjustedTime}`).getTime() / 1000;
          }

          const data = {
            time: parsedTime,
            open: parseFloat(open),
            high: parseFloat(high),
            low: parseFloat(low),
            close: parseFloat(close),
            volume: parseFloat(volume),
          };
          cdata.push(data);
        } else {
          // Handle errors or stop parsing if needed
          // parser.abort();
        }
      },
      complete: function () {
        resolve(cdata);
      },
      error: function (err) {
        reject(err);
      },
    });
  });
};


// getData();

const displayChart = async () => {
  const domElement = document.getElementById('tvchart');
  
  const chartProperties = {
    width: domElement.clientWidth,
    timeScale: {
      timeVisible: true,
    },
  };

  chart = LightweightCharts.createChart(domElement, chartProperties);
  const candleseries = chart.addCandlestickSeries();
  const klinedata = await getData();
  candleseries.setData(klinedata);
  return candleseries; // Return the created candlestick series
};


window.addEventListener('resize', () => {
  const chartElement = document.getElementById('tvchart');
  chart.resize(chartElement.clientWidth, chartElement.clientHeight);
});

(async () => {
  candleseries = await displayChart(); // Assign the created candlestick series to the candleseries variable
})();

const filterDataByDateTimeRange = (data, date, startTime, endTime) => {
  const targetStartDateTime = new Date(`${date}T${startTime}`);
  const targetEndDateTime = new Date(`${date}T${endTime}`);
  return data.filter(item => {
    const itemDateTime = new Date(item.time * 1000);
    return itemDateTime.getFullYear() === targetStartDateTime.getFullYear() &&
      itemDateTime.getMonth() === targetStartDateTime.getMonth() &&
      itemDateTime.getDate() === targetStartDateTime.getDate() &&
      itemDateTime >= targetStartDateTime && itemDateTime <= targetEndDateTime;
  });
};

const updateChart = async () => {
  const selectedDate = document.getElementById('dateInput').value;
  const selectedStartTime = document.getElementById('startTimeInput').value;
  const selectedEndTime = document.getElementById('endTimeInput').value;
  if (!selectedDate || !selectedStartTime || !selectedEndTime) {
    alert('Please select a date and time range');
    return;
  }

  const klinedata = await getData();
  const filteredData = filterDataByDateTimeRange(klinedata, selectedDate, selectedStartTime, selectedEndTime);
  if (filteredData.length === 0) {
    alert('No data found for the selected date and time range');
    return;
  }

  candleseries.setData(filteredData); // Update the data of the existing candlestick series
};




document.getElementById('updateChart').addEventListener('click', updateChart);
