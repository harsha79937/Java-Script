function countvowels(str){
    let vowels=['a','e','i','o','u'];
    let count=0;
    for(const char of str.toLowerCase()){
        if(vowels.includes(char)){
            count++;
        }
    }
    console.log(`no of vowels : ${count}`);
}
countvowels("dasari harsha vardhan");