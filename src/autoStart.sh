echo "Starting NPM if its installed"
npm i

echo "Installing PM2 (Must be ROOT/SUDO to work)"
sudo npm install -g pm2

echo "ENTER YOUR INFO ON the .env With NANO"
nano .env

