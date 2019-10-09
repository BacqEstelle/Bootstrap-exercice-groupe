/* A l'attention de Arnaud, le code est tout naze mais il fallait faire dans l'urgence */

//on n'affiche pas les éléments de base 
let page_items_numbers = document.getElementsByClassName('page-item'); //besoin de index 1 jusque 4

//fonction qui affiche le bon slider (pas optimisée du tout mais seulement 4 éléments à parcourir donc ok)
const show_correct_slider = () => {
for(let i = 1, c = page_items_numbers.length-1; i < c ; i++)
    {
        let element_carousel = document.getElementById('carouselMain'+page_items_numbers[i].textContent); //on sélectionne chaque carousel 
        page_items_numbers[i].classList.contains('active') ? element_carousel.style.display = 'block' : element_carousel.style.display = 'none';
    }
}

show_correct_slider(); 

for(let i = 1, c = page_items_numbers.length-1; i < c; i++) //pour les boutons avec des numéros dedans 
{
    let element_pagination = page_items_numbers[i]; 
    element_pagination.addEventListener('click', function(e){
       if(element_pagination.classList.contains('active')){//si élément déjà sélectionné on ne fait rien 
            return; 
        }
        else{//sinon on retire l'état actif à tout le monde et on ajoute à la case 
            for(let j = 0, d = page_items_numbers.length; j < d; j++){
                page_items_numbers[j].classList.contains('active') ? page_items_numbers[j].classList.remove('active') : {}; 
            }
            page_items_numbers[i].classList.add('active'); //jusqu'ici tout fonctionne 
            show_correct_slider();
        }
    });
}

//il faut maintenant ajouter des événements pour les boutons prev et next
//previous  
let element_previous = page_items_numbers[0]; 
element_previous.addEventListener('click', function(e){
    //faut récupérer le texte de celui qui est actif 
    for(let i = 1, c = page_items_numbers.length-1; i < c; i++)
    {
        if(page_items_numbers[i].classList.contains('active')){
            page_items_numbers[i].classList.remove('active');
            if(page_items_numbers[i].textContent == 1){
                page_items_numbers[c-1].classList.add('active');
            }
            else{
                page_items_numbers[i-1].classList.add('active');
            }
            show_correct_slider(); 
            return; 
        }
    }
})
//next
let element_next = page_items_numbers[page_items_numbers.length-1]; 
element_next.addEventListener('click', function(e){
    for(let i = 1, c = page_items_numbers.length-1; i < c; i++){
        if(page_items_numbers[i].classList.contains('active')){
            page_items_numbers[i].classList.remove('active'); 
            if(i == c-1){
                page_items_numbers[1].classList.add('active'); 
            }
            else{
                page_items_numbers[i+1].classList.add('active');
            }
            show_correct_slider(); 
            return; 
        }
    }
})


