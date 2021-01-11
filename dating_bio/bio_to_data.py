
import sqlite3
from sqlite3 import Error
from data_to_tbl import make_conn, bio_to_db, words_to_db, sel_from_tbls


age_in = ""
indus_in = ""
bio_in = ""
bio_list = []
word_list = []


def data_entry():
    age_in = input("Enter age: \n > ")
    indus_in = input("Industry: \n > ")
    bio_in = input("Enter bio: \n > ")
    
    parse_bio(bio_in,age_in,indus_in)


def data_to_db(bio_data, word_data):
    bio_db_loc = r"C:\\Users\\rhodr\\OneDrive\\Documents\\GitHub\\personal-projects\\dating_bio\\bio_db.db"
    conn = make_conn(bio_db_loc)
    
    bio_to_db(bio_data)
    words_to_db(word_data)
    
    sel_from_tbls(conn,["Bio_Stats", "Wordcount"])


def parse_bio(bio,age,indus):
    bio_list.append([bio,int(age),indus])
    bio_split = bio.split()
    
    for word in bio_split:
        for entry in bio_list:
            if word.lower() in entry:
                idx = word_list.index(entry)
                word_list[idx][1] = word_list[idx][1] + 1
            else:
                word_list.append([word.lower(), 1])
            
    print(bio_list)
    print(word_list)
    again = input("Input another?   y/n \n > ")
    
    if again.upper() == 'Y':
        data_entry()
    else:
        data_to_db(bio_list, word_list)
        print("Data saved!  ᕕ( ᐛ )ᕗ")



if __name__ == "__main__":
    data_entry()
