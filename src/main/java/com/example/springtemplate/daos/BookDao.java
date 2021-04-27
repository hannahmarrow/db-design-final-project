package com.example.springtemplate.daos;

import com.example.springtemplate.models.Book;
import com.example.springtemplate.models.Review;
import com.example.springtemplate.repositories.BookRepository;
import com.example.springtemplate.repositories.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class BookDao {
    @Autowired
    BookRepository bookRepository;

    @PostMapping("/api/books")
    public Book createBook(@RequestBody Book book) {
        return bookRepository.save(book);
    }

    @GetMapping("/api/books")
    public List<Book> findAllBooks() {
        return bookRepository.findAllBooks();
    }

    @GetMapping("/api/books/{bookId}")
    public Book findBookById(
            @PathVariable("bookId") Integer id) {
        return bookRepository.findBookById(id);
    }

    @GetMapping("/api/update/books/{bookId}/{edition}")
    public Book updateBook(
            @PathVariable("bookId") Integer id,
            @PathVariable("edition") Integer newEdition) {
        Book book = this.findBookById(id);
        book.setEdition(newEdition);
        return bookRepository.save(book);
    }

    @PutMapping("/api/books/{bookId}")
    public Book updateBook(
            @PathVariable("bookId") Integer id,
            @RequestBody() Book newBook) {
        Book book = this.findBookById(id);
        book.setEdition(newBook.getEdition());
        return bookRepository.save(book);
    }

    @DeleteMapping("/api/books/{bookId}")
    public void deleteBook(
            @PathVariable("bookId") Integer id) {
        bookRepository.deleteById(id);
    }
}
