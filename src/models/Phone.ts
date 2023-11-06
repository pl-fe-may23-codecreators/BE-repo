import { Column, Model, Table } from 'sequelize-typescript';

@Table({
    tableName: 'Phones',
    modelName: 'Phone',
    timestamps: false
})

export class Phone extends Model {
  @Column({
      primaryKey: true
  })
      id!: number;

    @Column
        category!: string;
    
    @Column
        phoneId!: string;

    @Column
        itemId!: string;
    
    @Column
        name!: string;
    
    @Column
        fullPrice!: number
    
    @Column
        price!: number;
    
    @Column
        screen!: string;
    
    @Column
        capacity!: string;
    
    @Column
        color!: string;
    
    @Column
        ram!: string;
    
    @Column
        year!: number;
    
    @Column
        image!: string;
}