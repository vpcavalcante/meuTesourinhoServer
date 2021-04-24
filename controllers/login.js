const viewLogin = (req,res)=>{
    res.render('login')
}
    
const formLogin = (req, res)=>{
    //aqui abaixo preciso escrever a lógica correta.
}

//criar um método de redirect para o Dashboard após o login

module.exports = {
viewLogin,
formLogin
}