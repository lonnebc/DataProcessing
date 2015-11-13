import csv

with open("KNMI_20141231.txt","rb") as lines:

    lines = lines.readlines()[12:]
with open("knmidata.csv","wb") as f:
    writer= csv.writer(f)

    for line in lines:
        splitted = line.split(',')
        date = splitted[1][:4] + '/' + splitted[1][4:6] + '/' + splitted[1][6:8] 
        temperature = splitted[2].strip()
        writer.writerow([date, temperature])
