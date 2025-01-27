/*
 * lib/data.js
 *
 * Datas for HTML Mail Helper - Version 1.0
 *
 * Copyright © 2025, philippe@croue.com,
 * all rights reserved under MIT licence.
 * See LICENCE file for more informations.
 */

"use strict";

/**
 * Property Array of objects data
 *
 * List all available phrases
 *
 * Note: the order in the list will not be changed on display
 *       so you can organize this list with the order you wish.
 *
 * Each phrase have 4 properties:
 *
 * - family   : the phrase family (actually the fashion house)
 * - category : the phrase category (order, delivery...)
 * - title    : the title to show in search list for easier understanding
 * - text     : the phrase content
 *
 * You can set the families and categories values you want,
 * the selection inputs on screen will be updated at start.
 *
 * The category is mandatory.
 *
 * The family is optional. If it's not defined for a phrase,
 * it will be displayed whatever a family is selected in filters.
 *
 * Caution: the families and categories names are case sensitives,
 *          you'll have many choices if you don't respect this.
 *
 * You can use tags in the phrases texts:
 *
 * {agent} to insert the agent name in the phrase
 * {order} to insert the order number in the phrase
 * {civility} to insert the customer civility in the phrase
 * {email} to insert the customer e-mail in the phrase
 * {firstname} to insert the customer first name in the phrase
 * {lastname} to insert the customer last name in the phrase
 *
 * To add carriage-return in text, use \n (backslash + n)
 * If you need to add quotes in text, use \" (backslash + quote)
 *
 */
var data = [

  {
    "family"   : "Sandro",
    "category" : "Formule de politesse",
    "title"    : "Bonjour",
    "text"     : "Bonjour {firstname},\nJe suis {agent} de l'équipe Sandro,",
  },
  {
    "family"   : "Sandro",
    "category" : "Formule de politesse",
    "title"    : "Au revoir",
    "text"     : "Je vous souhaite une bonne journée, {firstname} !\n{agent} de l'équipe Sandro.",
  },
  {
    "family"   : "Sandro",
    "category" : "Commande",
    "title"    : "Accusé réception de commande",
    "text"     : "Je vous confirme la prise en charge de la commande numéro {order}.",
  },
  {
    "family"   : "Sandro",
    "category" : "Commande",
    "title"    : "Commande introuvable",
    "text"     : "Nous n'avons trouvé aucune trace de votre commande {order}.",
  },
  {
    "family"   : "Sandro",
    "category" : "Livraison",
    "title"    : "Accusé réception de livraison",
    "text"     : "La livraison de votre commande numéro {order} a bien été prise en compte par notre transporteur, elle vous sera livrée dans les meilleurs délais.",
  },
  {
    "family"   : "Sandro",
    "category" : "Livraison",
    "title"    : "Livraison introuvable",
    "text"     : "Nous n'avons trouvé aucune trace de la livraison de votre commande {order} chez notre transporteur.",
  },




  {
    "family"   : "Maje",
    "category" : "Formule de politesse",
    "title"    : "Bonjour",
    "text"     : "Bonjour {civility} {lastname},\nJe suis {agent} de l'équipe Maje,",
  },
  {
    "family"   : "Maje",
    "category" : "Formule de politesse",
    "title"    : "Au revoir",
    "text"     : "Je vous souhaite une bonne journée, {civility} {lastname}.\n{agent} de l'équipe Maje.",
  },
  {
    "family"   : "Maje",
    "category" : "Commande",
    "title"    : "Accusé réception de commande",
    "text"     : "Je vous confirme la prise en charge de la commande numéro {order}.",
  },
  {
    "family"   : "Maje",
    "category" : "Commande",
    "title"    : "Commande introuvable",
    "text"     : "Nous n'avons trouvé aucune trace de votre commande {order}.",
  },
  {
    "family"   : "Maje",
    "category" : "Livraison",
    "title"    : "Accusé réception de livraison",
    "text"     : "La livraison de votre commande numéro {order} a bien été prise en compte par notre transporteur, elle vous sera livrée dans les meilleurs délais.",
  },
  {
    "family"   : "Maje",
    "category" : "Livraison",
    "title"    : "Livraison introuvable",
    "text"     : "Nous n'avons trouvé aucune trace de la livraison de votre commande {order} chez notre transporteur.",
  },




  {
    "family"   : "Claudie Pierlot",
    "category" : "Formule de politesse",
    "title"    : "Bonjour",
    "text"     : "Bonjour {firstname},\nJe suis {agent} de l'équipe Claudie Pierlot,",
  },
  {
    "family"   : "Claudie Pierlot",
    "category" : "Formule de politesse",
    "title"    : "Au revoir",
    "text"     : "Je vous souhaite une bonne journée, {firstname} !\n{agent} de l'équipe Claudie Pierlot.",
  },
  {
    "family"   : "Claudie Pierlot",
    "category" : "Commande",
    "title"    : "Accusé réception de commande",
    "text"     : "Je vous confirme la prise en charge de la commande numéro {order}.",
  },
  {
    "family"   : "Claudie Pierlot",
    "category" : "Commande",
    "title"    : "Commande introuvable",
    "text"     : "Nous n'avons trouvé aucune trace de votre commande {order}.",
  },
  {
    "family"   : "Claudie Pierlot",
    "category" : "Livraison",
    "title"    : "Accusé réception de livraison",
    "text"     : "La livraison de votre commande numéro {order} a bien été prise en compte par notre transporteur, elle vous sera livrée dans les meilleurs délais.",
  },
  {
    "family"   : "Claudie Pierlot",
    "category" : "Livraison",
    "title"    : "Livraison introuvable",
    "text"     : "Nous n'avons trouvé aucune trace de la livraison de votre commande {order} chez notre transporteur.",
  },




  {
    "family"   : "",
    "category" : "Lorem Ipsum",
    "title"    : "Lorem ipsum dolor sit amet",
    "text"     : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua, ut enimad minim veniam, quis nostrud exerition vitation ullamco laboris nisi utaliquip ex ea commodo consequat.\nDuis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur, excepteur sint occaecat cupidatat non proident, sunt inculpa qui offi cia deserunt mollit anim id est laborum.\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.\nUt enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.\nDuis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur, excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.",
  },

];
