
/******************************************************************************
 * Author: Chaz Lever
 * Date: 05/06/2012
 ******************************************************************************/

$(document).ready(function() {
   // Hide abstract elements by default
   var abstract = 'div.abstract';
   $(abstract).hide();
   $('<br /><a class="abstract" href="#" title="View/Hide Abstract">[abstract]</a>')
      .insertBefore(abstract);

   // Handle the hiding/viewing of abstract
   $('a.abstract').click(function() {
      $(this).next().slideToggle();
      return false;
   });
});

