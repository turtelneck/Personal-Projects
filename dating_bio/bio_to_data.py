
import sqlite3
import string
from sqlite3 import Error
from data_to_tbl import make_conn, bio_to_db, words_to_db, sel_from_tbls


age_in = ""
indus_in = ""
bio_in = ""
bio_list = []
word_dict = {}



def data_entry():
    '''
    User inputs an age, industry, and bio.
    Age must be a number, industry must be one word.
    Calls parse_bio()
    '''

    # age entry
    try:
        age_in = int(input("Enter age: \n > "))
    except:
        print("**Must be a number\n")
        data_entry()

    # industry entry
    indus_in = input("Industry: \n > ").strip().lower()
    if len(indus_in.split()) > 1:
        print("**Must be one word\n")
        data_entry()

    #bio entry
    bio_in = input("Enter bio: \n > ").strip().lower()
    
    parse_bio(bio_in, age_in, indus_in)



def parse_bio(bio,age,indus):
    '''
    Passes bio, age, and industry to bio_list
    Splits bio, adds words to word_dict
    Calls repeat()
    '''
    
    bio_list.append((bio,age,indus))
    bio_split = bio.translate(str.maketrans('', '', string.punctuation)).split()
    
    for word in bio_split:
        if word in word_dict:
            word_dict[word] += 1
        else:
            word_dict[word] = 1

    print("")
    repeat()



def repeat():
    '''
    User may save data to db
    or
    User may call data_entry() again
    '''
    
    again = input("Input another?   y/n \n > ")
    
    if again.upper().strip() == 'Y':
        print("")
        data_entry()
    elif again.upper().strip() == 'N':
        data_to_db(bio_list, word_dict)
        print("Data saved!  ᕕ( ᐛ )ᕗ")
    else:
        print("Invalid response\n")
        repeat()



def data_to_db(bio_data, word_data):
    '''
    Sends word_dict and bio_list to db
    Calls print_all()
    '''
    
    bio_db_loc = "C:\\Users\\rhodr\\OneDrive\\Documents\\GitHub\\personal-projects\\dating_bio\\bio_db.db"
    conn = make_conn(bio_db_loc)
    
    bio_to_db(conn, bio_data)
    words_to_db(conn, word_data)

    print_all()


def print_all()
    '''
    User may print all avaialable data
    '''
    
    bio_db_loc = "C:\\Users\\rhodr\\OneDrive\\Documents\\GitHub\\personal-projects\\dating_bio\\bio_db.db"
    conn = make_conn(bio_db_loc)
    
    choice = input("Print all available data?   y/n \n > ")
    
    if choice.upper().strip() == 'Y':
        sel_from_tbls(conn,["Bio_Stats","Wordcount"])
    elif choice.upper().strip() == 'N':
        return
    else:
        print("Invalid response\n")
        print_all()
    




if __name__ == "__main__":
    data_entry()

