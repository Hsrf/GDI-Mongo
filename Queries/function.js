// $function
// Nessa consulta criamos um campo novo 'FollowersMessage'
// nos artistas com uma mensagem baseada na quantidade de
// seguidores do artista.
db.artists.aggregate( [
    { $addFields:
       {
          FollowersMessage:
             { $function:
                {
                   body: function(amountFollowers) {
                      return `You have ${amountFollowers} followers, You rock!!`
                   },
                   args: [ "$AmountFollowers"],
                   lang: "js"
                }
             }
        }
     }
])