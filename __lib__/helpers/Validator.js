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

export const imageResize = (image, format)=>{
    const _image = image.split("upload");
    return `${_image[0]}/upload/${format}/${_image[1]}`
}


export const _ncrypt = salt => {
    const textToChars = text => text.split('').map(c => c.charCodeAt(0));
    const byteHex = n => ("0" + Number(n).toString(16)).substr(-2);
    const applySaltToChar = code => textToChars(salt).reduce((a,b) => a ^ b, code);

    return text => text.split('')
      .map(textToChars)
      .map(applySaltToChar)
      .map(byteHex)
      .join('');
}
export const _encrypt = _ncrypt('MUKABBIRATANJINKAJKIA');   

export const _dcrypt = salt => {
    const textToChars = text => text.split('').map(c => c.charCodeAt(0));
    const applySaltToChar = code => textToChars(salt).reduce((a,b) => a ^ b, code);

    return encoded => encoded.match(/.{1,2}/g)
      .map(hex => parseInt(hex, 16))
      .map(applySaltToChar)
      .map(charCode => String.fromCharCode(charCode))
      .join('');
}

export const _decrypt = _dcrypt('MUKABBIRATANJINKAJKIA');   


function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

export function convertMsToTime(milliseconds) {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
  
    seconds = seconds % 60;
    minutes = minutes % 60;
  
    hours = hours % 24;
  
    return `${padTo2Digits(hours) && padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(
      seconds,
    )}`;
  }