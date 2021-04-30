// $where
// Nessa consulta obtemos qualquer usuário que tiver
// seu campo 'Name' correspondente ao valor da
// hash MD5 fornecida.
db.users.find( { $where: function() {
    return (hex_md5(this.Name) == "54990977b4f29cddfccf1014e318fe64")
 } } ).forEach(printResult);