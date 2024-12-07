//n'oubliez pas de changer l'URL entre les parenthèses
fetch('https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/restaurant-bresilien.json')
 
.then(response => {
    if (!response.ok) {
        throw new Error('Failed to load JSON data');
    }
    return response.json();
})
.then(data => {
   //ici vous ecrivez votre code
   console.log(data);
   function createCard(item, isPlat = true) {
       const card = document.createElement('div');
       card.classList.add('card');
     
       if (isPlat) {
           card.innerHTML = `
               <img src="${item["image-url"]}" alt="${item.nom}">
               <div class="content">
                   <h2>${item.nom}</h2>
                   <p>${item.desc}</p>
               </div>
           `;
       } else {
           card.innerHTML = `
               <div class="content">
                   <h2>${item.nom}</h2>
                   <p>${item.desc}</p>
               </div>
           `;
       }
     
       return card;
     }
     
     // Les plats (normalement mdrrrrr)  
     const platsContainer = document.getElementById('plats-container');
     console.log("test: "+platsContainer);
     data.plats.forEach(plat => {
       const card = createCard(plat, true);
       
       platsContainer.appendChild(card);
     });
     
     // services XD ??ù
     const servicesContainer = document.getElementById('services-container');
     data.services.forEach(service => {
       const card = createCard(service, false);
       servicesContainer.appendChild(card);
     });
 
   
})


.catch(error => console.error('Error:', error));
console.log(card)
