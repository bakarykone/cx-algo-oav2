
function swap_bubble(array, first_Index, second_Index){
    let tmp = array[first_Index];
    array[first_Index] = array[second_Index];
    array[second_Index] = tmp;
}

function bubble_Sort(array){

    let len = array.length,
        i, z, stop;

    for (i=0; i < len; i++){
        for (z=0, stop=len-i; z < stop; z++){
            if (array[z] > array[z+1]){
                swap_bubble(array, z, z+1);
            }
        }
    }

    return array;
}
console.log(bubble_Sort([20, 0, -7, -1, 6, 10]));