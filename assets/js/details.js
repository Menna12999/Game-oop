export class Details{

    constructor(gameId) {
        this.gameId = gameId;
    }

    getAPiReady() {
        return `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${this.gameId}`
    }

    async getGameDetails() {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '078bc2fc36mshc0454c74a285195p1d0b1djsn5cbd85820726',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        
        try{
            const response = await fetch(this.getAPiReady(),options)
            const data = await response.json();
            console.log(data);
            return data; 
            }
            catch (error) {
                console.error(error);
            }
            
        }
    };


