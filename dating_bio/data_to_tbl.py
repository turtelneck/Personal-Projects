
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


def bio_to_db(conn, bio_data):
    print(bio_data)
    for bio in bio_data:

        print(bio)

        bio_to_tbl = ''' INSERT INTO Bio_Stats(bio,age,industry)
                    VALUES(?,?,?) '''
        cur = conn.cursor()
        cur.execute(bio_to_tbl, bio)
        conn.commit()


def words_to_db(conn, dict):
    keys = dict.keys()
    values = dict.values()
    
    for key in keys:

        print(key)
        
        keys_to_tbl = ''' INSERT INTO Wordcount(word)
                    VALUES(?) '''
        cur = conn.cursor()
        cur.execute(keys_to_tbl, (key,))
        conn.commit()

    for value in values:

        print(value)
        
        values_to_tbl = ''' INSERT INTO Wordcount(word)
                    VALUES(?) '''
        cur = conn.cursor()
        cur.execute(values_to_tbl, (value,))
        conn.commit()


def sel_from_tbls(conn, tbls):
    cur = conn.cursor()
    for tbl in tbls:
        cur.execute("SELECT * FROM {}".format(tbl))

        rows = cur.fetchall()
        
        for row in rows:
            print(row)
