import axios from 'axios'

// const API_URL = 'http://localhost:3000/api/getAllData/'
// const API_URL2 = 'http://localhost:3000/api/forms'
// const API_URL3 = 'http://localhost:3000/api/reviews'
const API_URL = 'https://endpoints-three.vercel.app/api/getAllData/'
const API_URL2 = 'https://endpoints-three.vercel.app/api/forms'
const API_URL3 = 'https://endpoints-three.vercel.app/api/reviews'

// Create new goal
const createGoal = async(goalData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.post(API_URL, goalData, config)

    return response.data
}
const createForm = async(data) => {
    const config = {
        // headers: {
        //     Authorization: `Bearer ${token}`,
        // },
    }

    const response = await axios.post(API_URL2, data)

    return response.data
}
const createReview = async(data) => {
    const config = {
        // headers: {
        //     Authorization: `Bearer ${token}`,
        // },
    }

    const response = await axios.post(API_URL3, data)

    return response.data
}
const getReviews = async(city) => {
        const config = {
            // headers: {
            //     Authorization: `Bearer ${token}`,
            // },
        }

        const response = await axios.post(API_URL3 + city)

        return response.data
    }
    // Get user goals
const getSchools = async(city, type) => {
        const config = {
            // headers: {
            // Authorization: `Bearer ${token}`,
            // },
        }

        const response = await axios.get((API_URL + city))

        return response.data
    }
    // Get user goals
const getSchool = async(city, id) => {
    const config = {
            // headers: {
            // Authorization: `Bearer ${token}`,
            // },
        }
        //  + "dehradun" + "/"
    console.log(API_URL + city + "/" + id);
    const response = await axios.get((API_URL + city + "/" + id));

    return response.data
}

// Delete user goal
const deleteGoal = async(goalId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.delete(API_URL + goalId, config)

    return response.data
}

const goalService = {
    createGoal,
    getSchools,
    getSchool,
    deleteGoal,
    createForm,
    getReviews,
    createReview
}

export default goalService;