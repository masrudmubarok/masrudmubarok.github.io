---
sidebar_position: 1
---

# PHP

PHP (Hypertext Preprocessor) is a popular server-side scripting language widely used for web development. PHP is open-source and can be embedded into HTML code. This guide will take you from the basics to proficiency in PHP, with easy-to-understand explanations and practical examples.

## Why Choose PHP?

*   **Easy to learn**: PHP syntax is similar to English, making it relatively easy to learn, even for those who are new to programming.
*   **Large community**: PHP has a large and active community around the world. You will easily find help, tutorials, and other resources online.
*   **Flexible**: PHP can be used for a wide range of tasks, from creating simple websites to complex web applications, e-commerce, and content management systems.
*   **Free**: PHP is open-source software, so you can use it for free without paying any licenses.
*   **Many frameworks**: Various PHP frameworks like Laravel, CodeIgniter, and Symfony are available, making it easier to develop more structured and efficient web applications.

## Setting Up the Development Environment

Before you start learning PHP, you need to set up a development environment on your computer. Here are a few options you can choose from:

1.  **XAMPP (Windows, macOS, Linux)**: XAMPP is a complete package that includes Apache (web server), MySQL (database), and PHP. This is a popular and easy choice for beginners because all the necessary components are already installed and configured.
2.  **MAMP (macOS)**: MAMP is a package similar to XAMPP, but specifically designed for macOS.
3.  **PHP built-in server**: PHP has a built-in web server that you can use for development. This is suitable for simple and quick testing, but not recommended for production.

After choosing and installing one of the options above, you are ready to start writing PHP code.

## Basic PHP

### PHP Syntax

PHP code starts with the `<?php` tag and ends with the `?>` tag. Between these two tags, you can write PHP code.

```javascript title="PHP" showLineNumbers
<?php
  echo "Hello, world!";
?>
```

### Variables

In PHP, variables start with a dollar sign (`$`).

```javascript title="PHP Variables" showLineNumbers
<?php
  $name = "Budi";
  echo "Hello, " . $name . "!"; // Output: Hello, Budi
?>
```

### Data Types

PHP has several basic data types, including:

*   **string** (text):

    ```javascript title="String Example" showLineNumbers
    <?php
      $name = "Budi"; // Example of a string using double quotes
      $message = 'Hello, how are you?'; // Example of a string using single quotes

      echo "Name: " . $name . "<br>"; // Output: Name: Budi
      echo "Message: " . $message . "<br>"; // Output: Message: Hello, how are you?
    ?>
    ```

*   **integer** (whole number):

    ```javascript title="Integer Example" showLineNumbers
    <?php
      $age = 25;

      echo "Age: " . $age . "<br>"; // Output: Age: 25
    ?>
    ```

*   **float** (decimal number):

    ```javascript title="Float Example" showLineNumbers
    <?php
      $height = 175.5;

      echo "Height: " . $height . " cm <br>"; // Output: Height: 175.5 cm
    ?>
    ```

*   **boolean** (true or false):

    ```javascript title="Boolean Example" showLineNumbers
    <?php
      $isMarried = true;

      if ($isMarried) {
        echo "Status: Married <br>"; // Output: Status: Married
      } else {
        echo "Status: Not married <br>";
      }
    ?>
    ```

*   **array** (data collection):

    ```javascript title="Array Example" showLineNumbers
    <?php
      $hobbies = array("Reading", "Writing", "Sports");

      echo "Hobbies: ";
      foreach ($hobbies as $item) {
        echo $item . ", "; // Output: Reading, Writing, Sports,
      }
      echo "<br>";
    ?>
    ```

*   **object** (object):

    ```javascript title="Object Example" showLineNumbers
    <?php
      class Car {
        public $brand;
        public $color;

        public function __construct($brand, $color) {
          $this->brand = $brand;
          $this->color = $color;
        }

        public function info() {
          echo "This car is a " . $this->brand . " and is " . $this->color . ".<br>";
        }
      }

      $myCar = new Car("Toyota", "Red");
      $myCar->info(); // Output: This car is a Toyota and is Red.
    ?>
    ```

*   **NULL** (indicates an empty value):

    ```javascript showLineNumbers php title="NULL Example"
    <?php
      $value = NULL;

      if ($value === NULL) {
        echo "Value: Empty <br>"; // Output: Value: Empty
      }
    ?>
    ```

### Operators

PHP has various operators, including:

*   **Arithmetic operators**: `+`, `-`, `*`, `/`, `%` (modulus/remainder)

    ```javascript showLineNumbers title="Arithmetic Operators Example"
    <?php
      $a = 10;
      $b = 3;

      echo "Addition: " . ($a + $b) . "<br>"; // Output: 13
      echo "Subtraction: " . ($a - $b) . "<br>"; // Output: 7
      echo "Multiplication: " . ($a * $b) . "<br>"; // Output: 30
      echo "Division: " . ($a / $b) . "<br>"; // Output: 3.333...
      echo "Modulus: " . ($a % $b) . "<br>"; // Output: 1
    ?>
    ```

*   **Comparison operators**: `==` (equal to), `!=` (not equal to), `>` (greater than), `<` (less than), `>=` (greater than or equal to), `<=` (less than or equal to)

    ```javascript showLineNumbers title="Comparison Operators Example"
    <?php
      $x = 5;
      $y = 10;

      var_dump($x == $y); // Output: false
      var_dump($x != $y); // Output: true
      var_dump($x > $y); // Output: false
      var_dump($x < $y); // Output: true
      var_dump($x >= $y); // Output: false
      var_dump($x <= $y); // Output: true
    ?>
    ```

*   **Logical operators**: `&&` (AND), `||` (OR), `!` (NOT)

    ```javascript showLineNumbers title="Logical Operators Example"
    <?php
      $true = true;
      $false = false;

      var_dump($true && $false); // Output: false
      var_dump($true || $false); // Output: true
      var_dump(!$true); // Output: false
    ?>
    ```

*   **Assignment operators**: `=`, `+=`, `-=`, `*=`, `/=`, `%=`

    ```javascript showLineNumbers title="Assignment Operators Example"
    <?php
      $z = 5;

      $z += 3; // $z = $z + 3;
      echo $z . "<br>"; // Output: 8

      $z -= 2; // $z = $z - 2;
      echo $z . "<br>"; // Output: 6

      $z *= 4; // $z = $z * 4;
      echo $z . "<br>"; // Output: 24

      $z /= 6; // $z = $z / 6;
      echo $z . "<br>"; // Output: 4

      $z %= 3; // $z = $z % 3;
      echo $z . "<br>"; // Output: 1
    ?>
    ```

*   **String operator**: `.` (concatenation)

    ```javascript showLineNumbers title="String Operator Example"
    <?php
      $firstName = "Budi";
      $lastName = "Santoso";

      $fullName = $firstName . " " . $lastName;
      echo $fullName; // Output: Budi Santoso
    ?>
    ```

## Control Structures

### Conditional Statements

### Loops

## Function

## Array

## Form

## Database

## Error Handling

## Superglobals

## Additional Topics

### File Handling

### Date and Time Functions

### String Manipulation

### Regular Expressions (REGEX)

### Comments

### Include and Require
