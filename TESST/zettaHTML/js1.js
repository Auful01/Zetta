// Expected Result = 7
// Direction : Find median of this array
const input = [8, 7, 7, 9, 5, 4, 2, 9];

function result(input) {
    const median = array => {
        const mid = Math.floor(array.length / 2),
            nums = [...array].sort((a, b) => a - b);
        return array.length % 2 != 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
    };

    return median(input);
}

console.log({ js1: result(input) });