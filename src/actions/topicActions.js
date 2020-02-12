export const CREATE_TOPIC = "CREATE_TOPIC"
export const DELETE_TOPIC = "DELETE_TOPIC"
export const UPDATE_TOPIC = "UPDATE_TOPIC"



export const deleteTopic = (topicId) => ({
    type: DELETE_TOPIC,
    topicId: topicId
})


export const createTopic = (topic) => ({
    type: CREATE_TOPIC,
    newTopic: topic
})


export const updateTopic = (topicId) => ({
    type: UPDATE_TOPIC,
    newTopic: topicId
})