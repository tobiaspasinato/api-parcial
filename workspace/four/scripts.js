async function name(params) {
    const pp = await fetch("http://localhost:3000/");
    pp.text().then((data) => {
        console.log(data);
    });
}

(async () => {
    await name("papa");
}
)();
