import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidV4 } from 'uuid'
import { Categoria } from "./categoria";


@Entity('drinks')
class Drink {
  @PrimaryColumn()
  id?: string

  @ManyToOne(() => Categoria,{ nullable: true, eager: true })
  @JoinColumn({ name: 'categoria_id', referencedColumnName: 'id' })
  categoriaId?: string

  @Column({ name: 'nome', nullable: true })
  nome?: string

  @Column({ name: 'descricao', nullable: true })
  descricao?: string

  @CreateDateColumn({ name: 'created_at', nullable: true })
  createdAt?: Date

  @UpdateDateColumn({ name: 'updated_at', nullable: true })
  updatedAt?: Date

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}

export { Drink }