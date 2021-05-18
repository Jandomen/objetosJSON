  const file_ids = require('./routes.json', 'utf-8');

  const fs = require('fs')
   
  const J = fs.readFileSync('nuwj.json','utf-8');
   let a = JSON.parse(J);
     
    Object.keys(file_ids._embedded.stations).forEach(todo => {
  
     let x = (file_ids._embedded.stations[todo].name);
     let y = (file_ids._embedded.stations[todo].state);  
  
 
        let o = { name: x,
               state: y };
       
       //   let a = [];
      
               a.push(o);  

           const J = JSON.stringify(a)
    
           fs.writeFileSync('nuwj.json',J, 'utf-8' );
           
});
  
