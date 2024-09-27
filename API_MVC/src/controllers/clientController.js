
const usuarios = [

]
let i = 1;

export const createUser =  (req, res) => {
    
  const {
      email, senha, nome, 
  } = req.body;

  const usuario = {
      email, senha, nome, id: i
  };
  
  const emailUsado = usuarios.filter((u) => email === u.email);
  


  if(emailUsado.length == 0){
      usuario.id = i++;
      usuarios.push(usuario);

}else{
  res.send("este usuario já foi cadastrado!");
}

res.send("usuario cadastrado com sucesso!");

};

export const userList = (req, res) => {
  res.status(200).send(usuarios);
};

export const findUserById = (req, res) => {
  console.log(req.params.id);

  
  const userFindId = usuarios.filter(usuario => usuario.id == req.params.id);
  
  res.status(200).send(userFindId);

};

export const deleteUser = (req, res) => {
  
  const findUserById = usuarios.findIndex(usuario => usuario.id == req.params.id);
  usuarios.splice(findUserById, 1);

  res.send("usuario deletado com sucesso!");
};