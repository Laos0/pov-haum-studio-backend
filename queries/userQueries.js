/** Writing queries so it is easier to fetch when writing sql commands */

const userGetQueries = {
    USERS: 'SELECT * FROM user',
    PASSWORD: 'SELECT password FROM user WHERE email='
}

const userPostQueries = {
    ADD_NEW_USER: 'INSERT INTO user (user_id, email, password) VALUES (?, ?, ?)'
}

export default { getUserQueries: userGetQueries, postUserQueries: userPostQueries };