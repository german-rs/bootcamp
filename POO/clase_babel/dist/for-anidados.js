"use strict";

/*
    npm init -y 
    sudo npm i -D @babel/preset-env @babel/cli @babel/core @babel/polyfill
    npx babel src/ -d dist/

*/

for (var i = 0; i < 3; i++) {
  console.log(i);
  var log = '';
  for (var _i = 0; _i < 3; _i++) {
    log = _i;
    console.log(log);
  }
  ;
}
;
for (var _i2 = 0, _arr = [1, 2, 3, 4, 5]; _i2 < _arr.length; _i2++) {
  var _i3 = _arr[_i2];
  console.log(_i3);
}