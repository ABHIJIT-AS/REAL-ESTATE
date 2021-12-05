import axios from "axios";

export const baseUrl='https://bayut.p.rapidapi.com'



export const fetchApi = async (url) => {
    const {data} = await axios.get((url),{
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
           'x-rapidapi-key': '8fc3b632d2msh8ad4b354aa265bfp16a996jsn6d9dcec14b52'
         }
    });

    return data;
}