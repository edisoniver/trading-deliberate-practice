import csv
import json
from collections import defaultdict
from pathlib import Path
from datetime import datetime

input_csv = "/Users/edisoniver/Documents/github/trading-deliberate-practice/public/ES_full_1min_continuous_UNadjusted.csv"
output_folder = "updateddata"

Path(output_folder).mkdir(parents=True, exist_ok=True)

# Read the CSV file and group data by date
daily_data = defaultdict(list)
with open(input_csv, "r") as csvfile:
    reader = csv.reader(csvfile)
    for row in reader:
        date_time_str, open_price_str, high_str, low_str, close_str, volume_str = row
        date_str, time_str = date_time_str.split(" ")
        timestamp = int(datetime.strptime(f"{date_str} {time_str}", "%Y-%m-%d %H:%M:%S").timestamp())
        daily_data[date_str].append({
            "time": timestamp,
            "open": float(open_price_str),
            "high": float(high_str),
            "low": float(low_str),
            "close": float(close_str),
            "volume": int(volume_str),
        })

# Save each day's data as a separate JSON file
for date, data in daily_data.items():
    with open(f"{output_folder}/{date}.json", "w") as outfile:
        json.dump(data, outfile)
