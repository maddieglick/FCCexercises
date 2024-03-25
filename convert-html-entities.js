function convertHTML(str) {

let htmlEnt = str.slice(0,)
for(let i=0; i<htmlEnt.length; i++){
    if(str.charCodeAt(i) == 38){
      htmlEnt = htmlEnt.replace(htmlEnt[i], '&amp;')
    }else if(htmlEnt.charCodeAt(i) == 60){
      htmlEnt = htmlEnt.replaceAll(htmlEnt[i], '&lt;')
    }else if(htmlEnt.charCodeAt(i) == 34){
      htmlEnt = htmlEnt.replaceAll(htmlEnt[i],'&quot;')
    }else if(htmlEnt.charCodeAt(i) == 62){
      htmlEnt = htmlEnt.replaceAll(htmlEnt[i], '&gt;')
    }else if(htmlEnt.charCodeAt(i) == 39){
      htmlEnt = htmlEnt.replace(htmlEnt[i], '&apos;')
    }
  }
  return htmlEnt;
}

convertHTML("<>");


