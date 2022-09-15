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
