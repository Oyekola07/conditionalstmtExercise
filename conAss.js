let surname = 'Adeleke'
if(surname == 'Ademola')
document.getElementById('name1').innerHTML='This is not your first Name';
else if(surname == 'Nurudeen')
document.getElementById('name2').innerHTML='You supplied your middle name';
else if(surname == 'Jackson')
document.getElementById('name3').innerHTML='This is your nickame';
else if(surname == 'Adeleke')
document.getElementById('name4').innerHTML='Welcome Adeleke!'
else
window.alert('Oops! This is an invalid name')