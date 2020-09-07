
//Hovedfunksjon. Sjekker om alle de mindre funksjonene er lik true, deretter returnerer true om de er det
function isDateValid(dato) 
{
  return (lengde(dato) == true) && (punktum(dato) == true) && (year(dato) == true) && (month(dato) == true) && (day(dato) == true);           
}
//funksjonen lengde sjekker om antall av siffer + punktum stemmer med 10 og returnere true om det stemmer.
function lengde(dato) 
{
    return  (dato.length == 10);   
}
//punktum sjekker at punktum er på plass 2 og 5.
function punktum(dato) 
{
   return (dato.charAt(2) == '.') && (dato.charAt(5) == '.');
}
//year splitter opp datoen ved hvert punktum og putter de i en array delt[0] osv. 0 er dato, 1 er måned og 2 er år.
//deretter sjekker den om lengden på året er lik 4 siffer OG året er større enn 0000 OG mindre enn 9999.
function year(dato) 
{
    var delt = dato.split('.');
   return (delt[2].length === 4) && (delt[2] >= '0000') && (delt[2] <= '9999');
}
//month splitter opp datoen igjen
//nå sjekker den om måneden er lik 2 siffer OG at måned er større enn 01 OG mindre enn 12.
function month(dato)
{
    var delt = dato.split('.');
    return (delt[1].length === 2) && (delt[1] >= '01') && (delt[1] <= '12');
}
//isLeapYear splitter datoen igjen
//denne er lånt av Terje men den sjekker om året er lik skudd år.
function isLeapYear(dato)
{
    var delt = dato.split('.');
    return (delt[2] % 4 == 0) && (delt[2] % 100 != 0) || (delt[2] % 400 == 0);
}
//day splitter datoen igjen.
//den spør om dag er lik 2 siffer OG større enn 01 OG mindre enn 28, ELLER om dagen er 29 og måned er februar OG skuddår, ELLER 29 OG  ikke februar, osv. != betyr IKKE.
function day(dato)
{
    var delt = dato.split('.');
     return (delt[0].length === 2) &&  (delt[0] >= '01') && (delt[0] <= '28')
     || (delt[0] == '29') && (delt[1] == '02') && (isLeapYear(dato) == true)
     || (delt[0] == '29') && (delt[1] != '02')
     || (delt[0] == '30') && (delt[1] != '02')
     || (delt[0] == '31') && (delt[1] == '01') 
     || (delt[0] == '31') && (delt[1] == '03')
     || (delt[0] == '31') && (delt[1] == '05') 
     || (delt[0] == '31') && (delt[1] == '07') 
     || (delt[0] == '31') && (delt[1] == '08') 
     || (delt[0] == '31') && (delt[1] == '10')
     || (delt[0] == '31') && (delt[1] == '12');        
}
 