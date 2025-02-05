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
    "family"   : "Maeva",
    "category" : "Complet",
    "title"    : "Non satisfait, retour",
    "text"     : "Je suis désolé d'apprendre que votre commande ne vous satisfait pas entièrement.\n\nVous avez la possibilité de télécharger votre étiquette de retour et retourner votre commande sous 30 jours après réception.\n\nAfin de pouvoir y procéder, rendez-vous tout en bas de notre page internet, dans la catégorie \"Besoin d'aide\", cliquez sur \"Suivre ma commande\" et remplissez les champs comme ci-dessous :\n\n - Numéro de commande : {order}\n - Adresse mail : {email}\n\nVous recevrez un mail de confirmation de remboursement une fois que votre retour sera pris en charge par notre entrepôt.\n\nVous le recevrez ensuite directement sur le compte ayant servi à l'achat dans un délai de 10 jours ouvrés, selon les délais interbancaires.\n\nJe me permets de vous rappeler que seules les pièces neuves, non portées, non salies et non lavées vous seront remboursées. Elles doivent être retournées dans leur emballage d'origine accompagnée de leur étiquette.\n\nNous vous conseillons de conserver le récépissé tamponné par La Poste pour suivre l'acheminement de votre colis.\n\nSi vous avez des difficultés à faire votre retour, n'hésitez pas à nous contacter par mail ou téléphone, nous serons ravis de vous y assister !",
  },



  {
    "family"   : "",
    "category" : "Au revoir",
    "title"    : "Belle journée",
    "text"     : "Je vous souhaite une belle journée et reste à votre disposition pour tout renseignement complémentaire.\n\n{agent} de la Maison {family}",
  },

  {
    "family"   : "",
    "category" : "Au revoir",
    "title"    : "Attente réponse",
    "text"     : "Dans l'attente de votre réponse, je reste à votre disposition pour tout renseignement complémentaire.\n\n{agent} de la Maison {family}",
  },

  {
    "family"   : "",
    "category" : "Au revoir",
    "title"    : "Remercie intérêt",
    "text"     : "Je vous remercie pour l'intérêt que vous portez à notre Maison et reste disponible pour toute précision.\n\n{agent} de la Maison {family}",
  },



  {
    "family"   : "",
    "category" : "Excuses",
    "title"    : "Excuses",
    "text"     : "Je suis encore une fois sincèrement navrée pour cet incident et souhaite vous présenter toutes nos excuses au nom de la Maison {family}\n\n{agent} de la Maison {family}",
  },
  {
    "family"   : "",
    "category" : "Excuses",
    "title"    : "Excuses et disposition",
    "text"     : "Je vous renouvelle nos excuses pour la gêne occasionnée et reste à votre disposition pour tout renseignement complémentaire.\n\n{agent} de la Maison {family}",
  },






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
    "family"   : "Maeva",
    "category" : "Formule de politesse",
    "title"    : "Bonjour",
    "text"     : "Bonjour {civility} {lastname},\nJe suis {agent} de l'équipe Maeva,",
  },
  {
    "family"   : "Maeva",
    "category" : "Formule de politesse",
    "title"    : "Au revoir",
    "text"     : "Je vous souhaite une bonne journée, {civility} {lastname}.\n{agent} de l'équipe Maeva.",
  },
  {
    "family"   : "Maeva",
    "category" : "Commande",
    "title"    : "Accusé réception de commande",
    "text"     : "Je vous confirme la prise en charge de la commande numéro {order}.",
  },
  {
    "family"   : "Maeva",
    "category" : "Commande",
    "title"    : "Commande introuvable",
    "text"     : "Nous n'avons trouvé aucune trace de votre commande {order}.",
  },
  {
    "family"   : "Maeva",
    "category" : "Livraison",
    "title"    : "Accusé réception de livraison",
    "text"     : "La livraison de votre commande numéro {order} a bien été prise en compte par notre transporteur, elle vous sera livrée dans les meilleurs délais.",
  },
  {
    "family"   : "Maeva",
    "category" : "Livraison",
    "title"    : "Livraison introuvable",
    "text"     : "Nous n'avons trouvé aucune trace de la livraison de votre commande {order} chez notre transporteur.",
  },




  {
    "family"   : "Charlotte",
    "category" : "Formule de politesse",
    "title"    : "Bonjour",
    "text"     : "Bonjour {firstname},\nJe suis {agent} de l'équipe Charlotte,",
  },
  {
    "family"   : "Charlotte",
    "category" : "Formule de politesse",
    "title"    : "Au revoir",
    "text"     : "Je vous souhaite une bonne journée, {firstname} !\n{agent} de l'équipe Charlotte.",
  },
  {
    "family"   : "Charlotte",
    "category" : "Commande",
    "title"    : "Accusé réception de commande",
    "text"     : "Je vous confirme la prise en charge de la commande numéro {order}.",
  },
  {
    "family"   : "Charlotte",
    "category" : "Commande",
    "title"    : "Commande introuvable",
    "text"     : "Nous n'avons trouvé aucune trace de votre commande {order}.",
  },
  {
    "family"   : "Charlotte",
    "category" : "Livraison",
    "title"    : "Accusé réception de livraison",
    "text"     : "La livraison de votre commande numéro {order} a bien été prise en compte par notre transporteur, elle vous sera livrée dans les meilleurs délais.",
  },
  {
    "family"   : "Charlotte",
    "category" : "Livraison",
    "title"    : "Livraison introuvable",
    "text"     : "Nous n'avons trouvé aucune trace de la livraison de votre commande {order} chez notre transporteur.",
  },

];
