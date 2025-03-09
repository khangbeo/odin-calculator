# 🧮 Odin Calculator

A simple yet functional calculator built as part of [The Odin Project](https://www.theodinproject.com/)'s curriculum. This project involves implementing a fully operational calculator using JavaScript, HTML, and CSS.

## 🚀 Features

-   **Basic Math Operations:** Addition, subtraction, multiplication, and division.
-   **Dynamic Display:** Updates in real-time as users input numbers and operators.
-   **Chained Calculations:** Allows continuous operations, using the previous result as the first operand.
-   **Clear Functionality:** Resets all values and starts a fresh calculation.
-   **Error Handling:** Prevents division by zero and invalid operations.
-   **Precision Control:** Rounds long decimals to prevent overflow.
-   **Backspace Functionality:** Remove the last inputted character.
-   **Decimal Support:** Input floating-point numbers with the `.` button.

---

## 📌 Usage Instructions

1. **Input Numbers:** Click number buttons (`0-9`) to enter a value.
2. **Choose an Operator:** Click `+`, `-`, `×`, or `÷` to perform an operation.
3. **Perform Calculation:** Click `=` to compute the result.
4. **Chained Operations:** After getting a result, continue using it for the next operation.
5. **Backspace:** Click `⌫` to remove the last digit.
6. **Clear:** Click `C` to reset the calculator.
7. **Keyboard Shortcuts:**
    - `0-9`: Input numbers
    - `+`, `-`, `*`, `/`: Operators
    - `Enter` or `=`: Compute result
    - `Escape` or `C`: Clear
    - `Backspace`: Remove last input
    - `.`: Input decimal (only one per number)

---

## 🎯 Project Requirements

✅ Implement the **four basic math operations** as separate functions:

-   `add(a, b)`, `subtract(a, b)`, `multiply(a, b)`, `divide(a, b)`

✅ Create an `operate()` function that takes an **operator and two numbers** and performs the correct operation.

✅ Build a **functional calculator UI** with:

-   A **display area** for showing inputs and results.
-   **Number buttons** (`0-9`).
-   **Operator buttons** (`+`, `-`, `×`, `÷`).
-   **Equal (`=`) button** to compute results.
-   **Clear (`C`) button** to reset calculations.

✅ **Ensure proper number storage:**

-   Track `firstNum`, `operator`, and `secondNum` to structure calculations.
-   Store values correctly and update the display accordingly.

✅ **Implement edge-case handling:**

-   Prevent **multiple consecutive operators**.
-   Prevent **dividing by zero**.
-   **Round long decimal results** for display clarity.
-   Ensure pressing `=` **without enough input** doesn’t break the calculator.

✅ **Extra Features:**

-   **Decimal support:** Users can input floating-point numbers.
-   **Backspace functionality:** Remove the last digit entered.

---

## 🛠️ Technologies Used

-   **HTML** → Structure and layout
-   **Tailwind CSS** → Styling
-   **JavaScript** → Logic & interactivity
-   **Vite** → Fast development and build tool

---

## 🖥️ Deployment

The project is deployed on **Vercel**:

🔗 **Live Demo:** [Click Here](odin-calculator-flame.vercel.app/)

**To deploy manually:**

1. Run `npm run build`
2. Deploy on Vercel or other services

---

## ⚡ Future Improvements

🔹 Improve UI design with better **animations & responsiveness**  
🔹 Add **scientific calculator functions** (square root, exponentiation, etc.)  
🔹 Implement **local storage** to save previous calculations  
🔹 Improve error handling for **more complex operations**
🔹 Add Keyboard Support

---

## 🎉 Credits

-   Built by **[Khang Duong](https://github.com/khangbeo)**
-   Part of **[The Odin Project](https://www.theodinproject.com/)**
-   Inspired by **classic pocket calculators** 🧮

---

## 📜 License

This project is licensed under the **MIT License**. Feel free to use and modify it! 🎨
