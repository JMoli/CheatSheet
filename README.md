CheatSheet
==========

Various templates, bits of code, and common installation steps for various node modules. 


A less accurate more consistently unique time function for redis keys:

```node
var time = [parseInt(Date.now() / 100000), process.hrtime()[1]].join(".");
```
