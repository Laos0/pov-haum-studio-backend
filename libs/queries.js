/** Writing queries so it is easier to fetch when writing sql commands */

export const getQueries = {
    USERS: 'SELECT * FROM user',
    PASSWORD: 'SELECT password FROM user WHERE email='
}