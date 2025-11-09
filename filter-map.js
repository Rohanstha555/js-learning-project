const library = [

    {
        title : "book-1", 
        genre : "fiction",
        year : 1999,
        edition : 2005
    },
    {
        title : "book-2", 
        genre : "jurassic",
        year : 1999,
        edition : 2000
    },
    {
        title : "book-3", 
        genre : "history",
        year : 2001,
        edition : 2006
    },
    {
        title : "book-4", 
        genre : "science",
        year : 2004,
        edition : 2008
    },
    {
        title : "book-5", 
        genre : "fiction",
        year : 1999,
        edition : 2003
    },
    {
        title : "book-6", 
        genre : "history",
        year : 1997,
        edition : 2004
    },
    {
        title : "book-7", 
        genre : "science",
        year : 2008,
        edition : 2010
    },
    {
        title : "book-8", 
        genre : "comedy",
        year : 2002,
        edition : 2006
    }

]

const borrow = library.filter ( (bk) => {
    return bk.genre === "science" && bk.year === 2008
} )
console.log(borrow);
