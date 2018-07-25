using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MVCTest.Models;
using Microsoft.AspNetCore.Mvc.Rendering;



namespace MVCTest.Controllers
{
    public class HomeController : Controller
    {

        public static List<Books> books = new List<Books>{
            new Books{Id = 1 , Name = "El conde de montecristo" , Author="Alejandro Dumas", Price= 20},
            new Books{Id = 2 , Name = "El Alquimista" , Author="Paulo Coelho", Price= 18},
            new Books{Id = 3 , Name = "Grandes Esperanzas" , Author="Charles Dickens", Price= 22}
        };

         public static List<Author> author = new List<Author>{
            new Author{Id = 1 ,  Name="Alejandro Dumas"},
            new Author{Id = 2 ,  Name="Paulo Coelho"},
            new Author{Id = 3 ,  Name="Charles Dickens"}
        };
       

        public IActionResult Index()
        {
            return View(books);
        }

        public IActionResult Other()
        {
            return View(author);
        }
        public IActionResult Name()
        {
            return View(books);
        }
        public IActionResult Price()
        {
            return View(books);
        }

        public IActionResult Details(Books book)
        {
            return View(book);
        }
        public IActionResult AddNew()
        {
            return View();
        }
        public IActionResult CreateAuthor()
        {
            return View();
        }
        public IActionResult Create(){
            SelectList list_name = new SelectList(author,"Name","Name",0);


             ViewData["authors"] = list_name;
            return View();
        }
        public IActionResult SaveBook(Books book){
            Books libro = books.Last();
            book.Id=libro.Id+1;
            books.Add(book);
            return View("Index", books);
        }
         public IActionResult UpdateAuthor(Author uauthor){
           Author au= author.Find( x => x.Id == uauthor.Id);
          
                au.Name = uauthor.Name;
       
            return View("other",author);
        }
         public IActionResult DeleteAuthor(Author uauthor){
           Author au= author.Find( x => x.Id == uauthor.Id);
                author.Remove(au);
                
       
            return View("other",author);
        }
        public IActionResult DeleteBook(Books dbook){
           Books bo= books.Find( x => x.Id == dbook.Id);
                books.Remove(bo);
                
       
            return View("Name",books);
        }
        public IActionResult UpdateBook(Books ubook){
           Books bo= books.Find( x => x.Id == ubook.Id);
          
                bo.Name = ubook.Name;
                bo.Author = ubook.Author;
                bo.Price = ubook.Price;
       
            return View("Name",books);
        }
        public IActionResult SaveAuthor(Author newauthor){
            Author autor = author.Last();
            newauthor.Id=autor.Id+1;
           
            author.Add(newauthor);
            return View("Other", author);
        }
         public IActionResult UpdateA(Author author)
        {
            return View(author);
        }
        public IActionResult UpdateB(Books book)
        {
             SelectList list_name = new SelectList(author,"Name","Name",book.Author);


             ViewData["authors"] = list_name;
            return View(book);
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

       
    }
}
