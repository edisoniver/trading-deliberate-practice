import csv
import json
from collections import defaultdict
from pathlib import Path

input_csv = "/Users/edisoniver/Documents/github/trading-deliberate-practice/public/ES_full_1min_continuous_UNadjusted.txt"
output_folder = "daily_data"

Path(output_folder).mkdir(parents=True, exist_ok=True)

# Read the CSV file and group data by date
daily_data = defaultdict(list)
with open(input_csv, "r") as csvfile:
    reader = csv.reader(csvfile)
    for row in reader:
        date_time, open_price, high, low, close, volume = row
        date = date_time.split(" ")[0]
        daily_data[date].append({
            "dateTime": date_time,
            "open": float(open_price),
            "high": float(high),
            "low": float(low),
            "close": float(close),
            "volume": int(volume),
        })

# Save each day's data as a separate JSON file
for date, data in daily_data.items():
    with open(f"{output_folder}/{date}.json", "w") as outfile:
        json.dump(data, outfile)
