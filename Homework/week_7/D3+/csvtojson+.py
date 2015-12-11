import json

with open("Data_Extract_From_World_Development_Indicators_Data.csv","rb") as lines:
	lines = lines.readlines()[1:215]
    
data = []

for line in lines:
    splitted = line.split(',')
    countrycode = splitted[-9]
    years = splitted[-8:-1]
    data.append([countrycode,years]) 
json_data = json.dumps(data)
print json_data   


