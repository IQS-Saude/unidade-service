import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('unidades')
export class UnidadeModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descricao: string;

  @Column()
  urlAmigavel: string;

  @Column()
  estado: string;

  @Column()
  cidade: string;

  @Column()
  logradouro: string;

  @Column()
  numero: string;

  @Column()
  bairro: string;

  @Column('bigint')
  cep: number;

  @Column('decimal')
  latitude: number;

  @Column('decimal')
  longitude: number;

  @Column('bigint', { nullable: true })
  telefone?: number;

  @Column('bigint', { nullable: true })
  celular?: number;

  @Column({ nullable: true })
  email?: string;

  @Column({ nullable: true })
  urlFacebook?: string;

  @Column({ nullable: true })
  urlInstagram?: string;

  @Column({ nullable: true })
  urlYoutube?: string;

  @Column({ default: true })
  status: boolean;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}
