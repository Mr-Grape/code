async function inicializa(){
      try {
          const data = await fetch(
          `https://gus.works/api/uba.php`
          );
            
          const json = await data.json();
          console.log(json);
          console.log(json.length);           
         
      } catch (err) {
          console.error(`Error getting json: ${err}`);
      }
    
};

inicializa();
