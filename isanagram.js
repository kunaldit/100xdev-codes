function isAnagram(str1,st2){
    let st1= str1.split('').sort().join('');
    let str2=st2.split('').sort().join('');
    if (str1.length ==st2.length && st1==str2) {
        return true;
    }else{
        return false;
    }
}


console.log(isAnagram("hi","ih"));