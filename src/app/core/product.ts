export class Product
{
id!: string;
title!: string;
quantity!: number;
price!:number;
like!:number;
picture!: string;
//! ,pour indiqer que le variable n'est pas undifined(car  "strict": true dans tsconfig.json), donc soit null soit de type indiqué 
}