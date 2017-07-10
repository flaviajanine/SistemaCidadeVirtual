from pymongo import MongoClient
import datetime



#client = MongoClient('186.201.214.56', 27017)
client = MongoClient('10.97.0.11', 27017)
db = client.Marcelo2
cols = db.collection_names()
today = datetime.date.today()

with open (str(today)+"_sptrans.txt","a") as fp:
    for c in cols:
        collection = db[c].find()
    
        keylist = []
        try:
            for item in collection:
                for veic in item['vs']:
                    fp.write(c+","+str(item['linha'])+","+item['hr']+","+str(veic['p'])+","+str(veic['px'])+","+str(veic['py'])+"\n")

        except:
            print "Erro"        

#collection.find_one({"hr":"00:00"})