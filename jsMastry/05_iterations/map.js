const library = [ {bookName :'Power of subconcious mind', author:'Joseph Murphy', year: 1963},
     {bookName :'Atomic Habits', author:'James Clear', year: 2018}, 
     {bookName :'The Alchemist', author:'Paulo Coelho', year: 1988},
      {bookName :'The 7 Habits of Highly Effective People', author:'Stephen Covey', year: 1989},
       {bookName :'Thinking, Fast and Slow', author:'Daniel Kahneman', year: 2011}, 
       {bookName :'Educated', author:'Tara Westover', year: 2018},
        {bookName :'Becoming', author:'Michelle Obama', year: 2018}, 
        {bookName :'Where the Crawdads Sing', author:'Delia Owens', year: 2018}, 
        {bookName :'The Silent Patient', author:'Alex Michaelides', year: 2019}, 
        {bookName :'The Vanishing Half', author:'Brit Bennett', year: 2020}    
];

const recentBooks = library.filter((book) => book.year >= 2010);
console.log(recentBooks);


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNumbers = numbers.map((num) => num * 2);
console.log(newNumbers);


//reduce example

const prize = [100, 200, 300, 400, 500];

const totalPrize = prize.reduce((acc,curr) => acc + curr, 0);
console.log(`Total Prize Money:Rs.${totalPrize}`);