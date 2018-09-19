/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let numberTriangles=0;
    let pos=0;
    let value=0;
    let rez=0;
    for (var i = 0; i < preferences.length; i++) {
        pos=preferences[i]-1; 
        if (pos < preferences.length && pos>=0) {
            value=preferences[pos]; 
            for (var j = 0; j < preferences.length; j++) {          
                  if (preferences[j]===i+1) { 
                      if (value===j+1) {numberTriangles++;}
                  } 
              }
        }
    }
    rez=Math.floor(numberTriangles/3);
    return rez;
    };
