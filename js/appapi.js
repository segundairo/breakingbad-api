class AppAPI {
  constructor() {
    this.base = "https://www.breakingbadapi.com/api/";
  }

  async getAllCharacters() {
    try {
       const response = await fetch(`${this.base}characters?limit=12&offset=0`);
       if (response.ok) {
        const data = await response.json();
      return { data };  
       }      
    } catch (error) {
      console.log(error);
    }
  }

  async searchCharacters(input) {
    try {
       const response = await fetch(`${this.base}characters?name=${input}`);
      
       if (response.ok) {
       const data = await response.json();       
       return {data}
      }
     
    } catch (error) {
      console.log(error);
    }

    console.log("Searching", input);
    const data = "segun";
    return { data };
  }
}
