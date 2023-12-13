/** This file is to append onto api endpoints */
/** Ex: router.get(commonPaths.GET_ALL, someController.getAll) -> router.get('/', (req, res) => {somethings...})*/

export const commonPaths = {
    GET_ALL: '/',
    ADD_USER: '/new',
    TEST: '/test'
}

export const userPaths = {
    ADD_NEW_USER: '/new'
}
