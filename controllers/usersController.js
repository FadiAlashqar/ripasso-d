
const usersIndex = (req, res) => {
    res.send([
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
    ])
}


module.exports = { usersIndex }