#!/bin/sh

# Add sudo if not root
if [ "${EUID}" != "0" ]
then
  APT_GET="sudo apt"
  APT_KEY="sudo apt-key"
  ADD_APT_REPO="sudo add-apt-repository"
  USER_MOD="sudo usermod"
  CURL="sudo curl"
  CHMOD="sudo chmod"
else
  APT_GET="apt"
  APT_KEY="apt-key"
  ADD_APT_REPO="add-apt-repository"
  USER_MOD="usermod"
  CURL="curl"
  CHMOD="chmod"
fi

${APT_GET} remove -y docker docker-engine docker.io containerd runc

${APT_GET} update
${APT_GET} install -y \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common

curl -fsSL https://download.docker.com/linux/debian/gpg | ${APT_KEY} add -

${APT_KEY} fingerprint 0EBFCD88

${ADD_APT_REPO} \
   "deb [arch=amd64] https://download.docker.com/linux/debian \
   $(lsb_release -cs) \
   stable"

${APT_GET} update
${APT_GET} install -y docker-ce docker-ce-cli containerd.io

${USER_MOD} -a -G docker debian

# Install docker-compose
${CURL} -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
${CHMOD} +x /usr/local/bin/docker-compose
