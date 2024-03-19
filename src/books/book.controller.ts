import { Request, Response } from 'express'
import { BookService } from './book.service'

const bookService = new BookService(); // Criar uma instância de BookService fora dos métodos do controlador

class BookController {
    async create(req: Request, res: Response) {
        try {
            const book = await bookService.create(req.body);
            return res.json(book);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async findById(req: Request, res: Response) {
        try {
            const book = await bookService.findById(req.params.id);
            if (!book) {
                return res.status(404).json({ error: 'Livro não encontrado' });
            }
            return res.json(book);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const updatedBook = await bookService.update(req.params.id, req.body);
            if (!updatedBook) {
                return res.status(404).json({ error: 'Livro não encontrado' });
            }
            return res.json(updatedBook);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const allBooks = await bookService.findAll();
            return res.json(allBooks);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const deletedBook = await bookService.delete(req.params.id);
            if (!deletedBook) {
                return res.status(404).json({ error: 'Livro não encontrado' });
            }
            return res.json(deletedBook);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

export default new BookController()
