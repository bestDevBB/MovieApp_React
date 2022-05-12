import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const { id } = useParams();
    const getMovies = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`))
            .json();
            console.log(json);
            setLoading(false);
        };

    useEffect(() => {
        getMovies();
    }, []);

    return <div>
        <h1>Detail</h1>
    </div>
};

export default Detail;