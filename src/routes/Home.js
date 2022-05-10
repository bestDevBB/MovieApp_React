import Movie from "../components/Movie";
import { useEffect, useState } from "react";

// Home Route는 App Component 전체를 가지고 있게 될 것
function Home() {
    // 첫 번째 item이 data, 두 번째는 data를 수정할 수 있는 함수
    const [loading, setLoading] = useState(true); // default
    const [movies, setMovies] = useState([]);

    // useEffect를 이용해서 getMoives를 호출. then을 사용하지 않기 위해!
    // fetch가 진행된 후에 movies는 json.data.movies가 되는 것
    const getMovies = async() => {
        const res = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`);
        const json = await res.json();
        setMovies(json.data.movies);
        setLoading(false);

        // const json = await (await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`)).json();
    };

    // component가 시작할 때 한 번만 실행하고 싶은 함수
    useEffect(() => {
        getMovies();
    }, []); // 빈 array는 아무것도 주시하지 않음을 의미

    return <div>
        {loading 
        ? <h1>Loading...</h1> 
        : <div>{movies.map(movie => 
            <Movie key={movie.id}
                id={movie.id}
                mediumCoverImage={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
            />
        )}</div>}
    </div>
};

export default Home;