import { BlogsScreenWrapper } from "./style";
import { useState, CSSProperties, useEffect } from "react";
import DotLoader from "react-spinners/DotLoader";
import Card from "../CardDiv";
import axios from "axios";
import { MainWrapper } from "../../../../styles/main";

const BlogsScreen = () => {
    const[data,setData]= useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const fetchData = async () =>{
            setIsLoading(true);
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setData(response.data);
            setIsLoading(false);
        }
        fetchData();
    },[]);
    
    return (
        
        <MainWrapper>
        <BlogsScreenWrapper>
            <div className="screen">
                <h1 className="a1">Blogs</h1>
                
                <div className="loading">
                <DotLoader
                    color="#9340ff"
                    cssOverride={{}}
                    loading={isLoading}
                    size={60}
                    speedMultiplier={1}
                />
                </div>
                
            </div>
           {data.map(repo=>
            <Card repo={repo}/>
            
           )}
        </BlogsScreenWrapper>
        </MainWrapper>
    )
};
export default BlogsScreen;
// https://hp-api.herokuapp.com/api/characters