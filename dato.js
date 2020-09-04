

function isDateValid(dato) 
{
   if(lengde(dato) == true && punktum(dato) == true && year(dato) == true && month(dato) == true && day(dato) == true)
   {
        return true;
   } 
   else
   { 
       return false;
   }
}


function lengde(dato) 
{
    if(dato.length == 10)
    {
        return true;
    }
    else
    {
        return false;
    }
}
function punktum(dato) 
{
    if(dato.charAt(2) == '.' && dato.charAt(5) == '.')
    {
        return true;
    }
    else
    {
        return false;
    }
}
function year(dato) 
{
    var delt = dato.split('.');
    if(delt[2].length === 4 && delt[2] >= '0000' && delt[2] <= '9999')
    {
        return true;
    }
    else
    {
        return false;
    }
}
function month(dato)
{
    var delt = dato.split('.');
    if(delt[1].length === 2 && delt[1] >= '01' && delt[1] <= '12')
    {
        return true;
    }
    else
    {
        return false;
    }
}

function isLeapYear(dato)
{
    var delt = dato.split('.')
    return ((delt[2] % 4 == 0) && (delt[2] % 100 != 0)) || (delt[2] % 400 == 0);
}

function day(dato)
{
    var delt = dato.split('.');
    if(delt[0].length === 2 &&  delt[0] >= '01' && delt[0] <= '28')
    {
        return true;
    }
    else if( delt[0] == '29' && delt[1] == '02' && isLeapYear(dato) == true)
    {
        return true;
    } 
    else if(delt[0] == '29' && delt[1] != '02')
    {
        return true;  
    } 
    else if(delt[0] == '30' && delt[1] != '02')
    {
        return true;  
    } 
    else if(delt[0] == '31' && delt[1] == '01' || delt[0] == '31' && delt[1] == '03'|| delt[0] == '31' && delt[1] == '05' || delt[0] == '31' && delt[1] == '07' 
    || delt[0] == '31' && delt[1] == '08' || delt[0] == '31' && delt[1] == '10'|| delt[0] == '31' && delt[1] == '12')       
    {
        return true;
    }
    else 
    { 
        return false; 
    }
    
  
}
 