import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'breeds' })
export default class Phrase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  message: string;

}
