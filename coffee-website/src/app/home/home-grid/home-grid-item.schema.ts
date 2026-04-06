import { SafeValue } from "@angular/platform-browser";

export interface HomeGridItemImage {
  imageSrc: string | SafeValue;
}
export interface HomeGridItem {
  type: 'image' | 'button' | 'text';
  title: string;
  description: string;
  colorClass:string;
  columnClass:string;
  image: string
}
