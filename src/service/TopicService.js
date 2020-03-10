import {TOPICS_API_URL} from "../common/constants";

export const updateTopic = async (topic) =>
{
    const response = await fetch(`${TOPICS_API_URL}/${topic.id}`, {
        method: 'PUT',
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })
    return await response.json()
}