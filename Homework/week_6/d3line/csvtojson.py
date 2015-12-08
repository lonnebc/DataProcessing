import json

with open("Data_Extract_From_World_Development_Indicators_Data.txt","rb") as lines:
	lines = lines.readlines()[1:]
    
data = []

for line in lines:
    splitted = line.split(',')
    countrycode = splitted[2]
    year13 = splitted[-1].strip()
    data.append([countrycode,year13]) 
json_data = json.dumps(data)
print json_data   