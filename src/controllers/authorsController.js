import authors from "../models/Author.js"

class AuthorController {
    static getAuthors = (req, res) => {
        authors.find((err, authors) => {
            res.status(200).json(authors)
        })
    }
    
    static getAuthorById = (req, res) => {
        const id = req.params.id
        
        authors.findById(id, (err, authors) => {
            if(err){
                res.status(400).send({message: `Author not found - ${err.message}`})
            }

            res.status(200).send(authors)
        })
    }
    
    static createAuthor = (req, res) => {
        let author = new authors(req.body)
        
        author.save((err) => {
            if (err) {
                res.status(500).send({message:`Error on save author - ${err.message}`})
            } else {
                res.status(201).send(author.toJSON())
            }
        })
    }
    
    static updateAuthor = (req, res) => {
        const id = req.params.id;
        
        authors.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(err) {
                res.status(500).send({message: err.message})
            } 
            
            res.status(200).send({message: 'Author update successfuly'})
        })
    }

    static deleteAuthor = (req, res) => {
        const id = req.params.id

        authors.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({message: `${err.message}`})
            }

            res.status(200).send({message: "Delete author successfuly"})
        })
    }
}

export default AuthorController