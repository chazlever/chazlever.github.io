/******************************************************************************
 * Author: Chaz Lever
 * Date: 05/06/2012
 ******************************************************************************/

// Main entry point for custom code
$(document).ready(function() {
   // Hide abstract elements by default
   var abstract = 'div.abstract';
   $(abstract).hide();
   $('<br class="hide"/><a class="abstract" href="#" title="View/Hide Abstract">[abstract]</a>')
      .insertBefore(abstract);

   // Handle the hiding/viewing of abstract
   $('a.abstract').click(function() {
      abstract = $(this).next();
      if ($(abstract).is(":visible")) {
         $(abstract).hide();
      }
      else {
         //alert($(abstract).html());
         $(abstract).show();
      }
      return false;
   });
});
