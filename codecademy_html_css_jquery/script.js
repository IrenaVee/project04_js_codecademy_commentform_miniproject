var main = function (){ /**/

    $('form').submit(function(event){ /*selecteer form, submit = eventlistener.
      Deze code zorgt ervoor dat function altijd wordt uitgevoerd waneer form is submitted*/
      var $input=$(event.target).find('input'); /*= form input selecteren door hier een var aan te koppelen.
      Met find wordt de input geselecteerd*/
      var comment = $input.val(); /*.val functie = wordt gebruikt om input element in form te selecteren */

      if (comment != "") { /* let op != => 'niet gelijk aan' een "" (=lege string)
      houdt in dat onderstaande code alleen wordt toegepast wanneer dus wel sprake is van een string (tekstinvoer)  */
          var html = $('<li>').text(comment); /*van invoer (=comment) een nieuwe li element (html element <li> vermelden ) maken, zodat het aan andere comments kan worden toegevoegd
          Want: comments zijn in index.html document in li -element geplaatst
          .text zorgt ervoor dat invoer als text wordt opgenomen*/

          html.prependTo('#comments'); /*prependTo = koppelen aan.
          In dit geval wordt de html gekoppeld aan css stijl van id comments van index.html bestand*/
          $input.val(""); /*zorgt ervoor dat tekst dat is ingevoerd verdwijnt nadat het submit is*/
        }
      return false; /*browsers hebben een default instelling voor wanneer er wat wordt ge'submit'.
      Om te voorkomen dat browser deze default uivoert, wordt de code return false gebruikt*/
    });

}

$(document).ready(main);/* = waneer document klaar is -> main functie uitvoeren*/
