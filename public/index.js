

let chart;
let candleseries;

const getData = async (date) => {
  const response = await fetch(`/updateddata/${date}.json`);
  if (!response.ok) {
    throw new Error('Error loading data');
  }
  const data = await response.json();
  console.log(data)
  return data;
};

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

function adjustTimestampToNewYorkTime(timestamp) {
  const newYorkTimeZone = 'America/New_York';
  const date = new Date(timestamp * 1000);
  const newYorkDateTime = new Date(
    Intl.DateTimeFormat('en-US', {
      timeZone: newYorkTimeZone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    }).format(date)
  );

  // Calculate the daylight saving time offset
  const utcDateTime = new Date(date.toISOString());
  const dstOffset = (newYorkDateTime.getTime() - utcDateTime.getTime()) / 60000;

  // Adjust the timestamp by the dstOffset
  const adjustedTimestamp = timestamp + dstOffset * 60;
  return adjustedTimestamp;
}




const displayChart = async (date, startTime, endTime) => {
  const domElement = document.getElementById('tvchart');

  const chartProperties = {
    width: domElement.clientWidth,
    timeScale: {
      timeVisible: true,
    },
    crosshair: {
      visible: true, 
      mode: LightweightCharts.CrosshairMode.Normal,
      vertLine: {
        color: 'rgba(92, 70, 180, 1)',
        width: 0.5,
        style: 0,
      },
      horzLine: {
        color: 'rgba(92, 70, 180, 1)',
        width: 0.5,
        style: 0,
      },
    },
  };

  chart = LightweightCharts.createChart(domElement, chartProperties);
  const candleseries = chart.addCandlestickSeries();
  const klinedata = await getData(date);
  const filteredData = filterDataByDateTimeRange(klinedata, date, startTime, endTime);

  // Adjust the time property in the filtered data
  const adjustedData = filteredData.map(item => ({
    ...item,
    time: adjustTimestampToNewYorkTime(item.time),
  }));

  const legend = createLegend(chart);
  subscribeCrosshairMove(chart, candleseries, legend);

  candleseries.setData(adjustedData);
  return candleseries;
};

const updateChart = async () => {
  const selectedDate = document.getElementById('dateInput').value;
  const selectedStartTime = document.getElementById('startTimeInput').value;
  const selectedEndTime = document.getElementById('endTimeInput').value;
  if (!selectedDate || !selectedStartTime || !selectedEndTime) {
    alert('Please select a date and time range');
    return;
  }

  const klinedata = await getData(selectedDate);
  const filteredData = filterDataByDateTimeRange(klinedata, selectedDate, selectedStartTime, selectedEndTime);
  if (filteredData.length === 0) {
    alert('No data found for the selected date and time range');
    return;
  }

  if (candleseries) { // Remove the existing candlestick series
    chart.removeSeries(candleseries);
  }

  candleseries = chart.addCandlestickSeries(); // Add a new candlestick series

  // Adjust the time property in the filtered data
  const adjustedData = filteredData.map(item => ({
    ...item,
    time: adjustTimestampToNewYorkTime(item.time),
  }));

  candleseries.setData(adjustedData);
};

function createLegend(chart) {
  const legend = document.createElement('div');
  legend.className = 'legend';
  document.getElementById('tvchart').appendChild(legend);
  return legend;
}

function updateLegend(legend, priceData) {
  legend.innerHTML = `O: ${priceData.open.toFixed(2)} H: ${priceData.high.toFixed(2)} L: ${priceData.low.toFixed(2)} C: ${priceData.close.toFixed(2)}`;
}

function subscribeCrosshairMove(chart, candleseries, legend) {
  chart.subscribeCrosshairMove(param => {
    let priceData;
    try {
      priceData = param.seriesPrices.get(candleseries);
    } catch (e) {
      priceData = undefined;
    }

    if (param.point === undefined || param.time === undefined || priceData === undefined) {
      legend.innerHTML = '';
    } else {
      updateLegend(legend, priceData);
    }
  });
}





const shiftChartTime = async (shiftAmount, unit) => {
  const dateInput = document.getElementById('dateInput');
  const startTimeInput = document.getElementById('startTimeInput');
  const endTimeInput = document.getElementById('endTimeInput');

  if (unit === 'm') {
    const endTime = new Date(`${dateInput.value}T${endTimeInput.value}`);
    endTime.setMinutes(endTime.getMinutes() + shiftAmount);
    endTimeInput.value = endTime.toISOString().substr(11, 8);

    updateChart();
  } else if (unit === 'd') {
    const currentDate = new Date(dateInput.value);
    currentDate.setDate(currentDate.getDate() + shiftAmount);
    dateInput.valueAsDate = currentDate;
    updateChart();
  }
};

// Event listeners
document.getElementById('updateChart').addEventListener('click', updateChart);
document.getElementById('back1d').addEventListener('click', () => shiftChartTime(-1, 'd'));
document.getElementById('forward1d').addEventListener('click', () => shiftChartTime(1, 'd'));

// Initial display
(async () => {
  const initialDate = '2008-08-15';
  const initialStartTime = '09:00:00';
  const initialEndTime = '11:00:00';
  candleseries = await displayChart(initialDate, initialStartTime, initialEndTime);
})();
