let arr = [1, 27, 2, 3, 43, 5];
bool = true;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1])
        bool = false;
}
if (bool === true) console.log("sorted array");
else console.log("Unsorted array");
