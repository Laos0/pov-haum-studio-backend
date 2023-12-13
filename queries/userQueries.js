/** Writing queries so it is easier to fetch when writing sql commands */

const getUserQueries = {
    USERS: 'SELECT * FROM user',
    PASSWORD: 'SELECT password FROM user WHERE email='
}

const postUserQueries = {
    ADD_NEW_USER: 'INSERT INTO user (email, password) VALUES (?, ?)'
}

export default { getUserQueries, postUserQueries };