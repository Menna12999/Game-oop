//class games --->home

export class Categories{
    constructor(category){
        this.category=category
    }
    getApi(){
        return `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${this.category}`
    }

    async  getGames(){
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'afe7ab1bf6mshe2132bce005736cp1f17efjsnb7604f3ab975',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
    try{
    const response = await fetch(this.getApi(),options)
    const data = await response.json();
    console.log(data);
    return data; 
    
    }
    catch (error) {
        console.error(error);
    }
    
}
}



