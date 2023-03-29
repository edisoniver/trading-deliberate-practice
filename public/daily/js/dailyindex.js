

let chart;
let candleseries;
let customPrice = null;
let customPrices = [];
const cache = new Map();




const getData = async () => {
  if (cache.has('daily')) {
    return cache.get('daily');
  }
  const response = await fetch('/updateddata/dailycandles.json');
  if (!response.ok) {
    throw new Error('Error loading data');
  }
  const data = await response.json();
  cache.set('daily', data);
  return data;
};




const displayChart = async () => {
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

  candleseries = chart.addCandlestickSeries({
    upColor: '#59ad4c', // Green color for up (bullish) candles
    downColor: '#000000', // Red color for down (bearish) candles
    borderUpColor: '#000000',
    borderDownColor: '#000000',
    wickUpColor: '#000000',
    wickDownColor: '#000000',
  });

  const dailyData = await getData();

  const formattedData = dailyData.map(item => ({
    time: new Date(item.Date).getTime() / 1000,
    open: parseFloat(item.Open),
    high: parseFloat(item.High),
    low: parseFloat(item.Low),
    close: parseFloat(item.Close),
    volume: parseFloat(item.Volume),
  }));

  const legend = createLegend(chart);
  subscribeCrosshairMove(chart, candleseries, legend);
  
  candleseries.setData(formattedData);
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
    alert('No data found for weekends :)');
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

displayChart();



