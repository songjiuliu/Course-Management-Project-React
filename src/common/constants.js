export const API_URL = "https://wbdv-generic-server.herokuapp.com/api/songjiu/courses"
export const DEFAULT_CLASS_SIZE = 50

export const COURSES_API_URL = "https://wbdv-generic-server.herokuapp.com/api/songjiu/courses"
export const MODULES_API_URL = "https://wbdv-generic-server.herokuapp.com/api/songjiu/modules"
export const LESSONS_API_URL = "https://wbdv-generic-server.herokuapp.com/api/songjiu/lessons"
export const TOPICS_API_URL = "https://wbdv-generic-server.herokuapp.com/api/songjiu/topics"
export const WIDGETS_API_URL = "https://wbdv-generic-server.herokuapp.com/api/widgets"


export const COURSES_MODULES_API_URL = (courseId) => `https://wbdv-generic-server.herokuapp.com/api/songjiu/courses/${courseId}/modules`
export const MODULES_LESSONS_API_URL = (moduleId) => `https://wbdv-generic-server.herokuapp.com/api/songjiu/modules/${moduleId}/lessons`
export const LESSONS_TOPICS_API_URL = (lessonId) => `https://wbdv-generic-server.herokuapp.com/api/songjiu/lessons/${lessonId}/topics`
export const TOPICS_WIDGETS_API_URL = (topicId)=> `https://wbdv-generic-server.herokuapp.com/api/topics/${topicId}/widgets`