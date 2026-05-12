const { useParams } = require("react-router-dom")

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
    res.json(users)
}

const usersDetail = (req, res) => {
    const id = Number(req.params.id);
    const result = users.find((u) => u.id === id)
    if (result === undefined) {
        return res.status(404).json({ error: "User not found" })
    }
    res.json(result)
}

const createNewUser = (req, res) => {
    const { name, age, nationality } = req.body

    const newUser = {
        id: users.length + 1,
        name,
        age,
        nationality
    }
    users.push(newUser)
    res.status(201).json(newUser)
}


const deleteUser = (req, res) => {
    const id = Number(req.params.id)
    const VeriryId = users.some(u => u.id === id)
    if (!VeriryId) {
        return res.status(404).json({ message: "id not found..." })
    }
    users = users.filter(u => u.id != id)
    res.status(200).json({ message: "User has ben deleted!" })


}

module.exports = { usersIndex, usersDetail, createNewUser, deleteUser }