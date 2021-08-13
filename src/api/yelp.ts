import axios from 'axios'

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: 'Bearer eczyKjLjGJKnDkDP3HmzhYM-S3jT4q_6giU1HmrOMaGje7pj98o8otLBBnTHhHKBkQgm26G2XsaDBZ0Lx7R-ndAD60BafCME8r-tfZ7Pc672_GR5cWQ1HHSjaQsRYXYx'
    }
});