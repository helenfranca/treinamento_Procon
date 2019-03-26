import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Procon {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @Column({ type: "int" })
  ano_calendario: number;

  @Column({ type: "timestamp" })
  data_arquivamento: Date;

  @Column({ type: "timestamp" })
  data_abertura: Date;

  @Column({ type: "int" })
  codigo_regiao: number;

  @Column({ type: "varchar", length: 20 })
  regiao: string;

  @Column({ type: "varchar", length: 2 })
  uf: string;

  @Column({ type: "varchar", length: 250 })
  str_razao_social: string;

  @Column({ type: "varchar", length: 250, nullable: true })
  str_nome_fantasia: string;

  @Column({ type: "int" })
  tipo: number;

  @Column({ type: "varchar", length: 15, nullable: true })
  numero_cnpj: string;

  @Column({ type: "varchar", length: 10, nullable: true })
  radical_cnpj: string;

  @Column({ type: "varchar", length: 100, nullable: true })
  razao_social_rfb: string;

  @Column({ type: "varchar", length: 100, nullable: true })
  nome_fanstasia_rfb: string;

  @Column({ type: "varchar", length: 20, nullable: true })
  cnae_principal: string;

  @Column({ type: "varchar", length: 100, nullable: true })
  desc_cnae_principal: string;

  @Column({ type: "boolean" })
  atendida: boolean;

  @Column({ type: "int" })
  codigo_assunto: number;

  @Column({ type: "varchar", length: 100 })
  descricao_assunto: string;

  @Column({ type: "int" })
  codigo_problema: number;

  @Column({ type: "varchar", length: 250 })
  descricao_problema: string;

  @Column({ type: "varchar", length: 1 })
  sexo_consumidor: string;

  @Column({ type: "varchar", length: 20, nullable: true })
  faixa_etaria_consumidor: string;

  @Column({ type: "varchar", length: 15, nullable: true })
  cep_consumidor: string;
}
