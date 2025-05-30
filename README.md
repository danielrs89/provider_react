<p align="center">
  <img src="./src/assets/img/load.png" alt="App Logo" height="100" />
</p>


<h1 align="center"> Pro360</h1>
<p align="center"><i>Gestión completa de proveedores, productos y ventas.</i></p>

--- 

<p align="center">
  <img alt="React" src="https://img.shields.io/badge/React-18-blue?logo=react" />
  <img alt="Bootstrap" src="https://img.shields.io/badge/Bootstrap-5-purple?logo=bootstrap" />
  <img alt="License" src="https://img.shields.io/badge/License-MIT-green.svg" />
  <img alt="Status" src="https://img.shields.io/badge/status-Under_Development-yellow" />
</p>


## 🧾 Overview

Pro360 is a modern web application designed for suppliers to manage their daily business operations with ease and precision.

This application allows suppliers to:

🔍 Track and manage their products, sales, and purchases.

📊 Generate reports to analyze sales performance and business trends.

🧭 Use a user-friendly interface with intuitive navigation and icon-based menus.

⚡ Rely on a robust tech stack built with React, styled with Bootstrap, and fully responsive across devices.

Whether you're a solo supplier or a growing provider network, Pro360 gives you the tools to stay organized, informed, and in control.


## 🚀 Demo

> ![alt text](image-1.png)


## 📁 Project Structure

```plaintext
src/
├── assets/img/            # Icons and branding assets
├── pages/                 # Main views
│   ├── HomePage.jsx
│   ├── ProvidersPage.jsx
│   ├── ProductsPage.jsx
│   ├── SalesPage.jsx
│   ├── ReportsPage.jsx
│   └── ErrorPage.jsx
├── App.jsx                # App root with routing
├── NavComponent.jsx       # Navigation bar with icons
├── App.css                # Custom styles
```


## 🧠 Tech Stack

- ⚛️ **React**
- 🧭 **React Router DOM**
- 🎨 **Bootstrap 5**
- 🧰 JavaScript (ES6+)
- 🖼️ HTML5 + CSS3


## 🗺️ App Routes

| Route        | Description                      |
| ------------ | -------------------------------- |
| `/`          | Home *(currently commented out)* |
| `/providers` | Supplier Management              |
| `/products`  | Product Management               |
| `/sales`     | Sales Overview                   |
| `/reports`   | Reporting Dashboard              |
| `*`          | 404 Error Page                   |


## 📸 UI Preview (Navigation Icons)

![alt text](image.png)
```jsx
<Link to="/providers">
  <img src="provider.png" alt="provider" />
  <h5>Proveedores</h5>
</Link>
<Link to="/products">
  <img src="product.png" alt="product" />
  <h5>Productos</h5>
</Link>
<Link to="/sales">
  <img src="sales.png" alt="sales" />
  <h5>Ventas</h5>
</Link>
<Link to="/reports">
  <img src="report.png" alt="report" />
  <h5>Informes</h5>
</Link>
```


## 🛠️ Installation
```bash

# Clone the repository
git clone https://github.com/danielrs89/your-repo.git

# Navigate to the project folder
cd your-repo

# Install dependencies
npm install

# Run the development server
npm start
```


## 📬 Author

Made with ❤️ by Daniel

📧 dani89rosa@gmail.com
🔗 LinkedIn
🐙 GitHub


## 📢 Contribute

Pull requests and feedback are welcome!
Help improve this project by opening an issue or submitting a feature request.


## 📝 License

This project is licensed under the [MIT License]().
