import express from "express";
const app = express();

interface Params {
    a: number;
    b?: number;
}

const add = (x: Params): number => {
    return x.b ? x.a + x.b : x.a;
};

app.get("/", (req, res) => {
    (req as any).name = "Adham";
    res.send("OK");
});

app.get("/add", (req: any, res) => {
    req.name = "Adham";
    const result = add({ a: 1, b: 2 });
    res.send(result + "");
});

app.listen(4000, () => console.log("Server is running..."));
