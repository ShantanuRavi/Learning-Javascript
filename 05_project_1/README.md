# 🎨 Color Scheme Switcher

A simple web application that allows users to change the background color of the page by clicking on different color boxes. This project is built using HTML, CSS, and JavaScript and demonstrates basic DOM manipulation and event handling.

## 🚀 Features

* Change the page background color with a single click
* Interactive color buttons
* Clean and responsive UI
* Beginner-friendly JavaScript project

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (Vanilla JS)

## 📂 Project Structure

```
Color-Scheme-Switcher/
│
├── index.html
├── style.css
├── app.js
└── README.md
```

## 📸 Preview

The page displays four colored boxes:

* Gray
* White
* Blue
* Yellow

Clicking any box changes the background color of the webpage to the selected color.

## ⚙️ How It Works

1. JavaScript selects all elements with the class `.button`.
2. A click event listener is added to each button.
3. When a button is clicked, its `id` is retrieved.
4. The page background color is updated using:

```javascript
body.style.backgroundColor = e.target.id;
```

## ▶️ Getting Started

1. Clone the repository:

```bash
git clone https://github.com/shantanuRavi/color-scheme-switcher.git
```

2. Navigate to the project folder:

```bash
cd color-scheme-switcher
```

3. Open `index.html` in your browser.

## 📚 Concepts Practiced

* DOM Selection (`querySelector`, `querySelectorAll`)
* Event Listeners
* Event Object (`e.target`)
* CSS Styling
* JavaScript Functions
* Responsive Layouts

## 🔮 Future Improvements

* Add more colors
* Add dark/light mode toggle
* Display the selected color name
* Add smooth background transition effects
* Allow users to choose custom colors

## 👨‍💻 Author

Shantanu Ravi

Learning Web Development through hands-on JavaScript projects.
