function day4() {
    function phase1(content,check) {
        var passphrases  = content.split("\n"); 

    var valid  = [];
     for(let i = 0; i<passphrases.length; i++ ){
        console.log("===============================================");
     var words = passphrases[i].split(' ');
     var dup = false;
     console.log(words);
     for (let index = 0; index < words.length; index++) {
         const element = words[index];

            for (let innerIndex = index+1; innerIndex < words.length; innerIndex++) {
                const innerElement = words[innerIndex].replace('\r','');
                if( check(innerElement , element)){
                    dup = true;
                    break;
                }
            }
            if(dup){
                break;
            }
         }
         if(!dup){
            valid.push(i);
            console.log("valid ");
         }
     }
     return valid;
    }
    function phase2(passphrases) {
    
        return ;
    }

    return {
        P1: phase1,
        P2: phase2
    }
}
function checkAnagrams(s1,s2){
    var s1Chars = s1.split("");
    var s2Chars = s2.split("");
   
    for (let index = 0; index < s1Chars.length; ) {
        const element = s1Chars[index];
        var foundedCharIndex = s2Chars.findIndex(function(e){
            return e == element;
        });
        if(foundedCharIndex>-1){
            s2Chars.splice(foundedCharIndex, 1);
            s1Chars.splice(index, 1);
        }else{
            index++;
        }
    }
    return s1Chars.length ==0 && s2Chars.length ==0;
}
var fs = require('fs');
fs.readFile('.\\day4_file.txt', 'utf8', function(err, contents) {
     var f = contents.split("\n");
        console.log(day4().P1(
          contents,function(a,b){
              return a === b;
               }
        ).length);
   
        console.log(day4().P1(
            contents,checkAnagrams
          ).length);         
});

