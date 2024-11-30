const express = require('express');
const app = express();
const XLSX = require('xlsx');
const path = require('path');
app.use(express.static(path.join(__dirname, "public")));


app.get("/excel", (req, res) => {
    const data = [
        { name: "John", age: 30 },
        { name: "Jane", age: 25 },
        { name: "Jim", altura: 180 }
    ]
    const libro = XLSX.utils.book_new();
    const hoja = XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(libro, hoja, "Hoja 1");
    const buffer = XLSX.write(libro, { type: "buffer" });
    
    res.type("aplication/vnd.ms-excel");
    res.attachment("data.xlsx");
    res.send(buffer);
});

const { PDFDocument, rgb } = require('pdf-lib');

app.get("/pdf", async (req, res) => {
    const documento = await PDFDocument.create();
    const pagina = documento.addPage([600, 1200]); //ancho y alto
    pagina.drawText("hello world 2");
    pagina.drawText("Hello World", {
        x: 300,
        y: 250,
        size: 25,
        color: rgb(0, 0, 0)
    });
    const pdfBytes = await documento.save();
    res.type("application/pdf");
    res.attachment("file.pdf");
    res.send(Buffer.from(pdfBytes));
});


app.get("/image", (req, res) => {
    const imagen = path.join(__dirname, "public", "image1.jpg");
    res.attachment("image1.jpg");
    res.sendFile(imagen);
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});