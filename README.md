CheatSheet
==========

Various templates, bits of code, and common installation steps for various node modules. 


A less accurate more consistently unique time function for redis keys:

```javascript
var time = [parseInt(Date.now() / 100000), process.hrtime()[1]].join(".");
```

A way to quickly copy files: 

```javascript
var fs = require('fs');
fs.createReadStream('test.log').pipe(fs.createWriteStream('newLog.log'));
```
