
import sqlite3
from sqlite3 import Error


def make_conn(file):
    conn = None
    try:
        conn = sqlite3.connect(file)
        return conn
    except Error as msg:
        print(msg)

    return conn


def make_table(conn, sql):
    try:
        cur = conn.cursor()
        cur.execute(sql)
    except Error as msg:
        print(msg)


def main():
    
    bio_db_loc = r"C:\\Users\\rhodr\\OneDrive\\Documents\\GitHub\\personal-projects\\dating_bio\\bio_db.db"

    bio_db_table = """ CREATE TABLE IF NOT EXISTS Bio_Stats (
                                        id INTEGER PRIMARY KEY,
                                        bio TEXT,
                                        age INTEGER,
                                        industry TEXT
                                    ); """
    
    wordcount_db_table = """ CREATE TABLE IF NOT EXISTS Wordcount (
                                        id INTEGER PRIMARY KEY,
                                        word TEXT,
                                        count INTEGER
                                    ); """

    conn = make_conn(bio_db_loc)

    if conn != None:
        make_table(conn, bio_db_table)
        make_table(conn, wordcount_db_table)
    else:
        print("error: cannot create db connection")


if __name__ == '__main__':
    main()


# add age to input
# add industry to input
# add sql functions for Bio_Stats table
