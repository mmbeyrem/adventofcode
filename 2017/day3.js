function day3() {
    function phase1(startpoint) {
     var sp =startpoint;
     var steps = 0;
     var i = 1;
     var si;
     do{
        si = Math.pow(i,2);
        
        if(si < sp){
            steps ++;
            i +=2;
        }else{
            break;
        } 
     }while(true)
   
    var distanceFromCorner = (si - sp) %(i-1) ; 
    steps += Math.abs(steps-distanceFromCorner);
    return steps;
    }
    function phase2(sp) {
     
    }

    return {
        P1: phase1,
        P2: phase2
    }
}

/*
console.log(day3().P1(1));
console.log(day3().P1(2));
console.log(day3().P1(3));
console.log(day3().P1(4));
*/
console.log(day3().P1(5));
console.log(day3().P1(6));
console.log(day3().P1(7));
console.log(day3().P1(8));
console.log(day3().P1(9));
console.log(day3().P1(12));
console.log(day3().P1(23));
console.log(day3().P1(25));
console.log(day3().P1(368078));
