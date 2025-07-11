# File Serving

This guide will cover how to serve static files via the `.sendFile()` method and the `express.static()` middleware.
First and foremost, we must understand project directory and paths.

## Project Directory

The project directory is the exact location where your project is located and is calculated to the `package.json` file.
Node.js has built-in `__dirname` variable that contains the path to project directory at runtime.
This variable, however, is not accessible in ESModule syntax which we are currently using, which is why we have to calculate the path ourselves.
First, we must understand the 2 types of paths.

### Absolute Path

An absolute path tells the full & exact location of a file or folder,
starting from the root (like starting from the "main gate" of your computer).
For example, `C:/Users/Razeen/Documents/file.txt` is an absolute path on Windows.

### Relative Path

A relative path is shorter and tells the location based on where you currently are. 
It's like saying “go to the next room” instead of giving the full home address. 
For example, `./file.txt` means "the file is in the same folder as this one."


When serving files through express, we need to provide the absolute path.
Trying to use the relative path will throw an error.

