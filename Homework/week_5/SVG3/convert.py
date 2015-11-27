import json

with open("Data_Extract_From_World_Development_Indicators_Data.csv","rb") as lines:
	lines = lines.readlines()[1:215]
    
data = []

for line in lines:
    splitted = line.split(',')
    country_code = splitted[-2]
    rate = splitted[-1].strip()
    data.append([country_code,rate]) 
print data
json_data = json.dumps(data)
print json_data   