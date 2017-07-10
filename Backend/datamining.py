import matplotlib.pyplot as plt
import numpy as np
from sklearn.cluster import KMeans
from math import *
import datetime



plt.ion()

fig, ax = plt.subplots()


str_file = '2017-07-02_sptrans.txt'
f = open(str_file, 'r')
lines = f.readlines()

data = []
lon = []
lat = []
day = []
time = []
line = []
veic = []
#
for l in lines:
    #(latitude first, then longitude)
    data_temp = l.split(',')
    data.append(data_temp)
    day_temp = data_temp[0]
    time.append(data_temp[2])
    lon.append(float(data_temp[5]))
    lat.append(float(data_temp[4]))
    line.append(data_temp[1])
    veic.append(data_temp[3])
f.close()

#
#
s = ax.scatter(lon, lat)
#avg_lon = np.mean(lon)
#avg_lat = np.mean(lat)
#
#s = ax.scatter(avg_lon, avg_lat, marker='o', color='r', s=400)
#
#GEOBOX_ALLIANZ = [-46.746483,-23.653644,-46.51577,-23.474898]
#s = ax.scatter((GEOBOX_ALLIANZ[0] + GEOBOX_ALLIANZ[2])/2, (GEOBOX_ALLIANZ[1] + GEOBOX_ALLIANZ[3])/2, marker='o', color='y', s=400)
#
#
#
####K-Means
#
#ll = []
#for i in range(len(lat)):
#    ll.append([lon[i],lat[i]])
#    
#kmeans = KMeans(n_clusters=5, random_state=0).fit(ll)
#
#centers = kmeans.cluster_centers_
#
#ctr_lon = []
#ctr_lat = []
#for c in centers:
#    ctr_lon.append(c[0])
#    ctr_lat.append(c[1])
#
#radius = 0.05
#for j in range(6):
#    transf_lon = []
#    transf_lat = []
#    
#    for i in range(360):
#        transf_lon.append(avg_lon + j*radius*cos(radians(i)))
#        transf_lat.append(avg_lat + j*radius*sin(radians(i)))
#    
#    s = ax.scatter(transf_lon, transf_lat, marker='o', color='black', s=4)
#
#
#
#
#dist = []
#for lll in ll:
#    a = np.array(lll)
#    b = np.array([avg_lon,avg_lat])
#    dist.append(np.linalg.norm(a-b))
#
#hist = dict()
#for d in dist:
#    for k in range(10):    
#        if (d > radius*k) and (d<= radius*(k+1)):
#            hist[k] = hist.get(k,0) + 1
