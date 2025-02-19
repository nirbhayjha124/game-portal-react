import { useState, useEffect } from "react";
import {CanceledError} from "axios";
import apiClient from "../services/api-client";





const useData= (endpoint) => {
    
        const [data, setData] =useState ([]);
        const [error, setError] =useState("");
        const [isLoading, setLoading] = useState(false);
      
        useEffect(() => {
          
          const controller =new AbortController();
          setLoading(true);
          const response =  apiClient.get(endpoint, {
            params: {  
               }
           },{signal: controller.signal})
           .then(response => {
               setData(response.data.results);
               setLoading(false);
           })
           .catch(error => {
            if(error instanceof CanceledError) return;
               setError('Request failed with status code 404', error.message);
               setLoading(false);
              });
           return () => controller.abort();
       }, []);
    
       return{data, error, isLoading};
};

export default useData;