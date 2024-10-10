import * as React from 'react';
import PetListingCard from './PetListingCard';

import {Box, MenuItem, Pagination, Select, Skeleton } from '@mui/material';

export const PetListing = () => {
    // NOTE VARIABLES AND STATES
    const [petType, setPetType] = React.useState('');
    const [ageCount, setAgeCount] = React.useState(30);
    const [sex, setSex] = React.useState('');
    const [weight, setWeight] = React.useState(1);
    const [petData, setPetData] = React.useState();

    const petBreeds = [
        {id: 1, page: 'Page 1', name: "Australian Kelpie"},
        {id: 2, page: 'Page 1', name: "Alaskan Malamute"},
        {id: 3, page: 'Page 1', name: "Main Coon"},
        {id: 4, page: 'Page 1', name: "Bombay Cat"},
        {id: 5, page: 'Page 1', name: "Norwegian Forest Cat"},
        {id: 6, page: 'Page 1', name: "American Bobtail"},
        {id: 7, page: 'Page 1', name: "Toyger"},
        {id: 8, page: 'Page 1', name: "Khao Manee"},
        {id: 9, page: 'Page 1', name: "Australian Mist"},
        {id: 10, page: 'Page 1', name: "Egyptian Mau"},
        {id: 11, page: 'Page 2', name: "Rainbow Lorikeet"}, 
        {id: 12, page: 'Page 2', name: "Conures"}, 
        {id: 13, page: 'Page 2', name: "Cockatiel"},
        {id: 14, page: 'Page 2', name: "Finch"},
        {id: 15, page: 'Page 2', name: "Abyssinian Lovebird"},
        {id: 16, page: 'Page 2', name: "Border Canary"},
        {id: 17, page: 'Page 2', name: "Bridled Titmouse"},
        {id: 18, page: 'Page 2', name: "Fischer’s Lovebird"},
        {id: 19, page: 'Page 2', name: "Grey Parrot"},
    ]

    let [pageRef, setPageRef] = React.useState(petBreeds.length);
    let [page, setPage] = React.useState(1);
    let [min, setMin] = React.useState(0);
    let [max, setMax] = React.useState(10);

    // NOTE FUNCTIONS    
    
    React.useEffect(() => {
        setPageRef(Math.ceil(petBreeds.length / 10));
        // console.log(`Min Results: ${min}`, `Max Results: ${max}`);
        
        fetch(`http://localhost:8080/api/pets`)
        .then((res) => res.json())
        .then((data) => {
            if (data) {
                // console.log(data.datasheet)
                setPetData(data.datasheet)
            }})
        .catch((err) => console.log(err.error))
    },[min, max, page])
    

    const handleChange = (e, value) => {
        setPage(value);

        min = value + '0';
        setMin(min - 10);
        setMax(value + '0');
    };

    // const handlePetTypeChange = (e) => {
    //     setPetType(e.target.value);
    // };

    // const handleSexChange = (e) => {
    //     setSex(e.target.value);
    // };

    // const handleWeightChange = (e) => {
    //     console.log("Clicked", weight)
    //     setWeight(e.target.value);
    // }; 
  
    // const handleAgeChange = (e) => {
    //     setAgeCount(e.target.value);
    // }; 

   function displayListingCard(){
        if (petData === undefined) {
            return (
               <>
                    <Box sx={{ width: '100%' }}>
                        <Skeleton style={{ margin: '-20px 0px 0px 0px', height: '300px'}} animation="wave"  />
                        <Skeleton style={{ margin: '-60px 0px 0px 0px', height: '300px'}} animation="wave"  />
                        <Skeleton style={{ margin: '-60px 0px 0px 0px', height: '300px'}} animation="wave"  />
                        <Skeleton style={{ margin: '-60px 0px 0px 0px', height: '300px'}} animation="wave"  />
                        <Skeleton style={{ margin: '-60px 0px 0px 0px', height: '300px'}} animation="wave"  />
                    </Box>
               </> 
            ) 
        }
        
        return petData.slice(min, max).map((breed) => <PetListingCard key={breed.id} data={breed} />)
    }

    // NOTE RETURNS
    return (
        <>
            <div className='app-content-wrapper-listing' style={{width: "960px"}} >
                <div className='bayon-regular' style={{textAlign: "center", margin: "0px 0px 20px 0px"}} >
                    <h2>Pet Listing</h2>
                </div>
                {/* <div className='listing-searchbar'>
                    <form className='listing-container outfit-regular'>
                        <input type='text' placeholder='Keywords' />
                        <label>Age: {ageCount}</label>
                        <input style={{margin: "unset", padding: "unset", borderRadius: "unset"}} onChange={handleAgeChange} type='range' max={30} min={0}/>
                        <input type='number' value={weight} onChange={handleWeightChange} placeholder='Weight' />
                        <Select className='mui-drop-custom' value={sex} onChange={handleSexChange} displayEmpty>
                            <MenuItem style={{fontFamily: "Outfit"}} value="">Sex</MenuItem>
                            <MenuItem style={{fontFamily: "Outfit"}} value={'Female'}>Female</MenuItem>
                            <MenuItem style={{fontFamily: "Outfit"}} value={'Male'}>Male</MenuItem>
                        </Select>
                        <input type='text' placeholder='Breeds' />
                        <Select className='mui-drop-custom' value={petType} onChange={handlePetTypeChange} displayEmpty>
                            <MenuItem style={{fontFamily: "Outfit"}} value="">Pet Type</MenuItem>
                            <MenuItem style={{fontFamily: "Outfit"}} value={'Dogs'}>Dogs</MenuItem>
                            <MenuItem style={{fontFamily: "Outfit"}} value={'Cats'}>Cats</MenuItem>
                            <MenuItem style={{fontFamily: "Outfit"}} value={'Birds'}>Birds</MenuItem>
                            <MenuItem style={{fontFamily: "Outfit"}} value={'Rabbits'}>Rabbits</MenuItem>
                            <MenuItem style={{fontFamily: "Outfit"}} value={'Guinea Pigs'}>Guinea Pigs</MenuItem>
                            <MenuItem style={{fontFamily: "Outfit"}} value={'Ferrets'}>Ferrets</MenuItem>
                        </Select>
                    </form>
                </div> */}
                <div className='outfit-regular' style={{display: "flex", flexDirection: "column"}}>
                    {displayListingCard()}
                </div>
                <div style={{display: "flex", justifyContent: "center",  margin: "20px"}}>
                    <Pagination className='mui-pagination-custom outfit-regular' onChange={handleChange} count={pageRef} />
                </div>
            </div>
        </>
    )
}

export default PetListing;