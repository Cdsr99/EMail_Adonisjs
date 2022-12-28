import Mail from '@ioc:Adonis/Addons/Mail'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class EmailsController {
  public async modelo({}: HttpContextContract) {}

  public async send({response, request}: HttpContextContract) {
    const post = request.only(['to','title','message'])
    
    try{
          await Mail.send((message) => {
          message
          .from('your@email')
          .to(post.to)
          .subject(post.title)
          .htmlView('emails/gestao_acesso', { message: post.message })})
          
          return response.redirect().toRoute('/')
    }catch(e){Erro: " -> " + e}
  }
  
}
