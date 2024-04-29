import { IDrinkRepository } from "@modules/drinks/repositories/i-drink-repository"
import { inject, injectable } from "tsyringe"

interface IRequest {
  categoriaId: string
  nome: string
  descricao: string
}

@injectable()
class CreateDrinkUseCase {
  constructor(
    @inject('DrinkRepository')
    private drinkRepository: IDrinkRepository
  ) { }

  async execute({
    nome,
    descricao,
    categoriaId,
  }: IRequest) {
    const result = await this.drinkRepository.create({
      nome,
      descricao,
      categoriaId,
    })

    return result
  }
}

export { CreateDrinkUseCase }