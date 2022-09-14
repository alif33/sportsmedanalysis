import parse from 'html-react-parser'

export const parseHtml = body => parse(body);
export const Sortern = (str, n) =>{
    let strSplit = str.split(' ');
    
    if(strSplit.length > n){
        return strSplit.slice(0, n).join(' ')+'..';
    }else{
        return str;
    }
} 

