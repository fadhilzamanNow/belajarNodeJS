const {readFile,writeFile,readFileSync,writeFileSync} = require('fs');


/*writeFileSync("./content/first.txt","\nIni adalah sebuah teks yang dikirim menggunakan readFileSync", {flag : "a"})
console.log(readFileSync("./content/first.txt","utf-8")) */



console.log("start")
writeFile("./content/first.txt","\nIni dikirim secara asinkronus",{flag : "a", encoding : "utf-8"},(err)=>{
    if(err){
        console.log("gagal menuliskan cuy");
    }
    else{
        console.log("akan dibaca")
        readFile("./content/first.txt",{encoding : "utf-8",flag : "r"},(err,isi)=>{
            if(err){
                console.log("Terjadi sebuah kesalahan : ", err);
            }
            else{
                console.log("======READ SUCCESS 1========")
                console.log(isi)
                readFile("./content/second.txt",{encoding : "utf-8", flag : "r"}, (err,isi2)=>{
                    if(err){
                        console.log("Terjadi sebuah kesalahan part 2 ");
                    }
                    else{
                        console.log("======READ SUCCESS 2========")
                        console.log(isi2)
                    }
                })
            }
        })
        }
})
console.log("end")


