// Sample array of book objects
const library = [
    { title: "The Great Gatsby", status: "available" },
    { title: "To Kill a Mockingbird", status: "checked out" },
    { title: "1984", status: "available" },
    { title: "Pride and Prejudice", status: "checked out" },
  ];
  
  // Function that returns a closure for updating the status of a book by title
  function createBookStatusUpdater(library) {
    return function (title, newStatus) {
      for (let i = 0; i < library.length; i++) {
        if (library[i].title === title) {
          library[i].status = newStatus;
          return true; // Book found and status updated
        }
      }
      return false; // Book not found
    };
  }
  
  // Create a closure for updating book status
  const updateBookStatus = createBookStatusUpdater(library);
  
  // Update the status of a book by title
  const titleToSearch = "1984";
  const newStatus = "checked out";
  const isUpdated = updateBookStatus(titleToSearch, newStatus);
  
  if (isUpdated) {
    console.log(`Status of "${titleToSearch}" has been updated to "${newStatus}"`);
  } else {
    console.log(`Book "${titleToSearch}" not found in the library.`);
  }
  
  // Check the updated library
  console.log(library);

  