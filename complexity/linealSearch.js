// Search key by value
/**
 * temporal complexity --> O( n )
 * spatial complexity --> O( n )
 * auxiliar space --> O( 1 )
 */
function linealSearch(arr, value) {
    let found = false;
    let key = -1;
    let index = 0;
    while(index = 0 < arr.length && found == false) {
        if(arr[index] == value) {
            found = true;
            key = index;
        }
        index++;
    }
    return key;
}