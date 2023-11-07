import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
    tableName: 'PhoneDetails',
    modelName:  'PhoneDetails',
    timestamps: false
})

export class PhoneDetails extends Model {
  @Column({
      primaryKey: true
  })
      id!: number;

@Column
    phoneId!: string;
@Column
    namespaceId!: string;

@Column
    name!: string;

@Column
    capacityAvailable!: string[];

@Column
    capacity!: string;

@Column
    priceRegular!: number;

@Column
    priceDiscount!: number;

@Column
    colorsAvailable!: string[];

@Column
    color!: string;

@Column
    images!: string[];

@Column
    description!: { 
        title: string,
        text: string[] 
    }[];

@Column
    screen!: string;

@Column
    resolution!: string;

@Column
    processor!: string;

@Column
    ram!: string;

@Column
    camera!: string;

@Column
    zoom!: string;

@Column
    cell!: string[];
}