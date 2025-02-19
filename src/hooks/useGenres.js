import genres from "../components/data/genres";


export const Genre ={
    id: 0,
    name:'',
    image_background:''
}


const useGenres= () => ({data: genres, isLoading:false, error: null})

export default useGenres;