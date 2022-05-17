import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    console.log("type:", typeof movies);

    const { id } = useParams();
    const getMovies = async() => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`))
            .json();
            setMovies(json.data.movies);
            setLoading(false);
        };

    useEffect(() => {
        getMovies();
    }, []);

    return <div>
        {loading
        ? <h1>Loading...</h1>
        : "ddd"}
    </div>
};

export default Detail;