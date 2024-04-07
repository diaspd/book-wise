<h1 align="center">  
  <img src="./src/assets/logo.svg" alt="logo" />
</h1>

<h2 align="center">Link to site online: <a href="https://book-wise-delta.vercel.app/" target="_blank">Book Wise</a> </h2>

<div align="center">
  <b>
    <a href="#-Technologies"><b>Technologies</b></a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-Project"><b>Project</b></a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-Layout"><b>Layout</b></a>&nbsp;&nbsp;&nbsp;
  </b>  
</div>

---

<div align="center">  
  <img src="./public/template.svg" alt="template" />
</div>

</br>

## 🚀 Getting started

Clone the project and access the folder.

```bash
$ git clone https://github.com/diaspd/book-wise.git
$ cd 
```

## Installation

```bash
$ npm install
```

## Running the app locally

Change the 'datasource db' in `./prisma/schema.prisma` to: </br>
```bash
  provider     = "sqlite"
  url          = env("DATABASE_URL")
  relationMode = "prisma"
```
Delete the folder migrations and run 

```bash
$ npx prisma migrate dev
```
And change the file `.env.example` to `.env`

</br>

Then just run:
```bash
$ npx prisma generate && npm run dev
```

And your app will be available on ``http://localhost://3000``

</br>

## 💻 Technologies

This project was developed with the following technologies:
<b>
- Nextjs
- TypeScript
- Stitches
- OAuth
- Prisma
</b>

</br>

## 📄 Project
💰 .

<br></br>

## 🔖 Layout
- [Book Wise - Figma](https://www.figma.com/file/lbraF69k4VGzIBp0hkBJru/BookWise-Copy?fuid=872539083645260626)

<br></br>

Made with ♥ by Pedro Dias. 👋 Follow me on social media! </br>

If you can give a little star, I appreciate it 🤩
