import { IDrinkRepository } from '@modules/drinks/repositories/i-drink-repository'
import { HttpResponse } from '@shared/helpers'
import { inject, injectable } from 'tsyringe'

interface IRequest {
  id: string
  categoriaId: string
  nome: string
  descricao: string
}

@injectable()
class UpdateDrinkUseCase {
  constructor(@inject('DrinkRepository')
  private drinkRepository: IDrinkRepository
  ) { }

  async execute({
    id,
    nome, 
    descricao,
    categoriaId,
  }: IRequest): Promise<HttpResponse> {
    const drink = await this.drinkRepository.update({
      id,
      nome, 
      descricao,
      categoriaId,
    })

    return drink
  }
}

export { UpdateDrinkUseCase }

