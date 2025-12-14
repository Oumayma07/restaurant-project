import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.html',
  styleUrl: './menu.css',
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class MenuComponent {
entrees = [
  { nom: 'Salade Méditerranéenne', description: 'Fraîcheur', prix: 12, image: 'assets/images/salademed.jpg' },
  { nom: 'Bruschetta', description: 'Pain grillé', prix: 10, image: 'assets/images/bruschetta.jfif' },
  { nom: 'Soupe de lentille', description: 'Préparée selon la saison', prix: 9, image: 'assets/images/soupelentille.webp' },
  { nom: 'Salade césare', description: 'Préparée selon la saison', prix: 9, image: 'assets/images/saladecesar.jpg' },
  { nom: 'Brick au thon croustillant', description: 'Préparée selon la saison', prix: 7.5, image: 'assets/images/brikthon.jpg' },
  { nom: 'Salade Mechouia grillée traditionnelle', description: 'Préparée selon la saison', prix: 5, image: 'assets/images/mechwiya.jfif' },
  { nom: 'Mini pizza', description: 'Préparée selon la saison', prix: 6.5, image: 'assets/images/minipizza.jpg' },
  { nom: 'Mini soufflet ', description: 'Préparée selon la saison', prix: 5, image: 'assets/images/souffle.jpg' },
  
];


  plats = [
    { nom: 'Pâtes Carbonara', description: 'Crème, œuf, pancetta et parmesan.', prix: 22, image: 'assets/images/carbonara.jfif' },
    { nom: 'Lasagne', description: 'Pâtes, viande et béchamel, gratinées au fromage.', prix: 45, image: 'assets/images/lasagne.jfif' },
    { nom: 'Steak Grillé', description: 'Servi avec frites maison et sauce au poivre.', prix: 35, image: 'assets/images/steak.jpg' },
    { nom: 'Poulet Rôti', description: 'Mariné aux herbes, accompagné de légumes.', prix: 28, image: 'assets/images/poulet.jpeg' },
    { nom: 'Kouskous au poisson', description: 'Kouskous traditionelle', prix: 25, image: 'assets/images/kouskouspoisson.webp' },
    { nom: 'Kouskous au poulet', description: 'Préparée selon la saison.', prix: 20, image: 'assets/images/kosksi.jpg' }
  ];

  desserts = [
    { nom: 'Tiramisu', description: 'Crème mascarpone légère, café intense et cacao.', prix: 14, image: 'assets/images/tiramisu.jpg' },
    { nom: 'Crème Brûlée', description: 'Caramélisée à la perfection.', prix: 13, image: 'assets/images/Vanilla-Creme-Brulee.avif' },
    { nom: 'Fondant au Chocolat', description: 'Cœur coulant et boule de glace.', prix: 15, image: 'assets/images/fondant.jpg' },
    { nom: 'Glace aux choix', description : 'Des boules de glaces à vos choix', prix: 4, image: 'assets/images/glace.webp'},
    { nom: 'Cheesecake', description : 'Garniture crémeuse et coulis de fruits rouges maison.', prix: 10, image: 'assets/images/cheesecake.jpg'},
    { nom: 'Gateau au choix', description : 'Gâteau au choix', prix: 7, image: 'assets/images/gateau.jfif'},
    { nom: 'Millefeuille', description : 'Crème patissiére, couches feuilletées et finition cacao.', prix: 3.5, image: 'assets/images/millefeuille.webp'},

  ];
  boissons = [

  { nom: 'Mojito bleu (sans alcool)', description: 'Citron, menthe fraîche, eau gazeuse', prix: 12, image: 'assets/images/mojitobleu.jpg' },
  { nom: 'Mojito Fraise (sans alcool)', description: 'Citron, menthe fraîche, fraise, eau gazeuse', prix: 12, image: 'assets/images/mojitofraise.webp' },
  { nom: 'Jus d’orange pressé', description: '100% naturel', prix: 8, image: 'assets/images/jusorange.jpg' },
  { nom: 'Jus de fraise', description: '100% naturel', prix: 9, image: 'assets/images/jusfraise.webp' },
  { nom: 'Milkshake vanille', description: 'Crémeux et gourmand', prix: 10, image: 'assets/images/milkshake.jfif' },
  { nom: 'Cocktail fruité', description: 'Mélange maison exotique', prix: 14, image: 'assets/images/cocktail.jpg' },
  { nom: 'Eau 1L', description: 'Eau minerale', prix: 3, image: 'assets/images/eau.jpg' },
];


}
