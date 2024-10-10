import React, { useState } from 'react';
import PetCard from './PetCard';

export const Landing = () => {
    // NOTE VARIABLES AND STATES
    const [cardName] = useState([
      {
        pet: "Dogs", 
        url: "https://www.humanesociety.org/sites/default/files/styles/400x400/public/2019/02/dog-451643.jpg?h=bf654dbc&itok=txM-HxF8"},
      {
        pet: "Cats", 
        url: "https://d128mjo55rz53e.cloudfront.net/media/images/blog-breed-munchkin_2.max-400x400.format-jpeg.jpg"},
      {
        pet: "Birds", 
        url: "https://lisbethwestra.com/wp-content/uploads/2017/03/King-Parrot-2017-400x400.jpg"},
      {
        pet: "Rabbits", 
        url: "https://www.humanesociety.org/sites/default/files/styles/400x400/public/2018/08/rabbits-235417.jpg?h=f699065c&itok=cDJjY7am"},
      {
        pet: "Guinea Pigs", 
        url: "https://www.jimbeels.store/cdn/shop/articles/Meerscheinchen_im_Freien.webp?v=1694087519"},
      {
        pet: "Ferrets", 
        url: "https://www.humanesociety.org/sites/default/files/styles/400x400/public/2023-07/ferret-pet-hero-20507.jpg?h=07f3cc41&itok=xH0a__Er"}
    ])

    // NOTE FUNCTIONS
    const displayPetCard = () => {
      return cardName.map((name) => <PetCard key={name.pet} data={name} />) 
    }
  
    // NOTE RETURNS
    return (
        <>
          <div className='app-content-wrapper-card' style={{width: "960px"}} >
            <div className='bayon-regular' style={{textAlign: "center", margin: "0px 0px 20px 0px"}} >
              <h2>Pet Breeds</h2>
            </div>
            <div style={{display: "flex", flexWrap: "wrap"}}>
              {displayPetCard()}
            </div>
          </div>
        </>
    )
}

export default Landing;  


// NOTE

// google search: dogs 400x400 : https://www.humanesociety.org/sites/default/files/styles/400x400/public/2019/02/dog-451643.jpg?h=bf654dbc&itok=txM-HxF8
// google search: cats 400x400 : https://d128mjo55rz53e.cloudfront.net/media/images/blog-breed-munchkin_2.max-400x400.format-jpeg.jpg
// google search: birds 400x400 : https://lisbethwestra.com/wp-content/uploads/2017/03/King-Parrot-2017-400x400.jpg
// google search: rabbits 400x400 : https://www.humanesociety.org/sites/default/files/styles/400x400/public/2018/08/rabbits-235417.jpg?h=f699065c&itok=cDJjY7am
// google search: guinea pigs 400x400 : https://www.jimbeels.store/cdn/shop/articles/Meerscheinchen_im_Freien.webp?v=1694087519
// google search: ferrets 400x400 : https://www.humanesociety.org/sites/default/files/styles/400x400/public/2023-07/ferret-pet-hero-20507.jpg?h=07f3cc41&itok=xH0a__Er

// NOTE Test

// Light test on pet card, when interacting and clicking on a specific card. Next feature would be to link it to a page with all availiable 
// pets on adoption for users to browse.