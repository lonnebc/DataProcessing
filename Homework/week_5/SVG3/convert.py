import json

with open("Data_Extract_From_World_Development_Indicators_Data.csv","rb") as lines:
	lines = lines.readlines()[1:215]
    
data = []

for line in lines:
    splitted = line.split(',')
    country_code = splitted[4]
    rate = splitted[5].strip()
    data.append([country_code,rate]) 
json_data = json.dumps(data)
print json_data   


