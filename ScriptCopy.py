import requests
from bs4 import BeautifulSoup

season = int(input(("enter the season :")))
episode = int(input("enter number of episodes in season:"))

for ep in range(episode):
    if (season < 10):
        URL = "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?tv-show=the-office-us&episode=s0" + str(season)
    elif (season > 10):
        URL = "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?tv-show=the-office-us&episode=s" + str(season)
    if (ep < 9):
        URL = URL + "e0" + str(ep+1)
    else:
        URL = URL + "e" + str(ep+1)
    r = requests.get(URL)
    soup = BeautifulSoup(r.content, 'html5lib')
    result = soup.find("div", {"class":"scrolling-script-container"})
    f = open("office.txt", "a", encoding="utf-8")
    f.write(result.text.strip())
    f.write("\n")
    f.close()