import json

with open("KNMI_20141231.txt","rb") as lines:
	lines = lines.readlines()[12:]
    
data = []

for line in lines:
    splitted = line.split(',')
    date = splitted[1][:4] + '/' + splitted[1][4:6] + '/' + splitted[1][6:8] 
    temperature = splitted[2].strip()
    data.append([date,temperature]) 
json_data = json.dumps(data)
print json_data   