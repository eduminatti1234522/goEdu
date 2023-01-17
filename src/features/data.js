import axios from 'axios'

const API_URL = 'http://localhost:3000/api/getAllData/'

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
}

export default goalService;