import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Movie Component
function Movie({ id, mediumCoverImage, title, summary, genres }) { // props, parent component로부터 받아옴
    return <div>
        <img src={mediumCoverImage} alt={title} />
        <h2>
            <Link to={`/movie/${id}`}>{title}</Link></h2>
        <p>{summary}</p>
        <ul>
            {genres.map(g => 
            <li key={g}>{g}</li>)}
        </ul>
    </div>;
};

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    mediumCoverImage: PropTypes.string.isRequired, // string이면서 필수여야함
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired, // string을 가진 array
}

export default Movie;