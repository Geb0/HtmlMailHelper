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
 * {agent}     to insert the agent name in the phrase
 * {family}    to insert the family name in the phrase
 * {category}  to insert the category name in the phrase
 * {order}     to insert the order number in the phrase
 * {civility}  to insert the customer civility in the phrase
 * {email}     to insert the customer e-mail in the phrase
 * {phone}     to insert the customer phone number in the phrase
 * {firstname} to insert the customer first name in the phrase
 * {lastname}  to insert the customer last name in the phrase
 *
 * To add carriage-return in text, use \n (backslash + n)
 * If you need to add quotes in text, use \" (backslash + quote)
 *
 */
var data = [

  {
    "family"   : "Sergio",
    "category" : "Formule de politesse",
    "title"    : "Bonjour",
    "text"     : "Bonjour {firstname},\nJe suis {agent} de l'équipe Sergio,",
  },
  {
    "family"   : "Sergio",
    "category" : "Formule de politesse",
    "title"    : "Au revoir",
    "text"     : "Je vous souhaite une bonne journée, {firstname} !\n{agent} de l'équipe Sergio.",
  },
  {
    "family"   : "Magali",
    "category" : "Formule de politesse",
    "title"    : "Bonjour",
    "text"     : "Bonjour {civility} {lastname},\nJe suis {agent} de l'équipe Magali,",
  },
  {
    "family"   : "Magali",
    "category" : "Formule de politesse",
    "title"    : "Au revoir",
    "text"     : "Je vous souhaite une bonne journée, {civility} {lastname}.\n{agent} de l'équipe Magali.",
  },
  {
    "family"   : "Claudio",
    "category" : "Formule de politesse",
    "title"    : "Bonjour",
    "text"     : "Bonjour {firstname},\nJe suis {agent} de l'équipe Claudio,",
  },
  {
    "family"   : "Claudio",
    "category" : "Formule de politesse",
    "title"    : "Au revoir",
    "text"     : "Je vous souhaite une bonne journée, {firstname} !\n{agent} de l'équipe Claudio.",
  },




  {
    "family"   : "Sergio",
    "category" : "Commande",
    "title"    : "Accusé réception de commande",
    "text"     : "Je vous confirme la prise en charge de la commande numéro {order}.",
  },
  {
    "family"   : "Sergio",
    "category" : "Commande",
    "title"    : "Commande introuvable",
    "text"     : "Nous n'avons trouvé aucune trace de votre commande {order}.",
  },
  {
    "family"   : "Magali",
    "category" : "Commande",
    "title"    : "Accusé réception de commande",
    "text"     : "Je vous confirme la prise en charge de la commande numéro {order}.",
  },
  {
    "family"   : "Magali",
    "category" : "Commande",
    "title"    : "Commande introuvable",
    "text"     : "Nous n'avons trouvé aucune trace de votre commande {order}.",
  },
  {
    "family"   : "Claudio",
    "category" : "Commande",
    "title"    : "Accusé réception de commande",
    "text"     : "Je vous confirme la prise en charge de la commande numéro {order}.",
  },
  {
    "family"   : "Claudio",
    "category" : "Commande",
    "title"    : "Commande introuvable",
    "text"     : "Nous n'avons trouvé aucune trace de votre commande {order}.",
  },




  {
    "family"   : "Sergio",
    "category" : "Livraison",
    "title"    : "Accusé réception de livraison",
    "text"     : "La livraison de votre commande numéro {order} a bien été prise en compte par notre transporteur, elle vous sera livrée dans les meilleurs délais.",
  },
  {
    "family"   : "Sergio",
    "category" : "Livraison",
    "title"    : "Livraison introuvable",
    "text"     : "Nous n'avons trouvé aucune trace de la livraison de votre commande {order} chez notre transporteur.",
  },
  {
    "family"   : "Magali",
    "category" : "Livraison",
    "title"    : "Accusé réception de livraison",
    "text"     : "La livraison de votre commande numéro {order} a bien été prise en compte par notre transporteur, elle vous sera livrée dans les meilleurs délais.",
  },
  {
    "family"   : "Magali",
    "category" : "Livraison",
    "title"    : "Livraison introuvable",
    "text"     : "Nous n'avons trouvé aucune trace de la livraison de votre commande {order} chez notre transporteur.",
  },
  {
    "family"   : "Claudio",
    "category" : "Livraison",
    "title"    : "Accusé réception de livraison",
    "text"     : "La livraison de votre commande numéro {order} a bien été prise en compte par notre transporteur, elle vous sera livrée dans les meilleurs délais.",
  },
  {
    "family"   : "Claudio",
    "category" : "Livraison",
    "title"    : "Livraison introuvable",
    "text"     : "Nous n'avons trouvé aucune trace de la livraison de votre commande {order} chez notre transporteur.",
  },




  {
    "family"   : "",
    "category" : "",
    "title"    : "All tags test",
    "text"     : "Agent {agent}\n Family {family}\n Category {category}\n Order {order}\n Civility {civility}\n E-mail {email}\n Phone {phone}\n First name {firstname}\n Last name {lastname}",
  },

];
