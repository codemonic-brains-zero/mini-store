import app from '../app.js'

const PORT = process.env.PORT;

app.listen(PORT, (error)=>{
    if (error) console.error(`Failed to start server: ${error.message}`);
    else console.log(`Server is running on port ${PORT}`);
})