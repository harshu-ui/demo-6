function LongestWord(str) {
    let words = str.split(' ');
    let res = '';
    for (let word of words) {
        if (word.length >= res.length) {
            res = word;
        }
    }
    return res;
}
let str = "The quick brown fox jumps over the lazy dog";
let result = LongestWord(str);
console.log(result); 

