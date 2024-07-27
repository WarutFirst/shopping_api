import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ description: 'product_name' })
  name: string;

  @ApiProperty({ description: 'type_id' })
  type_id: number;

  @ApiProperty({ description: 'price' })
  price: number;

  @ApiProperty({ description: 'qty' })
  qty: string;

  @ApiProperty({ description: 'view' })
  view: string;

  /*   @ApiProperty({ description: 'isActive' })
  isActive: boolean;

  @ApiProperty({ description: 'isDelete' })
  isDelete: boolean; */
}
