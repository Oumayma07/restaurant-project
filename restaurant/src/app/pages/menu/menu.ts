import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  trigger,
  state,
  style,
  transition,
  animate, query, stagger
} from '@angular/animations';
import { Router,RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.html',
  styleUrl: './menu.css',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  animations: [
    // Animation des cartes
    trigger('listAnimation', [
      transition(':enter', [
        query('.menu-card', [
          style({ opacity: 0, transform: 'translateY(50px)' }),
          stagger(150, [
            animate('700ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ]),
    // Animation fade/slide pour sections
    trigger('sectionAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})

export class MenuComponent {

  menuSections = [
    {
      title: 'Entrées',
      emoji: '🥗',
      items: [
        { nom: 'Salade César', description: 'Salade avec poulet grillé', prix: 12, image: '/assets/images/saladecesar.jpg', state: 'hidden' },
        { nom: 'Salade Méditeranée', description: 'Salade méditerané', prix: 14, image: '/assets/images/salademed.jpg', state: 'hidden' },
        { nom: 'Bruschetta', description: 'Pain grillé, tomates et basilic', prix: 8, image: '/assets/images/bruschetta.jfif', state: 'hidden' },
        { nom: 'Brik', description: 'Brik au Thon', prix: 5, image: '/assets/images/brikthon.jpg', state: 'hidden' },
        { nom: 'Soufflé', description: 'Soufflée au Viande hachée', prix: 7, image: '/assets/images/souffle.jpg', state: 'hidden' },
        { nom: 'Soupe', description: 'Soupe Lentille', prix: 7, image: '/assets/images/soupelentille.webp', state: 'hidden' },
      ]
    },
    {
      title: 'Plats Principaux',
      emoji: '🍝',
      items: [
        { nom: 'Spaghetti Bolognese', description: 'Pâtes à la sauce tomate et viande', prix: 20, image: '/assets/images/pastaa.jfif', state: 'hidden' },
        { nom: 'Couscous Tunisien', description: 'Plat traditionnel', prix: 18, image: '/assets/images/couscous.jpg', state: 'hidden' },
        { nom: 'Lasagne', description: 'Lasagne au viande hachée', prix: 17, image: '/assets/images/lasagne.jfif', state: 'hidden' },
        { nom: 'Pattes sauce blanche', description: 'Pâtes à la sauce blanche et fromage', prix: 25, image: '/assets/images/sauceblanche.avif', state: 'hidden' },
        { nom: 'Ojja', description: 'Ojja au fruit de mer', prix: 15, image: '/assets/images/ojja.jpg', state: 'hidden' },
        { nom: 'Riz', description: 'Riz au poulet et légumes', prix: 20, image: '/assets/images/riz.jpg', state: 'hidden' }
      ]
    },
    {
      title: 'Desserts',
      emoji: '🍰',
      items: [
        { nom: 'Tiramisu', description: 'Dessert italien', prix: 10, image: '/assets/images/tiramisu.jpg', state: 'hidden' },
        { nom: 'Cheesecake', description: 'Gâteau au fromage', prix: 11, image: '/assets/images/cheesecake.jpg', state: 'hidden' },
        { nom: 'Fondant', description: 'Fondant au chocolat', prix: 9, image: '/assets/images/fondant.jpg', state: 'hidden' },
        { nom: 'Glace', description: 'Glace au choix', prix: 4, image: '/assets/images/glace.webp', state: 'hidden' },
        { nom: 'Gateau', description: 'Gâteau au choix', prix: 7, image: '/assets/images/gateau.jfif', state: 'hidden' },
        { nom: 'Crépes', description: 'Crépes au choix', prix: 15, image: '/assets/images/crepe.jpg', state: 'hidden' }
      ]
    },
    {
      title: 'Boissons & Mocktails',
      emoji: '🥤',
      items: [
        { nom: 'Limonade', description: 'Boisson rafraîchissante', prix: 5, image: '/assets/images/limonade.jpg', state: 'hidden' },
        { nom: 'Mojito Sans Alcool', description: 'Mocktail menthe citron', prix: 7, image: '/assets/images/mojitobleu.jpg', state: 'hidden' },
        { nom: 'Eau', description: 'Eau minérale 1L', prix: 2.5, image: '/assets/images/eau.jpg', state: 'hidden' },
        { nom: 'MilkShake', description: 'MilkShake au choix', prix: 14, image: '/assets/images/milk.jpg', state: 'hidden' },
        { nom: 'Jus', description: 'Jus au choix', prix: 8, image: '/assets/images/cocktail.jpg', state: 'hidden' },
        { nom: 'Cocktail', description: 'Cocktail au fruit frais', prix: 12, image: '/assets/images/cock.webp', state: 'hidden' }
      ]
    }
  ];

  constructor( private router: Router) {}

  goToReservation() {
  const token = localStorage.getItem('token'); // vérifie si l'utilisateur est connecté
  if (!token) {
    // Redirection vers login si pas connecté
    this.router.navigate(['/auth/login']);
  } else {
    // Sinon vers la page réservation
    this.router.navigate(['/reservation']);
  }}
}

