const https = require("https");

const start = Date.now();

const doRequest=()=>{
    https
    .request("https://www.google.com", (res) => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log(Date.now() - start);
      });
    })
    .end();  
}
for(let i=0; i<500; i++){
    doRequest()
}
