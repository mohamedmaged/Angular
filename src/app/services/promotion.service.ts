import { Injectable } from '@angular/core';
import { promotion } from '../shared/promotion'
import {PROMOTIONS} from '../shared/promotions'
@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }
  getPromotions() : promotion[] {
    return PROMOTIONS;
  }
  getPromotion(id: number): promotion {
    return PROMOTIONS.filter((dish)=>(dish.id === id))[0];

  }
  getFeaturedPromotion(): promotion {
    return PROMOTIONS.filter((promotion)=>(promotion.featured))[0];

  }
}
