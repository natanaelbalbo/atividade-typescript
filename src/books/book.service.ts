import bookModel, { BookDocument } from './book.schema'

export class BookService {
    async create(book: any): Promise<BookDocument> {
        try {
            const createdBook = await bookModel.create(book);
            return createdBook;
        } catch (error) {
            throw new Error(`Erro ao criar livro: ${error.message}`);
        }
    }

    async findById(id: string): Promise<BookDocument | null> {
        try {
            const findedBook = await bookModel.findById(id);
            return findedBook;
        } catch (error) {
            throw new Error(`Erro ao encontrar livro: ${error.message}`);
        }
    }

    async update(id: string, updatedBook: any): Promise<BookDocument | null> {
        try {
            const updated = await bookModel.findByIdAndUpdate(id, updatedBook, { new: true });
            return updated;
        } catch (error) {
            throw new Error(`Erro ao atualizar livro: ${error.message}`);
        }
    }

    async findAll(): Promise<BookDocument[]> {
        try {
            const allBooks = await bookModel.find();
            return allBooks;
        } catch (error) {
            throw new Error(`Erro ao buscar todos os livros: ${error.message}`);
        }
    }

    async delete(id: string): Promise<BookDocument | null> {
        try {
            const deletedBook = await bookModel.findByIdAndDelete(id);
            return deletedBook;
        } catch (error) {
            throw new Error(`Erro ao excluir livro: ${error.message}`);
        }
    }
}
