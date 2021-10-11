export const handleCopy = (me, setCopy) => {
    navigator.clipboard.writeText(me?.username);
    setCopy(true);
    setTimeout(function(){
        setCopy(false);; 
   }, 1000);
};