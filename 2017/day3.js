function day3() {
    function getSum(total, num) {
        return total + num;
    }
    function phase1(startpoint) {
        var sp = startpoint;
        var steps = 0;
        var i = 1;
        var si;
        do {
            si = Math.pow(i, 2);

            if (si < sp) {
                steps++;
                i += 2;
            } else {
                break;
            }
        } while (true)

        var distanceFromCorner = (si - sp) % (i - 1);
        steps += Math.abs(steps - distanceFromCorner);
        return steps;
    }
    function phase2() {
        function getComputedState(currentstate){
            
            if(currentstate.max-Math.abs(currentstate.c)>1){
              
                return {
                    axe : currentstate.axe,
                    max: currentstate.max,
                    c :  currentstate.postive? currentstate.c + 1 : currentstate.c - 1 ,
                    postive: currentstate.postive
                };
            }
            if(currentstate.axe == 'x'){
                return {
                    axe : 'y',
                    max: currentstate.max,
                    c : 0,
                    postive: currentstate.postive
                };
            }
            if(currentstate.axe == 'y'){
                return {
                    axe : 'x',
                    max: currentstate.max +1,
                    c : 0,
                    postive: !currentstate.postive
                };
            }
        }
        function newPosition(tmp,currentstate){
           var  r = {x:tmp.x,y:tmp.y};
            if(currentstate.axe == 'x'){
                if(currentstate.postive){
                  r.x +=1;
                }else{
                r.x -=1;
                }
                return r;
            }

            if(currentstate.axe == 'y'){
                if(currentstate.postive){
                  r.y +=1;
                }else{
                r.y -=1;
                }
                return r;
            }
        }
        function ComputeStateVal(ops, p){
            var sum =  0;
            for (let index = 0; index < ops.length; index++) {
                const e = ops[index];                
                if((Math.abs( e.position.x - p.x) <2) && (Math.abs( e.position.y - p.y) <2)){
                    sum += e.val;
                }
            };
            return sum;
        }
        function Run(limitValue){
        var currentstate = {
            axe : 'x',
            max: 1,
            c : 0,
            postive: true
        }
        var ops = new Array();
        var val = 1;
        var o = {x:0,y:0};
        
        ops.push({
            position : o,
            val : val
        });
        var nextPosition = o;
        while(val<  limitValue ){
            nextPosition = newPosition(nextPosition,currentstate);
         var val = ComputeStateVal(ops,nextPosition);
            ops.push({
                position : nextPosition,
                val : val
            });
           currentstate = getComputedState(currentstate);
        }

        return ops.pop().val;
    }
    return{
        Run: Run
    }
    }

    return {
        P1: phase1,
        P2: phase2
    }
}

console.log(day3().P2().Run(368078));
