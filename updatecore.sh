echo remove current byteballcore...
rm -rf node_modules/byteballcore/

echo copying...
cp -r ../byteballcore node_modules/

echo setup...
rm -rf node_modules/byteballcore/node_modules/
rm -rf node_modules/byteballcore/test/
rm -rf node_modules/byteballcore/.idea/
rm -rf node_modules/byteballcore/.circleci/

echo Done!
