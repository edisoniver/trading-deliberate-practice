

let chart;
let candleseries;
let customPrice = null;
let customPrices = [];
const cache = new Map();


function setDefaultDateTimeValues() {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  const defaultDate = `${yyyy}-${mm}-${dd}`;

  const defaultStartTime = '09:00';
  const defaultEndTime = '17:00';

  document.getElementById('dateInput').value = defaultDate;
  document.getElementById('startTimeInput').value = defaultStartTime;
  document.getElementById('endTimeInput').value = defaultEndTime;
}

document.addEventListener('DOMContentLoaded', () => {
  setDefaultDateTimeValues();
});

const getData = async (date) => {
  if (cache.has(date)) {
    return cache.get(date);
  }
  const response = await fetch(`/updateddata/${date}.json`);
  if (!response.ok) {
    throw new Error('Error loading data');
  }
  const data = await response.json();
  cache.set(date, data);
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

function formatDateTimeToNewYork(timestamp) {
  const date = new Date(timestamp * 1000);
  const newYorkTimeZone = 'America/New_York';
  const formattedDateTime = Intl.DateTimeFormat('en-US', {
    timeZone: newYorkTimeZone,
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(date);
  return formattedDateTime;
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
  
  const candleseries = chart.addCandlestickSeries({
    upColor: '#59ad4c', // Green color for up (bullish) candles
    downColor: '#000000', // Red color for down (bearish) candles
    borderUpColor: '#000000',
    borderDownColor: '#000000',
    wickUpColor: '#000000',
    wickDownColor: '#000000',
  });
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

// Add this code to your JavaScript, after the "displayChart" function and before the "updateChart" function

// Function to add a custom price line
function addCustomPriceLine(price, label) {
  const customPriceLineObj = candleseries.createPriceLine({
    price: price,
    color: '#00008b',
    lineWidth: 2,
    lineStyle: 1, // LineStyle.Dashed
    axisLabelVisible: true,
    title: label || `${price}`,
  });

  customPrices.push(customPriceLineObj);
}


// Event listener for the Add Custom Price Line button
document.getElementById('addCustomPriceLine').addEventListener('click', () => {
  const customPriceInput = document.getElementById('customPriceInput').value;
  const customPriceLabel = document.getElementById('customPriceLabel').value;
  const customPrice = parseFloat(customPriceInput);

  if (isNaN(customPrice)) {
    alert('Please enter a valid price value');
    return;
  }

  addCustomPriceLine(customPrice, customPriceLabel);
});


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

  candleseries = chart.addCandlestickSeries({
    upColor: '#59ad4c', // Green color for up (bullish) candles
    downColor: '#000000', // Red color for down (bearish) candles
    borderUpColor: '#000000',
    borderDownColor: '#000000',
    wickUpColor: '#000000',
    wickDownColor: '#000000',
  }); // Add a new candlestick series

  // Adjust the time property in the filtered data
  const adjustedData = filteredData.map(item => ({
    ...item,
    time: adjustTimestampToNewYorkTime(item.time),
  }));
  
  candleseries.setData(adjustedData);
  updateCustomPriceLines();

};

function updateCustomPriceLines() {
  customPrices.forEach(customPriceLineObj => {
    // Remove the existing price line from the old candlestick series
    candleseries.removePriceLine(customPriceLineObj);

    const price = customPriceLineObj.options().price;
    const label = customPriceLineObj.options().title;

    // Create a new price line for the new candlestick series
    const newCustomPriceLineObj = candleseries.createPriceLine({
      price: price,
      color: '#00008b',
      lineWidth: 2,
      lineStyle: 1, // LineStyle.Dashed
      axisLabelVisible: true,
      title: label,
    });

    // Replace the old price line object with the new one in the customPrices array
    const index = customPrices.indexOf(customPriceLineObj);
    customPrices[index] = newCustomPriceLineObj;
  });
}


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

function adjustTime(minutes) {
  const endTimeInput = document.getElementById('endTimeInput');
  const endTime = endTimeInput.valueAsDate || new Date(endTimeInput.value);

  if (!endTime) return;

  endTime.setMinutes(endTime.getMinutes() + minutes);
  endTimeInput.value = endTime.toISOString().slice(11, 19);
}

// Handle click events for -1m and +1m buttons
document.getElementById('back1m').addEventListener('click', () => {
  adjustTime(-1);
  updateChart();
});

document.getElementById('forward1m').addEventListener('click', () => {
  adjustTime(1);
  updateChart();
});

let timer = null;

document.getElementById('startButton').addEventListener('click', () => {
  if (timer === null) {
    timer = setInterval(() => {
      adjustTime(1);
      updateChart();
    }, 1000);
  }
});

document.getElementById('stopButton').addEventListener('click', () => {
  if (timer !== null) {
    clearInterval(timer);
    timer = null;
  }
});


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
