const { useParams } = require("react-router-dom")
const connection = require('../data/myUsers')
let users = [
    { id: 1, name: "Luca Bianchi", age: 25, nationality: "Italia" },
    { id: 2, name: "Sophie Martin", age: 31, nationality: "Francia" },
    { id: 3, name: "Hans Müller", age: 45, nationality: "Germania" },
    { id: 4, name: "Yuki Tanaka", age: 22, nationality: "Giappone" },
    { id: 5, name: "Ana Garcia", age: 29, nationality: "Spagna" },
    { id: 6, name: "John Smith", age: 38, nationality: "Stati Uniti" },
    { id: 7, name: "Amina Yusuf", age: 27, nationality: "Egitto" },
    { id: 8, name: "Igor Petrov", age: 33, nationality: "Russia" },
    { id: 9, name: "Li Wei", age: 26, nationality: "Cina" },
    { id: 10, name: "Clara Silva", age: 30, nationality: "Brasile" }
]

const usersIndex = (req, res) => {
    const indexQuery = `SELECT * FROM users`

    connection.query(indexQuery, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message })
        }
        res.json(result)
    })

}

const usersDetail = (req, res) => {
    const id = Number(req.params.id);

    const showQuery = `SELECT * FROM users WHERE id = ?`

    connection.query(showQuery, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message })
        }
        if (result.length === 0) {
            return res.status(404).json({ error: 'user not found' })
        }
        res.json(result[0])
    })
}

const createNewUser = (req, res) => {
    const createUserQuery = `INSERT INTO users (name, age, nationality) VALUES (?, ?, ?)`
    const { name, age, nationality } = req.body

    const showNewUserQuery = `SELECT * FROM users WHERE id = ?`

    connection.query(createUserQuery, [name, age, nationality], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message })
        }
        connection.query(showNewUserQuery, [result.insertId], (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message })
            }
            res.status(201).json(result[0])
        })

    })
}


const deleteUser = (req, res) => {

    const { id } = req.params

    const deleteQuery = `DELETE FROM users WHERE id = ?`

    connection.query(deleteQuery, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message })
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "user not found" })
        }
        res.status(200).json({ message: `user with id: ${id} deleted` })
    })

}

const putUser = (req, res) => {
    const id = Number(req.params.id)
    const { name, age, nationality } = req.body

    const putQuery = `UPDATE users
     SET name = ?, 
     age = ?, 
     nationality = ? 
     WHERE id = ?`

    connection.query(putQuery, [name, age, nationality, id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message })
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "user not found" })
        }
        res.status(200).json({ message: `user with id: ${id} updated` })

    })
}


module.exports = { usersIndex, usersDetail, createNewUser, deleteUser, putUser }