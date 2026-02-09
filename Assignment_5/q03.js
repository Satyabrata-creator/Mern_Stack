// Write a JavaScript class containing several functions to perform file read, write,
// append, and delete operations. Use a constructor to set the file path. Use ES6 export
// to export the class and use it in a separate file to demonstrate the file operations

import fs from 'fs'

export class wrap{
    constructor(fileName){
        this.fileName=fileName;
    }
    readFile1(){
        return fs.readFileSync(this.fileName,'utf-8')
    }
    write(text){
        return fs.writeFileSync('text1.txt',text)        
    }
    append(text){
        fs.appendFileSync(fileName,text)
    }
    delete(){
        fs.unlinkSync('text1.txt')
    }
}

