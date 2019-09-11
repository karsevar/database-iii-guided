const db = require('../data/db-config.js')

function findUserPosts(id) {
    return db('users as u')
            .join('posts as p', 'u.id', '=', 'p.user_id')
            .where({user_id: id})
            // .select('p.id', 'p.contents', 'u.username')
}

function findUserById(id) {
    return db('users').where({ id })
}

function getUsers() {
    return db('users')
}

function postUser(userData) {
    return db('users').insert(userData)
}

function updateUser(id, changes) {
    return db('users').where({ id }).update(changes)
}

function deleteUser(id) {
    return db('users').where({ id }).del()
}

module.exports = {findUserPosts, findUserById, getUsers, postUser, updateUser, deleteUser}