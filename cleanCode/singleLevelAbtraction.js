// Generaaly we write the code 

async function createUser(req, res) {

    const body = await req.body;

    if (!body.name || !body.password) {
        return res.status(400).json({ error: 'Missing fields' });
    }

    const hashed = await bcrypt.hash(body.password, 10);

    try {

        await db.query('INSERT INTO users(name,password) VALUES(?,?', [body.name, hashed]);
        res.status(201).json({ message: "User created" })

    } catch (e) {

        res.status(500).json({ error: 'DB error' })

    }

}




// Baiscally validate - d/f function create
// Db - d/f function