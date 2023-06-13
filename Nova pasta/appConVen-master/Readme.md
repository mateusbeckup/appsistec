Desativar o modo strict-ssl removerá esse erro.

npm set strict-ssl false

1. dizer à sua versão atual do npm para usar o ca do nó em vez do ca integrado

npm config set ca=""

2. OU atualizar sua versão do npm

npm install npm -g --ca=null"# appsistec"

npx expo run:android
