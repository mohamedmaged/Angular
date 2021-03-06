import { Component, OnInit } from '@angular/core';
import {Dish} from '../shared/dish';
import {DishService} from '../services/dish.service';
import {promotion} from '../shared/promotion';
import {PromotionService} from '../services/promotion.service';
import {Leader} from '../shared/leader';
import {LeaderService} from '../services/leader.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
dish: Dish;
leader: Leader;
promotion : promotion;
  constructor(private dishservice: DishService, private promotionservice: PromotionService, private leaderservice: LeaderService) { }

  ngOnInit() {
    this.dish= this.dishservice.getFeaturedDish();
    this.promotion = this.promotionservice.getFeaturedPromotion();
    this.leader = this.leaderservice.getFeaturedLeader();
  }

}
