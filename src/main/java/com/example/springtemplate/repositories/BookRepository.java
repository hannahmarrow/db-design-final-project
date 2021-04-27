package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Book;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BookRepository extends CrudRepository<Book, Integer> {
    @Query(value = "SELECT * FROM books", nativeQuery = true)
    public List<Book> findAllBooks();
    @Query(value = "SELECT * FROM books WHERE id=:bookId", nativeQuery = true)
    public Book findBookById(@Param("bookId") Integer id);
}
