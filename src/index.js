/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let numberTriangles=0;
    let pos=0;
    let value=0;
    let rez=0;
    preferences.forEach( (element, index) => {
        pos=element-1;
        if (pos < preferences.length && pos>=0) {
            value=preferences[pos]; 
            preferences.forEach( (elem, inx) => {
                if (elem===index+1) { 
                    if (value===inx+1) numberTriangles++; 
                }
            });
        }
    });
    rez=Math.floor(numberTriangles/3);
    return rez;
    };
