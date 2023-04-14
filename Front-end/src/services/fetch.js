import axios from "axios";


async function fetchBackend({photo, category, link, price, description}) {
    return await axios.post('http://localhost:8080/produtos',{
        photo: photo,
        description: description,
        category: category,
        price: price,
        link: link,
    })
        .then((response) => response.data)
        .catch((error) => console.log(error));

}


async function  fetchApi(website, categoria) {
    const urlMLB = `https://api.mercadolibre.com/sites/MLB/search?q=${categoria}`;
    const urlB = `https://sandbox.buscape.com.br/service/findProductList/5066526d584b6d544d30673d/?&categoryId=${categoria}`;

    const url = website === 'mercadolibre' ? urlB : urlMLB  ;

    return await fetch(url)
                    .then((response) => response.json())
                    .then((data) => data.results)
                    .catch((error) => console.log(error));

    
}


export { fetchBackend, fetchApi };