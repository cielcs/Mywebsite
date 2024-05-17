# ベースイメージの選択
FROM node

#package.jsonとpackage-lock.jsonをコピーして、依存関係をインストール
COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 3000
# CMD ["npm", "start"]
CMD ["/bin/bash"]

#docker run -it --rm -v D:\Programing\mywebsite\Mywebsite:/home web:1.0