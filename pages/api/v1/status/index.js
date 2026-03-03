

function status(request, response){
  response.status(200).json({message: "alunos do curso.dev sao pessoas a cima da media."})
}

export default status