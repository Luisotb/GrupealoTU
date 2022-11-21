import { createRandomGroups } from './src/utils'
import './style.css'

document.getElementById('group').addEventListener('click', handlergroup)

function handlergroup() {

    //const persons=['María','Luis','Manuel','Raquel','Umberto']
    let elements=  document.getElementById('elements').ariaValueMax.split('\n')
    elements=elements.filter(e=>e!='')
    const groupsItems=parseInt(document.getElementById('groupsItems').value)
    const data=createRandomGroups(elements,groupsItems)
   // const inGroups=data.inGroups
   // const noGroups=data.noGroups
   //========Ahorramos codigo=======//
    const{inGroups,noGroups}=data
    console.log(inGroups,noGroups)
    let msg=''
    inGroups.forEach((group,i) => msg += `Grupo ${i}: ${group.join(', ')}  <br/>` )
    if(!noGroups)msg+='No están en grupo :'+noGroups.join(',')
    document.getElementById("distribution").innerHTML=msg

}

