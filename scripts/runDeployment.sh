#!/usr/bin/env bash

echo -e "Deploying musical world ui to docker folder...\n"

version=$1

echo -e "Application version: $version\n"

DEPLOYMENT_DIR=../deployment/

echo -e "Copying Dockerfile to deployment directory...\n"
cp -r ../Dockerfile ${DEPLOYMENT_DIR}Dockerfile

echo -e "Copying dist folder to deployment directory...\n"
cp -r ../dist ${DEPLOYMENT_DIR}

echo -e "Copying config folder to deployment directory...\n"
cp -r ../config ${DEPLOYMENT_DIR}

docker_image_name=${DOCKER_FRONTEND_IMAGE_NAME}
echo -e "Setting docker image name to ${docker_image_name}...\n"

echo -e "Getting container id of the currently running docker instance...\n"
docker_container_id=`docker ps -a | grep ${docker_image_name} | awk -F " " '{print $1}'`

# If the instance was running it will be killed and removed
if [[ ${docker_container_id} != "" ]];then
    echo "Killing previous instance of docker ${docker_image_name} image..."
    sudo docker kill ${docker_container_id}
    echo -e "Removing previous instance of docker ${docker_image_name} image..."
    sudo docker rm ${docker_container_id}
fi

echo -e "\nBuilding an docker image from a Dockerfile..."
sudo docker build -t ${docker_image_name} ../deployment/.

# Getting docker image id
docker_image_id=`docker images | grep ${docker_image_name} | grep latest | awk -F " " '{print $3}'`

docker_image_instance_name="musical_world_ui"
echo -e "\nRun instance - '${docker_image_instance_name}' of an docker image - '${docker_image_name}':"
sudo docker run -d -p 80:80 --name ${docker_image_instance_name} ${docker_image_name}

echo -e "\nSetting tag of new docker image - ${docker_image_id} to ${docker_image_name}:${version}...\n"
sudo docker tag ${docker_image_id} ${docker_image_name}:${version}

echo -e "Cleaning unnecessary tmp docker images..."
sudo docker images --no-trunc --all --quiet --filter="dangling=true" | xargs --no-run-if-empty docker rmi
