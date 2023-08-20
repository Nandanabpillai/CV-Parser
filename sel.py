from selenium import webdriver
import time
web=webdriver.Chrome()
web.get('https://docs.google.com/forms/d/e/1FAIpQLSdLz_kkNDdKiOZFBoJbSgpr48cM3eO3xRs7wtgG5zC0dwXm2w/viewform?usp=sf_link')
time.sleep(2)
sname='Vaishakh'
name=web.find_element('xpath','//*[@id="mG61Hd"]/div[2]/div/div[2]/div[1]/div/div/div[2]/div/div[1]/div/div[1]/input')
name.send_keys(sname)
semail='vaishakhraveendran2002@gmail.com'
email=web.find_element('xpath','//*[@id="mG61Hd"]/div[2]/div/div[2]/div[2]/div/div/div[2]/div/div[1]/div/div[1]/input')
email.send_keys(semail)
sedu='College of engineering Trivandrum'
edu=web.find_element('xpath','//*[@id="mG61Hd"]/div[2]/div/div[2]/div[3]/div/div/div[2]/div/div[1]/div/div[1]/input')
edu.send_keys(sedu)
sskills='ML,Web scapping,html,css'
skills=web.find_element('xpath','//*[@id="mG61Hd"]/div[2]/div/div[2]/div[4]/div/div/div[2]/div/div[1]/div[2]/textarea')
submit_button = web.find_element('xpath', '//*[@id="mG61Hd"]/div[2]/div/div[3]/div[1]/div[1]/div/span/span')
submit_button.click()