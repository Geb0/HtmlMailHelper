# HTML Mail Helper

**HTML Mail Helper** is a tool created to help writing mails with predefined phrases.

## Installation

Download and unzip this application in a new folder of your hard drive, USB stick, website...

## Configuration

Change the values of the properties in `lib/config.js` with your choices.

## Application datas

Manage the content of the `lib/data.js` file to set your prefered phrases respecting the data structure:

- Set the phrase family in the `family` property.
- Set the phrase category in the `category` property.
- Set the phrase title in the `title` property.
- Set the phrase text in the `text` property. You can use some tags to insert dynamic datas:
  * `{agent}` to insert the agent name in the phrase
  * `{order}` to insert the order number in the phrase
  * `{civility}` to insert the customer civility in the phrase
  * `{email}` to insert the customer e-mail in the phrase
  * `{firstname}` to insert the customer first name in the phrase
  * `{lastname}` to insert the customer last name in the phrase

To add a phrase, add this and replace `Define me` with your values:
```
  {
    "family"   : "Define me",
    "category" : "Define me",
    "title"    : "Define me",
    "text"     : "Define me",
  },
```

Be careful, the `family` and `category` properties are case sensitive. Using `Cat1` and `cat1` for category in 2 phrases definitions will generate 2 differents categories.

If you don't define a family or a category for a phrase, the phrase will be displayed whatever a family (or a category) is filtered or not in the search criterias.

To add a line break in text, use `\n` (backslash + n)

To add quotes in text, use `\"` (backslash + quote)

## Usage

Just open `index.html` in your favorite web browser.

## Thanks

Thanks to [FlatIcon and Freepik](https://www.flaticon.com/free-icon/letter_1027530) for application icon base.

## License

**HTML Mail Helper** is licensed under the GNU License - see the `LICENSE` file for details.



** -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- **
** -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- **
** -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- **



# HTML Mail Helper - VF

**HTML Mail Helper** est un outil d'aide à la rédaction de courriers utilisant des phrases prédéfinies.

## Installation

Télécharger et décompresser l'archive de l'application dans un nouveau dossier de votre disque dur, clé USB, site internet...

## Configuration

Modifier les valeurs des propriétés du fichier `lib/config.js` à votre convenance.

## Données de l'application

Modifier le contenu du fichier `lib/data.js` pour définir vos propres phrases. Veillez à respecter la structure en place:

- Définir la famille de la phrase dans la propriété `family`.
- Définir la catégorie de la phrase dans la propriété `category`.
- Définir le titre de la phrase dans la propriété `title`.
- Définir la phrase dans la propriété `text`. Vous pouvez utiliser différentes balises pour intégrer des informations:
  * `{agent}` pour ajouter le nom de l'agent dans la phrase
  * `{order}` pour ajouter le numéro de commande dans la phrase
  * `{civility}` pour ajouter la civilité du client dans la phrase
  * `{email}` pour ajouter l'adresse e-mail du client dans la phrase
  * `{firstname}` pour ajouter le prénom du client dans la phrase
  * `{lastname}` pour ajouter le nom du client dans la phrase

Pour ajouter une phrase, ajouter ceci et remplacer `Définis-moi` avec vos valeurs:
```
  {
    "family"   : "Définis-moi",
    "category" : "Définis-moi",
    "title"    : "Définis-moi",
    "text"     : "Définis-moi",
  },
```

Attention, les propriétés `family` et `category` sont sensibles à la casse. Utiliser `Cat1` et `cat1` pour une catégorie dans deux phrases différentes génèrera dux catégories dans les critères de recherche.

Si la famille ou la catégorie d'une phrase est vide, la phrase sera affichée qu'une famille (ou une catégorie) soit sélectionnée dans les critères de recherche ou non.

Pour insérer un saut de ligne dans une phrase, utiliser `\n` (anti-slash + n)

Pour unsérer des guillemets dans une phrase, utiliser `\"` (anti-slash + guillemet)

## Utilisation

Ouvrir simplement `index.html` dans un navigateur internet.

## Remerciements

Merci à [FlatIcon et Freepik](https://www.flaticon.com/free-icon/letter_1027530) pour la base de l'icône de l'application.

## Licence

**HTML Mail Helper** est sous licence GNU - voir le fichier `LICENSE` pour plus de détails.
