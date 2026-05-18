* docker pull img-name
* docker run img-name
* docker run -it img-name 
* docker run -itd --name=container-name --rm img-name
* docker ps
* docker ps -a 
* docker images 
* docker images -a
* docker image inspect img-name
* docker image rm img-name 
* docker container rm container-id
* docker image prune 
* docker container prune 
* Dockerfile - configuration file for an Application 
*  docker build -t img-name .
* docker build -t img-name -f dockerfile.X | X = frontend or backend 
* docker run -itd --rm --name=container-name  -p HostPort1:AppnPort1  -p HostPort2:AppnPort2  -p HostPort3:AppnPort3 img-name
* docker run -it --rm --name=container-name -P img-name
* docker login 
* docker build -t Repo-Name
* docker push Repo-Name
* docker tag imgName Repo-name:vX | X= 1 , 2 , 3 . 3.5 , 1.4
* Multi Stage Build - This is used to optimize the docker file in which build a docker file in stages 
*  Security in Dockerfile 
* docker run -it -p 3000:3000 -e PORT = 3000 img-name
* docker network ls 
* docker network inspect bridge 
* docker run -it --rm --name=container-1 ubuntu  
* docker run -it --rm --name=container-2 ubuntu 
* container1 & container2  -- both are connected to the common driver called bridge 
* docker exec container1 ping container-2-ip 
* docker network are of two types one is default and other is user defined and user defined has advantage of automatic DNS resolution between multiple containers means without using ip-address , use the container name only 
* docker network create milkyway 
* docker network ls 
* docker run -itd --rm --name=spidy-1 --network=milkyway ubuntu 
* docker run -itd --rm --name=spidy-2 --network=milkyway ubuntu
* docker run -itd --rm --name=spidy-3  --network=milkyway ubuntu 
* docker  exec  container1 ping spidy-1-ip ------ No Connection due to dfiiferent network 
* docker network inspect milkyway 
* docker exec spidey-1 ping spidey-2
* docker  network connect  milkyway container-2
* docker network inspect 
* docker exec container-2 ping spidey-3
* docker network diconnect milkyway container-2
* docker  run -itd --rm --name=pure-isolated-container network=none ubuntu 
* docker  network rm network-name 
* docker run -it --rm --name=vol-containerA -v host-path:/home/ubuntu/server ubuntu
* docker run -it --rm --name=vol-containerB -v host-path:/home/nginx/server niginx
* docker volume ls 
* docker volume create custom-data 
* docker volume ls 
* docker run -it --rm --name=custom-VolA -v custom-data:/home/ubuntu/server ubuntu 
* docker  run -it --rm --name=custome-VolB -v custom-data:/home/niginx/server nginx
* docker-compose.yml  
* Avoid to touch networking in docker-compose.yml 
* volume in docker-compose.yml 
* custom docker build 
* Docker  Orchestration - Need AWS understanding and I have idea of that like how it work but practical works needed 
