#!/usr/bin/env python
# Name: Lonneke Lammers
# Student number: 10371672
'''
This script scrapes IMDB and outputs a CSV file with highest ranking tv series.
'''
# IF YOU WANT TO TEST YOUR ATTEMPT, RUN THE test-tvscraper.py SCRIPT.
import csv

from pattern.web import URL, DOM

TARGET_URL = "http://www.imdb.com/search/title?num_votes=5000,&sort=user_rating,desc&start=1&title_type=tv_series"
BACKUP_HTML = 'tvseries.html'
OUTPUT_CSV = 'tvseries.csv'


def extract_tvseries(dom):
    '''
    Extract a list of highest ranking TV series from DOM (of IMDB page).

    Each TV series entry should contain the following fields:
    - TV Title
    - Ranking
    - Genres (comma separated if more than one)
    - Actors/actresses (comma separated if more than one)
    - Runtime (only a number!)
    '''

    tvseries = []
    result = []

    # Get all information from IMDB
    for i in dom.by_tag("tr.detailed")[:50]:
        genres = ""
        actors = ""
        # Get title and append in tvserieslist
        for j in i.by_tag("td.title"):
            for title in j.by_tag("a")[:1]:
                tvseries.append(str(title[0]))
        # Get rating and append in tvserieslist
        for o in i.by_tag("div.user_rating"):
                for p in o.by_tag("div.rating"):
                    rank = p.by_tag("span.value")[0] # because rank is just only 1 output
                    tvseries.append(str(rank[0]))
        # Get genre and append in tvserieslist
        for m in i.by_tag("td.title"):
            for k in m.by_tag("span.genre"):
                for genre in k.by_tag("a"):
                    genres += str(genre[0])
                    genres += ", "
                genres = genres [:-2]
                tvseries.append(str(genre[0]))
            # Get actors and append in tvserieslist
            for n in m.by_tag("span.credit"):
                for actor in n.by_tag("a"):
                    actors += str(actor[0])
                    actors += ", "
                actors = actors [:-2]
                tvseries.append(str(actors))

            # Get runtime and append in tvserieslist
            runtime = m.by_tag("span.runtime")[0] # because runtime is just only 1 time
            runtime = str(runtime[0])
            time = runtime.split(" ")
            tvseries.append(int(time[0]))

        # Put all appended information in result and make tvseries empty
        result.append(tvseries)
        tvseries = []

    return result

def save_csv(f, tvseries):
    '''
    Output a CSV file containing highest ranking TV-series.
    '''
    writer = csv.writer(f)
    writer.writerow(['Title', 'Ranking', 'Genre', 'Actors', 'Runtime'])

    # Write information in CSV file
    for row in tvseries:
        writer.writerow(row)

if __name__ == '__main__':
    # Download the HTML file
    url = URL(TARGET_URL)
    html = url.download()

    # Save a copy to disk in the current directory, this serves as an backup
    # of the original HTML, will be used in testing / grading.
    with open(BACKUP_HTML, 'wb') as f:
        f.write(html)

    # Parse the HTML file into a DOM representation
    dom = DOM(html)

    # Extract the tv series (using the function you implemented)
    tvseries = extract_tvseries(dom)

    # Write the CSV file to disk (including a header)
    with open(OUTPUT_CSV, 'wb') as output_file:
        save_csv(output_file, tvseries)
